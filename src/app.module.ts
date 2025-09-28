import { AuthentificationModule } from './auth/authentification.module';
import { AuthentificationService } from './auth/authentification.service';
import { PublicationModule } from './publication/publication.module';
import { FilterModule } from './filter/filter.module';
import { FilterController } from './filter/filter.controller';
import { FilterService } from './filter/filter.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Admin } from 'typeorm';
import { Administrateur } from './entities/admin.entity';

@Module({
  imports: [
    AuthentificationModule,
    PublicationModule,
    FilterModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rafiki',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Administrateur]),
  ],
  controllers: [FilterController, AppController],
  providers: [AuthentificationService, FilterService, AppService],
})
export class AppModule {}
