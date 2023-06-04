const mongoose = require('mongoose')

const Schema = mongoose.Schema

const busquedaSchema = new Schema({
    id_user: {type: String},
    destino: {type: String},
    fechainicio: {type:String},
    fechafinal: {type:String},
    intereses: {type:String},
})

const busqueda = mongoose.model('busqueda', busquedaSchema)

module.exports = {
    busqueda
}