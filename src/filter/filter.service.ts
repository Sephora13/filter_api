import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { FilterDto } from 'src/Dtos/filter_Dto.dto';

@Injectable()
export class FilterService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) {}
   
    async filter(filterDto: FilterDto) {
        const {value, hoobie, profession, language}= filterDto;

        //récuperation des utilisateurs dans la base de données
        const query= this.userRepository.createQueryBuilder('user');

        if(value){
            query.andWhere('user.firstname = :firstname OR user.lastname = :firstname', {firstname: value});
        }

        if(hoobie){
            query.andWhere('user.interests LIKE :hoobie', {hoobie: `%${hoobie}%`});
        }

        if(profession){
            query.andWhere('user.profession = :profession', {profession: profession});
        }

        if(language){
            query.andWhere('user.languages LIKE :language', {language: `%${language}%`});
        }

        return await query.getMany();
  }
}
