import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUser1627922900287 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE EXTENSION IF NOT EXISTS 'uuid-ossp'");
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      },
      {
        name: 'name',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'email',
        type: 'varchar',
        isUnique: true,
      },
      {
        name: 'password',
        type: 'varchar',
      },
      {
        name: 'active ',
        type: 'boolean',
        default: true,
      },
      {
        name: 'create_at ',
        type: 'timestamp',
        default: 'now()',
      },
      {
        name: 'update_at ',
        type: 'timestamp',
        default: 'now()',
      },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
    await queryRunner.query("DROP EXTENSION IF EXISTS 'uuid-ossp'");
  }
}
