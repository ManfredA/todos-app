import mongoose from 'mongoose'
const todoSchema = new mongoose.Schema({
  completed: {
    type: Boolean,
    default: false,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: `Name can't be blank`
  },
})

export const Todo = mongoose.model('Todo', todoSchema)
