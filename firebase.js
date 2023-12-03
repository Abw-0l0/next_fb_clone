import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBCBpYtVRorCavZi3vmR9ZNVFIEvM4YMOk",
    authDomain: "facebook-clone-994b0.firebaseapp.com",
    projectId: "facebook-clone-994b0",
    storageBucket: "facebook-clone-994b0.appspot.com",
    messagingSenderId: "116882354764",
    appId: "1:116882354764:web:bda3af1650d7bd5a013ae9"
  };


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage};