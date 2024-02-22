import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { ArticleService } from '../../article.service';
import { Article, EditArticleForm } from '../../article.model';
import { FlashMessageService, getImagePath } from '@absence-management/ui';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Observable } from 'rxjs';

@Component({
  selector: 'absence-management-edit-article',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    TitleCasePipe,
  ],
  templateUrl: './edit-article.component.html',
})
export class EditArticleComponent implements OnInit {
  private fb = inject(FormBuilder);
  private articleService = inject(ArticleService);
  private flashMessage = inject(FlashMessageService);
  private router = inject(Router);
  private bottomSheetRef = inject(MatBottomSheetRef);

  data: { id: string } = inject(MAT_BOTTOM_SHEET_DATA);
  article$: Observable<Article> | null = null;
  form: FormGroup | null = null;
  imagePreview = '/assets/images/no-image.png';

  ngOnInit() {
    this.articleService.getArticle(this.data.id).subscribe((article) => {
      this.imagePreview = getImagePath(article.image);
      this.form = this.fb.group({
        title: [
          article.title,
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(255),
          ],
        ],
        content: [
          article.content,
          [Validators.required, Validators.minLength(100)],
        ],
        image: new FormControl<File | null>(null),
      });
    });
  }

  changeImage(event: Event) {
    const files = (event.target as HTMLInputElement).files;

    if (!files?.length) return;

    const image = files[0];
    this.imagePreview = URL.createObjectURL(image);
    this.form?.patchValue({ image });
  }

  editArticle() {
    const form = this.form?.getRawValue();
    this.articleService
      .editArticle(this.data.id, form as EditArticleForm)
      .subscribe(() => {
        this.flashMessage.setFlashMessage({
          message: 'The article has already been updated.',
        });
        this.router.navigateByUrl('/articles');
        this.bottomSheetRef.dismiss();
      });
  }
}
