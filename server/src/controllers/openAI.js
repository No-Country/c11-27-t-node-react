const { Configuration, OpenAIApi } = require('openai')
const Joi = require('joi')
const { itinerarios } = require('../models/itinrariomodel')
const { busquedaopen } = require('../models/busqueda')
const dotenv = require('dotenv')

dotenv.config({
  path: './.env',
})

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || '',
})

const openAi = new OpenAIApi(configuration)

const actividadSchema = Joi.object({
  Lugar: Joi.string().required(),
  'Google Maps URL': Joi.string().uri().required(),
  Descripción: Joi.string().required(),
  Razón: Joi.string().required(),
})

const diaSchema = Joi.object({
  Día: Joi.number().integer().min(1).required(),
  Título: Joi.string().required(),
  Actividades: Joi.array().items(actividadSchema).required(),
})

const itinerarioSchema = Joi.array().items(diaSchema).required()

const generateBusqueda = async (req, res) => {
  try {
    const { userid, destino, fechainicio, fechafinal, intereses } = req.body
    const result = await openAi.createCompletion({
      model: 'text-davinci-003',
      prompt: `Estoy planeando un viaje a ${destino} desde el ${fechainicio} hasta el ${fechafinal}. Estoy especialmente interesado en ${intereses}. Genera un itinerario en formato JSON que incluya:
        Un número de día, un título temático para cada día basado en las actividades planeadas, y una lista de actividades. Cada actividad debe incluir un lugar, google maps url del lugar (ejemplo:https://www.google.com/maps/place/Vatican+City/@41.902916,12.453389,15z/data=!3m1!4b1!4m5!3m4!1s0x1325890a57d42d3d:0x94f9ab23a7eb0!8m2!3d41.902916!4d12.453389), una breve descripción y la razón por la cual se recomienda.`,
      max_tokens: 3685,
      temperature: 0.2,
    })

    const cleanResponse = result.data.choices[0].text
      .replace(/[\r\n]+/g, '')
      .replace(/[\s]{2,10}/g, ' ')

    const busqueda = JSON.parse(cleanResponse)

    busqueda.destino = destino
    busqueda.fechainicio = fechainicio
    busqueda.fechafinal = fechafinal

    const itinerario = new itinerarios({
      search: JSON.stringify(busqueda, null, 2),
    })

    const databusqueda = await itinerario.save()

    const busquedas = new busquedaopen({
      id_user: userid,
      destino,
      fechainicio,
      fechafinal,
      intereses,
      ID_itinerario: databusqueda._id,
    })

    await busquedas.save()

    res.status(200).json({
      success: true,
      ID: databusqueda._id,
      data: databusqueda,
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({ error: error.message })
  }
}

const historial = async (req, res) => {
  try {
    const { userid } = req.body

    const busquedas = await busquedaopen.find({ id_user: userid })

    res.status(200).json({
      status: 'success',
      datos: busquedas,
    })
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

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
  generateBusqueda,
  historial,
  historialitinerario,
}
