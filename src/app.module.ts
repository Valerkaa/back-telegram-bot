import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { UserEventModule } from './user-event/user-event.module';
import {Product} from "./product/entities/product.entity";
import {Category} from "./category/entities/category.entity";
import {SubCategory} from "./sub-category/entities/sub-category.entity";
import {UserEvent} from "./user-event/entities/user-event.entity";
import {ConfigModule, ConfigService} from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageProductModule } from './image-product/image-product.module';
import {ImageProduct} from "./image-product/entities/image-product.entity";
import { OrderModule } from './order/order.module';
import {Order} from "./order/entities/order.entity";
import { FbAccountModule } from './fb-account/fb-account.module';
import {FbAccount} from "./fb-account/entities/fb-account.entity";

const entities = [
    Product,
    Category,
    SubCategory,
    UserEvent,
    ImageProduct,
    Order,
    FbAccount
]
@Module({
  imports: [ProductModule, CategoryModule, SubCategoryModule, UserEventModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities,
        synchronize: false,
        logging: false,
        ssl: undefined,
      }),
      inject: [ConfigService],
    }),
    ImageProductModule,
    OrderModule,
    FbAccountModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
