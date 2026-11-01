export type Category = "Chai" | "Coffee" | "Pizza" | "Burgers" | "Pasta" | "Snacks" | "Desserts" | "Beverages";

export interface MenuItem {
  id: number;
  name: string;
  category: Category;
  description: string;
  price: number; // SAMPLE price in INR
  image: string;
  vegetarian: boolean;
  popular: boolean;
}

export interface CartLine { item: MenuItem; qty: number; }
export interface DemoOrder { id: string; lines: CartLine[]; total: number; name: string; mode: string; }
