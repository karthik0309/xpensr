import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBtoSYJTOT0XtghGbmOJPovuWa4tczP2fo",
    authDomain: "xpensr-33cae.firebaseapp.com",
    projectId: "xpensr-33cae",
    storageBucket: "xpensr-33cae.appspot.com",
    messagingSenderId: "318783957716",
    appId: "1:318783957716:web:7c68da600059bc87e32941",
    measurementId: "G-MZFDPJCGBK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const authProvider = new firebase.auth.GoogleAuthProvider()


export {auth,authProvider}