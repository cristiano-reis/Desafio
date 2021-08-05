import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
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

  @Column()
  usuario_id:string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario:string

  // @ManyToOne(() => Usuario, (usuario) => usuario.contatos)
  // usuario:Usuario
}
