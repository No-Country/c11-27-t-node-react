const { usuarios } = require('../models/usuariomodel')
const { usuarioSchema } = require('../models/usuariovalidacion')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config({
  path: '../.env',
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

  const usuario = new usuarios({
    name,
    email,
    password,
  })

  await usuario.save()
  res.status(200).json({
    status: 'success',
    message: 'user successfully created',
    data: {
      name,
      email,
    },
  })
}

const listusuarios = async (req, res) => {
  const list = await usuarios.find()
  res.json({
    status: 'success',
    message: 'list the users',
    data: list,
  })
}

const login = async (req, res) => {
  const { email, password } = req.body

  const useremail = await usuarios.findOne({ email })
  if (!useremail) {
    res.json({
      message: 'incorrect email or does not exist',
    })
  }
  const userpasswordbcry = bcrypt.compareSync(password, useremail.password)
  if (!userpasswordbcry) {
    return res.json({
      message: 'incorrect password',
    })
  }

  const user = { email }

  const accesstoken = generateAccessToken(user)
  res.header('authorization', accesstoken)
  res.status(200).json({
    status: 'success',
    message: `Welcome ${email}`,
    token: accesstoken,
  })
}

const actualizardatos = async (req, res) => {
  const { _id, name, email, newemail, password, newpassword } = req.body

  const useremail = await usuarios.findOne({ email })
  if (!useremail) {
    return res.json({
      message: 'incorrect email',
    })
  }
  const userpasswordbcry = bcrypt.compareSync(password, useremail.password)
  if (!userpasswordbcry) {
    return res.json({
      message: 'incorrect password',
    })
  }

  const passwordbcrypt = await bcrypt.hash(newpassword, 12)
  await usuarios.findOneAndUpdate(
    { _id },
    {
      name,
      email: newemail,
      password: passwordbcrypt,
    },
    { new: true },
  )

  res.status(200).json({
    status: 'success',
    message: 'datos actualizados con exito',
    data: {
      name,
      newemail,
    },
  })
}

const actualizarcontrasena = async (req, res) => {
  const { email, password } = req.body

  const passwordbcrypt = await bcrypt.hash(password, 12)
  await usuarios.findOneAndUpdate(
    { email },
    {
      password: passwordbcrypt,
    },
    { new: true },
  )

  res.status(200).json({
    status: 'success',
    message: 'contraseña actualizada con exito',
  })
}

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({
      message: 'No tienes autorizacion para acceder a este recurso',
    })
  }
}

module.exports = {
  register,
  listusuarios,
  login,
  actualizarcontrasena,
  protect,
  actualizardatos,
}
