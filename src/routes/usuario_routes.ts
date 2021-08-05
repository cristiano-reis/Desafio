import UsuarioController from '@controllers/UsuarioController';
import sessaoMiddleware from '@middleware/sessaoMiddleware';
import { Router } from 'express';

const usuarioRouter = Router();

usuarioRouter.post('/', UsuarioController.cadastrarUsuario);
usuarioRouter.use(sessaoMiddleware);
usuarioRouter.get('/list', UsuarioController.listar);
usuarioRouter.get('/', UsuarioController.buscarUsuarios);
usuarioRouter.get('/:id', sessaoMiddleware, UsuarioController.buscarContatoPorUsuario);

export default usuarioRouter;
