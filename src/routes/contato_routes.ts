import ContatoController from '@controllers/ContatoController';
import { Router } from 'express';

const contatoRouter = Router();

contatoRouter.post('/:id', ContatoController.criarContato);
contatoRouter.get('/', ContatoController.listarContatos);
export default contatoRouter;
