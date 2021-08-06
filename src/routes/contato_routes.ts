import { Router } from 'express';
import ContatoController from '../controllers/ContatoController';
import sessaoMiddleware from '../middleware/sessaoMiddleware';

const contatoRouter = Router();

contatoRouter.use(sessaoMiddleware);
contatoRouter.get('/', ContatoController.buscarTodosContatos);
contatoRouter.post('/', ContatoController.cadastar);

export default contatoRouter;
