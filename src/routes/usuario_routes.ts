import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';
import sessaoMiddleware from '../middleware/sessaoMiddleware';

const usuarioRouter = Router();

usuarioRouter.post('/', UsuarioController.cadastrarUsuario);
usuarioRouter.use(sessaoMiddleware);
usuarioRouter.get('/index', UsuarioController.index);
usuarioRouter.get('/', UsuarioController.buscarUsuarios);
usuarioRouter.get('/:id', UsuarioController.buscarContatoPorUsuario);

export default usuarioRouter;
