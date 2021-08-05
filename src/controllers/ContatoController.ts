import Contato from '@models/Contato';
import Usuario from '@models/Usuario';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

class UsuarioController {
  async BuscarTodosContatos(request: Request, response:Response) :Promise<Contato[] | any> {
    const usuarios = await getRepository(Contato).find({ relations: ['usuario'] });
    response.json(usuarios);
  }

  async cadastar(request : Request, response:Response)
   :Promise<Contato | any> {
    const { numero, ddd, id } = request.body;
    const existeUsuario = await getRepository(Usuario).findOne({ id });

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

  // async atualizar(contato: Contato, response:Response) :Promise<Contato> {
  //   return null;
  // }
}
export default new UsuarioController();
