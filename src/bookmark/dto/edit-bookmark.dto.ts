/* eslint-disable prettier/prettier */
import {
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class EditBookmarkDto {
    @IsString()
    @IsOptional()
    title?: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsString()
    @IsOptional()
    link?: string;
  }