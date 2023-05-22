const express = require('express')
const {register, listusuarios, login} = require('../controllers/usuarioscontroller')
const {search} = require('../controllers/busquedacontroller')
const {generateBusqueda} = require('../controllers/openAI')

const routeruser = express.Router()

routeruser.post('/', register)
routeruser.get('/', listusuarios)
routeruser.post('/login', login)
routeruser.post('/search', search)
routeruser.post('/open', generateBusqueda)

module.exports = routeruser