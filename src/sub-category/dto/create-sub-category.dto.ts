import {IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateSubCategoryDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    categoryId: number

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean
}
