import { Module } from "@nestjs/common";
import { AuthModule } from '../../auth/src/auth/auth.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/coinnup-dev'),
    AuthModule
  ]
})
export class AppModule { }