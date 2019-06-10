import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    this.app = firebase.initializeApp(config);
    this.db = firebase.firestore(this.app);
  }

  // *** POST API ***

  post = uid => this.db.ref(`posts/${uid}`);

  posts = () => this.db.collection('posts');
}

export default Firebase;