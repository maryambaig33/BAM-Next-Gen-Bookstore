export interface Book {
  title: string;
  author: string;
  description: string;
  genre: string;
  rating: number;
  price: string;
  isBestSeller?: boolean;
  coverColor?: string; // Hex code suggested by AI
}

export enum QueryType {
  DISCOVERY = 'DISCOVERY',
  SEARCH = 'SEARCH',
  GIFT = 'GIFT'
}

export interface AIResponseState {
  loading: boolean;
  data: Book[] | null;
  error: string | null;
}
