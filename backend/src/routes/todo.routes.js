const express = require('express')
const router = express.Router()

const todos = require('../controllers/todo.controller')

router.get('/', todos.findAll)

router.post('/', todos.createNew)

router.get('/:todoId', todos.findOne)

router.put('/:todoId', todos.update)

router.delete('/:todoId', todos.remove)

module.exports = router
