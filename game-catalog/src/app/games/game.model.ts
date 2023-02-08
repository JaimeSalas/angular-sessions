export interface GameModel {
  id: number | null;
  name: string;
  code: string;
  category: string;
  tags?: string[];
  release: string;
  price: number;
  description: string;
  rating: number;
  imageUrl: string;
}

// export interface Foo<T extends { id: number | string }> {
//   get(): T;
//   set<T>(value: T): void;
// }
