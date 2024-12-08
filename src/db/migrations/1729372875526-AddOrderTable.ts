import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOrderTable1729372875526 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE app_order(
            id   SERIAL PRIMARY KEY,
            product_id   int not null,
            user_event_id   int default null,
            createdAt       TIMESTAMP DEFAULT current_timestamp(6),
            updatedAt       TIMESTAMP DEFAULT current_timestamp(6),
            CONSTRAINT fk_product_id FOREIGN KEY(product_id) REFERENCES product(id) on update cascade on delete cascade,
            CONSTRAINT fk_user_event_id FOREIGN KEY(user_event_id) REFERENCES user_events(id) on update cascade on delete cascade
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table app_order`)
    }

}
