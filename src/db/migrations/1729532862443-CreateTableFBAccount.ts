import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableFBAccount1729532862443 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE fb_account(
            id   SERIAL PRIMARY KEY,
            pixel   VARCHAR(255) not null,
            fb_token   VARCHAR(500) not null,
            event_name   VARCHAR(255) not null,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6)
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table fb_account`)
    }

}
