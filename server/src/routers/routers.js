const express = require('express')
const {register, listusuarios, login, actualizarcontrasena, actualizardatos} = require('../controllers/usuarioscontroller')
const {generateBusqueda} = require('../controllers/openAI')

const routeruser = express.Router()

routeruser.post('/', register)
routeruser.get('/', listusuarios)
routeruser.post('/login', login)
routeruser.post('/reset', actualizarcontrasena)
routeruser.post('/search', generateBusqueda)
routeruser.post('/renew', actualizardatos)

module.exports = routeruser