import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddOrderStatus1732130699149 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `alter table app_order add column status varchar(255) default null`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`alter table app_order drop column status`);
  }
}
