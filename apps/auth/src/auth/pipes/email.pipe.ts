import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";

@Injectable()
export class EmailPipe implements PipeTransform {
  async transform(email: string, metadata: ArgumentMetadata) {
    console.log('Validating email', email);
    if (!this.validateEmail(email)) {
      throw new BadRequestException('Please enter valid email address')
    }

    return email;
  }

  private validateEmail(email: string) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}