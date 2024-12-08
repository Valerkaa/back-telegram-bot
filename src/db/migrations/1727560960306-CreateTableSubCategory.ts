import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableSubCategory1727560960306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE sub_category(
                id   SERIAL PRIMARY KEY ,
                name   VARCHAR(255) not null,
                category_id     INT NOT NULL,
                is_active       boolean not null default true,
                deleted_at      TIMESTAMP default null,
                createdAt       TIMESTAMP DEFAULT current_timestamp(6),
                updatedAt       TIMESTAMP DEFAULT current_timestamp(6),
                CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category(id) on update cascade on delete cascade 
             )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table sub_category`);
    }

}
