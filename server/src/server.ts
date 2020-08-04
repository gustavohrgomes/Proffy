import express, { response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: "Hello There " });
});

app.listen(3333);