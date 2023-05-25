const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itinerarioSchema = new Schema({
    id_user: {type: String},
    destino: {type: String},
    fechainicio: {type:String},
    fechafinal: {type:String},
    intereses: {type:String},
    search: {type: String}
})

const itinerarios = mongoose.model('itinerarios', itinerarioSchema)

module.exports = {
    itinerarios
}