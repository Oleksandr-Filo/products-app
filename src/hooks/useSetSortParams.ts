import { useState } from 'react';

type SortDirection = undefined | 'asc' | 'desc';

export const useSetSortParams = () => {
  const [sortBy, setSortBy] = useState('');
  const [direction, setDirection] = useState<SortDirection>();

  const setSortParams = (columnTitle: string) => {
    if (sortBy !== columnTitle) {
      setDirection('asc');
      setSortBy(columnTitle);
    }
    
    if (sortBy === columnTitle && direction === 'asc') {
      setDirection('desc');
    }

    if (sortBy === columnTitle && direction === 'desc') {
      setSortBy('');
    }
  }

  return [sortBy, direction, setSortParams] as const;
};
