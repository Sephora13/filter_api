import { Controller, Get, Body, HttpStatus, HttpException } from '@nestjs/common';
import { FilterService } from './filter.service';

@Controller('filter')
export class FilterController {
    constructor(
    private readonly filterService:FilterService ,
  ) {}

  @Get('')
    async filter(@Body() FilterDto){
      const filtre=  await this.filterService.filter(FilterDto);
      try{
        return {
          status:HttpStatus.ACCEPTED,
          filtre
        }
      } catch(error){
        return{
          status: HttpException
        }
      }
      
    }
}
