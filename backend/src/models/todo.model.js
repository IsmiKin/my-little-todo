const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TodoSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  done: { type: Boolean, required: false, default: false }
})

module.exports = mongoose.model('Todo', TodoSchema)
