import { MigrationInterface, QueryRunner } from 'typeorm';

export default class TabelaContato1627953404493 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "contato" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "numero" character varying NOT NULL, "ddd" character varying NOT NULL, "usuarioId" uuid NOT NULL, CONSTRAINT "PK_9592a5553a9dfaeebe7d0cd0e5b" PRIMARY KEY ("id"))');
    await queryRunner.query('ALTER TABLE "contato" ADD CONSTRAINT "FK_9d90f21eeab241427e4e4b9b8a4" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "contato" DROP CONSTRAINT "FK_9d90f21eeab241427e4e4b9b8a4"');
    await queryRunner.query('DROP TABLE "contato"');
    await queryRunner.query('DROP TABLE "usuarios"');
  }
}
