import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import express from 'express';
import { todoRouter } from './routes/todos';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (_, res) => {
  res.send('Hello there!')
})

app.use('/api/todos', todoRouter)

app.listen(port, () => {
  console.log('App running on ', port);
})
