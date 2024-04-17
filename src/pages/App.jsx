import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AHome from '../components/AHome';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Aboutus from '../components/Aboutus'
import Contact from '../components/Contact';
import Menu from '../components/Menu';
import Userprofile from '../components/Userprofile';

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<AHome/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/user-profile" element={<Userprofile/>}/>

        
      </Routes>
  );
};

export default App;