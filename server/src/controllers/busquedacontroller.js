const {busqueda} = require('../models/busquedamodel')

const search = async (req,res) => {
    const {descripcion, localizacion} = req.body

    const result = new busqueda({
        descripcion,
        localizacion
    }) 
    await result.save()
    res.json({
        status: 'success',
        message: 'resultado de la busqueda',
        data: {
            descripcion,
            localizacion
        }
    })
}

module.exports = {
    search
}