import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCategory1727560954896 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE category (
                id   SERIAL PRIMARY KEY ,
                name   VARCHAR(100) not null,
                is_active    boolean not null default true,
                deleted_at   TIMESTAMP default null,
                createdAt    TIMESTAMP DEFAULT current_timestamp(6),
                updatedAt    TIMESTAMP DEFAULT current_timestamp(6)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table category`);
    }

}
