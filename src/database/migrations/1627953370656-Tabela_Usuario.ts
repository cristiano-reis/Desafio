import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUser1627520864036 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'senha',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'data_criacao',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'data_atualizacao',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'ultimo_login',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios');
    await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
  }
}
