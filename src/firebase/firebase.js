import firebase from 'firebase/app';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVwnOoSCb05LOx3n3ECdfg39T-ygFV4RQ",
    authDomain: "expensify02-5ad15.firebaseapp.com",
    databaseURL: "https://expensify02-5ad15-default-rtdb.firebaseio.com",
    projectId: "expensify02-5ad15",
    storageBucket: "expensify02-5ad15.appspot.com",
    messagingSenderId: "333394882632",
    appId: "1:333394882632:web:9c11c004335a33755d687d",
    measurementId: "G-YZ3X8M1LCX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);;

    firebase.database().ref().set({
        name:'innocent leonard',
        son:'maximilian'
    })

    // export default firebase;
