import { Injectable } from '@nestjs/common';
import { CreateFbAccountDto } from './dto/create-fb-account.dto';
import { UpdateFbAccountDto } from './dto/update-fb-account.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {FbAccount} from "./entities/fb-account.entity";
import {FilterOperator, paginate, Paginated, PaginateQuery} from "nestjs-paginate";

@Injectable()
export class FbAccountService {
  constructor(
      @InjectRepository(FbAccount)
      private readonly fbAccountRepository: Repository<FbAccount>
  ) {}


  create(createFbAccountDto: CreateFbAccountDto): Promise<FbAccount> {
    return this.fbAccountRepository.save(createFbAccountDto);
  }

  findAll(query: PaginateQuery): Promise<Paginated<FbAccount>> {
    return paginate(query, this.fbAccountRepository, {
      sortableColumns: ['id', 'pixel', 'createdAt', 'updatedAt'],
      defaultSortBy: [['id', 'DESC']],
      filterableColumns: {
        id: [FilterOperator.IN],
        pixel: [FilterOperator.ILIKE],
        accountName: [FilterOperator.ILIKE],
        createdAt: [FilterOperator.BTW],
      }
    });
  }

  findOne(id: number): Promise<FbAccount> {
    return this.fbAccountRepository.findOne({
      where: { id }
    });
  }

  update(id: number, updateFbAccountDto: UpdateFbAccountDto): Promise<UpdateResult> {
    return this.fbAccountRepository.update(id, updateFbAccountDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.fbAccountRepository.delete(id)
  }
}
