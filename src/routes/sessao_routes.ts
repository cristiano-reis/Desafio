import { Router } from 'express';

import SessaoController from '@controllers/SessaoController';

const sessaoRouter = Router();

sessaoRouter.post('/', SessaoController.Autenticacao);

export default sessaoRouter;
