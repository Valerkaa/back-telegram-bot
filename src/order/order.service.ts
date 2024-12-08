import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Order} from "./entities/order.entity";
import {Repository} from "typeorm";
import {FilterOperator, paginate, PaginateQuery} from "nestjs-paginate";

@Injectable()
export class OrderService {
  constructor(
      @InjectRepository(Order)
      private orderRepository: Repository<Order>,
  ) {}
  create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.save(createOrderDto);
  }

  findAll(query: PaginateQuery) {
    return paginate(query, this.orderRepository, {
      sortableColumns: ['id', 'createdAt', 'updatedAt'],
      defaultSortBy: [['id', 'DESC']],
      filterableColumns: {
        id: [FilterOperator.IN],
        "product.id": [FilterOperator.IN],
        "userEvent.id": [FilterOperator.IN],
        createdAt: [FilterOperator.BTW],
      },
      relations: {
        product: true,
        userEvent: true
      }
    });
  }

  findOne(id: number) {
    return this.orderRepository.findOne({
      where: { id },
      relations: {
        product: true,
        userEvent: true
      }
    })
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id, updateOrderDto)
  }

  remove(id: number) {
    return this.orderRepository.delete(id)
  }
}
