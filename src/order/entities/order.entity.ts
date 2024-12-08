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
import {UserEvent} from "../../user-event/entities/user-event.entity";

@Entity({ name: 'app_order' })
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'customer_link', nullable: true })
    customerLink: string;

    @Column({ name: 'in_processed' })
    inProcessed: boolean;

    @ManyToOne(() => Product, (product) => product.order)
    @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
    product: Product;

    @Column({ name: 'product_id' })
    productId: number;

    @ManyToOne(() => UserEvent, (useEvent) => useEvent.order)
    @JoinColumn([{ name: 'user_event_id', referencedColumnName: 'id' }])
    userEvent: UserEvent;

    @Column({ name: 'user_event_id', nullable: true })
    userEventId?: number;


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

    @Column({ name: 'status' })
    status: string;
}
