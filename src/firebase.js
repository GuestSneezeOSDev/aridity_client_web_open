if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "FIREBASE_API_KEY",
  "appId": "FIREBASE_WEB_ID",
  "authDomain": "foobar.firebaseapp.com",
  "databaseURL": "https://foobar.firebasedatabase.app",
  "measurementId": "FIREBASE_MEASUREMENT_ID",
  "messagingSenderId": "FIREBASE_SENDER_ID",
  "projectId": "foobar",
  "storageBucket": "foobar.appspot.com"
});
