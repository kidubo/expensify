import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";

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
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const database = firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, auth, firestore, database as default};
  
  

    // FIREBASE_API_KEY: AIzaSyBVwnOoSCb05LOx3n3ECdfg39T-ygFV4RQ
    // FIREBASE_AUTH_DOMAIN: expensify02-5ad15.firebaseapp.com
    // FIREBASE_DATABASE_URL: https://expensify02-5ad15-default-rtdb.firebaseio.com
    // FIREBASE_PROJECT_ID: expensify02-5ad15
    // FIREBASE_STORAGE_BUCKET: expensify02-5ad15.appspot.com
    // FIREBASE_MASSEGING_SENDER_ID: 333394882632


  

//child_added
//    database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

  //child_changed
  // database.ref('expenses').on('child_changed', (snapshot)=>{
  //   console.log(snapshot.key, snapshot.val())
  // })

  //child_removed
  // database.ref('expenses').on('child_removed', (snapshot)=>{
  //     console.log(snapshot.key, snapshot.val())
  // })

  // database.ref('expenses')
  // .on('value', (snapshot)=>{

  //     const expenses = [];

  //     snapshot.forEach((childSnapshot)=>{
  //        expenses.push({
  //          id:childSnapshot.key,
  //          ...childSnapshot.val()
  //        });
  //     });

  //     console.log(expenses)
  // })

  // database.ref('expenses')
  // .once('value')
  // .then((snapshot)=>{

  //     const expenses = [];

  //     snapshot.forEach((childSnapshot)=>{
  //        expenses.push({
  //          id:childSnapshot.key,
  //          ...childSnapshot.val()
  //        });
  //     });

  //     console.log(expenses)
  // });

  // database.ref('expenses')
  //         .once('value')
  //         .then((snapshot)=>{
  //           console.log(snapshot.val())
  //         })

//   database.ref('expenses').push({
//     description: "phone",
//     amount: 250,
//     note:"",
//     createdAt:0
//   })

//  database.ref('expenses').push({
//     description: "rent",
//     amount: 550,
//     note:"",
//     createdAt:0
//   })

//  database.ref('expenses').push({
//     description: "water",
//     amount: 50,
//     note:"",
//     createdAt:0
//   })

  // database.ref('notes').push({
  //   description:'Rent',
  //   amount:230,
  // })

    // database.ref('Work').set({
    //     job:'software developer',
    //     company:'Cocoa codes'

    // })

    // database.ref('location/city').set('Dar es salaam')
    // database.ref('location/country').set('Tanzania')

    // database.ref('atribute').set({
    //     height: '160cm',
    //     weight:  '70kg'
    // }).then(()=>{
    //     console.log('things worked correctly')
    // }).catch((e)=>{
    //     console.log('things didin/t work correctly', e)
    // })

    // database.ref('son')
    //     .remove(null)
    //     .then(()=>{
    //         console.log('done deleting')
    //     })
    //     .catch((e)=>{
    //         console.log('Error unable to delete')
    //     })

    // database.ref().update({
    //     name:'Kidubo'
    // }).then(()=>{
    //     console.log('updated')
    // }).catch((e)=>{
    //     console.log('error')
    // })

    // database.ref('location/city')
    //     .once('value')
    //     .then((snapshot)=>{
    //         const val = snapshot.val()
    //         console.log(val)
    //     })
    //     .catch((e)=>{
    //         console.log('Error cant view data', e)
    //     })

    // const onValueChange = database.ref().on('value', (snapshot)=>{
    //     console.log(snapshot.val())
    // })

    // setTimeout(()=>{
    //     database.ref('atribute/height').set('180cm')
    // },3000);

    // setTimeout(()=>{
    //     database.ref().off(onValueChange)
    // },7000);

    // setTimeout(()=>{
    //      database.ref('atribute/height').set('160cm')
    // },10500);

    // database.ref().on('value', (snapshot)=>{
    //     const val = snapshot.val();
    //     console.log(`${val.name} is a ${val.Work.job} at ${val.Work.company}`)
    // })

    