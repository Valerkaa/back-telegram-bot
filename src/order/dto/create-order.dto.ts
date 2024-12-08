import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateOrderDto {

    @IsNotEmpty()
    @IsNumber()
    productId: number;

    @IsOptional()
    @IsNumber()
    userEventId: number;

    @IsOptional()
    @IsString()
    customerLink: string;

    @IsOptional()
    @IsBoolean()
    inProcessed: boolean;

    @IsOptional()
    @IsString()
    status: string;

}
