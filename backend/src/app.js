const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('combined'))

app.get('/', (req, res) => {
  return res.status(200).send('pika')
})

module.exports = app
