import { MenunItems, Menus } from "../types";

export const startersItem: MenunItems[] = [
  {
    id: 1,
    name: "Paneer Tikka",
    price: 250,
    category: "Vegetariano",
  },
  {
    id: 2,
    name: "Chicken Tikka",
    price: 300,
    category: "No-Vegetariano",
  },
  {
    id: 3,
    name: "Tandoori Chicken",
    price: 350,
    category: "No-Vegetariano",
  },
  {
    id: 4,
    name: "Samosa",
    price: 100,
    category: "Vegetariano",
  },
  {
    id: 5,
    name: "Aloo Tikki",
    price: 120,
    category: "Vegetariano",
  },
  {
    id: 6,
    name: "Hara Bhara Kebab",
    price: 220,
    category: "Vegetariano",
  },
];

export const mainCourse: MenunItems[] = [
  {
    id: 1,
    name: "Butter Chicken",
    price: 400,
    category: "No-Vegetariano",
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 350,
    category: "Vegetariano",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    price: 450,
    category: "No-Vegetariano",
  },
  {
    id: 4,
    name: "Dal Makhani",
    price: 180,
    category: "Vegetariano",
  },
  {
    id: 5,
    name: "Kadai Paneer",
    price: 300,
    category: "Vegetariano",
  },
  {
    id: 6,
    name: "Rogan Josh",
    price: 500,
    category: "No-Vegetariano",
  },
];

export const beverages: MenunItems[] = [
  {
    id: 1,
    name: "Masala Chai",
    price: 50,
    category: "Hot",
  },
  {
    id: 2,
    name: "Lemon Soda",
    price: 80,
    category: "Cold",
  },
  {
    id: 3,
    name: "Mango Lassi",
    price: 120,
    category: "Cold",
  },
  {
    id: 4,
    name: "Cold Coffee",
    price: 150,
    category: "Cold",
  },
  {
    id: 5,
    name: "Fresh Lime Water",
    price: 60,
    category: "Cold",
  },
  {
    id: 6,
    name: "Iced Tea",
    price: 100,
    category: "Cold",
  },
];

export const soups: MenunItems[] = [
  {
    id: 1,
    name: "Tomato Soup",
    price: 120,
    category: "Vegetariano",
  },
  {
    id: 2,
    name: "Sweet Corn Soup",
    price: 130,
    category: "Vegetariano",
  },
  {
    id: 3,
    name: "Hot & Sour Soup",
    price: 140,
    category: "Vegetariano",
  },
  {
    id: 4,
    name: "Chicken Clear Soup",
    price: 160,
    category: "No-Vegetariano",
  },
  {
    id: 5,
    name: "Mushroom Soup",
    price: 150,
    category: "Vegetariano",
  },
  {
    id: 6,
    name: "Lemon Coriander Soup",
    price: 110,
    category: "Vegetariano",
  },
];

export const desserts: MenunItems[] = [
  {
    id: 1,
    name: "Gulab Jamun",
    price: 100,
    category: "Vegetariano",
  },
  {
    id: 2,
    name: "Kulfi",
    price: 150,
    category: "Vegetariano",
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    price: 250,
    category: "Vegetariano",
  },
  {
    id: 4,
    name: "Ras Malai",
    price: 180,
    category: "Vegetariano",
  },
];

export const pizzas: MenunItems[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 350,
    category: "Vegetariano",
  },
  {
    id: 2,
    name: "Veg Supreme Pizza",
    price: 400,
    category: "Vegetariano",
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    price: 450,
    category: "No-Vegetariano",
  },
];

export const alcoholicDrinks: MenunItems[] = [
  {
    id: 1,
    name: "Cerveza",
    price: 200,
    category: "Alcohol",
  },
  {
    id: 2,
    name: "Whiskey",
    price: 500,
    category: "Alcohol",
  },
  {
    id: 3,
    name: "Vodka",
    price: 450,
    category: "Alcohol",
  },
  {
    id: 4,
    name: "Ron",
    price: 350,
    category: "Alcohol",
  },
  {
    id: 5,
    name: "Tequila",
    price: 600,
    category: "Alcohol",
  },
  {
    id: 6,
    name: "Cocktail",
    price: 400,
    category: "Alcohol",
  },
];

export const salads: MenunItems[] = [
  {
    id: 1,
    name: "Caesar Salad",
    price: 200,
    category: "Vegetariano",
  },
  {
    id: 2,
    name: "Greek Salad",
    price: 250,
    category: "Vegetariano",
  },
  {
    id: 3,
    name: "Fruit Salad",
    price: 150,
    category: "Vegetariano",
  },
  {
    id: 4,
    name: "Chicken Salad",
    price: 300,
    category: "No-Vegetariano",
  },
  {
    id: 5,
    name: "Tuna Salad",
    price: 350,
    category: "No-Vegetariano",
  },
];

export const menus: Menus[] = [
  {
    id: 1,
    name: "Entrada",
    bgColor: "#b73e3e",
    icon: "🍲",
    items: startersItem,
  },
  {
    id: 2,
    name: "Plato principal",
    bgColor: "#5b45b0",
    icon: "🍛",
    items: mainCourse,
  },
  {
    id: 3,
    name: "Refrescos",
    bgColor: "#7f167f",
    icon: "🍹",
    items: beverages,
  },
  { id: 4, name: "Sopas", bgColor: "#735f32", icon: "🍜", items: soups },
  { id: 5, name: "Postres", bgColor: "#1d2569", icon: "🍰", items: desserts },
  { id: 6, name: "Pizzas", bgColor: "#285430", icon: "🍕", items: pizzas },
  {
    id: 7,
    name: "Bebidas alcohólicas",
    bgColor: "#b73e3e",
    icon: "🍺",
    items: alcoholicDrinks,
  },
  { id: 8, name: "Ensaladas", bgColor: "#5b45b0", icon: "🥗", items: salads },
];
