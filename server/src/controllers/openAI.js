const { Configuration, OpenAIApi } = require('openai');
const { itinerarios } = require('../models/itinrario');
const dotenv = require('dotenv');

dotenv.config({
	path: './.env',
});

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY || '',
});

const openAi = new OpenAIApi(configuration);

const generateBusqueda = async (req, res) => {
	const { _id, destino, fechainicio, fechafinal, intereses } = req.body;
	const result = await openAi.createCompletion({
		model: 'text-davinci-003',
		prompt: `Estoy planeando un viaje a ${destino} desde el ${fechainicio} hasta el ${fechafinal}. Estoy especialmente interesado en ${intereses}. Me gustaría que me generes un itinerario en formato JSON que incluya:
        Un número de día, un título temático para cada día basado en las actividades planeadas, y una lista de actividades. Cada actividad debe incluir un lugar, google maps url del lugar, una breve descripción y la razón por la cual se recomienda.`,
		max_tokens: 3000,
		temperature: 0.2,
	});
	const busqueda = result.data.choices[0].text;
	const itinerario = new itinerarios({
		id_user: _id,
		search: busqueda,
	});

	await itinerario.save();

	res.status(200).json({
		success: true,
		data: busqueda,
	});
};

module.exports = {
	generateBusqueda,
};
