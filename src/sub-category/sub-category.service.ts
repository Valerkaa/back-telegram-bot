import { Injectable } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import {FilterOperator, paginate, Paginated, PaginateQuery} from "nestjs-paginate";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {SubCategory} from "./entities/sub-category.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Category} from "../category/entities/category.entity";

@Injectable()
export class SubCategoryService {
  constructor(
      @InjectRepository(SubCategory)
      private readonly subCategoryRepository: Repository<SubCategory>,
  ) {}

  create(createSubCategoryDto: CreateSubCategoryDto): Promise<SubCategory> {
    return this.subCategoryRepository.save(createSubCategoryDto);
  }

  findAll(query: PaginateQuery): Promise<Paginated<SubCategory>> {
    return paginate(query, this.subCategoryRepository, {
      sortableColumns: ['id', 'name', 'createdAt', 'updatedAt'],
      defaultSortBy: [['id', 'DESC']],
      filterableColumns: {
        id: [FilterOperator.IN],
        name: [FilterOperator.ILIKE],
        isActive: [FilterOperator.EQ],
        createdAt: [FilterOperator.BTW],
      },
      relations: {
        category: true
      },
    });
  }

  findOne(id: number) {
    return this.subCategoryRepository.findOne({
      where: { id },
      relations: { category: true }
    });
  }

  update(id: number, updateSubCategoryDto: UpdateSubCategoryDto): Promise<UpdateResult> {
    return this.subCategoryRepository.update(id, updateSubCategoryDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.subCategoryRepository.softDelete(id)
  }
}
