import { Module, NestModule, MiddlewareConsumer, Middleware } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/coinnup-dev')
  ],
  controllers: [
    
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
