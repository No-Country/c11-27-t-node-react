const express = require('express')
const {
  register,
  listusuarios,
  login,
  actualizarcontrasena,
  actualizardatos,
  protect,
} = require('../controllers/usuarioscontroller')
const { generateBusqueda } = require('../controllers/openAI')

const routeruser = express.Router()

routeruser.post('/register', register)
routeruser.post('/login', login)
// routeruser.use(protect) proteccion de token
routeruser.put('/reset', actualizarcontrasena)
routeruser.post('/search', generateBusqueda)
routeruser.put('/renew', actualizardatos)
routeruser.get('/', listusuarios)
module.exports = routeruser
