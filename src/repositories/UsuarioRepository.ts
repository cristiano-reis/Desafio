import Usuario from '@models/Usuario';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Usuario)
export default class UsuarioRepository extends Repository<Usuario> {
  public async findByName(nome:string):Promise<Usuario[]> {
    return this.find({
      where: {
        nome,
      },
    });
  }
}
