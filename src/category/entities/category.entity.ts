import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {SubCategory} from "../../sub-category/entities/sub-category.entity";

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ name: 'is_active' })
    isActive: boolean;

    @OneToMany(() => SubCategory, (subCategory) => subCategory.category)
    subCategory: SubCategory[];

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
