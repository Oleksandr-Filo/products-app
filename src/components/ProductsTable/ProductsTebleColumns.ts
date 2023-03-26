interface TableColumn {
  id: number;
  title: 'ID' | 'Title' | 'Description' | 'Price' | 'Photo' | 'Rating' | 'Stock' | 'Category';
}

export const tableColumns: TableColumn[] = [
  { id: 1, title: 'ID' },
  { id: 2, title: 'Title' },
  { id: 3, title: 'Description' },
  { id: 4, title: 'Price' },
  { id: 5, title: 'Photo' },
  { id: 6, title: 'Rating' },
  { id: 7, title: 'Stock' },
  { id: 8, title: 'Category' },
];
