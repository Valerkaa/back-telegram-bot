import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableImageProduct1727562056224 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE image_product(
            id   SERIAL PRIMARY KEY ,
            path   VARCHAR(1000) not null ,
            product_id   int not null,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6),
            CONSTRAINT fk_product_id FOREIGN KEY(product_id) REFERENCES product(id) on update cascade on delete cascade
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table image_product`)
    }

}
