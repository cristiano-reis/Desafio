import express, { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import './database';
import AppError from './errors/AppError';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err:Error, request:Request, reposnse:Response, _:NextFunction) => {
  if (err instanceof AppError) {
    return reposnse.status(err.statuscode).json({ status: 'error', mensagem: err.message });
  }

  return reposnse.status(500).json({ status: 'error', mensagem: 'erro interno do servidor' });
});

app.listen(3333, () => { console.log('Server Ligado!'); });
