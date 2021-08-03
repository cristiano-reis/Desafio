import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import Usuario from '@models/Usuario';
import UsuarioRepository from '@repository/UsuarioRepository';

const usuarioRouter = Router();

usuarioRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Usuario);
    // criar repositorio para aplicar a protecao da senha
    const usuario = repo.create(request.body);

    const res = await repo.save(usuario);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message:>>', err.message);
    return response.status(404);
  }
});

usuarioRouter.get('/', async (request, response) => {
  const res = response.json(await getRepository(Usuario).find({
    select: ['nome', 'email', 'senha'],
    relations: ['contatos'],

  }));

  return res;
});

usuarioRouter.get('/:nome', async (request, response) => {
  const repositorio = getCustomRepository(UsuarioRepository);

  const res = await repositorio.findByName(request.params.nome);

  response.json(res);
});

export default usuarioRouter;
