import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Category} from "../../category/entities/category.entity";
import {Product} from "../../product/entities/product.entity";

@Entity('sub_category')
export class SubCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ name: 'is_active' })
    isActive: boolean;

    @ManyToOne(() => Category, (category) => category.subCategory)
    @JoinColumn([{ name: 'category_id', referencedColumnName: 'id' }])
    category: Category;

    @Column({ name: 'category_id' })
    categoryId: number;

    @OneToMany(() => Product, (product) => product.subCategory)
    products: Product[];

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
