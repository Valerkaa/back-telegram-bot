import { Module } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryController } from './sub-category.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubCategory} from "./entities/sub-category.entity";

@Module({
  controllers: [SubCategoryController],
  providers: [SubCategoryService],
  imports: [TypeOrmModule.forFeature([SubCategory])],
  exports: [SubCategoryService]
})
export class SubCategoryModule {}
