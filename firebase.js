import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBp1AWuXPJf7UD4aCPLS_a-cp9cTOjCu78",
    authDomain: "redragon-7f1ce.firebaseapp.com",
    projectId: "redragon-7f1ce",
    storageBucket: "redragon-7f1ce.appspot.com",
    messagingSenderId: "118436687896",
    appId: "1:118436687896:web:0e2c2e74fad01d698ed36d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };