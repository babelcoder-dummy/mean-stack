export interface DataTableRow {
  id: string;
}

export interface DataTableCol<T extends DataTableRow> {
  field: keyof T & string;
  title: string;
}
