const Todo = require('../models/todo.model')

const findAll = (req, res) => {
  Todo.find()
    .then(todos => {
      res.send(todos)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'An error occurred retrieven todos.'
      })
    })
}

const createNew = (req, res) => {
  console.log('calling create endpoint')
}

const findOne = (req, res) => {
  console.log('calling find one todo')
}

const update = (req, res) => {
  console.log('calling find one todo')
}

const remove = (req, res) => {
  console.log('calling delete one todo')
}

module.exports = {
  findAll,
  createNew,
  findOne,
  update,
  remove
}
