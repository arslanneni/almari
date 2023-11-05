import React from 'react';
import '../../public/styles/Login.css'

export default function Login() {
  // Handle the login button click
  const handleLogin = () => {
    // Replace this with your actual login logic
    console.log('Login button clicked');
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <button className="custom-button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
