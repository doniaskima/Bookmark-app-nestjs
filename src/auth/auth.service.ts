/* eslint-disable prettier/prettier */
 
import { Injectable } from '@nestjs/common';
import { User ,Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma:PrismaService){}
  signin() {
    return { msg: 'I have signed in' };
  }
  signup(){
    
    return { msg: 'I have signed up' };
  }

}