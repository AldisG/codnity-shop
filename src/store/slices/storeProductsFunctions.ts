import { WritableDraft } from 'immer/dist/internal';
import { categories } from '../../components/utility/options';
import { StoreItemType } from '../types';

export const determineCategory = (
  value: string,
  changeStoreState: (label: string) => void
) => {
  switch (value) {
    case categories[0].name:
      changeStoreState(categories[0].label);
      break;
    case categories[1].name:
      changeStoreState(categories[1].label);
      break;
    case categories[2].name:
      changeStoreState(categories[2].label);
      break;
    case categories[3].name:
      changeStoreState(categories[3].label);
      break;
    case categories[4].name:
      changeStoreState(categories[4].label);
      break;
    default:
      break;
  }
};

export const decideOrder = (type: string, a: WritableDraft<StoreItemType>, b: WritableDraft<StoreItemType>) => {
  if (type === 'date') {
    return a.id - b.id;
  } else if (type === 'price') {
    return a.price - b.price;
  } else {
    return a.rating.rate - b.rating.rate;
  }
};
