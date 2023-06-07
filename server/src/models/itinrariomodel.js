const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itinerarioSchema = new Schema({
    search: {type: Object}
})

const itinerarios = mongoose.model('itinerarios', itinerarioSchema)

module.exports = {
    itinerarios,
}