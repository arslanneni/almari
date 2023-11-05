import React from 'react';
import '../../public/styles/Login.css';

export default function Signup() {
  // Handle the signup button click
  const handleSignup = () => {
    // Replace this with your actual signup logic
    console.log('Signup button clicked');
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <button className="custom-button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
