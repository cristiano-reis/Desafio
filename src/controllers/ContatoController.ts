import Contato from '@models/Contato';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

class UsuarioController {
  async cadastrarContato(request: Request, response:Response) {
    const repo = getRepository(Contato);
    const contato = request.body;
    const createRepo = repo.create(contato);
    const res = await repo.save(createRepo);
    return response.status(201).json(res);
  }

  async listarContatos(request: Request, response:Response) {
    response.json(await getRepository(Contato).find({ relations: ['usuario'] }));
  }
}
export default new UsuarioController();
