const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    name: {type:String},    
    email: {type:String, unique:true},
    isvalid: {type:Boolean},
    state: {type: Boolean},
    password: {type: String},
    role:{
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
      }
})

usuarioSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });

const usuarios = mongoose.model('usuarios',usuarioSchema)

module.exports = {
    usuarios
}