import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DataTableCol,
  DataTableComponent,
  FlashMessageService,
} from '@absence-management/ui';
import { CreateArticleComponent } from '../create-article/create-article.component';
import { ArticleService } from '../../article.service';
import { Article } from '../../article.model';
import { ArticleDetailsComponent } from '../article-details/article-details.component';
import { EditArticleComponent } from '../edit-article/edit-article.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'absence-management-article-list',
  standalone: true,
  imports: [
    CommonModule,
    DataTableComponent,
    CreateArticleComponent,
    EditArticleComponent,
    ArticleDetailsComponent,
  ],
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent implements OnInit {
  private router = inject(Router);
  private articleService = inject(ArticleService);
  private flashMessageService = inject(FlashMessageService);

  articleList$ = this.articleService.getArticleList();
  columns: DataTableCol<Article>[] = [
    { field: 'id', title: 'ID' },
    { field: 'title', title: 'Title' },
  ];

  components = {
    add: CreateArticleComponent,
    edit: EditArticleComponent,
    details: ArticleDetailsComponent,
  };

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/articles') {
        this.articleList$ = this.articleService.getArticleList();
      }
    });
  }

  deleteArticle(id: string) {
    this.articleService.deleteArticle(id).subscribe(() => {
      this.flashMessageService.setFlashMessage({
        message: 'The article has already been deleted.',
      });
      this.articleList$ = this.articleService.getArticleList();
    });
  }
}
