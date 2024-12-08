import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnInProcessedToOrderTable1730241431324
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `alter table app_order add column in_processed boolean default false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`alter table app_order drop column in_processed`);
  }
}
