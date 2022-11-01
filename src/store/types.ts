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
