import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {Category} from "./entities/category.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {FilterOperator, paginate, Paginated, PaginateQuery} from "nestjs-paginate";

@Injectable()
export class CategoryService {
  constructor(
      @InjectRepository(Category)
      private readonly categoryRepository: Repository<Category>
  ) {
  }
  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
   return this.categoryRepository.save(createCategoryDto);
  }

  findAll(query: PaginateQuery): Promise<Paginated<Category>> {
    return paginate(query, this.categoryRepository, {
      sortableColumns: ['id', 'name', 'createdAt', 'updatedAt'],
      defaultSortBy: [['id', 'DESC']],
      filterableColumns: {
        id: [FilterOperator.IN],
        name: [FilterOperator.ILIKE],
        isActive: [FilterOperator.EQ],
        createdAt: [FilterOperator.BTW],
      },
      relations: {
        subCategory: true
      },
    });
  }

 findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      where: { id },
      relations: { subCategory: true }
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<UpdateResult> {
    return this.categoryRepository.update(id, updateCategoryDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.categoryRepository.softDelete(id)
  }
}
