import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/coinnup-dev')
  ],
  controllers: [AuthController]
})
export class AppModule { }
