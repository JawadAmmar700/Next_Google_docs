// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBIqxC14nytj52dEENY9jkEho_Q9heteWE",
  authDomain: "docs-8a1a5.firebaseapp.com",
  projectId: "docs-8a1a5",
  storageBucket: "docs-8a1a5.appspot.com",
  messagingSenderId: "60186955549",
  appId: "1:60186955549:web:bd50de323b58b5df50dbf4",
  measurementId: "G-CNR7L3WL35",
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export { db, firebase }
