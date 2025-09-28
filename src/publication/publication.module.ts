import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Publication } from 'src/entities/publication.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Publication])
  ],
  controllers: [PublicationController],
  providers: [PublicationService],
})
export class PublicationModule {}
