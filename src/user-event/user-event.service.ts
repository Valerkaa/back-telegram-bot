import { Injectable } from '@nestjs/common';
import { CreateUserEventDto } from './dto/create-user-event.dto';
import { UpdateUserEventDto } from './dto/update-user-event.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEvent} from "./entities/user-event.entity";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {FilterOperator, paginate, Paginated, PaginateQuery} from "nestjs-paginate";

@Injectable()
export class UserEventService {
  constructor(
      @InjectRepository(UserEvent)
      private readonly userEventRepository: Repository<UserEvent>,
  ) {
  }
  create(createUserEventDto: CreateUserEventDto): Promise<UserEvent> {
    return this.userEventRepository.save(createUserEventDto);
  }

  findAll(query: PaginateQuery): Promise<Paginated<UserEvent>> {
    return paginate(query, this.userEventRepository, {
      sortableColumns: ['id', 'createdAt', 'updatedAt'],
      defaultSortBy: [['id', 'DESC']],
      filterableColumns: {
        id: [FilterOperator.IN],
        isActive: [FilterOperator.EQ],
        createdAt: [FilterOperator.BTW],
        pixel: [FilterOperator.ILIKE],
      },
    });
  }

  findOne(uniqueId: string): Promise<UserEvent> {
    return this.userEventRepository.findOne({
      where: { uniqueId }
    })
  }

  update(id: number, updateUserEventDto: UpdateUserEventDto): Promise<UpdateResult> {
    return this.userEventRepository.update(id, updateUserEventDto)
  }

  remove(id: number): Promise<DeleteResult> {
    return this.userEventRepository.delete(id)
  }
}
