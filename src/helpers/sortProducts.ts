import { Product } from "../types/Product";
import { SortBy } from "../types/SortBy";
import { SortDirection } from "../types/SortDirection";

const sortCase = (
  direction: SortDirection,
  first: number | string,
  second: number | string,
) => {
  const isNumbers = typeof first === 'number' && typeof second === 'number';
  const isStrings = typeof first === 'string' && typeof second === 'string';

  switch (direction) {
    case 'asc': {
      let result = 0;

      if (isNumbers) {
        result = first - second;
      }

      if (isStrings) {
        result = first.localeCompare(second);
      }

      return result;
    };

    case 'desc': {
      let result = 0;

      if (isNumbers) {
        result = second - first;
      }

      if (isStrings) {
        result = second.localeCompare(first);
      }

      return result;
    };

    default:
      return 0;
  }
};

export const sortProducts = (
  products: Product[],
  sortBy: SortBy,
  direction: SortDirection,
) => {
  return [...products].sort((first, second) => {
    switch (sortBy) {
      case SortBy.ID:
        return sortCase(direction, first.id, second.id);

      case SortBy.TITLE:
        return sortCase(direction, first.title, second.title);

      case SortBy.DESCRIPTION:
        return sortCase(direction, first.description, second.description);

      case SortBy.PRICE:
        return sortCase(direction, first.price, second.price);

      case SortBy.PHOTO:
        return sortCase(direction, first.thumbnail, second.thumbnail);

      case SortBy.RATING:
        return sortCase(direction, first.rating, second.rating);

      case SortBy.STOCK:
        return sortCase(direction, first.stock, second.stock);

      case SortBy.CATEGORY:
        return sortCase(direction, first.category, second.category);

      default:
        return 0;
    };
  });
};
