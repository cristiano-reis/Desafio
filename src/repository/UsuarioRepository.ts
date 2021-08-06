import { EntityRepository, Repository } from 'typeorm';
import Usuario from '../models/Usuario';

@EntityRepository(Usuario)
export default class UsuarioRepository extends Repository<Usuario> {
  public async BuscarPorEmail(email: string): Promise<Usuario> {
    return this.findOne({
      where: {
        email,
      },
    });
  }

  public async BuscarPorId(id: string): Promise<Usuario> {
    return this.findOne({
      where: {
        id,
      },
    });
  }
}
