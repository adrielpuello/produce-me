import React, { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Login = ({ auth, handleLogin, setUser, setPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(cred => {
        console.log('user registered:', cred.user);
        setEmail('');
        setPassword('');
        setUser({});
        setPage('landing page');
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
        </div>
        <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
        </div>
      <button className="login-button" type="submit" onClick={handleLogin}>Sign Up</button>
      </form>
    </div>

  );
};

export default Login;