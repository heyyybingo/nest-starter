import { Body, Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import AppDTO from './dto/AppDTO';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'hello world' })
  @ApiResponse({ status: 200, description: 'hello world', type: AppDTO })
  getHello(@Body() app: AppDTO) {
    return app;
  }
}
