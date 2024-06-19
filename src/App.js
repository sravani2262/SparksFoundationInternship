import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllCustomers from './components/AllCustomers';
import ContactUs from './components/ContactUs';
import SendMoney from './components/SendMoney';
import Transactions from './components/Transactions';
import './components/Navbar.css';

const initialCustomers = [
  { id: 1, name: 'Alice Smith', accountNumber: 'ACC001', amount: 5000 },
  { id: 2, name: 'Bob Johnson', accountNumber: 'ACC002', amount: 7000 },
  { id: 3, name: 'Charlie Brown', accountNumber: 'ACC003', amount: 3000 },
  { id: 4, name: 'David Lee', accountNumber: 'ACC004', amount: 10000 },
  { id: 5, name: 'Eve Wilson', accountNumber: 'ACC005', amount: 2500 },
  { id: 6, name: 'Frank Adams', accountNumber: 'ACC006', amount: 6000 },
  { id: 7, name: 'Grace Thomas', accountNumber: 'ACC007', amount: 4000 },
  { id: 8, name: 'Hannah Martin', accountNumber: 'ACC008', amount: 9000 },
  { id: 9, name: 'Ivy Hernandez', accountNumber: 'ACC009', amount: 3500 },
  { id: 10, name: 'Jack White', accountNumber: 'ACC010', amount: 8000 },
];

function App() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [transactions, setTransactions] = useState([]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AllCustomers" element={<AllCustomers customers={customers} />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/SendMoney/:id" element={<SendMoney customers={customers} setCustomers={setCustomers} transactions={transactions} setTransactions={setTransactions} />} />
          <Route path="/Transactions" element={<Transactions transactions={transactions} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
