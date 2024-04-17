import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    switch (name) {
      case ' username':
        error = value.length < 8 ? 'Username must be more than eight characters' : '';
        break;
      case 'password':
        const numCount = value.replace(/\D/g, '').length;
        error = numCount < 2 ? 'Password must have more than two numbers' : '';
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: error });
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    if (errors.username || errors.password) {
      console.log('Form has errors:', errors);
    } else {
      console.log('Login form submitted:', formData);
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <label>
            Username:&nbsp;&nbsp;
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </label>
          <label>
            Password:&nbsp;&nbsp;
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </label>
          <div className="button-container">
            <button
              type="button"
              onClick={handleLogin}
              className="login-button"
            >
              Login
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </Link>
          </div>
        </form><br></br><br></br>
       <div className="signup-link">
          <Link to="/signup">New to FoodTrap? Sign-up!</Link>
        </div> 
      </div>
    </div>
  );
};

export default Login;