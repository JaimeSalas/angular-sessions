export interface Dish {
  image: string;
  thumb: string;
  title: string;
  price: number;
  description: string;
  ingredients: string[];
  category: Category;
  id: string;
  quantity?: number;
}

export enum Category {
  VEGAN = "Vegan dishes",
  PASTA = "Pasta dishes",
  MEET = "Meet dishes",
  ALL = "All Dishes",
}
