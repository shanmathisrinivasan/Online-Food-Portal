import React, { useState } from 'react';
import '../styles/Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear existing error for the field when the user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation conditions
    const usernameError = formData.username.length < 8 ? '8 characters req.' : '';
    const passwordError = !/\d/.test(formData.password) ? 'Password must contain a number' : '';
    const emailError = !formData.email.includes('@') ? 'Email must contain @' : '';
    const phoneNumberError = !/^\d{10}$/.test(formData.phoneNumber) ? 'Phone number must have 10 digits' : '';

    // Update errors state with validation results
    setErrors({
      username: usernameError,
      password: passwordError,
      email: emailError,
      phoneNumber: phoneNumberError,
    });

    // If any errors exist, prevent form submission
    if (usernameError || passwordError || emailError || phoneNumberError) {
      console.log('Form has errors:', errors);
    } else {
      // Add your signup logic here
      console.log('Signup form submitted:', formData);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <FontAwesomeIcon icon={faUser} />
            &nbsp; &nbsp; &nbsp;
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </label>
          <label>
            <FontAwesomeIcon icon={faLock} />
            &nbsp; &nbsp; &nbsp;
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </label>
          <label>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp; &nbsp; &nbsp;
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your e-mail"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            <FontAwesomeIcon icon={faPhone} />
            &nbsp; &nbsp; &nbsp;
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </label>
          <button style={{ marginLeft: 'auto', marginRight: 'auto' }} type="submit">Sign Up</button>

        </form>
      </div>
    </div>
  );
};

export default Signup;