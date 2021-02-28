import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCzIZIWKMK8Nfo3EsOZaU4hHYaN5ObuxA0',
  authDomain: 'photoinsta-78863.firebaseapp.com',
  projectId: 'photoinsta-78863',
  storageBucket: 'photoinsta-78863.appspot.com',
  messagingSenderId: '124270785176',
  appId: '1:124270785176:web:f58367bd04cd5bf0e656ed'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('firebase', firebase);

export { firebase, FieldValue };
