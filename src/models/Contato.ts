import {
  Column, Entity, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import Usuario from './Usuario';

@Entity('contatos')
export default class Contato {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  numero: string;

  @Column()
  ddd:string;

 @ManyToOne(() => Usuario, (usuario) => usuario.contatos)
 usuario:Usuario
}
