import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBWIbFBpqw5zbT0NTWA-wv3FbHLsyccO3A",
    authDomain: "aubrey-project-three.firebaseapp.com",
    projectId: "aubrey-project-three",
    storageBucket: "aubrey-project-three.appspot.com",
    messagingSenderId: "646382506237",
    appId: "1:646382506237:web:89c432c17bedf42a2eee94"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;