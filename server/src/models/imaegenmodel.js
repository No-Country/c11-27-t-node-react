const mongoose = require('mongoose')

const Schema = mongoose.Schema

const imagenShema = new Schema({
    id_user: {type:String},
    url: {type:String}
})

const imagen = mongoose.model('imagen', imagenShema)

module.exports = {
    imagen 
}