import mongoose from 'mongoose';
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost:27017/todo-api')
mongoose.Promise = Promise;

export * from './todo'