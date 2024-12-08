import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { FbAccountService } from './fb-account.service';
import { CreateFbAccountDto } from './dto/create-fb-account.dto';
import { UpdateFbAccountDto } from './dto/update-fb-account.dto';
import {Paginate, PaginateQuery} from "nestjs-paginate";

@Controller('fb-account')
export class FbAccountController {
  constructor(private readonly fbAccountService: FbAccountService) {}

  @Post()
  create(@Body() createFbAccountDto: CreateFbAccountDto) {
    return this.fbAccountService.create(createFbAccountDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.fbAccountService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fbAccountService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFbAccountDto: UpdateFbAccountDto) {
    return this.fbAccountService.update(+id, updateFbAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fbAccountService.remove(+id);
  }
}
