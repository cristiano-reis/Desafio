import { Router } from 'express';

import UsuarioController from '@controllers/UsuarioController';
import AutController from '@controllers/AutController';
import autMiddleware from '@autMiddleware/autMiddleware';

const usuarioRouter = Router();

usuarioRouter.post('/', UsuarioController.cadastrarUsuario);
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
