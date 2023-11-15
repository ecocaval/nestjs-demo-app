import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateClientDto {

    @IsString()
    readonly name: string;
    
    @IsNumber()
    readonly age: number;

    @IsOptional()
    @IsString({each: true, always: false})
    readonly ocupations?: string[];
}