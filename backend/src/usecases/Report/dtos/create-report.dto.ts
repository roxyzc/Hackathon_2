import { IsNotEmpty, IsString, MinLength, IsBoolean } from 'class-validator';

export class CreateReportDto {
  @IsString({ message: 'Description must be a string' })
  @MinLength(3, { message: 'Description must be at least 3 characters long' })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @IsString({ message: 'Location must be a string' })
  @IsNotEmpty({ message: 'Location is required' })
  location: string;

  @IsBoolean({ message: 'Anonim must be a boolean' })
  @IsNotEmpty({ message: 'Anonim is required' })
  anonim: boolean;
}
