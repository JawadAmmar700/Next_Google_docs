// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCL0Dyl4NXKuO6hSxTGxPmYfbS7TGJC5zQ',
  authDomain: 'docs-5ea60.firebaseapp.com',
  projectId: 'docs-5ea60',
  storageBucket: 'docs-5ea60.appspot.com',
  messagingSenderId: '1060506534855',
  appId: '1:1060506534855:web:3bbf0175695a6b1d3b0fe2',
  measurementId: 'G-8X6ELQ5QM2',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export { db, firebase }
