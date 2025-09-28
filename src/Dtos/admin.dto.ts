import { IsString } from "class-validator";

export class AdminDto{
    admin?: string

    login?:string

    password:string
}