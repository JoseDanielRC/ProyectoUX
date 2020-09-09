import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";
import * as firebase from 'firebase';
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
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
