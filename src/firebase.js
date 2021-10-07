import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyALjNLV2Eld3p6LNt7CNJQ7avt91aq7bCk",
  authDomain: "react-authentication-d4fd3.firebaseapp.com",
  projectId: "react-authentication-d4fd3",
  storageBucket: "react-authentication-d4fd3.appspot.com",
  messagingSenderId: "938650315715",
  appId: "1:938650315715:web:92a269dff9b7e4fd912b76",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
