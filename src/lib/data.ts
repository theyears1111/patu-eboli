export type Dish = { name: string; desc?: string; price: string; tag?: string };
export type Section = { title: string; items: Dish[] };

export const menu: Section[] = [
  {
    title: "Antipasti",
    items: [
      { name: "Tartare di manzo", desc: "Carne cruda tritata al coltello con gel di cipolla, sfoglie di formaggio di capra e gocce di balsamico", price: "15" },
      { name: "Piatto formaggi", desc: "Assaggi di formaggi con diverse provenienze e gradi di stagionatura, accompagnati su richiesta da confetture", price: "10" },
      { name: "Mezzo tagliere salumi", desc: "Assaggio di salumi e insaccati di zona", price: "10" },
      { name: "Mezzo tagliere salumi e formaggi", desc: "Assaggi di salumi e formaggi", price: "12" },
    ],
  },
  {
    title: "Primi",
    items: [
      { name: "Ziti alla genovese", desc: "Salsa a base di cipolle e carne di manzo su fonduta di provolone", price: "13", tag: "signature" },
      { name: "Bucatino san giuanniello", desc: "Con capperi, olive, alici e pomodori", price: "10" },
      { name: "Ziti alla genovese di mare", desc: "Con tonno rosso pinna gialla e fonduta di grana", price: "14" },
      { name: "Pasta e patate", desc: "Pasta mista mantecata con grana e parmigiano, fonduta di grana e chips di provolone", price: "11" },
    ],
  },
  {
    title: "Secondi",
    items: [
      { name: "Picanha", desc: "Rosolata nel burro, con purè di patate rosticciate e semi di senape; contorni di verdura e mix di salse", price: "16" },
      { name: "Tataki", desc: "Tataki di scottona demiglace al timo e verdure di accompagnamento", price: "16" },
      { name: "Brasato di manzo", desc: "Brasato di manzo locale e la sua demiglace, con verdure e salsine di accompagnamento", price: "16" },
    ],
  },
  {
    title: "Panini Terra",
    items: [
      { name: "Panino genovese", desc: "Con fonduta di provolone e salsa genovese", price: "10" },
      { name: "Panino emigrato", desc: "Mortadella favola con fonduta di provolone, tarallo sbriciolato, succo di verdello, rucola", price: "8" },
      { name: "Panino beniamino", desc: "Fiocco di crudo, ricotta fresca di bufala, rucola, confettura di fichi", price: "8" },
      { name: "Panino pezzentella", desc: "Salame semistagionato, patè di olive, ricotta fresca di bufala, pomodoro secco, rucola", price: "8" },
      { name: "Zucca ceci bello bello", desc: "Medaglione di ceci, fonduta di provolone, tarallo sbriciolato, zucca arrostita con cipolla ed odori", price: "8", tag: "veg" },
      { name: "Panino bolognese", desc: "Con ragù alla bolognese, fonduta di grana e cialda di parmigiano", price: "10" },
    ],
  },
  {
    title: "Panini di Mare",
    items: [
      { name: "Panino genovese di mare", desc: "Con tonno rosso pinna gialla e caprino spalmabile", price: "14" },
    ],
  },
  {
    title: "Contorni",
    items: [
      { name: "Scarola", price: "5" },
      { name: "Cime di rapa e patate", price: "5" },
      { name: "Cicoria", price: "6" },
      { name: "Patate fritte", price: "5" },
      { name: "Zucca", price: "5" },
      { name: "Verza", price: "5" },
    ],
  },
  {
    title: "Circa Autunno",
    items: [
      { name: "Tagliere salumi x2", desc: "Misto variabile di salumi e insaccati selezionati. Accompagna pane caldo prodotto in sede", price: "23", tag: "x2" },
      { name: "Tagliere salumi e formaggio x2", desc: "Con aggiunta di 2 o 3 tipologie di formaggi variabili in base alla disponibilità", price: "25", tag: "x2" },
      { name: "Tagliere verdure e formaggi", desc: "Assaggi di verdure di stagione, formaggi e su richiesta confetture", price: "12", tag: "veg" },
    ],
  },
  {
    title: "Dolci",
    items: [
      { name: "Tiramisù della casa", price: "5" },
    ],
  },
];

export const beers = [
  { name: "Wolf Tundra Tropical IPA", brewery: "Wolf", style: "IPA", abv: "5%", notes: "American IPA con note di frutta tropicale, corpo pieno e amaro meno deciso" },
  { name: "Monkey Forzuta", brewery: "Monkey", style: "Italian Triple", abv: "7,7%", notes: "Italian triple con malti locali, acqua pura umbra e luppolo incredibile" },
  { name: "Birra Salento Beggia", brewery: "Birra Salento", style: "Belgian Ale", abv: "7%", notes: "Belgian ale ambrata. Gusto morbido con note di biscotto e caramello" },
  { name: "Schneider Aventinus", brewery: "Schneider", style: "Weizen Bock", abv: "8,2%", notes: "Weizen bock scuro. Aroma fruttato con nota di banana. 50cl" },
  { name: "Blanche de Namur", brewery: "Brasserie du Bocq", style: "Blanche", abv: "4,5%", notes: "Profumo agrumato e speziato con coriandolo e curaçao" },
  { name: "1979 Abbaye de Rocs", brewery: "Abbaye de Rocs", style: "Belgian Strong Ale", abv: "9%", notes: "Aroma di caramello e cioccolato, gusto lussurioso con accenni di caffè" },
  { name: "Rye River Coastal IPA", brewery: "Rye River", style: "IPA", abv: "5,2%", notes: "Aroma di pompelmo rosa e limone, gusto luppolato" },
  { name: "Timmermans", brewery: "Timmermans", style: "Kriek", abv: "4%", notes: "Birra belga alla ciliegia. Fruttata e piacevole" },
  { name: "Barbar Bok", brewery: "Lefebvre", style: "Bok al miele", abv: "8,5%", notes: "Birra belga bruna al miele. Dolce e avvolgente" },
  { name: "Wicklow Wolf Mammoth IPA", brewery: "Wicklow Wolf", style: "IPA", abv: "6,2%", notes: "Note floreali, resinose e agrumate. Luppoli simcoe, chinook, cascade" },
  { name: "Corsendonk Rousse", brewery: "Corsendonk", style: "Belgian Strong Ale", abv: "8,1%", notes: "Note dolci di caramello e zucchero, leggermente amara" },
  { name: "Uiltje IPA (Bird of Prey)", brewery: "Uiltje", style: "IPA", abv: "7%", notes: "Note fruttate, speziate e di luppolo. Sentori di pino, pesca e mango" },
  { name: "Wicklow Wolf Red Ale", brewery: "Wicklow Wolf", style: "Red Ale", abv: "5%", notes: "Tostato, caramello, toffee, frutti rossi. Tocco legnoso e aromatico" },
];

export const drinks = {
  Spritz: [
    { name: "Spritz Aperol", desc: "Aperol, prosecco, soda", price: "5" },
    { name: "Spritz Campari", desc: "Campari, prosecco, soda", price: "5" },
    { name: "Apertass", desc: "Aperol, Tassoni", price: "5" },
    { name: "Spritz Hugo", desc: "Liquore ai fiori di sambuco, prosecco, soda", price: "5" },
    { name: "Spritz Lychees", desc: "Lychees, prosecco, soda", price: "5" },
    { name: "Spritz Midori", desc: "Midori, prosecco, soda", price: "5" },
    { name: "Spritz Amalfitano", desc: "Limoncello, prosecco, soda", price: "5" },
    { name: "Spritz Banana", desc: "Blue Curaçao, prosecco, soda", price: "5" },
    { name: "Spritz Passoa", desc: "Select, prosecco", price: "5" },
    { name: "Spritz Blue", desc: "Liquore ai fiori di sambuco, prosecco, soda", price: "5" },
  ],
  Cocktail: [
    { name: "Americano", desc: "Campari bitter, vermouth rosso, soda", price: "5" },
    { name: "Negroni", desc: "Bitter, vermouth rosso, gin", price: "5" },
    { name: "Negroni Sbagliato", desc: "Campari bitter, vermouth rosso, prosecco", price: "5" },
    { name: "Negroni Premium", desc: "", price: "8" },
    { name: "Negroski", desc: "Campari bitter, vermouth rosso, Sky Vodka", price: "5" },
    { name: "Conte Speziato", desc: "Campari bitter, vermouth rosso, ginger ale", price: "6" },
    { name: "Old Fashioned", desc: "Bourbon whisky, angostura, zolletta di zucchero", price: "6" },
  ],
  "Gin Premium": [
    { name: "Malfy (Italia)", desc: "", price: "8" },
    { name: "Nordes", desc: "", price: "8" },
    { name: "J.Rose", desc: "", price: "9" },
    { name: "Glendalough (Irish Gin)", desc: "", price: "8" },
    { name: "Hendrick's (Scozia)", desc: "", price: "9" },
    { name: "Fifty Pounds (Londra)", desc: "", price: "8" },
    { name: "Roku (Giappone)", desc: "", price: "9" },
    { name: "Etsu Ocean (Giappone)", desc: "", price: "9" },
    { name: "Cubical (Inghilterra)", desc: "", price: "9" },
    { name: "Bulldog (Inghilterra)", desc: "", price: "7" },
    { name: "Holy Water Gin", desc: "", price: "10" },
    { name: "Marconi 46 (Italia)", desc: "", price: "9" },
    { name: "Ondina (Italia)", desc: "", price: "9" },
    { name: "Acqueverdi Dry Gin delle Alpi", desc: "", price: "9" },
    { name: "Hendrick's Oasium (Scozia)", desc: "", price: "9" },
  ],
  Sour: [
    { name: "Whisky Sour", desc: "", price: "6" },
    { name: "Disaronno Sour", desc: "", price: "6" },
    { name: "Midori Sour", desc: "", price: "6" },
    { name: "Vodka Sour", desc: "", price: "6" },
    { name: "New York Sour", desc: "", price: "6" },
    { name: "Gin Sour", desc: "", price: "6" },
  ],
  "Long Drink": [
    { name: "Gin Tonic", desc: "Tanqueray gin, Schweppes tonica", price: "5" },
    { name: "Gin Lemon", desc: "Tanqueray gin, Schweppes lemon", price: "5" },
    { name: "Vodka Tonic", desc: "Sky Vodka, Schweppes tonica", price: "5" },
    { name: "Vodka Lemon", desc: "Sky Vodka, Schweppes lemon", price: "5" },
    { name: "Gin Fizz", desc: "Tanqueray gin, sciroppo di zucchero, limone fresco, soda", price: "6" },
    { name: "Long Island", desc: "Vodka, gin, rum bianco, triple sec, tequila, sciroppo, limone, cola", price: "6" },
    { name: "Japan Ice", desc: "Vodka, gin, rum bianco, Midori, sciroppo, limone, Schweppes lemon", price: "5" },
  ],
  "I Mule": [
    { name: "Moscow Mule", desc: "Sky Vodka, succo di limone fresco, ginger beer", price: "6" },
    { name: "London Mule", desc: "Tanqueray gin, succo di limone fresco, ginger beer", price: "6" },
    { name: "Jamaican Mule", desc: "Rum scuro, succo di limone fresco, ginger beer", price: "6" },
    { name: "Kentucky Mule", desc: "Whisky, succo di limone fresco, ginger beer", price: "6" },
  ],
};

export const wines = {
  "I Bianchi": [
    { name: "Lacryma Christi Vesù", winery: "", year: "DOC", price: "24" },
    { name: "Pecorino Secolo IX", winery: "Tenuta Secolo IX", year: "", price: "23" },
    { name: "Luigi Bianco", winery: "", year: "", price: "24" },
    { name: "Vigna Traverso Sauvignon", winery: "", year: "", price: "22" },
    { name: "Falanghina IGP", winery: "", year: "Campania", price: "23" },
    { name: "Traminer IGT", winery: "", year: "", price: "24" },
    { name: "Fonte Fiorita (Colline Pescaresi) IGT", winery: "Tenuta Secolo IX", year: "Abruzzo", price: "23" },
  ],
  "I Rossi": [
    { name: "Baruch", winery: "", year: "", price: "38" },
    { name: "Scepp Campi Taurasini", winery: "", year: "Campania", price: "22" },
    { name: "Taurasi Terre di Valter", winery: "", year: "DOCG", price: "28" },
    { name: "Perdigal", winery: "", year: "", price: "24" },
    { name: "Primitivo IGP Sguardo Fiero", winery: "", year: "Puglia", price: "22" },
    { name: "Orgiolo Lacrima di Morro d'Alba DOC", winery: "", year: "Marche", price: "25" },
    { name: "Happiness (Piceno Superiore DOC)", winery: "", year: "Marche", price: "25" },
    { name: "Côtes-du-Rhône DOP", winery: "", year: "Francia", price: "24" },
    { name: "Elimarò", winery: "", year: "", price: "25" },
  ],
  "I Rosati": [
    { name: "Pungirosa", winery: "", year: "", price: "22" },
    { name: "Luigi Rosato", winery: "", year: "", price: "24" },
    { name: "Vesù DOC", winery: "", year: "Campania", price: "24" },
    { name: "Lumare", winery: "", year: "", price: "23" },
  ],
  "Al Calice": [
    { name: "Calice rosato", price: "5" },
    { name: "Calice bianco", price: "5" },
    { name: "Calice rosso", price: "5" },
  ],
};

export const galleryImages = [
  "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
  "https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg",
  "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
  "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg",
  "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
  "https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg",
  "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
  "https://images.pexels.com/photos/2531186/pexels-photo-2531186.jpeg",
];

export const info = {
  name: "Patù — Pane & Tulipani",
  address: "Via Enrico Perito 38, 84025 Eboli (SA)",
  phone: "331 804 3454",
  phoneRaw: "+393318043454",
  thefork: "https://www.thefork.it/ristorante/patu-pane-tulipani-r810703",
  instagram: "https://www.instagram.com/patu_eboli/",
  facebook: "https://www.facebook.com/PatuEboli/",
  tripadvisor: "https://www.tripadvisor.it/Restaurant_Review-g1396311-d26828442-Reviews-Patu_Pane_Tulipani-Eboli_Province_of_Salerno_Campania.html",
  hours: [
    { day: "Lunedì", time: "18:00 — 01:00" },
    { day: "Martedì", time: "Chiuso" },
    { day: "Mercoledì", time: "Chiuso" },
    { day: "Giovedì", time: "18:00 — 01:00" },
    { day: "Venerdì", time: "18:00 — 01:00" },
    { day: "Sabato", time: "18:00 — 01:00" },
    { day: "Domenica", time: "18:00 — 01:00" },
  ],
};

export const allergens = [
  { n: 1, name: "Cereali contenenti glutine", desc: "Grano, segale, orzo, avena, farro, kamut" },
  { n: 2, name: "Crostacei", desc: "E prodotti a base di crostacei" },
  { n: 3, name: "Uova", desc: "E prodotti a base di uova" },
  { n: 4, name: "Pesce", desc: "E prodotti a base di pesce" },
  { n: 5, name: "Arachidi", desc: "E prodotti a base di arachidi" },
  { n: 6, name: "Soia", desc: "E prodotti a base di soia" },
  { n: 7, name: "Latte", desc: "E prodotti a base di latte (incluso lattosio)" },
  { n: 8, name: "Frutta a guscio", desc: "Mandorle, nocciole, noci, anacardi, pistacchi" },
  { n: 9, name: "Sedano", desc: "E prodotti a base di sedano" },
  { n: 10, name: "Senape", desc: "E prodotti a base di senape" },
  { n: 11, name: "Sesamo", desc: "Semi di sesamo e prodotti derivati" },
  { n: 12, name: "Anidride solforosa e solfiti", desc: "Concentrazioni superiori a 10 mg/kg o 10 mg/litro" },
  { n: 13, name: "Lupini", desc: "E prodotti a base di lupini" },
  { n: 14, name: "Molluschi", desc: "E prodotti a base di molluschi" },
];
