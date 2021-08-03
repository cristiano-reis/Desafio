import Usuario from '@models/Usuario';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AutController {
  async Autenticacao(request: Request, response:Response) {
    const repository = getRepository(Usuario);
    const { email, senha } = request.body;

    const usuario = await repository.findOne({ email });

    if (!usuario) {
      return response.status(401).json({
        mensagem: 'Usuário não encontrado!',
      });
    }

    const SenhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!SenhaValida) {
      return response.status(401).json({
        mensagem: 'Senha Inválida!',
      });
    }
    delete usuario.senha;
    const token = jwt.sign({ id: usuario.id }, 'secret', { expiresIn: '1d' });

    return response.json({ usuario, token });
  }
}
export default new AutController();
