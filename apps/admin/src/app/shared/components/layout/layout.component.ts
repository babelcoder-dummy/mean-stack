import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FlashMessageComponent } from '@absence-management/ui';

@Component({
  selector: 'absence-management-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    FlashMessageComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
