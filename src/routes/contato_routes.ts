import { Router } from 'express';
import { getRepository } from 'typeorm';
import Contato from '@models/Contato';

const contatoRouter = Router();

contatoRouter.post('/', async (request, response) => {
  const repo = getRepository(Contato);

  const contato = repo.create(request.body);

  const res = await repo.save(contato);
  return response.status(201).json(res);
});

contatoRouter.get('/', async (request, response) => {
  response.json(await getRepository(Contato).find({ relations: ['usuario'] }));
});

export default contatoRouter;
