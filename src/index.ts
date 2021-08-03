import express from 'express';
import './database';

const app = express();

app.use(express.json());

app.get('/', (request, reponse) => reponse.json({ message: 'Hello Word' }));

app.listen(3333);
