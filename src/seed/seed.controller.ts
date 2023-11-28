import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import axios, { AxiosInstance } from 'axios';

@Controller('seed')
export class SeedController {

  private readonly axios: AxiosInstance = axios;

  constructor(private readonly seedService: SeedService) {} 

  @Get()
  async executeSeed() {
    // const { data } = await this.axios.get('https://pokeapi.co/api/v2/pokemon?limit=650')
    // return data;
    const resp = await this.seedService.executeSeed();
    return resp;
  }

}
