import React, { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Login = ({ auth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(cred => {
        console.log('user registered:', cred.user);
        setEmail('');
        setPassword('');
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
      <button className="login-button" type="submit">Sign Up</button>
      </form>
    </div>

  );
};

export default Login;