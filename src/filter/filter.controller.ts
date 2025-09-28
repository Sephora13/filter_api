import { Controller, Get, Body } from '@nestjs/common';
import { FilterService } from './filter.service';

@Controller('filter')
export class FilterController {
    constructor(
    private readonly filterService:FilterService ,
  ) {}

  @Get('')
    async filter(@Body() FilterDto){
      return this.filterService.filter(FilterDto);
    }
}
