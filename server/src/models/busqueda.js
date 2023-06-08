const mongoose = require('mongoose')

const Schema = mongoose.Schema

const busquedaSchema = new Schema({
  id_user: { type: String },
  destino: { type: String },
  fechainicio: { type: String },
  fechafinal: { type: String },
  intereses: { type: Array },
  ID_itinerario: { type: String },
})

const busquedaopen = mongoose.model('busquedaopen', busquedaSchema)

module.exports = {
  busquedaopen,
}
