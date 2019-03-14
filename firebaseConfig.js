import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDCEnCV3e7MSs7jWmJEGVr0G2TIbymi7TQ",
    authDomain: "party-queue-233823.firebaseapp.com",
    databaseURL: "https://party-queue-233823.firebaseio.com",
    projectId: "party-queue-233823",
    storageBucket: "party-queue-233823.appspot.com",
    messagingSenderId: "817117986837"
};
firebase.initializeApp(config);

  // firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const queuesCollection = db.collection('queues')


export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}