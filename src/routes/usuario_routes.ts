import { Router } from 'express';
import autMiddleware from 'src/autMiddleware/autMiddleware';
import UsuarioController from '@controllers/UsuarioController';
import AutController from '@controllers/AutController';

const usuarioRouter = Router();

usuarioRouter.post('/', UsuarioController.createUsuario);
usuarioRouter.get('/', autMiddleware, UsuarioController.index);
usuarioRouter.post('/aut', AutController.Autenticacao);
// usuarioRouter.get('/', async (request, response) => {
//   const res = response.json(await getRepository(Usuario).find({
//     select: ['nome', 'email', 'senha'],
//     relations: ['contatos'],

//   }));

//   return res;
// });

export default usuarioRouter;
