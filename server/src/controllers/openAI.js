const {itinerarios} = require('../models/itinrariomodel')

const historialitinerario = async (req,res) => {
    try {
        const {id} = req.body

        const itienrario = await itinerarios.findOne({_id:id})

        res.status(200).json({
            status: 'success',
            data: itienrario
        })
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    historialitinerario
}