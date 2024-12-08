import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnTokenToFBAccount1730657572444 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `alter table user_events add column phone varchar(255) default null`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`alter table user_events drop column phone`);
    }

}
