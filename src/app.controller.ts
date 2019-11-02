import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import querystring = require('querystring');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Redirect('https://wild-api.witpoc.com/api/', 302)
  getDocs() {
    return { url: 'https://wild-api.witpoc.com/api/' };
  }

}
