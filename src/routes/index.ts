import { Router } from 'express';
import contatoRouter from './contato_routes';
import usuarioRouter from './usuario_routes';
import sessaoRouter from './sessao_routes';
import indexRouter from './index_routes';

const routes = Router();

routes.use('/index', indexRouter);
routes.use('/usuario', usuarioRouter);
routes.use('/contato', contatoRouter);
routes.use('/sessao', sessaoRouter);

export default routes;
