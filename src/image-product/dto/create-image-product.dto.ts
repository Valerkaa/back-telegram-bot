import {Transform} from "class-transformer";
import {IsArray, IsNumber, IsOptional} from "class-validator";

export class CreateImageProductDto {
    @IsArray()
    @IsOptional()
    path: [];

    @Transform(({ value }) => Number(value))
    @IsNumber()
    productId: number;
}
