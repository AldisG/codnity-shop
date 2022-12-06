export type StoreItemType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};

export type CartItem = {
  id: number;
  title: string;
  amount: number;
  price: number;
};

export type StoreFilterTypes = 'category' | 'order' | 'priceRange';

export type InitialStoreCall = {
  data: StoreItemType[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isFetching: boolean;
};

export type FilterPayload = {
  payload: {
    type: StoreFilterTypes;
    value: string;
  };
};