import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminDto } from 'src/Dtos/admin.dto';
import { Administrateur } from 'src/entities/admin.entity';
import { Admin, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { SignInDto } from 'src/Dtos/signIn.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthentificationService {
    constructor(
        @InjectRepository(Administrateur) private readonly administrateurRepository: Repository<Administrateur>,
        private readonly jwtService: JwtService,
    ){}

    async createAdmin(administ: AdminDto){
        const {admin, login, password} = administ;
        try{
            if (!password) {
                throw new Error('Password is required');
            }
            const passwordHash = await this.passwordCrypt(password);
            const data= {admin, login, password:passwordHash};
            const newAdmin = this.administrateurRepository.create(data);
            const savedAdmin = await this.administrateurRepository.save(newAdmin);
        } catch(error){
            return {status: 'error', message: error.message}
        }

        return {status: 'success', message: 'Admin created successfully'}
    }

    //signin méthode 
     async signin(signInDto: SignInDto): Promise<{ access_token: string, message: string, User: any }> {
    const { login, password } = signInDto;

    // Recherche du login dans la base de données
    const user = await this.administrateurRepository.findOne({ where: { login } });

    if (!user) {
      throw new UnauthorizedException('Invalid login or password');
    }

    // Vérification du mot de passe
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new UnauthorizedException('Invalid login or password');
    }

    const payload = {
      sub: user.id,
      admin: user.admin,};
    
    // Générer le token d'accès
    const access_token = await this.jwtService.signAsync(payload);

    return {
      access_token,
      message: "Connexion réussie",
      User: {
        admin: user.admin,
      },
    };
  }

    //hasher le mots de passe
    async passwordCrypt(password: string) {
        const salt = await bcrypt.genSalt(10); // Génère un salt avec 10 tours
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }
}
