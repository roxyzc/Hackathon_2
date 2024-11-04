import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsStrongPassword,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class RegisterDto {
  @IsString({ message: 'Username must be a string' })
  @MinLength(3, { message: 'Username must be at least 3 characters long' })
  @MaxLength(30, { message: 'Username must be at most 30 characters long' })
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

  @IsString({ message: 'Phone must be a string' })
  @MinLength(11, { message: 'Phone must be at least 11 digits long' })
  @MaxLength(13, { message: 'Phone must be at most 13 digits long' })
  @Matches(/^[0-9]+$/, { message: 'Phone must contain only numbers' })
  @IsNotEmpty({ message: 'Phone is required' })
  phone: string;

  @IsString({ message: 'Name must be a string' })
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'Name can only contain alphabet characters',
  })
  @MaxLength(255, { message: 'Name must be at most 255 characters long' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'Email is not valid' })
  @MaxLength(317, { message: 'Email must be at most 317 characters long' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(255, { message: 'Password must be at most 255 characters long' })
  @IsStrongPassword(
    {
      minNumbers: 1,
      minSymbols: 0,
      minLowercase: 0,
      minUppercase: 0,
    },
    {
      message: 'Password must contain at least one number',
    },
  )
  password: string;
}
