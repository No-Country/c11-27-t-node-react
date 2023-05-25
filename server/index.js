const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routeruser = require('./src/routers/routers')
const dotenv = require('dotenv')

dotenv.config({
  path:'../.env'
})

const app = express()
const port = process.env.PORT || 3000
const database = process.env.MONGODB_URI || ''

app.use(
  cors({
    origin: [
      'https://tourist-route.vercel.app',
      'https://tourist-route-git-develop-andryore.vercel.app',
    ],
  }),
)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', routeruser)


const mongodb = () => {
  mongoose.connect(database)
  console.log('database open')
}
mongodb()

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
