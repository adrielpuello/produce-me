import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ auth, handleLogin, setUser, setPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(cred => {
        console.log('user logged in:', cred.user);
        setEmail('');
        setPassword('');
        setUser({});
        setPage('landing page');
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit();
    handleLogin();
  }

  const toSignUp = () => {
    setPage('signup')
  }



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
            <button className="login-button" type="submit" onClick={handleClick}>Log In</button>
            <p>New to <strong>ProduceMe</strong>? Signup <button id='new-user' onClick={toSignUp}>here</button>.</p>
        </form>
    </div>
    
  );
};

export default Login;