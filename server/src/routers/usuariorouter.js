const express = require('express')
const {register, listusuarios, login} = require('../controllers/usuarioscontroller')

const routeruser = express.Router()

routeruser.post('/', register)
routeruser.get('/', listusuarios)
routeruser.post('/login', login)

module.exports = routeruser