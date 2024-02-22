import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { ComponentType } from '@angular/cdk/portal';
import { DataTableCol } from '../../models';

@Component({
  selector: 'absence-management-data-table',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatBottomSheetModule,
  ],
  templateUrl: './data-table.component.html',
})
export class DataTableComponent<T extends { id: string }> implements OnInit {
  @Input({ required: true }) AddComponent!: ComponentType<unknown>;
  @Input({ required: true }) EditComponent!: ComponentType<unknown>;
  @Input({ required: true }) DetailsComponent!: ComponentType<unknown>;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) cols!: DataTableCol<T>[];
  @Input({ required: true }) rows!: T[];
  @Output() delete = new EventEmitter<string>();
  displayedColumns: string[] | undefined;

  ngOnInit() {
    this.displayedColumns = [...this.cols.map((col) => col.field), 'actions'];
  }

  private bottomSheet = inject(MatBottomSheet);

  openAddComponent() {
    this.bottomSheet.open(this.AddComponent);
  }

  openEditComponent(id: string) {
    this.bottomSheet.open(this.EditComponent, {
      data: { id },
    });
  }

  openDetailsComponent(id: string) {
    this.bottomSheet.open(this.DetailsComponent, {
      data: { id },
    });
  }

  deleteItem(id: string) {
    this.delete.emit(id);
  }
}
