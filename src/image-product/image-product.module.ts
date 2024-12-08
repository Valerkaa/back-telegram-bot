import { Module } from '@nestjs/common';
import { ImageProductService } from './image-product.service';
import { ImageProductController } from './image-product.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ImageProduct} from "./entities/image-product.entity";
import {S3UploadModule} from "../s3-upload/s3-upload.module";

@Module({
  controllers: [ImageProductController],
  providers: [ImageProductService],
  imports: [TypeOrmModule.forFeature([ImageProduct]), S3UploadModule],
  exports: [ImageProductService]
})
export class ImageProductModule {}
