const firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyCWubACTuK3WGXhGKReCI5ecSkjt8h3v3E",
  authDomain: "polling-app-1099b.firebaseapp.com",
  databaseURL: "https://polling-app-1099b-default-rtdb.firebaseio.com",
  projectId: "polling-app-1099b",
  storageBucket: "polling-app-1099b.appspot.com",
  messagingSenderId: "877909811689",
  appId: "1:877909811689:web:83f1196d66e93b670f6b78"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;