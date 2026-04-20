export type MenuCategory = 'antipasti' | 'primi' | 'secondi' | 'panini-terra' | 'panini-mare' | 'contorni' | 'dolci' | 'circa-autunno';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  allergens?: string[];
  badge?: string;
}

export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: 'antipasti', label: 'Antipasti' },
  { id: 'primi', label: 'Primi' },
  { id: 'secondi', label: 'Secondi' },
  { id: 'panini-terra', label: 'Panini Terra' },
  { id: 'panini-mare', label: 'Panini di Mare' },
  { id: 'contorni', label: 'Contorni' },
  { id: 'dolci', label: 'Dolci' },
  { id: 'circa-autunno', label: 'Circa Autunno' },
];

export const menuItems: MenuItem[] = [
  // ANTIPASTI
  { id: 1, name: 'Tartare di manzo', description: 'Preparazione di carne cruda tritata al coltello con gel di cipolla, sfoglie di formaggio di capra e gocce di balsamico', price: '€15', category: 'antipasti', allergens: ['uova', 'latte'] },
  { id: 2, name: 'Piatto formaggi', description: 'Assaggi di formaggi con diverse provenienze e gradi di stagionatura, accompagnati su richiesta da confetture', price: '€10', category: 'antipasti', allergens: ['latte'] },
  { id: 3, name: 'Mezzo tagliere salumi', description: 'Assaggio di salumi e insaccati di zona', price: '€10', category: 'antipasti', allergens: [] },
  { id: 4, name: 'Mezzo tagliere salumi e formaggi', description: 'Assaggi di salumi e formaggi', price: '€12', category: 'antipasti', allergens: ['latte'] },
  // PRIMI
  { id: 5, name: 'Ziti alla genovese', description: "La genovese è una salsa a base di cipolle e carne di manzo — la nostra rivisitazione è un fiore all'occhiello su fonduta di provolone", price: '€13', category: 'primi', allergens: ['glutine', 'latte'], badge: 'Signature' },
  { id: 6, name: 'Bucatino san giuanniello', description: 'Con capperi, olive, alici e pomodori', price: '€10', category: 'primi', allergens: ['glutine', 'pesce'] },
  { id: 7, name: 'Ziti alla genovese di mare', description: 'Con tonno rosso pinna gialla e fonduta di grana', price: '€14', category: 'primi', allergens: ['glutine', 'pesce', 'latte'] },
  { id: 8, name: 'Pasta e patate', description: 'Pasta mista mantecata con grana e parmigiano, con fonduta di grana e chips di provolone', price: '€11', category: 'primi', allergens: ['glutine', 'latte'] },
  // SECONDI
  { id: 9, name: 'Picanha', description: 'Rosolata nel burro, con purè di patate rosticciate e semi di senape; contorni di verdura e mix di salse', price: '€16', category: 'secondi', allergens: ['latte', 'senape'] },
  { id: 10, name: 'Tataki', description: 'Tataki di scottona demiglace al timo e verdure di accompagnamento', price: '€16', category: 'secondi', allergens: [] },
  { id: 11, name: 'Brasato di manzo', description: 'Brasato di manzo locale e la sua demiglace, con verdure e salsine di accompagnamento', price: '€16', category: 'secondi', allergens: [] },
  // CONTORNI
  { id: 12, name: 'Scarola', description: '', price: '€5', category: 'contorni', allergens: [] },
  { id: 13, name: 'Cime di rapa e patate', description: '', price: '€5', category: 'contorni', allergens: [] },
  { id: 14, name: 'Cicoria', description: '', price: '€6', category: 'contorni', allergens: [] },
  { id: 15, name: 'Patate fritte', description: '', price: '€5', category: 'contorni', allergens: [] },
  { id: 16, name: 'Zucca', description: '', price: '€5', category: 'contorni', allergens: [] },
  { id: 17, name: 'Verza', description: '', price: '€5', category: 'contorni', allergens: [] },
  // PANINI TERRA
  { id: 18, name: 'Panino genovese', description: 'Con fonduta di provolone e salsa genovese', price: '€10', category: 'panini-terra', allergens: ['glutine', 'latte'] },
  { id: 19, name: 'Panino emigrato', description: 'Mortadella favola con fonduta di provolone, tarallo sbriciolato, succo di verdello, rucola', price: '€8', category: 'panini-terra', allergens: ['glutine', 'latte'] },
  { id: 20, name: 'Panino beniamino', description: 'Fiocco di crudo, ricotta fresca di bufala, rucola, confettura di fichi', price: '€8', category: 'panini-terra', allergens: ['glutine', 'latte'] },
  { id: 21, name: 'Panino pezzentella', description: "Salame semistagionato, patè di olive, ricotta fresca di bufala, pomodoro secco, rucola", price: '€8', category: 'panini-terra', allergens: ['glutine', 'latte'] },
  { id: 22, name: 'Zucca ceci bello bello', description: 'Medaglione di ceci, fonduta di provolone, tarallo sbriciolato, zucca arrostita con cipolla ed odori', price: '€8', category: 'panini-terra', allergens: ['glutine', 'latte'] },
  { id: 23, name: 'Panino bolognese', description: 'Con ragù alla bolognese, fonduta di grana e cialda di parmigiano', price: '€10', category: 'panini-terra', allergens: ['glutine', 'latte', 'uova'] },
  // PANINI MARE
  { id: 24, name: 'Panino genovese di mare', description: 'Con tonno rosso pinna gialla e caprino spalmabile', price: '€14', category: 'panini-mare', allergens: ['glutine', 'pesce', 'latte'] },
  // DOLCI
  { id: 25, name: "Tiramisù della casa", description: '', price: '€5', category: 'dolci', allergens: ['glutine', 'uova', 'latte'] },
  // CIRCA AUTUNNO
  { id: 26, name: 'Tagliere salumi x2', description: 'Misto variabile di salumi e insaccati selezionati. Accompagna il tagliere pane caldo prodotto in sede', price: '€23', category: 'circa-autunno', allergens: ['glutine'], badge: 'x2 persone' },
  { id: 27, name: 'Tagliere salumi e formaggio x2', description: "Con aggiunta di 2 o 3 tipologie di formaggi variabili in base alla disponibilità", price: '€25', category: 'circa-autunno', allergens: ['glutine', 'latte'], badge: 'x2 persone' },
  { id: 28, name: 'Tagliere verdure e formaggi', description: 'Assaggi di verdure di stagione, formaggi e su richiesta confetture', price: '€12', category: 'circa-autunno', allergens: ['latte'] },
];