import Usuario from '@models/Usuario';
import { hash } from 'bcryptjs';
import { EntityRepository, getRepository, Repository } from 'typeorm';

@EntityRepository(Usuario)
export default class UsuarioRepository extends Repository<Usuario> {
  public async findByName(nome:string):Promise<Usuario[]> {
    return this.find({
      where: {
        nome,
      },
    });
  }

  public async createUser(nome: string, email: string, senha: string):Promise<Usuario> {
    const repo = getRepository(Usuario);

    const senhaHash = await hash(senha, 8);

    const usuario = repo.create({
      nome,
      email,
      senha: senhaHash,
    });
    await repo.save(usuario);

    return usuario;
  }

  public async findByEmail(email: string):Promise<Usuario | undefined> {
    const usuario = getRepository(Usuario).findOne({
      where: { email },
    });
    return usuario;
  }
}
