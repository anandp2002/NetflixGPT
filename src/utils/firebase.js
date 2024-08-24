// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-x0RReRMpX8Uua0knxzikc4nDZsi123E',
  authDomain: 'netflixgpt-e95c7.firebaseapp.com',
  projectId: 'netflixgpt-e95c7',
  storageBucket: 'netflixgpt-e95c7.appspot.com',
  messagingSenderId: '554036016254',
  appId: '1:554036016254:web:892b7450c74f386be6942f',
  measurementId: 'G-PSXFDCPCFE',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
