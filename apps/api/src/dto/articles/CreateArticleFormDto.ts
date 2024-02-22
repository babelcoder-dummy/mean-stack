import { Expose } from 'class-transformer';
import { Length } from 'class-validator';

export class CreateArticleFormDto {
  @Expose()
  @Length(10, 255)
  title: string;

  @Expose()
  @Length(100)
  content: string;
}
