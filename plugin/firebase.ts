import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAts2FX-RKCCddeh5VbuSNanDPIaWFhfDA',
  authDomain: 'zani-5fb0d.firebaseapp.com',
  projectId: 'zani-5fb0d',
  storageBucket: 'zani-5fb0d.appspot.com',
  messagingSenderId: '787695977641',
  appId: '1:787695977641:web:47dbf28480c933a8d055b8',
  measurementId: 'G-1JV9910KCF'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
