import { IsNotEmpty, IsString} from "class-validator";

export class CreateFbAccountDto {
    @IsNotEmpty()
    @IsString()
    pixel: string;

    @IsNotEmpty()
    @IsString()
    fbToken: string;

    @IsNotEmpty()
    @IsString()
    accountName: string;

    @IsNotEmpty()
    @IsString()
    eventName: string;
}
