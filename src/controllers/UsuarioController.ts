import { hash } from 'bcryptjs';
import { Request, Response } from 'express';

import { getCustomRepository, getRepository } from 'typeorm';
import Usuario from '../models/Usuario';
import UsuarioRepository from '../repository/UsuarioRepository';

class UsuarioController {
  index(request: Request, response:Response) {
    return response.json({ userID: request.userID });
  }

  async buscarContatoPorUsuario(request: Request, response:Response):Promise<Usuario | any> {
    const { id } = request.params;
    const existeUsuario = await getRepository(Usuario).find({
      select: ['nome', 'email', 'senha'],
      relations: ['contatos'],
      where: { id },
    });

    if (!existeUsuario) {
      return response.status(409).json({
        mensagem: 'Usuario não encontrado!',
      });
    }
    return response.json(existeUsuario);
  }

  async buscarUsuarios(request: Request, response:Response) :Promise<Usuario | any> {
    const usuarios = await getRepository(Usuario).find();
    return response.json(usuarios);
  }

  async cadastrarUsuario(request: Request, response:Response) :Promise<Usuario | any> {
    const repository = getRepository(Usuario);
    const { nome, email, senha } = request.body;

    const usuarioExiste = await getCustomRepository(UsuarioRepository).BuscarPorEmail(email);

    if (usuarioExiste) {
      return response.status(409).json({
        mensagem: 'E-mail já cadastrado!',
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
