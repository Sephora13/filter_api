import { JwtModule } from '@nestjs/jwt';
import { AuthentificationController } from './authentification.controller';
import { Module } from '@nestjs/common';
import { jwtConstants } from './authentification.constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrateur } from 'src/entities/admin.entity';
import { AuthentificationService } from './authentification.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Administrateur]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthentificationController],
  providers: [AuthentificationService],
})
export class AuthentificationModule {}
