/* eslint-disable prettier/prettier */
import {
    IsEmail,
    IsNotEmpty,
    IsString,
} from 'class-validator';
  
  export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    password: string;
  }