import { IsString, IsNumber } from "class-validator";

export class FilterDto {
    @IsString() 
    value:string;


    @IsString()
    hoobie: string;

    @IsString()
    profession: string;

    @IsString()
    language: string;
}