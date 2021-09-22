import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDCH5ZfHipK0Xkzayeph4s380n35DmdrXg',
  authDomain: 'music-40445.firebaseapp.com',
  projectId: 'music-40445',
  storageBucket: 'music-40445.appspot.com',
  messagingSenderId: '405869861512',
  appId: '1:405869861512:web:66011ce64e2db55e805d3d',
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.enablePersistence().catch((error) => console.log(`Firebase persistence error ${error.code}`));
const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');
const storage = firebase.storage();
const auth = firebase.auth();

export { auth, db, usersCollection, songsCollection, storage, commentsCollection };
