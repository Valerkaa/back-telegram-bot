import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNumber()
    price: number;

    @IsString()
    @IsNotEmpty()
    size: string;

    @IsBoolean()
    @IsOptional()
    inStock?: boolean = true;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean = true;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsNotEmpty()
    subCategoryId: number;

    @IsArray()
    @IsNotEmpty()
    images: [];
}
