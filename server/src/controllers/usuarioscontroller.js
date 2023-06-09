const { usuarios } = require('../models/usuariomodel')
const { usuarioSchema } = require('../models/validacion')
const { itinerarios } = require('../models/itinrariomodel')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config({
  path: './.env',
})

const generateAccessToken = user => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '2h' })
}

const register = async (req, res) => {
  const { name, email, password } = req.body

  const { error } = usuarioSchema.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.message })
  }

  const useremail = await usuarios.findOne({ email })

  if (useremail) {
    return res.status(409).json({
      message: 'Email ya registrado',
    })
  }

  const generateRandomString = num => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result1 = Math.random().toString(36).substring(num)

    return result1
  }

  const usuario = new usuarios({
    userid: generateRandomString(5),
    name,
    email,
    password,
  })
  const usua = await usuario.save()

  const user = { email }
  const accesstoken = generateAccessToken(user)
  res.header('authorization', accesstoken)
  res.status(200).json({
    status: 'Success',
    message: 'Usuario registrado exitosamente',
    token: accesstoken,
    data: usua,
  })
}

const login = async (req, res) => {
  const { email, password } = req.body

  const useremail = await usuarios.findOne({ email })
  if (!useremail) {
    return res.status(401).json({
      message: 'Email incorrecto o no existe',
    })
  }
  const userpasswordbcry = bcrypt.compareSync(password, useremail.password)
  if (!userpasswordbcry) {
    return res.status(401).json({
      message: 'Contraseña incorrecta',
    })
  }

  const user = { email }
  const accesstoken = generateAccessToken(user)
  res.header('authorization', accesstoken)
  res.status(200).json({
    status: 'Success',
    idgeneral: useremail._id,
    iduser: useremail.userid,
    token: accesstoken,
  })
}

const enviaremail = async (req, res) => {
  const { email } = req.body

  const useremail = await usuarios.findOne({ email })
  if (!useremail) {
    return res.status(404).json({
      message: 'Email incorrecto o no existe',
    })
  }

  const user = { email }
  const accesstoken = generateAccessToken(user)
  res.header('authorization', accesstoken)

  await usuarios.findOneAndUpdate(
    { email },
    {
      token: accesstoken,
    },
    { new: true },
  )

  const config = {
    host: 'smtp.gmail.com',
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  }
  const menssage = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: 'Recuperación de contraseña',
    text: `${process.env.WEBAPP_URL}/reset-password/${accesstoken}/${useremail._id}`,
  }

  const transport = nodemailer.createTransport(config)
  const info = await transport.sendMail(menssage)
  res.status(200).json({
    message: 'Mensaje enviado con exito',
  })
}

const actualizarcontrasena = async (req, res) => {
  const { newPassword } = req.body

  const passwordbcrypt = await bcrypt.hash(newPassword, 12)
  await usuarios.findOneAndUpdate(
    { email: req.user.email },
    {
      password: passwordbcrypt,
      token: '',
    },
    { new: true },
  )

  res.status(200).json({
    status: 'Success',
    message: 'Contraseña actualizada con exito',
  })
}

const usuarione = async (req, res) => {
  try {
    const userone = await usuarios.findOne({ email: req.user.email })
    res.status(200).json({
      status: 'success',
      data: userone,
    })
  } catch (error) {
    res.status(401).json(error)
  }
}

const actualizardatos = async (req, res) => {
  const { name, password, newPassword } = req.body

  const useremail = await usuarios.findOne({ email: req.user.email })

  const userpasswordbcry = bcrypt.compareSync(password, useremail.password)
  if (!userpasswordbcry) {
    return res.status(401).json({
      message: 'Contraseña incorrecta',
    })
  }

  const passwordbcrypt = await bcrypt.hash(newPassword, 12)
  await usuarios.findOneAndUpdate(
    { email: req.user.email },
    {
      name,
      password: passwordbcrypt,
    },
    { new: true },
  )

  res.status(200).json({
    status: 'Success',
    message: 'Datos actualizados con exito',
    data: {
      name,
    },
  })
}

const eliminarcuenta = async (req, res) => {
  try {
    const { email, password } = req.body

    const useremail = await usuarios.findOne({ email })
    if (!useremail) {
      res.json({
        message: 'Email incorrecto o no existe',
      })
    }
    const userpasswordbcry = bcrypt.compareSync(password, useremail.password)
    if (!userpasswordbcry) {
      return res.json({
        message: 'Contraseña incorrecta',
      })
    }

    await usuarios.deleteOne({ email: email })
    res.status(200).json({
      status: 'Success',
      message: 'Usuario eliminado',
    })
  } catch (error) {
    res.status(401).json({
      message: 'Falla en el metodo eliminar cuenta',
    })
  }
}

const listusuarios = async (req, res) => {
  try {
    const list = await usuarios.find()
    res.json({
      status: 'Success',
      message: 'Lista de usuarios',
      count: list.length,
      data: list,
    })
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

const listaitinerarios = async (req, res) => {
  try {
    const list = await itinerarios.find()
    res.status(200).json({
      status: 'Success',
      message: 'Lista de itinerario',
      count: list.length,
      data: list,
    })
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({
      message: 'No tienes autorizacion para acceder a este recurso',
    })
  }
}

const verifyRole = async (req, res, next) => {
  const user = await usuarios.findOne({ email: req.user.email })

  const role = user.role

  if (role === 'admin') {
    next()
  } else {
    res.status(401).json({
      message: 'No tienes autorizacion para acceder a este recurso',
    })
  }
}

module.exports = {
  register,
  login,
  enviaremail,
  actualizarcontrasena,
  usuarione,
  actualizardatos,
  eliminarcuenta,
  listusuarios,
  listaitinerarios,
  protect,
  verifyRole,
}
