import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDrNMjkbJIiXqGIF0UDAT-zw4xpLJvvkzs",
    authDomain: "wallet-e5c4b.firebaseapp.com",
    databaseURL: "https://wallet-e5c4b.firebaseio.com",
    projectId: "wallet-e5c4b",
    storageBucket: "wallet-e5c4b.appspot.com",
    messagingSenderId: "493097549151"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };