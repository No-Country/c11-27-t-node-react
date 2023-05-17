const mongoose = require('mongoose')

const Schema = mongoose.Schema

const busquedaSchema = new Schema({
    id_user: {type: String},
    descripcion: {type: String},
    localizacion: {type: String}
})

const busqueda = mongoose.model('busqueda', busquedaSchema)

module.exports = {
    busqueda
}