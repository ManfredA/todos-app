import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from '../helpers/todos';

import express from 'express'

const todoRouter = express.Router();

todoRouter.route('/')
  .get(getTodos)
  .post(createTodo)

todoRouter.route('/:todoId')
  .delete(deleteTodo)
  .get(getTodo)
  .put(updateTodo)

export { todoRouter }