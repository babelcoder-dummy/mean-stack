import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Article, CreateArticleForm, EditArticleForm } from './article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private http = inject(HttpClient);

  getArticleList() {
    return this.http.get<Article[]>('/articles');
  }

  getArticle(id: Article['id']) {
    return this.http.get<Article>(`/articles/${id}`);
  }

  createArticle(form: CreateArticleForm) {
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('content', form.content);
    formData.append('image', form.image);

    return this.http.post<Article>('/admin/articles', formData);
  }

  editArticle(id: Article['id'], form: EditArticleForm) {
    const formData = new FormData();
    if (form.title) formData.append('title', form.title);
    if (form.content) formData.append('content', form.content);
    if (form.image) formData.append('image', form.image);

    return this.http.patch<Article>(`/admin/articles/${id}`, formData);
  }

  deleteArticle(id: Article['id']) {
    return this.http.delete(`/admin/articles/${id}`);
  }
}
