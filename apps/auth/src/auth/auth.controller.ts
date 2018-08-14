import { Controller, Post, Get, Body, Param, Query } from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";
import { SignInDto } from "./dto/sign-in.dto";
import { UserService } from "../shared/services/user.service";
import { EmailPipe } from "./pipes/email.pipe";
import { EmailToUserPipe } from "./pipes/email.to.user.pipe";

@ApiUseTags('auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(
    private readonly userService: UserService
  ) { }

  @ApiUseTags('user')
  @Get('me')
  getMe(@Query('name') name: string) {
    return `It's you ${name}`
  }

  @Get('email/:email')
  async getUserByEmail(
    @Param('email', EmailPipe, EmailToUserPipe)
    user: string
  ) {
    return user
  }

  @Post('sign-in')
  async signIn(
    @Body() signInDto: SignInDto
  ): Promise<SignInDto> {
    return signInDto
  }

  @Post('sign-up')
  async signUp() {

  }
}