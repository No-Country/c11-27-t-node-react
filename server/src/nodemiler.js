const nodemailer = require('nodemailer')

const enviaremail = async () => {
    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'cmr.cristian26@gmail.com',
            pass: 'gkhbasgtzhcwjdqe'
        }
    }
    const menssage = {
        from: 'cmr.cristian26@gmail.com',
        to: 'aracelid1016@gmail.com',
        subject:'TITULO DE EMAIL',
        text: 'mensaje enviado prueba'
    }

    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(menssage)

    console.log(info)
}
enviaremail()