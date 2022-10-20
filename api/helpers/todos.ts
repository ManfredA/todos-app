import { NextFunction, Request, Response, Router } from "express"

import { Todo } from "../models"

type HttpGenericMethod = (req: Request, res: Response, next: NextFunction) => void

export const getTodos: HttpGenericMethod = (_, res) => {
  Todo.find()
  .then((todos) => res.json(todos))
  .catch((err) => res.send(err))
}

export const createTodo: HttpGenericMethod = (req, res) => {
  console.log('req: ', req.body);
  Todo.create(req.body)
  .then((newTodo) => res.status(201).json(newTodo))
  .catch((err) => res.send(err))
}

export const getTodo: HttpGenericMethod = (req, res) => {
  Todo.findById(req.params.todoId)
  .then(todo => res.json(todo) )
  .catch(err =>  res.send(err) )
}

export const updateTodo: HttpGenericMethod = (req, res) => {
  Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
  .then(todo => res.json(todo) )
  .catch(err =>  res.send(err) )
}

export const deleteTodo: HttpGenericMethod = (req, res) => {
  Todo.remove({ _id: req.params.todoId })
  .then(() => res.json({ message: 'Deleted successfully' }) )
  .catch(err =>  res.send(err) )
}