import React from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// Create Contact component
const Contact = () => {
  return (
    <div className="contact-page">
    <div className="contact-container">
      <div className="contact-item" >
        <FontAwesomeIcon icon={faEnvelope} className="icon" style={{width:'60px'}} />
        <span className="contact-text">Email: FoodTrap@yahoo.com</span>
      </div><br></br>
      <div className="contact-item">
        <FontAwesomeIcon icon={faPhone} className="icon" style={{width:'60px'}} />
        <span className="contact-text">Phone: +1 234 567 890</span>
      </div>
    </div>
    </div>
  );
};

export default Contact;