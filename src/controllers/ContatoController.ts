import { Request, Response } from 'express';

import { getCustomRepository, getRepository } from 'typeorm';
import Contato from '../models/Contato';
import UsuarioRepository from '../repository/UsuarioRepository';

class UsuarioController {
  async buscarTodosContatos(request: Request, response:Response) :Promise<Contato[] | any> {
    const usuarios = await getRepository(Contato).find({ relations: ['usuario'] });
    response.json(usuarios);
  }

  async cadastar(request : Request, response:Response)
   :Promise<Contato | any> {
    const { numero, ddd, id } = request.body;
    const existeUsuario = await getCustomRepository(UsuarioRepository).BuscarPorId(id);

    if (!existeUsuario) {
      return response.status(409).json({
        mensagem: 'Usuario não encontrado!',
      });
    }

    const existeNumero = await getRepository(Contato).findOne({ numero, ddd });

    if (existeNumero) {
      return response.status(409).json({
        mensagem: 'Número já cadastrado',
      });
    }
    const contato = getRepository(Contato).create({
      numero,
      ddd,
      usuario_id: id,
    });
    const savecontato = await getRepository(Contato).save(contato);

    return response.status(200).json(savecontato);
  }
}
export default new UsuarioController();
