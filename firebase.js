// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA8he-fRu7E8wjEkVbdHvDYbR8hyViFXpE",
  authDomain: "next-docs.firebaseapp.com",
  projectId: "next-docs",
  storageBucket: "next-docs.appspot.com",
  messagingSenderId: "494233150054",
  appId: "1:494233150054:web:c713ae8258ad96e7f343a7",
  measurementId: "G-KNGNSE8NFD",
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export { db, firebase }
