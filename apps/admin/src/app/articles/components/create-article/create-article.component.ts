import { Component, inject } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { ArticleService } from '../../article.service';
import { CreateArticleForm } from '../../article.model';
import { FlashMessageService } from '@absence-management/ui';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'absence-management-create-article',
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
  templateUrl: './create-article.component.html',
})
export class CreateArticleComponent {
  private fb = inject(FormBuilder);
  private articleService = inject(ArticleService);
  private flashMessage = inject(FlashMessageService);
  private router = inject(Router);
  private bottomSheetRef = inject(MatBottomSheetRef);

  form = this.fb.nonNullable.group({
    title: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(255),
      ],
    ],
    content: ['', [Validators.required, Validators.minLength(100)]],
    image: new FormControl<File | null>(null, [Validators.required]),
  });
  imagePreview = '/assets/images/no-image.png';

  changeImage(event: Event) {
    const files = (event.target as HTMLInputElement).files;

    if (!files?.length) return;

    const image = files[0];
    this.imagePreview = URL.createObjectURL(image);
    this.form.patchValue({ image });
  }

  createArticle() {
    const form = this.form.getRawValue();
    this.articleService
      .createArticle(form as CreateArticleForm)
      .subscribe(() => {
        this.flashMessage.setFlashMessage({
          message: 'The article has already been created.',
        });
        this.router.navigateByUrl('/articles');
        this.bottomSheetRef.dismiss();
      });
  }
}
