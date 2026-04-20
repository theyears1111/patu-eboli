export type DrinkCategory = 'spritz' | 'cocktail' | 'gin' | 'sour' | 'long' | 'mule';

export interface Drink {
  id: number;
  name: string;
  description: string;
  price: string;
  category: DrinkCategory;
  badge?: string;
  alcoholic: boolean;
}

export const drinkCategories: { id: DrinkCategory; label: string }[] = [
  { id: 'spritz', label: 'Spritz' },
  { id: 'cocktail', label: 'I Classici' },
  { id: 'gin', label: 'Gin Premium' },
  { id: 'sour', label: 'I Sour' },
  { id: 'long', label: 'Long Drink' },
  { id: 'mule', label: 'I Mule' },
];

export const drinks: Drink[] = [
  // SPRITZ
  { id: 1, name: 'Spritz Aperol', description: 'Aperol, prosecco, soda', price: '€5', category: 'spritz', alcoholic: true },
  { id: 2, name: 'Spritz Campari', description: 'Campari, prosecco, soda', price: '€5', category: 'spritz', alcoholic: true },
  { id: 3, name: 'Apertass', description: 'Aperol, Tassoni', price: '€5', category: 'spritz', alcoholic: true },
  { id: 4, name: 'Spritz Banana', description: 'Blue Curaçao, prosecco, soda', price: '€5', category: 'spritz', alcoholic: true },
  { id: 5, name: 'Spritz Blue', description: 'Liquore ai fiori di sambuco, prosecco, soda', price: '€5', category: 'spritz', alcoholic: true },
  { id: 6, name: 'Spritz Hugo', description: 'Liquore ai fiori di sambuco, prosecco, soda', price: '€5', category: 'spritz', alcoholic: true },
  { id: 7, name: 'Spritz Lychees', description: 'Lychees, prosecco, soda', price: '€5', category: 'spritz', alcoholic: true },
  { id: 8, name: 'Spritz Midori', description: 'Midori, prosecco, soda', price: '€5', category: 'spritz', alcoholic: true },
  { id: 9, name: 'Spritz Passoa', description: 'Select, prosecco', price: '€5', category: 'spritz', alcoholic: true },
  { id: 10, name: 'Spritz Amalfitano', description: 'Limoncello, prosecco, soda', price: '€5', category: 'spritz', alcoholic: true },
  // CLASSICI
  { id: 11, name: 'Americano', description: 'Campari bitter, vermouth rosso, soda', price: '€5', category: 'cocktail', alcoholic: true },
  { id: 12, name: 'Negroni', description: 'Bitter, vermouth rosso, gin', price: '€5', category: 'cocktail', alcoholic: true },
  { id: 13, name: 'Negroni Sbagliato', description: 'Campari bitter, vermouth rosso, prosecco', price: '€5', category: 'cocktail', alcoholic: true },
  { id: 14, name: 'Negroni Premium', description: '', price: '€8', category: 'cocktail', alcoholic: true, badge: 'Premium' },
  { id: 15, name: 'Negroski', description: 'Campari bitter, vermouth rosso, Sky Vodka', price: '€5', category: 'cocktail', alcoholic: true },
  { id: 16, name: 'Conte Speziato', description: 'Campari bitter, vermouth rosso, ginger ale', price: '€6', category: 'cocktail', alcoholic: true },
  { id: 17, name: 'Old Fashioned', description: 'Bourbon whisky, angostura, zolletta di zucchero', price: '€6', category: 'cocktail', alcoholic: true },
  // GIN
  { id: 18, name: 'Malfy (Italia)', description: '', price: '€8', category: 'gin', alcoholic: true },
  { id: 19, name: 'Nordes', description: '', price: '€8', category: 'gin', alcoholic: true },
  { id: 20, name: 'J.Rose', description: '', price: '€9', category: 'gin', alcoholic: true },
  { id: 21, name: 'Glendalough (Irish Gin)', description: '', price: '€8', category: 'gin', alcoholic: true },
  { id: 22, name: "Hendrick's (Scozia)", description: '', price: '€9', category: 'gin', alcoholic: true },
  { id: 23, name: 'Fifty Pounds (Londra)', description: '', price: '€8', category: 'gin', alcoholic: true },
  { id: 24, name: 'Roku (Giappone)', description: '', price: '€9', category: 'gin', alcoholic: true },
  { id: 25, name: 'Etsu Ocean (Giappone)', description: '', price: '€9', category: 'gin', alcoholic: true },
  { id: 26, name: 'Acqueverdi Dry Gin delle Alpi', description: '', price: '€9', category: 'gin', alcoholic: true },
  { id: 27, name: 'Cubical (Inghilterra)', description: '', price: '€9', category: 'gin', alcoholic: true },
  { id: 28, name: 'Bulldog (Inghilterra)', description: '', price: '€7', category: 'gin', alcoholic: true },
  { id: 29, name: "Hendrick's Oasium (Scozia)", description: '', price: '€9', category: 'gin', alcoholic: true },
  { id: 30, name: 'Holy Water Gin', description: '', price: '€10', category: 'gin', alcoholic: true },
  { id: 31, name: 'Marconi 46 (Italia)', description: '', price: '€9', category: 'gin', alcoholic: true },
  { id: 32, name: 'Ondina (Italia)', description: '', price: '€9', category: 'gin', alcoholic: true },
  // SOUR
  { id: 33, name: 'Whisky Sour', description: '', price: '€6', category: 'sour', alcoholic: true },
  { id: 34, name: 'Disaronno Sour', description: '', price: '€6', category: 'sour', alcoholic: true },
  { id: 35, name: 'Midori Sour', description: '', price: '€6', category: 'sour', alcoholic: true },
  { id: 36, name: 'Vodka Sour', description: '', price: '€6', category: 'sour', alcoholic: true },
  { id: 37, name: 'New York Sour', description: '', price: '€6', category: 'sour', alcoholic: true },
  { id: 38, name: 'Gin Sour', description: '', price: '€6', category: 'sour', alcoholic: true },
  // LONG DRINK
  { id: 39, name: 'Gin Tonic', description: 'Tanqueray gin, Schweppes tonica', price: '€5', category: 'long', alcoholic: true },
  { id: 40, name: 'Gin Lemon', description: 'Tanqueray gin, Schweppes lemon', price: '€5', category: 'long', alcoholic: true },
  { id: 41, name: 'Vodka Tonic', description: 'Sky Vodka, Schweppes tonica', price: '€5', category: 'long', alcoholic: true },
  { id: 42, name: 'Vodka Lemon', description: 'Sky Vodka, Schweppes lemon', price: '€5', category: 'long', alcoholic: true },
  { id: 43, name: 'Gin Fizz', description: 'Tanqueray gin, sciroppo di zucchero, succo di limone fresco, soda', price: '€6', category: 'long', alcoholic: true },
  { id: 44, name: 'Long Island', description: 'Vodka, gin, rum bianco, triple sec, tequila, sciroppo, limone, coca cola', price: '€6', category: 'long', alcoholic: true },
  { id: 45, name: 'Japan Ice', description: 'Vodka, gin, rum bianco, Midori, sciroppo, limone, Schweppes lemon', price: '€5', category: 'long', alcoholic: true },
  // MULE
  { id: 46, name: 'Moscow Mule', description: 'Sky Vodka, succo di limone fresco, ginger beer', price: '€6', category: 'mule', alcoholic: true },
  { id: 47, name: 'London Mule', description: 'Tanqueray gin, succo di limone fresco, ginger beer', price: '€6', category: 'mule', alcoholic: true },
  { id: 48, name: 'Jamaican Mule', description: 'Rum scuro, succo di limone fresco, ginger beer', price: '€6', category: 'mule', alcoholic: true },
  { id: 49, name: 'Kentucky Mule', description: 'Whisky, succo di limone fresco, ginger beer', price: '€6', category: 'mule', alcoholic: true },
];