import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UsuarioRepository from '../repository/UsuarioRepository';

class SessaoController {
  async Autenticacao(request: Request, response:Response) :Promise<Response> {
    const { email, senha } = request.body;

    const usuario = await getCustomRepository(UsuarioRepository).BuscarPorEmail(email);

    if (!usuario) {
      return response.status(404).json({
        mensagem: 'Usuário e/ou senha inválidos',
      });
    }

    const SenhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!SenhaValida) {
      return response.status(401).json({
        mensagem: 'Usuário e/ou senha inválidos!',
      });
    }
    delete usuario.senha;
    const token = jwt.sign({ id: usuario.id }, process.env.APP_SECRET as string, { expiresIn: '30m' });

    return response.json({ usuario, token });
  }
}
export default new SessaoController();
