import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(`/users/:idx`)
  getUsernameByIdx(@Param('idx') idx: number, @Res() res: Response) {
    try {
      console.log(idx);
      res.json(this.appService.getUsername(idx));
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}
