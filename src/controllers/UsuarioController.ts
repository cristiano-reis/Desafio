import Usuario from '@models/Usuario';
import { hash } from 'bcryptjs';
import { Request, Response } from 'express';

import { getRepository } from 'typeorm';

class UsuarioController {
  listar(request: Request, response:Response) {
    return response.send({ userID: request.userID });
  }

  async buscarContatoPorUsuario(request: Request, response:Response) {
    const { id } = request.params;
    const res = await getRepository(Usuario).find({
      select: ['nome', 'email', 'senha'],
      relations: ['contatos'],
      where: { id },
    });
    const existeUsuairo = await getRepository(Usuario).findOne({ id });
    if (!existeUsuairo) {
      return response.status(409).json({
        mensagem: 'Usuario não encontrado!',
      });
    }
    return response.json(res);
  }

  async buscarUsuarios(request: Request, response:Response) {
    const usuarios = await getRepository(Usuario).find();
    return response.json(usuarios);
  }

  async cadastrarUsuario(request: Request, response:Response) {
    const repository = getRepository(Usuario);
    const { nome, email, senha } = request.body;

    const usuarioExiste = await repository.findOne({ email });

    if (usuarioExiste) {
      return response.status(409).json({
        mensagem: 'Email já cadastrado!',
      });
    }

    const senhaHash = await hash(senha, 8);
    const repo = repository.create({
      nome,
      email,
      senha: senhaHash,
    });

    const usuario = await repository.save(repo);
    delete usuario.senha;
    return response.json(usuario);
  }
}
export default new UsuarioController();
