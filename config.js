import firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5ZGHVGctgmxkCggvHziqJ0vDRg-gIo5Q",
  authDomain: "uniscope-2bc57.firebaseapp.com",
  projectId: "uniscope-2bc57",
  storageBucket: "uniscope-2bc57.appspot.com",
  messagingSenderId: "620539137688",
  appId: "1:620539137688:web:65ec5e89d1b674346f4aed"
};

let firebaseApp;

if (firebase.apps.length === 0) {
	firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
