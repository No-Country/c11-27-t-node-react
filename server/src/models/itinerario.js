const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itinerarioSchema = new Schema({
    id_user: {type: String},
    destino: {type: String},
    tiempo: {type: Number},
    fecha: {type: Date}
})

const itinerario = mongoose.model('itinerario', itinerarioSchema)

module.exports = {
    itinerario
}