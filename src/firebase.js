import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
    apiKey: "AIzaSyAJfMD1NikYs8u0QBIg6uv8pV3kCNo36vo",
    authDomain: "melasplan.firebaseapp.com",
    projectId: "melasplan",
    storageBucket: "melasplan.appspot.com",
    messagingSenderId: "754668588804",
    appId: "1:754668588804:web:f95c8bb5b8f93c61f4ca51",
    measurementId: "G-RDRQRD8VVM"
    }
);

const db = firebase.database()
const auth = firebase.auth()
const storage = firebase.storage()



export {db, auth, storage}

export default firebaseApp;