const mongoose = require('mongoose')

const Schema = mongoose.Schema

const historialSchema = new Schema({
    id_user: {type: String},
    id_busqueda: {type: String}
})

const historial = mongoose.model('historial', historialSchema)

module.exports = {
    historial
}