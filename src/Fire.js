import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBLYuebMGwIZVfNQ9uvcwyE_wsCckKVH1I",
  authDomain: "libraria-6e67a.firebaseapp.com",
  databaseURL: "https://libraria-6e67a-default-rtdb.firebaseio.com",
  projectId: "libraria-6e67a",
  storageBucket: "libraria-6e67a.appspot.com",
  messagingSenderId: "284994241520",
  appId: "1:284994241520:web:bbc7aef14a847f1c6e5335"
  
  };
  
 const fireDb= firebase.initializeApp(firebaseConfig)
 export default fireDb.database().ref();