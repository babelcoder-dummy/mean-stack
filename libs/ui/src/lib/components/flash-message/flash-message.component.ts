import { Component, ViewEncapsulation, inject } from '@angular/core';

import { FlashMessageService } from '../../services';
import { tap } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'absence-management-flash-message',
  standalone: true,
  imports: [MatSnackBarModule],
  templateUrl: './flash-message.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class FlashMessageComponent {
  private snackBar = inject(MatSnackBar);
  private flashMessage$ = inject(FlashMessageService).flashMessage$.pipe(
    tap((flashMessage) => {
      if (!flashMessage) return this.snackBar.dismiss();

      this.snackBar.open(flashMessage.message, undefined, {
        duration: 3 * 1_000,
      });
    }),
  );

  constructor() {
    this.flashMessage$.pipe(takeUntilDestroyed()).subscribe();
  }
}
