import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBASdsZAfPVZt__TnLUEYw0Brd8DG2mXuY",
    authDomain: "hakhant-1.firebaseapp.com",
    databaseURL: "https://hakhant-1.firebaseio.com",
    projectId: "hakhant-1",
    storageBucket: "hakhant-1.appspot.com",
    messagingSenderId: "47605379619",
    appId: "1:47605379619:web:cbe2ecfd31d2e6d5b83796",
    measurementId: "G-D4RJ5J4WF2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore,timestamp };
