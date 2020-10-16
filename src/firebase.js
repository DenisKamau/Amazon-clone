import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmePQsohNsIyjmZDzUPJ_2UZFC8xpRY8o",
  authDomain: "clone-32bd9.firebaseapp.com",
  databaseURL: "https://clone-32bd9.firebaseio.com",
  projectId: "clone-32bd9",
  storageBucket: "clone-32bd9.appspot.com",
  messagingSenderId: "718362812508",
  appId: "1:718362812508:web:027178b5d026b359564699",
  measurementId: "G-BDF7E03E86",
});

const auth = firebase.auth();

export { auth };
