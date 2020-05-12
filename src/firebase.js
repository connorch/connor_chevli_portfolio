import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAXrgORbboC6c3NvHNzJt3yX4R5S7cEnWE",
  authDomain: "connorchevli-website.firebaseapp.com",
  databaseURL: "https://connorchevli-website.firebaseio.com",
  projectId: "connorchevli-website",
  storageBucket: "connorchevli-website.appspot.com",
  messagingSenderId: "615545953362",
  appId: "1:615545953362:web:79919fc6ef6f9aa193138b"
}

firebase.initializeApp(config);
export default firebase;