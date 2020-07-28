import firebase from 'firebase/app'
import 'firebase/firestore'


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCCfagPgnpUikewrzFhWVmzS2gI7Zu-bFU",
    authDomain: "chat-app-dff35.firebaseapp.com",
    databaseURL: "https://chat-app-dff35.firebaseio.com",
    projectId: "chat-app-dff35",
    storageBucket: "chat-app-dff35.appspot.com",
    messagingSenderId: "790269354438",
    appId: "1:790269354438:web:71d625a3ade352b6a0d2c7",
    measurementId: "G-8P86TLHY7H"
  };
  // Initialize Firebase
  const firebaseApp= firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()
  