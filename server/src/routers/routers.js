const express = require('express')
const {register, listusuarios, listaitinerarios, login, actualizarcontrasena, enviaremail, actualizardatos, eliminarcuenta, usuarione, protect, verifyRole} = require('../controllers/usuarioscontroller')
const {generateBusqueda, historial, historialitinerario} = require('../controllers/openAI')

const routeruser = express.Router()

routeruser.post('/register', register)
routeruser.post('/login', login)
routeruser.post('/send', enviaremail)

routeruser.use(protect)
routeruser.post('/path', historialitinerario)
routeruser.get('/me', usuarione)
routeruser.post('/record', historial)
routeruser.delete('/', eliminarcuenta)
routeruser.post('/search', generateBusqueda)
routeruser.put('/renew', actualizardatos)
routeruser.put('/reset', actualizarcontrasena)

routeruser.use(verifyRole)
routeruser.get('/', listusuarios)
routeruser.get('/route', listaitinerarios)
module.exports = routeruser
