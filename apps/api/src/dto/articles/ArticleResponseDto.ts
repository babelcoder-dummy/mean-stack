import { Expose, Transform } from 'class-transformer';
import { ArticleItem } from '../../models/article';

export class ArticleResponseDto {
  @Expose()
  @Transform(({ value }) => value.toString())
  id: string;

  @Expose()
  slug: string;

  @Expose()
  title: string;

  @Expose()
  content: string;

  @Expose()
  image: string;

  constructor(article: ArticleItem) {
    Object.assign(this, article);
  }
}
