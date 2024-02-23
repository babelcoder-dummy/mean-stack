import { Expose, Transform } from 'class-transformer';
import { DocumentType } from '@typegoose/typegoose';
import { ArticleSchema } from '../../models/article';

export class ArticleResponseDto {
  @Expose()
  @Transform(({ obj }) => obj._id.toString())
  id: string;

  @Expose()
  slug: string;

  @Expose()
  title: string;

  @Expose()
  content: string;

  @Expose()
  image: string;

  constructor(article: DocumentType<ArticleSchema>) {
    Object.assign(this, article.toJSON());
  }
}
