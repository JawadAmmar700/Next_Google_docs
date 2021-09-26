// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC8bjrWpRPFJWDxlGgNcgShiURDJnhXALo",
  authDomain: "docs-16c42.firebaseapp.com",
  projectId: "docs-16c42",
  storageBucket: "docs-16c42.appspot.com",
  messagingSenderId: "905555126308",
  appId: "1:905555126308:web:0a8c9116c881c3372290b1",
  measurementId: "G-G92WV6JZTJ",
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export { db, firebase }
