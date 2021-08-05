import ContatoController from '@controllers/ContatoController';
import sessaoMiddleware from '@middleware/sessaoMiddleware';
import { Router } from 'express';

const contatoRouter = Router();

contatoRouter.use(sessaoMiddleware);
contatoRouter.get('/', ContatoController.buscarTodosContatos);
contatoRouter.post('/', ContatoController.cadastar);

export default contatoRouter;
