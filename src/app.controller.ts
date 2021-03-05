import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { metaData } from '../metadata';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/status')
  getStatus() {
    const sha = process.env.SHA;
    return {
      myapplication: [
        {
          version: metaData.version,

          description: metaData.description,

          lastcommitsha: sha || 'No SHA found in ENV',
        },
      ],
    };
    // return sha || 'No SHA found in ENV';
  }
}
