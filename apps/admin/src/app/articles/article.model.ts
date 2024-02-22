export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
}

export interface CreateArticleForm {
  title: string;
  content: string;
  image: File;
}

export type EditArticleForm = Partial<CreateArticleForm>;
