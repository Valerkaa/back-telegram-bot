import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Product} from "../../product/entities/product.entity";

@Entity('image_product')
export class ImageProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Product, (product) => product.images)
    @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
    product: Product;

    @Column({ name: 'product_id' })
    productId: number;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'createdat',
    })
    createdAt: string;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
        name: 'updatedat',
    })
    public updatedAt: Date;

}
