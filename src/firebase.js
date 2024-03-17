import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBSqn1I5NbCHB8UceLZNlxrxtK9ES-NSmQ",
    authDomain: "disneyplus-clone-85d91.firebaseapp.com",
    projectId: "disneyplus-clone-85d91",
    storageBucket: "disneyplus-clone-85d91.appspot.com",
    messagingSenderId: "890082263137",
    appId: "1:890082263137:web:7c451f9731a532663f2a20",
    measurementId: "G-56HCGP1FLR",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;