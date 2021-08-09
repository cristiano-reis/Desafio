import { Router } from 'express';
import IndexController from '../controllers/IndexController';
import sessaoMiddleware from '../middleware/sessaoMiddleware';

const indexRouter = Router();

indexRouter.use(sessaoMiddleware);
indexRouter.get('/', IndexController.index);

export default indexRouter;
