/* eslint-disable prettier/prettier */
import { Controller, Get ,UseGuards } from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
    @UseGuards(JwtGuard)
    @Get('me')
    getMe() {
       return 'return user info'
    }
}
