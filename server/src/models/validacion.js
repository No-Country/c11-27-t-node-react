const Joi = require('joi')


const usuarioSchema = Joi.object({
    name: Joi.string().min(3).max(25).required(),    
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
})

const itinerarioSchema = Joi.object({
    userid: Joi.string().required(),
    destino: Joi.string().min(3).required(),
    fechainicio: Joi.string().required(),
    fechafinal: Joi.string().required(),
    intereses: Joi.string().min(4).required()
})


module.exports = {
    usuarioSchema,
    itinerarioSchema
}