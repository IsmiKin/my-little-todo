const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const todos = require('./routes/todo.routes')

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/todos'

mongoose
  .connect(
    DB_URL,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log('Successfully connected to the database')
  })
  .catch(err => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
  })

const app = express()

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())

app.use('/todos', todos)

app.get('/', (req, res) => {
  return res.json({ message: 'pika' })
})

module.exports = app
