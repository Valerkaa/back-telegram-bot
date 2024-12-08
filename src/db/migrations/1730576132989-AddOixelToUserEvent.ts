import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddOixelToUserEvent1730576132989 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `alter table user_events add column pixel varchar(300) default null`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`alter table user_events drop column pixel`);
  }
}
