import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableProduct1727560966082 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE product(
                id   SERIAL PRIMARY KEY ,
                title   VARCHAR(255) not null,
                sub_category_id   INT NOT NULL,
                price   int,
                size    text,
                in_stock  boolean not null default true, 
                description text default null,
                is_active       boolean not null default true,
                deleted_at      TIMESTAMP default null,
                createdAt       TIMESTAMP DEFAULT current_timestamp(6),
                updatedAt       TIMESTAMP DEFAULT current_timestamp(6),
                CONSTRAINT fk_sub_category FOREIGN KEY(sub_category_id) REFERENCES sub_category(id) on update cascade on delete cascade 
             )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table product`);
    }

}
