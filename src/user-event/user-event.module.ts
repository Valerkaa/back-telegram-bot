import { Module } from '@nestjs/common';
import { UserEventService } from './user-event.service';
import { UserEventController } from './user-event.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEvent} from "./entities/user-event.entity";

@Module({
  controllers: [UserEventController],
  providers: [UserEventService],
  imports: [TypeOrmModule.forFeature([UserEvent])],
  exports: [UserEventService],
})
export class UserEventModule {}
