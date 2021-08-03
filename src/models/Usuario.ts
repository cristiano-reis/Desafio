import {
  Column, Entity, PrimaryGeneratedColumn, CreateDateColumn,
  UpdateDateColumn, OneToMany,
} from 'typeorm';

import Contato from './Contato';

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id:string

  @Column()
  nome:string

  @Column()
  senha:string

  // @BeforeInsert()
  // @BeforeUpdate()
  // hashPassword() {
  //   this.senha = bcrypt.hashSync(this.senha, 8);
  // }

  @Column()
  email:string

  @OneToMany(() => Contato, (contato) => contato.usuario)
  contatos: Contato[];

  @CreateDateColumn({ name: 'data_criacao' })
  data_criacao: Date

  @UpdateDateColumn({ name: 'data_atualizacao' })
  data_atualizacao: Date

  @Column('time with time zone')
  ultimo_login: Date
}

export default Usuario;
