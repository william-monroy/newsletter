import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCCKghq3rtazrYmI1UhbGmGCFYXL4GAjzk",
    authDomain: "newsletter-saitc.firebaseapp.com",
    databaseURL: "https://newsletter-saitc.firebaseio.com",
    projectId: "newsletter-saitc",
    storageBucket: "newsletter-saitc.appspot.com",
    messagingSenderId: "573165132379",
    appId: "1:573165132379:web:ec787050d448babbfebd7e",
    measurementId: "G-RFD2LGLGEZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;