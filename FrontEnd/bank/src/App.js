import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AddTransaction from './components/AddTransaction';
import Navbar from './components/NavBar';
import BrakeDown from './components/BrakeDown';
function App() {
  const [balance, setBalance] = useState([500])
  const balanceColor = function (balance) {
    if(balance >= 500) {
      return "green"
    }
    else if(balance < 500) {
      return "red"
    }
    
  }
  return (

    <Router>
      <h1>Bank</h1>
      <Navbar />
      <h4 className={balanceColor(balance)}>Balance: {balance}</h4>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/addTransaction' element={<AddTransaction balanceFunction={setBalance} balance={balance}/>} />
        <Route path='/brakeDown' element={<BrakeDown />} />
      </Routes>
    </Router>


  );
}

export default App;
