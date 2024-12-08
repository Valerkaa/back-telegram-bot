import {IsDate, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class CreateUserEventDto {
    @IsString()
    @IsNotEmpty()
    uniqueId: string;

    @IsString()
    @IsOptional()
    ipAddress?: string;

    @IsString()
    @IsOptional()
    userAgent?: string;

    @IsString()
    @IsOptional()
    fbclid?: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsString()
    @IsOptional()
    fbp?: string;

    @IsString()
    @IsOptional()
    eventTime?: string;

    @IsString()
    @IsOptional()
    city?: string;

    @IsString()
    @IsOptional()
    countryCode?: string;

    @IsString()
    @IsOptional()
    zipCode?: string;
}
