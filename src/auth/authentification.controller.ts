import { Body, Controller, Post } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { AdminDto } from 'src/Dtos/admin.dto';


@Controller('auth')
export class AuthentificationController {
    constructor(
        private readonly authentificationService: AuthentificationService){}

    @Post('signUp')
        async createAdmin(@Body() adminDto: AdminDto){
            return this.authentificationService.createAdmin(adminDto);
    } 
    
    @Post('signIn')
    async signin(@Body() signInDto){
        return this.authentificationService.signin(signInDto);
    }
}
