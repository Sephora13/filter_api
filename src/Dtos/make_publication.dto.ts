import { IsString, IsDate } from 'class-validator';

export class MakePublicationDto {
    @IsString()
    author: string;
    
    @IsString()
    title: string;
    
    @IsString()
    content: string;
    
    @IsString()
    filepath: string;
    
    @IsDate()
    createdAt: Date;
    
}