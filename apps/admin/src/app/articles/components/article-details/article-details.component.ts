import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../article.service';
import { Observable } from 'rxjs';
import { Article } from '../../article.model';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'absence-management-article-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-details.component.html',
})
export class ArticleDetailsComponent implements OnInit {
  private articleService = inject(ArticleService);
  data: { id: string } = inject(MAT_BOTTOM_SHEET_DATA);
  article$: Observable<Article> | null = null;

  ngOnInit() {
    this.article$ = this.articleService.getArticle(this.data.id);
  }
}
