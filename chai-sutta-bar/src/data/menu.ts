import type { Category, MenuItem } from "../types/menu";

// SAMPLE MENU. Prices are demo values (INR). Replace with the café's real menu.
// Edit names, descriptions, prices and images (files live in /public/images).
const i = (id: number, name: string, category: Category, description: string, price: number, image: string, popular = false): MenuItem =>
  ({ id, name, category, description, price, image: image.includes(".") ? `/images/${image}` : `/images/${image}.svg`, vegetarian: true, popular });

export const categories: ("All" | Category)[] = ["All", "Chai", "Coffee", "Pizza", "Burgers", "Pasta", "Snacks", "Desserts", "Beverages"];

export const menu: MenuItem[] = [
  i(1, "Kulhad Chai", "Chai", "A warm and refreshing cup of chai served in a traditional kulhad.", 30, "kulhad-chai.png", true),
  i(2, "Masala Chai", "Chai", "Strong tea brewed with aromatic spices.", 25, "kulhad-chai.png", true),
  i(3, "Adrak Chai", "Chai", "Fresh ginger chai with a gentle kick.", 25, "kulhad-chai.png"),
  i(4, "Elaichi Chai", "Chai", "Fragrant cardamom chai, smooth and comforting.", 25, "kulhad-chai.png"),
  i(5, "Cold Coffee", "Coffee", "Chilled, creamy coffee blended smooth.", 90, "cold-coffee.png", true),
  i(6, "Cappuccino", "Coffee", "Espresso topped with velvety steamed milk foam.", 80, "coffee.png", true),
  i(7, "Café Latte", "Coffee", "Mellow espresso with plenty of steamed milk.", 85, "coffee.png"),
  i(8, "Espresso", "Coffee", "A short, bold shot for coffee purists.", 60, "coffee.png"),
  i(9, "Veg Pizza", "Pizza", "Fresh veggies and melty cheese on a crisp base.", 180, "pizza.png", true),
  i(10, "Cheese Pizza", "Pizza", "Classic and extra cheesy.", 170, "pizza.png"),
  i(11, "Paneer Pizza", "Pizza", "Spiced paneer chunks on a cheesy base.", 200, "pizza.png"),
  i(12, "Veg Burger", "Burgers", "Crispy veg patty with lettuce and house sauce.", 80, "burger.png", true),
  i(13, "Cheese Burger", "Burgers", "Our veg burger with a slice of melted cheese.", 100, "burger.png"),
  i(14, "White Sauce Pasta", "Pasta", "Creamy white sauce with herbs and veggies.", 140, "pasta.png", true),
  i(15, "Red Sauce Pasta", "Pasta", "Tangy tomato sauce with Italian herbs.", 130, "pasta.png"),
  i(16, "Sandwich", "Snacks", "Toasted, stuffed and grilled until golden.", 70, "sandwich.png", true),
  i(17, "Momos", "Snacks", "Steamed dumplings served with spicy chutney.", 80, "momos.png", true),
  i(18, "Maggi", "Snacks", "The all-time comfort noodles, masala style.", 50, "maggi.png", true),
  i(19, "Wraps", "Snacks", "Soft rolls stuffed with veggies and sauces.", 90, "wraps.png", true),
  i(20, "French Fries", "Snacks", "Golden, crispy and lightly salted.", 70, "burger.png"),
  i(21, "Brownie", "Desserts", "Fudgy chocolate brownie, rich and gooey.", 90, "dessert.png", true),
  i(22, "Chocolate Dessert", "Desserts", "A chocolatey treat to end your meal.", 100, "dessert.png"),
  i(23, "Mojito", "Beverages", "Cool mint and lime refresher.", 80, "cold-coffee.png"),
  i(24, "Shakes", "Beverages", "Thick, chilled milkshakes.", 100, "cold-coffee.png"),
  i(25, "Soft Drinks", "Beverages", "Chilled bottled soft drinks.", 40, "cold-coffee.png"),
];
