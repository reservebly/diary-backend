import { IsString, IsUUID, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsUUID()
  readonly userId: string;

  @IsString()
  readonly title: string;

  @IsDateString()
  readonly start: string;

  @IsDateString()
  readonly end: string;
}
