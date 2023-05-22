const {Configuration,OpenAIApi} = require('openai')
const dotenv = require('dotenv')

dotenv.config({
  path:'../.env'
})

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY || ''
});

const openAi = new OpenAIApi(configuration);

const generateBusqueda = async (req,res) => {
    const {prompt} = req.body
    const result = await openAi.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 50,
        temperature: 0.6,
    });
    const busqueda = result.data.choices[0].text;
    res.status(200).json({
        success: true,
        data: busqueda
    })
}

module.exports = {
    generateBusqueda
}