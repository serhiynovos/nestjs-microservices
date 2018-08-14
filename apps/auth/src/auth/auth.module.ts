import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { SharedModule } from "../shared/shared.module";
import { EmailPipe } from "./pipes/email.pipe";
import { EmailToUserPipe } from "./pipes/email.to.user.pipe";

@Module({
  imports: [SharedModule],
  controllers: [AuthController],
  providers: [
    EmailPipe,
    EmailToUserPipe
  ]
})
export class AuthModule { }
