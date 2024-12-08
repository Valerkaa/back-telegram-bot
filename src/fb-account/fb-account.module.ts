import { Module } from '@nestjs/common';
import { FbAccountService } from './fb-account.service';
import { FbAccountController } from './fb-account.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {FbAccount} from "./entities/fb-account.entity";

@Module({
  controllers: [FbAccountController],
  imports: [TypeOrmModule.forFeature([FbAccount])],
  providers: [FbAccountService],
})
export class FbAccountModule {}
