import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAccountNametoAccooubBstable1730993971775
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `alter table fb_account add column account_name varchar(400) default null`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`alter table fb_account drop column account_name`);
  }
}
