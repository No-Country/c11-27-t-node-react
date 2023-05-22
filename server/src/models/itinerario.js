const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itinerarioSchema = new Schema({
    id_user: {type: String},
    destino: {type: String},
    fechainicio: {type: Date},
    fechafinal: {type: Date},
    intereses: {type: String}
})

const itinerario = mongoose.model('itinerario', itinerarioSchema)

module.exports = {
    itinerario
}