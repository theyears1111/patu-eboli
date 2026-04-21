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

// La tua email master - ha accesso a TUTTI i siti
// Non serve inserirla qui perché è già hardcoded nel codice Admin.tsx
// Inserisci solo le email dei CLIENTI

async function seed() {
  await setDoc(doc(db, 'ristoranti', 'bollicine', 'admin', 'accesso'), {
    utenti: ['luigi@bollicine.it']
  });
  console.log('✓ Bollicine');

  await setDoc(doc(db, 'ristoranti', 'patu', 'admin', 'accesso'), {
    utenti: ['admin@patu.it']
  });
  console.log('✓ Patù');

  console.log('\n✅ Accessi configurati!');
  console.log('La tua email master (g.neymar96@gmail.com) ha accesso a tutti i siti automaticamente.');
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });
