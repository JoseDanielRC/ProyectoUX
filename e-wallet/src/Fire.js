import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBxPpR8XFIMkMyGGyWS7vDWHXx222pzDw4",
    authDomain: "e-wallet-51d51.firebaseapp.com",
    databaseURL: "https://e-wallet-51d51.firebaseio.com",
    projectId: "e-wallet-51d51",
    storageBucket: "e-wallet-51d51.appspot.com",
    messagingSenderId: "1074583859206",
    appId: "1:1074583859206:web:fbc4c8b84aafb0ccfb1387",
    measurementId: "G-VG7SCQYRTZ"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
