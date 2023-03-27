import { SortBy } from "../../types/SortBy";

interface TableColumn {
  id: number;
  title: SortBy;
}

export const tableColumns: TableColumn[] = [
  { id: 1, title: SortBy.ID },
  { id: 2, title: SortBy.TITLE },
  { id: 3, title: SortBy.DESCRIPTION },
  { id: 4, title: SortBy.PRICE },
  { id: 5, title: SortBy.PHOTO },
  { id: 6, title: SortBy.RATING },
  { id: 7, title: SortBy.STOCK },
  { id: 8, title: SortBy.CATEGORY },
];
