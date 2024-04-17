import React from 'react';
import '../styles/Aboutus.css';
import { Link } from 'react-router-dom';

const Aboutus = () => {
    return (
        <div className="aboutus-page">
            <div className="about-us-container">
                <h1>About Us</h1>
                <p>
                    Welcome to FoodTrap--the right place to travel around the world.
                    <br></br><br></br>
                    FoodTrap offers you varieties of dishes, from Indian to Chinese, Italian to Belgian, Thai to Japanese--you name it, we have it.
                    We also offer various kinds of desserts from all over the world--yes, the entire world in one place.
                    <br></br>
                   
                    <br></br><br></br>
                    Instead of booking an expensive flight trip, just visit FoodTrap: Everything and Everywhere!
                </p>
                {/* You can add more content or customize this paragraph as needed */}
            </div>

            {/* Footer */}
            <div className="aboutus-footer">
                <h2>Our Locations</h2>
                <ul>
                    <li>New York, USA</li>
                    <li>Paris, France</li>
                    <li>Tokyo, Japan</li>
                    <li>Coimbatore, India</li>
                    {/* Add more locations as needed */}
                </ul>
            </div>
        </div>
    );
};

export default Aboutus;