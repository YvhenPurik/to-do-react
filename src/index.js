import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyDmvJNwFuSTmH1ApALJ9AQSoS537ImGzJo',
  authDomain: 'to-do-bf5e3.firebaseapp.com',
  databaseURL: 'https://to-do-bf5e3.firebaseio.com',
  projectId: 'to-do-bf5e3',
  storageBucket: 'to-do-bf5e3.appspot.com',
  messagingSenderId: '689970012566',
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
