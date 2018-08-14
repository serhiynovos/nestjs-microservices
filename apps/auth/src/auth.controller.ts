import { Controller, Post } from "@nestjs/common";

@Controller('api/v1/auth')
export class AuthController {
  @Post('sign-in')
  async signIn() {

  }

  @Post('sign-up')
  async signUp() {

  }
}