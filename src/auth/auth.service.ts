/* eslint-disable prettier/prettier */
 
import { Injectable } from '@nestjs/common';
import { User ,Bookmark } from '@prisma/client';

@Injectable()
export class AuthService {
  signin() {
    return { msg: 'I have signed in' };
  }
  signup(){
    
    return { msg: 'I have signed up' };
  }

}