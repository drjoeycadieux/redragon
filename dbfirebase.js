import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBlHHzwj5tIE2KU9GthwQqBnNuGN-UygpI",
    authDomain: "redragondb.firebaseapp.com",
    projectId: "redragondb",
    storageBucket: "redragondb.appspot.com",
    messagingSenderId: "1091513636280",
    appId: "1:1091513636280:web:740d7b30ea521a9f4f6b4d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };