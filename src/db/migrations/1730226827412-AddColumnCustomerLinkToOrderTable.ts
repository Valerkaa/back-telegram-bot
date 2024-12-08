import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnCustomerLinkToOrderTable1730226827412 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`alter table app_order add column customer_link VARCHAR(600) default null`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`alter table app_order drop column customer_link`)
    }

}
