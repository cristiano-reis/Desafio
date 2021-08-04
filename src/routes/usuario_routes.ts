import { Router } from 'express';

import UsuarioController from '@controllers/UsuarioController';
import AutController from '@controllers/AutController';
import autMiddleware from '@autMiddleware/autMiddleware';

const usuarioRouter = Router();

usuarioRouter.post('/', UsuarioController.cadastrarUsuario);
usuarioRouter.get('/list', autMiddleware, UsuarioController.listar);
usuarioRouter.post('/aut', AutController.Autenticacao);
usuarioRouter.get('/', UsuarioController.buscarUsuarios);
usuarioRouter.get('/:id', UsuarioController.buscarContatoPorUsuario);

export default usuarioRouter;
