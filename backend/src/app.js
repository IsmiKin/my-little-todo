const express = require("express")
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))

app.get("/", (req, res) => {
  return res.status(200).send('pika')
})

module.exports = app
