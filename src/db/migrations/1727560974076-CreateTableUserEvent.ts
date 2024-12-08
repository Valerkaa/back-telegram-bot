import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUserEvent1727560974076 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE user_events (
            id   SERIAL PRIMARY KEY ,
            unique_id   text NOT NULL UNIQUE,
            ip_address   VARCHAR(255) default null,
            user_agent   VARCHAR(1000) default null,
            fbclid   text default null,
            fbp   text default null,
            event_time   VARCHAR(255) default null,
            city   VARCHAR(255) default null,
            country_code   VARCHAR(50) default null,
            zip_code   VARCHAR(100) default null,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6)
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table user_events`);
    }

}
