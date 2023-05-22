const {usuarios} = require('../models/usuariomodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config({
  path:'../.env'
})


const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.SECRET, {expiresIn: '2h'} );
  };

const register = async (req,res) => {
    const {name,email,password} = req.body

    const usuario = new usuarios({
        name,
        email,
        password,
    })

    await usuario.save();
    res.json({
        status: 'success',
        message:'user successfully created',
        data: {
            name,
            email
        }
    }) 
}

const listusuarios = async (req,res) => {
    const list = await usuarios.find()
    res.json({
        status: 'success',
        message: 'list the users',
        data: list
    })
}

const login = async (req,res) => {
    const {email, password} = req.body

    const useremail = await usuarios.findOne({ email });
    if (!useremail) {
      res.json({
        message: 'incorrect email or does not exist',
      });
    }
    const userpasswordbcry = bcrypt.compareSync(password, useremail.password);
    if (!userpasswordbcry) {
      return res.json({
        message: 'incorrect password',
      });
    }

    const user = { email };

    const accesstoken = generateAccessToken(user)
    res.header('authorization', accesstoken)
    res.json({
        status: 'success',
        message: `Welcome ${email}`,
        token: accesstoken
      });
}
module.exports = {
    register,
    listusuarios,
    login
}