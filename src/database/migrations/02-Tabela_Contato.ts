import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class TabelaContato1627953404493 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'contatos',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      },
      {
        name: 'numero',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'ddd',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'usuario_id',
        type: 'uuid',
      },
      ],
      foreignKeys: [
        {
          name: 'fk_contato_usuario',
          columnNames: ['usuario_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'usuarios',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "contatos"');
  }
}
