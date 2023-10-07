import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ auth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(cred => {
        console.log('user logged in:', cred.user);
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
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </div>
            <button className="login-button" type="submit">Log In</button>
        </form>
    </div>
    
  );
};

export default Login;