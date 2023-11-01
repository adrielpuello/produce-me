import './App.css';
import React, { useState } from 'react'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Artists from './components/Artists';

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

  const [user, setUser] = useState({});
  const [page, setPage] = useState('landing page')

  const handleLogin = () => {
    setTimeout(() => {
      if (!user) {
        console.log(user)
        return;
      } else {
        setUser({});
        console.log(user);
      }
    }, 500);
    
  }

  return (
      <div className="app">
        <Navbar auth={auth} user={user} setUser={setUser} setPage={setPage}/>
        {page==='landing page' ? <LandingPage auth={auth} handleLogin={handleLogin} user={user} setUser={setUser} setPage={setPage}/> : <></>};
        {page==='signup' ? <SignUp auth={auth} handleLogin={handleLogin} setUser={setUser} setPage={setPage}/> : <></>}
        {page==='login' ? <Login auth={auth} handleLogin={handleLogin} setUser={setUser} setPage={setPage}/> : <></>}
        {page==='artists' ? <Artists /> : <></>}
      </div>
  );
}

export default App;