import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {SubCategory} from "../../sub-category/entities/sub-category.entity";
import {ImageProduct} from "../../image-product/entities/image-product.entity";
import {Order} from "../../order/entities/order.entity";

@Entity('product')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    price: number;

    @Column()
    size: string;

    @Column({ name: 'in_stock', default: true})
    inStock: boolean;

    @Column({ name: 'is_active', default: true})
    isActive: boolean;

    @Column({ nullable: true })
    description: string;

    @ManyToOne(() => SubCategory, (subCategory) => subCategory.products)
    @JoinColumn([{ name: 'sub_category_id', referencedColumnName: 'id' }])
    subCategory: SubCategory;

    @Column({ name: 'sub_category_id' })
    subCategoryId: number;

    @OneToMany(() => ImageProduct, (image) => image.product)
    images: ImageProduct[];

    @OneToMany(() => Order, (order) => order.product)
    order: Order[];

    @DeleteDateColumn({ name: 'deleted_at'})
    deletedAt?: Date;

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
