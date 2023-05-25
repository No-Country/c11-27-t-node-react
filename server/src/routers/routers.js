const express = require('express')
const {register, listusuarios, listaitinerarios, login, actualizarcontrasena, actualizardatos, eliminarcuenta, protect, verifyRole} = require('../controllers/usuarioscontroller')
const {generateBusqueda, historial} = require('../controllers/openAI')

const routeruser = express.Router()

routeruser.post('/', register)
routeruser.post('/login', login)

routeruser.use(protect) //proteccion de token
routeruser.post('/record', historial)
routeruser.delete('/', eliminarcuenta)
routeruser.put('/reset', actualizarcontrasena)
routeruser.post('/search', generateBusqueda)
routeruser.put('/renew', actualizardatos)

routeruser.use(verifyRole)
routeruser.get('/', listusuarios)
routeruser.get('/route', listaitinerarios)
module.exports = routeruser