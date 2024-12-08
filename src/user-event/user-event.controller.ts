import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put} from '@nestjs/common';
import { UserEventService } from './user-event.service';
import { CreateUserEventDto } from './dto/create-user-event.dto';
import { UpdateUserEventDto } from './dto/update-user-event.dto';
import {Paginate, PaginateQuery} from "nestjs-paginate";
import {AdminGuard} from "../auth/auth.guard";

@Controller('user-event')
export class UserEventController {
  constructor(private readonly userEventService: UserEventService) {}

  @Post()
  @UseGuards(AdminGuard)
  create(@Body() createUserEventDto: CreateUserEventDto) {
    return this.userEventService.create(createUserEventDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.userEventService.findAll(query);
  }

  @Get(':uniqueId')
  findOne(@Param('uniqueId') uniqueId: string) {
    return this.userEventService.findOne(uniqueId);
  }

  @Put(':id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: number, @Body() updateUserEventDto: UpdateUserEventDto) {
    return this.userEventService.update(id, updateUserEventDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: number) {
    return this.userEventService.remove(id);
  }
}
