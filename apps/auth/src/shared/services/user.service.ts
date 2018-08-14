import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../interfaces/user.interface";
import { Model } from 'mongoose';
import { SignInDto } from "../../auth/dto/sign-in.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async signIn(signInTdo: SignInDto) {
    return await this.userModel.findOne({
      phone: signInTdo.email
    });
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }
}