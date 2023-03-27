import { useState } from 'react';
import { SortBy } from '../types/SortBy';
import { SortDirection } from '../types/SortDirection';

export const useSetSortParams = () => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NONE);
  const [direction, setDirection] = useState<SortDirection>();

  const setSortParams = (columnTitle: SortBy) => {
    if (sortBy !== columnTitle) {
      setDirection('asc');
      setSortBy(columnTitle);
    }
    
    if (sortBy === columnTitle && direction === 'asc') {
      setDirection('desc');
    }

    if (sortBy === columnTitle && direction === 'desc') {
      setSortBy(SortBy.NONE);
    }
  }

  return [sortBy, direction, setSortParams] as const;
};
