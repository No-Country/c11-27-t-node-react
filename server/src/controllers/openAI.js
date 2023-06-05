const { Configuration, OpenAIApi } = require('openai');
const { itinerarios } = require('../models/itinrario');
const dotenv = require('dotenv');

dotenv.config({
	path: '../.env',
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
        Un número de día, un título temático para cada día basado en las actividades planeadas, y una lista de actividades. Cada actividad debe incluir un lugar, google maps url del lugar, una breve descripción y la razón por la cual se recomienda.
        Un ejemplo de la estructura deseada sería:
        {
            'itinerary': [ 
           { 
           'day': 1,
            'title': 'Inmersión en la Historia Romana',
            'activities': [ 
           { 
           'place': 'Coliseo Romano',
           'googleMapsUrl':'https://www.google.com/maps/place/Colosseum/@41.8902102,12.4900422,17z/data=!3m1!4b1!4m6!3m5!1s0x132f61b6532013ad:0x28f1c82e908503c4!8m2!3d41.8902102!4d12.4922309!16zL20vMGQ1cXg',
            'description': 'El mayor anfiteatro del mundo y un testimonio de la grandeza del Imperio Romano.',
            'reason': 'Es un lugar que no puedes dejar de visitar debido a su relevancia histórica y arquitectónica.' }, 
           {'place': 'Foro Romano',
           'googleMapsUrl':'https://www.google.com/maps/place/Roman+Forum/@41.8917767,12.4798332,15.79z/data=!4m6!3m5!1s0x132f61b383a9cdef:0xfa914007c0ec7de6!8m2!3d41.8924623!4d12.485325!16zL20vMG4xNnQ', 
           'description': 'Era el centro de la vida política, económica y religiosa en la antigua Roma.',
           'reason': 'Es recomendable por su valor histórico y las impresionantes ruinas.' } ] },
            // Y así sucesivamente para cada día del viaje 
           ]
           }
           `,
		max_tokens: 4097,
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
