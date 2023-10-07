import './App.css';
import React from 'react'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from './components/Navbar';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkDR7-vfL7BP7_yIy727Sb7_yvkEHKTR0",
  authDomain: "producer-site.firebaseapp.com",
  projectId: "producer-site",
  storageBucket: "producer-site.appspot.com",
  messagingSenderId: "8960413335",
  appId: "1:8960413335:web:ece60625d2a55cdda463d2",
  measurementId: "G-E408YZH0CL"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init services
const auth = getAuth();

const App = () => {

  return (
      <div className="app">
        <Navbar auth={auth}/>
        <SignUp auth={auth}/>
        <Login auth={auth}/>
      </div>
  );
}

export default App;