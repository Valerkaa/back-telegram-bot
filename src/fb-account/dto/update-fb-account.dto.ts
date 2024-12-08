import { PartialType } from '@nestjs/mapped-types';
import { CreateFbAccountDto } from './create-fb-account.dto';

export class UpdateFbAccountDto extends PartialType(CreateFbAccountDto) {}
