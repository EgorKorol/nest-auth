import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class SignUpBodyDto {
  @ApiProperty({ example: 'test@test.ru' })
  @IsEmail()
  email: string

  @ApiProperty({ example: 'Test1234' })
  @IsNotEmpty()
  password: string
}

export class SignInBodyDto {
  @ApiProperty({ example: 'test@test.ru' })
  @IsEmail()
  email: string

  @ApiProperty({ example: 'Test1234' })
  @IsNotEmpty()
  password: string
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number

  @ApiProperty({ example: 'test@test.ru' })
  email: string

  @ApiProperty()
  iat: number

  @ApiProperty()
  exp: number
}
