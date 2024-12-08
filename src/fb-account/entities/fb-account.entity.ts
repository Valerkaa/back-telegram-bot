import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity('fb_account')
export class FbAccount {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    pixel: string

    @Column({ name: 'fb_token' })
    fbToken: string;

    @Column({ name: 'account_name' })
    accountName: string

    @Column({ name: 'event_name' })
    eventName: string;

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
