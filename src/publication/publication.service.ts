import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { MakePublicationDto } from 'src/Dtos/make_publication.dto';
import { Publication } from 'src/entities/publication.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class PublicationService {
    constructor(
        @InjectRepository(Publication)
        private readonly publicationRepository: Repository<Publication>,
        private jwtService: JwtService
    ) {}
    async createPublication(publication:MakePublicationDto){
        const pub= this.publicationRepository.create(publication);
        const  savedPub= await this.publicationRepository.save(pub);

        return savedPub;
    }

}
