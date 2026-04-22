const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

const app = initializeApp({
  apiKey: "AIzaSyDe89pW8QGSLEZLI8DAFCieKIw63xZVmUc",
  authDomain: "siti-ristoranti.firebaseapp.com",
  projectId: "siti-ristoranti",
  storageBucket: "siti-ristoranti.firebasestorage.app",
  messagingSenderId: "1040982710454",
  appId: "1:1040982710454:web:258e9aab18e5e55d972e17"
});

const db = getFirestore(app);
const ID = 'patu';

async function seed() {

  // ── INFO & ORARI ────────────────────────────────────────────────────────────
  await setDoc(doc(db,'ristoranti',ID,'dati','info'), {
    nome: 'Patù — Pane & Tulipani',
    telefono: '331 804 3454',
    phoneRaw: '+393318043454',
    indirizzo: 'Via Enrico Perito, 38, 84025 Eboli (SA)',
    facebook: 'https://www.facebook.com/PatuEboli/',
    instagram: 'https://www.instagram.com/patu_eboli/',
    thefork: 'https://www.thefork.it/ristorante/patu-pane-tulipani-r810703',
    tripadvisor: 'https://www.tripadvisor.it/Restaurant_Review-g1396311-d26828442-Reviews-Patu_Pane_Tulipani-Eboli_Province_of_Salerno_Campania.html',
    maps_url: 'https://www.google.com/maps?q=Via+Enrico+Perito+38,+Eboli+SA&output=embed',
    orari: {
      lunedi:    '18:00 — 01:00',
      martedi:   'Chiuso',
      mercoledi: 'Chiuso',
      giovedi:   '18:00 — 01:00',
      venerdi:   '18:00 — 01:00',
      sabato:    '18:00 — 01:00',
      domenica:  '18:00 — 01:00',
    }
  });
  console.log('✓ Info & Orari');

  // ── HOME ────────────────────────────────────────────────────────────────────
  await setDoc(doc(db,'ristoranti',ID,'dati','home'), {
    titolo: 'Pane fresco, tulipani e buona cucina',
    sottotitolo: 'Cucina di stagione, panini gourmet, birre artigianali e un giardino che ti aspetta ogni sera.',
    storia: "Ogni mattina lo chef inizia dal pane: lievito madre, farine selezionate, 48 ore di pazienza. È la base di tutti i nostri panini e taglieri, e a volte diventa il piatto stesso — come la strazzata lucana con peperoni cruschi.",
    testo_cta: "Aperti dal giovedì alla domenica (più il lunedì) dalle 18 all'una. Il giardino ti aspetta.",
    nome_chef: 'lo chef',
    citazione_chef: 'Il pane è poesia che si mangia.',
    // Foto — vuote: il cliente le carica dall'admin
    foto_pane: '',
    foto_chef: '',
    foto_giardino: '',
    // Statistiche animate
    stat1_num: '181',
    stat1_label: 'recensioni Google',
    stat2_num: '13',
    stat2_label: 'birre artigianali',
    stat3_num: '46',
    stat3_label: 'valutazione media',
  });
  console.log('✓ Home');

  // ── MENU (struttura flat con categoria) ─────────────────────────────────────
  await setDoc(doc(db,'ristoranti',ID,'dati','menu'), { items: [
    // Antipasti
    { name:'Tartare di manzo', desc:'Carne cruda tritata al coltello con gel di cipolla, sfoglie di formaggio di capra e gocce di balsamico', price:'15', tag:'', foto:'', categoria:'Antipasti' },
    { name:'Piatto formaggi', desc:'Assaggi di formaggi con diverse provenienze e gradi di stagionatura, accompagnati su richiesta da confetture', price:'10', tag:'', foto:'', categoria:'Antipasti' },
    { name:'Mezzo tagliere salumi', desc:'Assaggio di salumi e insaccati di zona', price:'10', tag:'', foto:'', categoria:'Antipasti' },
    { name:'Mezzo tagliere salumi e formaggi', desc:'Assaggi di salumi e formaggi', price:'12', tag:'', foto:'', categoria:'Antipasti' },
    // Primi
    { name:'Ziti alla genovese', desc:'Salsa a base di cipolle e carne di manzo su fonduta di provolone', price:'13', tag:'signature', foto:'', categoria:'Primi' },
    { name:'Bucatino san giuanniello', desc:'Con capperi, olive, alici e pomodori', price:'10', tag:'', foto:'', categoria:'Primi' },
    { name:'Ziti alla genovese di mare', desc:'Con tonno rosso pinna gialla e fonduta di grana', price:'14', tag:'', foto:'', categoria:'Primi' },
    { name:'Pasta e patate', desc:'Pasta mista mantecata con grana e parmigiano, fonduta di grana e chips di provolone', price:'11', tag:'', foto:'', categoria:'Primi' },
    // Secondi
    { name:'Picanha', desc:'Rosolata nel burro, con purè di patate rosticciate e semi di senape; contorni di verdura e mix di salse', price:'16', tag:'', foto:'', categoria:'Secondi' },
    { name:'Tataki', desc:'Tataki di scottona demiglace al timo e verdure di accompagnamento', price:'16', tag:'', foto:'', categoria:'Secondi' },
    { name:'Brasato di manzo', desc:'Brasato di manzo locale e la sua demiglace, con verdure e salsine di accompagnamento', price:'16', tag:'', foto:'', categoria:'Secondi' },
    // Panini Terra
    { name:'Panino genovese', desc:'Con fonduta di provolone e salsa genovese', price:'10', tag:'', foto:'', categoria:'Panini Terra' },
    { name:'Panino emigrato', desc:'Mortadella favola con fonduta di provolone, tarallo sbriciolato, succo di verdello, rucola', price:'8', tag:'', foto:'', categoria:'Panini Terra' },
    { name:'Panino beniamino', desc:'Fiocco di crudo, ricotta fresca di bufala, rucola, confettura di fichi', price:'8', tag:'', foto:'', categoria:'Panini Terra' },
    { name:'Panino pezzentella', desc:"Salame semistagionato, patè di olive, ricotta fresca di bufala, pomodoro secco, rucola", price:'8', tag:'', foto:'', categoria:'Panini Terra' },
    { name:'Zucca ceci bello bello', desc:'Medaglione di ceci, fonduta di provolone, tarallo sbriciolato, zucca arrostita con cipolla ed odori', price:'8', tag:'veg', foto:'', categoria:'Panini Terra' },
    { name:'Panino bolognese', desc:'Con ragù alla bolognese, fonduta di grana e cialda di parmigiano', price:'10', tag:'', foto:'', categoria:'Panini Terra' },
    // Panini di Mare
    { name:'Panino genovese di mare', desc:'Con tonno rosso pinna gialla e caprino spalmabile', price:'14', tag:'', foto:'', categoria:'Panini di Mare' },
    // Contorni
    { name:'Scarola', desc:'', price:'5', tag:'', foto:'', categoria:'Contorni' },
    { name:'Cime di rapa e patate', desc:'', price:'5', tag:'', foto:'', categoria:'Contorni' },
    { name:'Cicoria', desc:'', price:'6', tag:'', foto:'', categoria:'Contorni' },
    { name:'Patate fritte', desc:'', price:'5', tag:'', foto:'', categoria:'Contorni' },
    { name:'Zucca', desc:'', price:'5', tag:'', foto:'', categoria:'Contorni' },
    { name:'Verza', desc:'', price:'5', tag:'', foto:'', categoria:'Contorni' },
    // Circa Autunno
    { name:'Tagliere salumi x2', desc:'Misto variabile di salumi e insaccati selezionati. Accompagna pane caldo prodotto in sede', price:'23', tag:'x2', foto:'', categoria:'Circa Autunno' },
    { name:'Tagliere salumi e formaggio x2', desc:"Con aggiunta di 2 o 3 tipologie di formaggi variabili in base alla disponibilità", price:'25', tag:'x2', foto:'', categoria:'Circa Autunno' },
    { name:'Tagliere verdure e formaggi', desc:'Assaggi di verdure di stagione, formaggi e su richiesta confetture', price:'12', tag:'veg', foto:'', categoria:'Circa Autunno' },
    // Dolci
    { name:"Tiramisù della casa", desc:'', price:'5', tag:'', foto:'', categoria:'Dolci' },
  ]});
  console.log('✓ Menu');

  // ── BIRRE ───────────────────────────────────────────────────────────────────
  await setDoc(doc(db,'ristoranti',ID,'dati','birre'), { items: [
    { name:'Wolf Tundra Tropical IPA', brewery:'Wolf', style:'IPA', abv:'5%', notes:'American IPA con note di frutta tropicale, corpo pieno e amaro meno deciso', price:'5' },
    { name:'Monkey Forzuta', brewery:'Monkey', style:'Italian Triple', abv:'7,7%', notes:'Italian triple con malti locali, acqua pura umbra e luppolo incredibile', price:'5' },
    { name:'Birra Salento Beggia', brewery:'Birra Salento', style:'Belgian Ale', abv:'7%', notes:'Belgian ale ambrata. Gusto morbido con note di biscotto e caramello', price:'5' },
    { name:'Schneider Aventinus', brewery:'Schneider', style:'Weizen Bock', abv:'8,2%', notes:'Weizen bock scuro. Aroma fruttato con nota di banana. 50cl', price:'5' },
    { name:'Blanche de Namur', brewery:'Brasserie du Bocq', style:'Blanche', abv:'4,5%', notes:'Profumo agrumato e speziato con coriandolo e curaçao', price:'5' },
    { name:'1979 Abbaye de Rocs', brewery:'Abbaye de Rocs', style:'Belgian Strong Ale', abv:'9%', notes:'Aroma di caramello e cioccolato, gusto lussurioso con accenni di caffè', price:'5' },
    { name:'Rye River Coastal IPA', brewery:'Rye River', style:'IPA', abv:'5,2%', notes:'Aroma di pompelmo rosa e limone, gusto luppolato', price:'5' },
    { name:'Timmermans', brewery:'Timmermans', style:'Kriek', abv:'4%', notes:'Birra belga alla ciliegia. Fruttata e piacevole', price:'5' },
    { name:'Barbar Bok', brewery:'Lefebvre', style:'Bok al miele', abv:'8,5%', notes:'Birra belga bruna al miele. Dolce e avvolgente', price:'5' },
    { name:'Wicklow Wolf Mammoth IPA', brewery:'Wicklow Wolf', style:'IPA', abv:'6,2%', notes:'Note floreali, resinose e agrumate. Luppoli simcoe, chinook, cascade', price:'5' },
    { name:'Corsendonk Rousse', brewery:'Corsendonk', style:'Belgian Strong Ale', abv:'8,1%', notes:'Note dolci di caramello e zucchero, leggermente amara', price:'5' },
    { name:'Uiltje IPA (Bird of Prey)', brewery:'Uiltje', style:'IPA', abv:'7%', notes:'Note fruttate, speziate e di luppolo. Sentori di pino, pesca e mango', price:'5' },
    { name:'Wicklow Wolf Red Ale', brewery:'Wicklow Wolf', style:'Red Ale', abv:'5%', notes:'Tostato, caramello, toffee, frutti rossi. Tocco legnoso e aromatico', price:'5' },
  ]});
  console.log('✓ Birre');

  // ── DRINK (flat con categoria) ───────────────────────────────────────────────
  await setDoc(doc(db,'ristoranti',ID,'dati','drink'), { items: [
    // Spritz
    { name:'Spritz Aperol', desc:'Aperol, prosecco, soda', price:'5', categoria:'Spritz' },
    { name:'Spritz Campari', desc:'Campari, prosecco, soda', price:'5', categoria:'Spritz' },
    { name:'Apertass', desc:'Aperol, Tassoni', price:'5', categoria:'Spritz' },
    { name:'Spritz Hugo', desc:'Liquore ai fiori di sambuco, prosecco, soda', price:'5', categoria:'Spritz' },
    { name:'Spritz Lychees', desc:'Lychees, prosecco, soda', price:'5', categoria:'Spritz' },
    { name:'Spritz Midori', desc:'Midori, prosecco, soda', price:'5', categoria:'Spritz' },
    { name:'Spritz Amalfitano', desc:'Limoncello, prosecco, soda', price:'5', categoria:'Spritz' },
    { name:'Spritz Banana', desc:'Blue Curaçao, prosecco, soda', price:'5', categoria:'Spritz' },
    { name:'Spritz Passoa', desc:'Select, prosecco', price:'5', categoria:'Spritz' },
    { name:'Spritz Blue', desc:'Liquore ai fiori di sambuco, prosecco, soda', price:'5', categoria:'Spritz' },
    // Cocktail
    { name:'Americano', desc:'Campari bitter, vermouth rosso, soda', price:'5', categoria:'Cocktail' },
    { name:'Negroni', desc:'Bitter, vermouth rosso, gin', price:'5', categoria:'Cocktail' },
    { name:'Negroni Sbagliato', desc:'Campari bitter, vermouth rosso, prosecco', price:'5', categoria:'Cocktail' },
    { name:'Negroni Premium', desc:'', price:'8', categoria:'Cocktail' },
    { name:'Negroski', desc:'Campari bitter, vermouth rosso, Sky Vodka', price:'5', categoria:'Cocktail' },
    { name:'Conte Speziato', desc:'Campari bitter, vermouth rosso, ginger ale', price:'6', categoria:'Cocktail' },
    { name:'Old Fashioned', desc:'Bourbon whisky, angostura, zolletta di zucchero', price:'6', categoria:'Cocktail' },
    // Gin Premium
    { name:'Malfy (Italia)', desc:'', price:'8', categoria:'Gin Premium' },
    { name:'Nordes', desc:'', price:'8', categoria:'Gin Premium' },
    { name:'J.Rose', desc:'', price:'9', categoria:'Gin Premium' },
    { name:"Glendalough (Irish Gin)", desc:'', price:'8', categoria:'Gin Premium' },
    { name:"Hendrick's (Scozia)", desc:'', price:'9', categoria:'Gin Premium' },
    { name:'Fifty Pounds (Londra)', desc:'', price:'8', categoria:'Gin Premium' },
    { name:'Roku (Giappone)', desc:'', price:'9', categoria:'Gin Premium' },
    { name:'Etsu Ocean (Giappone)', desc:'', price:'9', categoria:'Gin Premium' },
    { name:'Cubical (Inghilterra)', desc:'', price:'9', categoria:'Gin Premium' },
    { name:'Bulldog (Inghilterra)', desc:'', price:'7', categoria:'Gin Premium' },
    { name:'Holy Water Gin', desc:'', price:'10', categoria:'Gin Premium' },
    { name:'Marconi 46 (Italia)', desc:'', price:'9', categoria:'Gin Premium' },
    { name:'Ondina (Italia)', desc:'', price:'9', categoria:'Gin Premium' },
    { name:'Acqueverdi Dry Gin delle Alpi', desc:'', price:'9', categoria:'Gin Premium' },
    { name:"Hendrick's Oasium (Scozia)", desc:'', price:'9', categoria:'Gin Premium' },
    // Sour
    { name:'Whisky Sour', desc:'', price:'6', categoria:'Sour' },
    { name:'Disaronno Sour', desc:'', price:'6', categoria:'Sour' },
    { name:'Midori Sour', desc:'', price:'6', categoria:'Sour' },
    { name:'Vodka Sour', desc:'', price:'6', categoria:'Sour' },
    { name:'New York Sour', desc:'', price:'6', categoria:'Sour' },
    { name:'Gin Sour', desc:'', price:'6', categoria:'Sour' },
    // Long Drink
    { name:'Gin Tonic', desc:'Tanqueray gin, Schweppes tonica', price:'5', categoria:'Long Drink' },
    { name:'Gin Lemon', desc:'Tanqueray gin, Schweppes lemon', price:'5', categoria:'Long Drink' },
    { name:'Vodka Tonic', desc:'Sky Vodka, Schweppes tonica', price:'5', categoria:'Long Drink' },
    { name:'Vodka Lemon', desc:'Sky Vodka, Schweppes lemon', price:'5', categoria:'Long Drink' },
    { name:'Gin Fizz', desc:'Tanqueray gin, sciroppo di zucchero, limone fresco, soda', price:'6', categoria:'Long Drink' },
    { name:'Long Island', desc:'Vodka, gin, rum bianco, triple sec, tequila, sciroppo, limone, cola', price:'6', categoria:'Long Drink' },
    { name:'Japan Ice', desc:'Vodka, gin, rum bianco, Midori, sciroppo, limone, Schweppes lemon', price:'5', categoria:'Long Drink' },
    // I Mule
    { name:'Moscow Mule', desc:'Sky Vodka, succo di limone fresco, ginger beer', price:'6', categoria:'I Mule' },
    { name:'London Mule', desc:'Tanqueray gin, succo di limone fresco, ginger beer', price:'6', categoria:'I Mule' },
    { name:'Jamaican Mule', desc:'Rum scuro, succo di limone fresco, ginger beer', price:'6', categoria:'I Mule' },
    { name:'Kentucky Mule', desc:'Whisky, succo di limone fresco, ginger beer', price:'6', categoria:'I Mule' },
  ]});
  console.log('✓ Drink');

  // ── VINI (flat con categoria) ────────────────────────────────────────────────
  await setDoc(doc(db,'ristoranti',ID,'dati','vini'), { items: [
    // I Bianchi
    { name:'Lacryma Christi Vesù', winery:'', year:'Campania — DOC', price:'24', categoria:'I Bianchi' },
    { name:'Pecorino Secolo IX', winery:'Tenuta Secolo IX', year:'', price:'23', categoria:'I Bianchi' },
    { name:'Luigi Bianco', winery:'', year:'', price:'24', categoria:'I Bianchi' },
    { name:'Vigna Traverso Sauvignon', winery:'', year:'', price:'22', categoria:'I Bianchi' },
    { name:'Falanghina IGP', winery:'', year:'Campania', price:'23', categoria:'I Bianchi' },
    { name:'Traminer IGT', winery:'', year:'', price:'24', categoria:'I Bianchi' },
    { name:'Fonte Fiorita (Colline Pescaresi) IGT', winery:'Tenuta Secolo IX', year:'Abruzzo', price:'23', categoria:'I Bianchi' },
    // I Rossi
    { name:'Baruch', winery:'', year:'', price:'38', categoria:'I Rossi' },
    { name:'Scepp Campi Taurasini', winery:'', year:'Campania', price:'22', categoria:'I Rossi' },
    { name:'Taurasi Terre di Valter', winery:'', year:'Campania — DOCG', price:'28', categoria:'I Rossi' },
    { name:'Perdigal', winery:'', year:'', price:'24', categoria:'I Rossi' },
    { name:'Primitivo IGP Sguardo Fiero', winery:'', year:'Puglia', price:'22', categoria:'I Rossi' },
    { name:"Orgiolo Lacrima di Morro d'Alba DOC", winery:'', year:'Marche', price:'25', categoria:'I Rossi' },
    { name:'Happiness (Piceno Superiore DOC)', winery:'', year:'Marche', price:'25', categoria:'I Rossi' },
    { name:'Côtes-du-Rhône DOP', winery:'', year:'Francia', price:'24', categoria:'I Rossi' },
    { name:'Elimarò', winery:'', year:'', price:'25', categoria:'I Rossi' },
    // I Rosati
    { name:'Pungirosa', winery:'', year:'', price:'22', categoria:'I Rosati' },
    { name:'Luigi Rosato', winery:'', year:'', price:'24', categoria:'I Rosati' },
    { name:'Vesù DOC', winery:'', year:'Campania', price:'24', categoria:'I Rosati' },
    { name:'Lumare', winery:'', year:'', price:'23', categoria:'I Rosati' },
    // Al Calice
    { name:'Calice rosato', winery:'', year:'', price:'5', categoria:'Al Calice' },
    { name:'Calice bianco', winery:'', year:'', price:'5', categoria:'Al Calice' },
    { name:'Calice rosso', winery:'', year:'', price:'5', categoria:'Al Calice' },
  ]});
  console.log('✓ Vini');

  // ── GALLERIA (vuota — il cliente carica dall'admin) ──────────────────────────
  await setDoc(doc(db,'ristoranti',ID,'dati','galleria'), { items: [] });
  console.log('✓ Galleria (vuota)');

  // ── RECENSIONI ───────────────────────────────────────────────────────────────
  await setDoc(doc(db,'ristoranti',ID,'dati','recensioni'), { items: [
    { nome:'Emanuela Aiace', testo:'Locale intimo con una bellissima atmosfera, il gestore simpatico e cordiale. Tagliere di verdure eccezionale. Un posto veramente bello.', stelle:5, data:'1 mese fa', fonte:'Google' },
    { nome:'Antonietta Capuano', testo:'Se cerchi un locale accogliente con food&beverage di qualità per una serata tranquilla: Patù è il locale che fa al caso tuo!', stelle:5, data:'2 mesi fa', fonte:'Google' },
    { nome:'Antonio Buggi', testo:'Abbiamo cenato nel loro giardino incantevole, atmosfera rilassante e romantica. Cibo squisito, piatti ben fatti con prodotti locali di qualità.', stelle:5, data:'9 mesi fa', fonte:'Google' },
    { nome:'Fiorella Roviello', testo:"Ogni volta che ceno da Patù è sempre una garanzia! Posto bellissimo e curato, staff cortese e professionale, cibo ottimo.", stelle:5, data:'2 anni fa', fonte:'Google' },
  ]});
  console.log('✓ Recensioni');

  console.log('\n✅ Seed Patù aggiornato! Tutti i dati sono in Firebase.');
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });
