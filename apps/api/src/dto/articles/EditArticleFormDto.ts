import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleFormDto } from './CreateArticleFormDto';

export class EditArticleFormDto extends PartialType(CreateArticleFormDto) {}
