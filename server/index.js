const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routeruser = require('./src/routers/routers')
const dotenv = require('dotenv')

dotenv.config({
  path: './.env',
})

const app = express()
const port = process.env.PORT
const database = process.env.MONGODB_URI

const corsOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',')
  : []

app.use(
  cors({
    origin: corsOrigins,
  }),
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1', routeruser)

const mongodb = () => {
  mongoose.connect(database)
}
mongodb()

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
