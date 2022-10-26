import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBi1J9pSVgqTL8-BSq1RkREOuw8HwjYTUc",
  authDomain: "mymoney-ae7cf.firebaseapp.com",
  projectId: "mymoney-ae7cf",
  storageBucket: "mymoney-ae7cf.appspot.com",
  messagingSenderId: "625724485458",
  appId: "1:625724485458:web:6476af3af6fe4c908a148b",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
