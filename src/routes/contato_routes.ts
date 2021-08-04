import ContatoController from '@controllers/ContatoController';
import { Router } from 'express';

const contatoRouter = Router();

contatoRouter.post('/', ContatoController.cadastrarContato);
contatoRouter.get('/', ContatoController.listarContatos);
export default contatoRouter;
