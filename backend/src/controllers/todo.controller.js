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
  if (!req.body.name) {
    return res.status(400).send({
      message: 'Todo name can not be empty'
    })
  }

  const todo = new Todo({
    name: req.body.name,
    done: req.body.done
  })

  todo
    .save()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Todo.'
      })
    })
}

const findOne = (req, res) => {
  Todo.findById(req.params.todoId)
    .then(todo => {
      if (!todo) {
        return res.status(404).send({
          message: 'Todo not found with id ' + req.params.todoId
        })
      }
      res.send(todo)
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Todo not found with id ' + req.params.todoId
        })
      }
      return res.status(500).send({
        message: 'Error retrieving todo with id ' + req.params.todoId
      })
    })
}

const update = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: 'Todo name can not be empty'
    })
  }

  Todo.findByIdAndUpdate(
    req.params.todoId,
    {
      name: req.body.name,
      done: req.body.done || false
    },
    { new: true }
  )
    .then(todo => {
      if (!todo) {
        return res.status(404).send({
          message: 'Todo not found with id ' + req.params.todoId
        })
      }
      res.send(todo)
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Todo not found with id ' + req.params.todoId
        })
      }
      return res.status(500).send({
        message: 'Error updating todo with id ' + req.params.todoId
      })
    })
}

const remove = (req, res) => {
  Todo.findByIdAndRemove(req.params.todoId)
    .then(todo => {
      if (!todo) {
        return res.status(404).send({
          message: 'Todo not found with id ' + req.params.todoId
        })
      }
      res.send({ message: 'Todo deleted successfully!' })
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Todo not found with id ' + req.params.todoId
        })
      }
      return res.status(500).send({
        message: 'Could not delete todo with id ' + req.params.todoId
      })
    })
}

module.exports = {
  findAll,
  createNew,
  findOne,
  update,
  remove
}
