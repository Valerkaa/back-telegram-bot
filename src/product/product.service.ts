import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {FilterOperator, paginate, Paginated, PaginateQuery} from "nestjs-paginate";
import {DeleteResult, InsertResult, Repository, UpdateResult} from "typeorm";
import {Product} from "./entities/product.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {ImageProductService} from "../image-product/image-product.service";

@Injectable()
export class ProductService {
  constructor(
      @InjectRepository(Product)
      private readonly productRepository: Repository<Product>,
      private imageProductService: ImageProductService,
  ) {
  }

 async create(createProductDto: CreateProductDto): Promise<InsertResult> {
     const {images, ...data} = createProductDto
     const product = await this.productRepository.insert(data)
     const id = product.identifiers[0].id;
     await this.imageProductService.create({
       productId: id,
       path: images
      })
   return product;
  }

  findAll(query: PaginateQuery): Promise<Paginated<Product>> {
    return paginate(query, this.productRepository, {
      sortableColumns: ['id', 'title', 'createdAt', 'updatedAt'],
      defaultSortBy: [['id', 'DESC']],
      filterableColumns: {
        id: [FilterOperator.IN],
        title: [FilterOperator.ILIKE],
        "subCategory.id": [FilterOperator.IN],
        "subCategory.category.id": [FilterOperator.IN],
        isActive: [FilterOperator.EQ],
        createdAt: [FilterOperator.BTW],
      },
      relations: {
        subCategory: { category: true },
        images: true,
      },
    });
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: { id },
      relations: {
        subCategory: { category: true },
        images: true,
      }
    })
  }

  update(id: number, updateProductDto: UpdateProductDto): Promise<UpdateResult> {
    return this.productRepository.update(id, updateProductDto)
  }

  remove(id: number): Promise<DeleteResult> {
    return this.productRepository.softDelete(id)
  }
}
