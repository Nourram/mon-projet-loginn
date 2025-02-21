import React, { useState } from 'react';
import './Login.css';
import loginImage from './images/login-image.jpeg'; // Importez l'image

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gérer la soumission du formulaire ici
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to AutiLearn</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">User's name or Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              required
            />
          </div>
          <a href="#forgot-password" className="forgot-password">Forgot password?</a>
          <button type="submit" className="sign-in-btn">Sign in</button>
          <p className="create-account">New Member? <a href="#create-account">Create Account</a></p>
        </form>
      </div>
      <div className="image-container">
        <img src={loginImage} alt="Login" className="login-image" />
      </div>
    </div>
  );
};

export default LoginForm;