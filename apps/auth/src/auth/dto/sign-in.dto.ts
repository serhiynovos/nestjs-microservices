import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";
import { IsString, IsInt } from 'class-validator';

export class SignInDto {
  @ApiModelProperty()
  @IsString()
  readonly email: string;

  @ApiModelPropertyOptional()
  @IsInt()
  readonly password: number;
}