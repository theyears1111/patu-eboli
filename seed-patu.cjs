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
  // INFO & ORARI
  await setDoc(doc(db,'ristoranti',ID,'dati','info'), {
    nome: 'Patù',
    telefono: '331 804 3454',
    indirizzo: 'Via Enrico Perito, 38, 84025 Eboli (SA)',
    facebook: 'https://www.facebook.com/PatuEboli/',
    instagram: 'https://www.instagram.com/patu_eboli/',
    thefork: 'https://www.thefork.it/ristorante/patu-pane-tulipani-r810703',
    tripadvisor: 'https://www.tripadvisor.it/Restaurant_Review-g1396311-d26828442-Reviews-Patu_Pane_Tulipani-Eboli_Province_of_Salerno_Campania.html',
    maps_url: 'https://maps.google.com/?q=Patù+Pane+Tulipani+Eboli',
    orari: {
      lunedi: '18:00 - 01:00',
      martedi: 'Chiuso',
      mercoledi: 'Chiuso',
      giovedi: '18:00 - 01:00',
      venerdi: '18:00 - 01:00',
      sabato: '18:00 - 01:00',
      domenica: '18:00 - 01:00',
    }
  });
  console.log('✓ Info & Orari');

  // HOME
  await setDoc(doc(db,'ristoranti',ID,'dati','home'), {
    titolo: 'Pane fresco, tulipani e buona cucina',
    sottotitolo: 'Un angolo caldo nel cuore di Eboli. Bistrot autentico dove il pane è fatto ogni giorno e ogni piatto racconta il territorio.',
    storia: "Patù nasce dalla passione per il pane fatto a mano e per i sapori autentici del territorio campano. Ogni sera apriamo le nostre porte per accoglierti in un'atmosfera familiare e genuina nel nostro giardino."
  });
  console.log('✓ Home');

  // HERO IMMAGINI (vuote - il cliente le carica dall'admin)
  await setDoc(doc(db,'ristoranti',ID,'dati','hero_immagini'), {
    home: '', menu: '', birre: '', drink_list: '',
    vini: '', galleria: '', contatti: '', allergeni: ''
  });
  console.log('✓ Hero immagini');

  // BRAND
  await setDoc(doc(db,'ristoranti',ID,'dati','brand'), {
    logo_url: ''
  });
  console.log('✓ Brand');

  // ANTIPASTI
  await setDoc(doc(db,'ristoranti',ID,'dati','menu_antipasti'), { items: [
    { name:'Tartare di manzo', description:'Carne cruda tritata al coltello con gel di cipolla, sfoglie di formaggio di capra e gocce di balsamico', price:'€15', allergens:['uova','latte'] },
    { name:'Piatto formaggi', description:'Assaggi di formaggi con diverse provenienze e gradi di stagionatura, accompagnati su richiesta da confetture', price:'€10', allergens:['latte'] },
    { name:'Mezzo tagliere salumi', description:'Assaggio di salumi e insaccati di zona', price:'€10', allergens:[] },
    { name:'Mezzo tagliere salumi e formaggi', description:'Assaggi di salumi e formaggi', price:'€12', allergens:['latte'] },
  ]});
  console.log('✓ Antipasti');

  // PRIMI
  await setDoc(doc(db,'ristoranti',ID,'dati','menu_primi'), { items: [
    { name:'Ziti alla genovese', description:"Salsa a base di cipolle e carne di manzo su fonduta di provolone", price:'€13', allergens:['glutine','latte'], badge:'Signature' },
    { name:'Bucatino san giuanniello', description:'Con capperi, olive, alici e pomodori', price:'€10', allergens:['glutine','pesce'] },
    { name:'Ziti alla genovese di mare', description:'Con tonno rosso pinna gialla e fonduta di grana', price:'€14', allergens:['glutine','pesce','latte'] },
    { name:'Pasta e patate', description:'Pasta mista mantecata con grana e parmigiano, fonduta di grana e chips di provolone', price:'€11', allergens:['glutine','latte'] },
  ]});
  console.log('✓ Primi');

  // SECONDI
  await setDoc(doc(db,'ristoranti',ID,'dati','menu_secondi'), { items: [
    { name:'Picanha', description:'Rosolata nel burro, con purè di patate rosticciate e semi di senape', price:'€16', allergens:['latte','senape'] },
    { name:'Tataki', description:'Tataki di scottona demiglace al timo e verdure di accompagnamento', price:'€16', allergens:[] },
    { name:'Brasato di manzo', description:'Brasato di manzo locale e la sua demiglace, con verdure e salsine', price:'€16', allergens:[] },
  ]});
  console.log('✓ Secondi');

  // PANINI TERRA
  await setDoc(doc(db,'ristoranti',ID,'dati','menu_panini_terra'), { items: [
    { name:'Panino genovese', description:'Con fonduta di provolone e salsa genovese', price:'€10', allergens:['glutine','latte'] },
    { name:'Panino emigrato', description:'Mortadella favola con fonduta di provolone, tarallo sbriciolato, succo di verdello, rucola', price:'€8', allergens:['glutine','latte'] },
    { name:'Panino beniamino', description:'Fiocco di crudo, ricotta fresca di bufala, rucola, confettura di fichi', price:'€8', allergens:['glutine','latte'] },
    { name:'Panino pezzentella', description:"Salame semistagionato, patè di olive, ricotta fresca di bufala, pomodoro secco, rucola", price:'€8', allergens:['glutine','latte'] },
    { name:'Zucca ceci bello bello', description:'Medaglione di ceci, fonduta di provolone, tarallo sbriciolato, zucca arrostita', price:'€8', allergens:['glutine','latte'] },
    { name:'Panino bolognese', description:'Con ragù alla bolognese, fonduta di grana e cialda di parmigiano', price:'€10', allergens:['glutine','latte','uova'] },
  ]});
  console.log('✓ Panini Terra');

  // PANINI MARE
  await setDoc(doc(db,'ristoranti',ID,'dati','menu_panini_mare'), { items: [
    { name:'Panino genovese di mare', description:'Con tonno rosso pinna gialla e caprino spalmabile', price:'€14', allergens:['glutine','pesce','latte'] },
  ]});
  console.log('✓ Panini Mare');

  // CONTORNI
  await setDoc(doc(db,'ristoranti',ID,'dati','menu_contorni'), { items: [
    { name:'Scarola', description:'', price:'€5', allergens:[] },
    { name:'Cime di rapa e patate', description:'', price:'€5', allergens:[] },
    { name:'Cicoria', description:'', price:'€6', allergens:[] },
    { name:'Patate fritte', description:'', price:'€5', allergens:[] },
    { name:'Zucca', description:'', price:'€5', allergens:[] },
    { name:'Verza', description:'', price:'€5', allergens:[] },
  ]});
  console.log('✓ Contorni');

  // BIRRE
  await setDoc(doc(db,'ristoranti',ID,'dati','birre'), { items: [
    { name:'Wolf Tundra Tropical IPA', brewery:'Wolf', style:'IPA', abv:'5%', description:'American IPA con note di frutta tropicale, corpo pieno e amaro meno deciso.', price:'€5', origin:'Italia' },
    { name:'Monkey Forzuta', brewery:'Monkey', style:'Italian Triple', abv:'7,7%', description:'Italian triple con malti locali, acqua pura umbra e luppolo incredibile.', price:'€5', origin:'Italia' },
    { name:'Birra Salento Beggia', brewery:'Birra Salento', style:'Belgian Ale', abv:'7%', description:'Belgian ale ambrata. Gusto morbido con note di biscotto e caramello.', price:'€5', origin:'Italia' },
    { name:'Schneider Aventinus', brewery:'Schneider', style:'Weizen Bock', abv:'8,2%', description:'Weizen bock scuro. Aroma fruttato con nota di banana. 50cl.', price:'€5', origin:'Germania' },
    { name:'Blanche de Namur', brewery:'Brasserie du Bocq', style:'Blanche', abv:'4,5%', description:'Profumo agrumato e speziato con coriandolo e curaçao.', price:'€5', origin:'Belgio' },
    { name:'1979 Abbaye de Rocs', brewery:'Abbaye de Rocs', style:'Belgian Strong Ale', abv:'9%', description:'Aroma di caramello e cioccolato, gusto con accenni di caffè.', price:'€5', origin:'Belgio' },
    { name:'Rye River Coastal IPA', brewery:'Rye River', style:'IPA', abv:'5,2%', description:'Aroma di pompelmo rosa e limone, gusto luppolato.', price:'€5', origin:'Irlanda' },
    { name:'Timmermans', brewery:'Timmermans', style:'Kriek', abv:'4%', description:'Birra belga alla ciliegia. Fruttata e piacevole.', price:'€5', origin:'Belgio' },
    { name:'Barbar Bok', brewery:'Lefebvre', style:'Bok al miele', abv:'8,5%', description:'Birra belga bruna al miele.', price:'€5', origin:'Belgio' },
    { name:'Wicklow Wolf Mammoth IPA', brewery:'Wicklow Wolf', style:'IPA', abv:'6,2%', description:'Note floreali, resinose e agrumate. Luppoli simcoe, chinook, cascade.', price:'€5', origin:'Irlanda' },
    { name:'Corsendonk Rousse', brewery:'Corsendonk', style:'Belgian Strong Ale', abv:'8,1%', description:'Note dolci di caramello e zucchero, leggermente amara.', price:'€5', origin:'Belgio' },
    { name:'Uiltje IPA (Bird of Prey)', brewery:'Uiltje', style:'IPA', abv:'7%', description:'Note fruttate, speziate e di luppolo. Sentori di pino, pesca e mango.', price:'€5', origin:'Olanda' },
    { name:'Wicklow Wolf Red Ale', brewery:'Wicklow Wolf', style:'Red Ale', abv:'5%', description:'Tostato, caramello, toffee, frutti rossi. Tocco legnoso e aromatico.', price:'€5', origin:'Irlanda' },
  ]});
  console.log('✓ Birre');

  // VINI
  await setDoc(doc(db,'ristoranti',ID,'dati','vini'), {
    bianchi: [
      { name:'Lacryma Christi Vesù', producer:'', region:'Campania — DOC', price:'€24', description:'' },
      { name:'Pecorino Secolo IX', producer:'Tenuta Secolo IX', region:'', price:'€23', description:'' },
      { name:'Luigi Bianco', producer:'', region:'', price:'€24', description:'' },
      { name:'Vigna Traverso Sauvignon', producer:'', region:'', price:'€22', description:'' },
      { name:'Falanghina IGP', producer:'', region:'Campania', price:'€23', description:'' },
      { name:'Traminer IGT', producer:'', region:'', price:'€24', description:'' },
      { name:'Fonte Fiorita (Colline Pescaresi) IGT', producer:'Tenuta Secolo IX', region:'Abruzzo', price:'€23', description:'' },
    ],
    rossi: [
      { name:'Baruch', producer:'', region:'', price:'€38', description:'', badge:'Premium' },
      { name:'Scepp Campi Taurasini', producer:'', region:'Campania', price:'€22', description:'' },
      { name:'Taurasi Terre di Valter', producer:'', region:'Campania — DOCG', price:'€28', description:'' },
      { name:'Perdigal', producer:'', region:'', price:'€24', description:'' },
      { name:'Primitivo IGP Sguardo Fiero', producer:'', region:'Puglia', price:'€22', description:'' },
      { name:"Orgiolo Lacrima di Morro d'Alba DOC", producer:'', region:'Marche', price:'€25', description:'' },
      { name:'Happiness (Piceno Superiore DOC)', producer:'', region:'Marche', price:'€25', description:'' },
      { name:'Côtes-du-Rhône DOP', producer:'', region:'Francia', price:'€24', description:'' },
      { name:'Elimarò', producer:'', region:'', price:'€25', description:'' },
    ],
    rosati: [
      { name:'Pungirosa', producer:'', region:'', price:'€22', description:'' },
      { name:'Luigi Rosato', producer:'', region:'', price:'€24', description:'' },
      { name:'Vesù DOC', producer:'', region:'Campania', price:'€24', description:'' },
      { name:'Lumare', producer:'', region:'', price:'€23', description:'' },
    ],
    calice: [
      { name:'Calice rosato', producer:'', region:'', price:'€5', description:'' },
      { name:'Calice bianco', producer:'', region:'', price:'€5', description:'' },
      { name:'Calice rosso', producer:'', region:'', price:'€5', description:'' },
    ]
  });
  console.log('✓ Vini');

  // DRINKS
  await setDoc(doc(db,'ristoranti',ID,'dati','drinks'), { items: [
    { name:'Spritz Aperol', description:'Aperol, prosecco, soda', price:'€5', category:'spritz' },
    { name:'Spritz Campari', description:'Campari, prosecco, soda', price:'€5', category:'spritz' },
    { name:'Apertass', description:'Aperol, Tassoni', price:'€5', category:'spritz' },
    { name:'Spritz Hugo', description:'Liquore ai fiori di sambuco, prosecco, soda', price:'€5', category:'spritz' },
    { name:'Spritz Lychees', description:'Lychees, prosecco, soda', price:'€5', category:'spritz' },
    { name:'Spritz Midori', description:'Midori, prosecco, soda', price:'€5', category:'spritz' },
    { name:'Spritz Amalfitano', description:'Limoncello, prosecco, soda', price:'€5', category:'spritz' },
    { name:'Americano', description:'Campari bitter, vermouth rosso, soda', price:'€5', category:'cocktail' },
    { name:'Negroni', description:'Bitter, vermouth rosso, gin', price:'€5', category:'cocktail' },
    { name:'Negroni Sbagliato', description:'Campari bitter, vermouth rosso, prosecco', price:'€5', category:'cocktail' },
    { name:'Old Fashioned', description:'Bourbon whisky, angostura, zolletta di zucchero', price:'€6', category:'cocktail' },
    { name:'Malfy (Italia)', description:'', price:'€8', category:'gin' },
    { name:"Hendrick's (Scozia)", description:'', price:'€9', category:'gin' },
    { name:'Roku (Giappone)', description:'', price:'€9', category:'gin' },
    { name:'Holy Water Gin', description:'', price:'€10', category:'gin' },
    { name:'Whisky Sour', description:'', price:'€6', category:'sour' },
    { name:'Gin Sour', description:'', price:'€6', category:'sour' },
    { name:'Gin Tonic', description:'Tanqueray gin, Schweppes tonica', price:'€5', category:'long' },
    { name:'Moscow Mule', description:'Sky Vodka, succo di limone fresco, ginger beer', price:'€6', category:'mule' },
    { name:'London Mule', description:'Tanqueray gin, succo di limone fresco, ginger beer', price:'€6', category:'mule' },
  ]});
  console.log('✓ Drinks');

  // GALLERIA (vuota)
  await setDoc(doc(db,'ristoranti',ID,'dati','galleria'), { items: [] });
  console.log('✓ Galleria');

  // RECENSIONI
  await setDoc(doc(db,'ristoranti',ID,'dati','recensioni'), { items: [
    { nome:'Emanuela Aiace', testo:'Locale intimo con una bellissima atmosfera, il gestore simpatico e cordiale. Tagliere di verdure eccezionale. Un posto veramente bello.', stelle:5, data:'1 mese fa' },
    { nome:'Antonietta Capuano', testo:'Se cerchi un locale accogliente con food&beverage di qualità per una serata tranquilla: Patù è il locale che fa al caso tuo!', stelle:5, data:'2 mesi fa' },
    { nome:'Antonio Buggi', testo:'Abbiamo cenato nel loro giardino incantevole, atmosfera rilassante e romantica. Cibo squisito, piatti ben fatti con prodotti locali di qualità.', stelle:5, data:'9 mesi fa' },
    { nome:'Fiorella Roviello', testo:"Ogni volta che ceno da Patù è sempre una garanzia! Posto bellissimo e curato, staff cortese e professionale, cibo ottimo.", stelle:5, data:'2 anni fa' },
  ]});
  console.log('✓ Recensioni');

  console.log('\n✅ Seed Patù completato! Tutti i dati sono in Firebase.');
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });
