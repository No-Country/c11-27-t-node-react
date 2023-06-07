const Joi = require('joi')


const usuarioSchema = Joi.object({
    name: Joi.string().min(3).max(25).required(),    
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
})

module.exports = {
    usuarioSchema,
}