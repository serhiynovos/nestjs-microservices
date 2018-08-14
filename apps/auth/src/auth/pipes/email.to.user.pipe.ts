import { PipeTransform, ArgumentMetadata, Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "../../shared/services/user.service";
import { User } from "../../shared/interfaces/user.interface";

@Injectable()
export class EmailToUserPipe implements PipeTransform {
  constructor(private readonly userService: UserService) { }

  async transform(email: string, metadata: ArgumentMetadata): Promise<User> {
    console.log('Get user by email', email);
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException('User with this email is not found')
    }

    return user;
  }
}