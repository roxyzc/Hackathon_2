import {
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsEmail,
} from 'class-validator';

export class UpdateProfileDto {
  @IsOptional()
  @IsString({ message: 'Phone must be a string' })
  @MinLength(11, { message: 'Phone must be at least 11 digits long' })
  @MaxLength(13, { message: 'Phone must be at most 13 digits long' })
  @Matches(/^[0-9]+$/, { message: 'Phone must contain only numbers' })
  phone?: string;

  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'Name can only contain alphabet characters',
  })
  @MaxLength(255, { message: 'Name must be at most 255 characters long' })
  name?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email is not valid' })
  @MaxLength(317, { message: 'Email must be at most 317 characters long' })
  email?: string;

  @IsOptional()
  @IsString({ message: 'Location must be a string' })
  location?: string;
}
