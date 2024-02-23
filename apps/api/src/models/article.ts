import { modelOptions, prop } from '@typegoose/typegoose';
import { BaseSchema } from './base';

@modelOptions({ schemaOptions: { collection: 'articles' } })
export class ArticleSchema extends BaseSchema {
  @prop({ required: true, unique: true })
  slug: string;

  @prop({ required: true })
  title: string;

  @prop({ required: true })
  content: string;

  @prop({ required: true })
  image: string;
}
