
import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './SendMoney.css';

const SendMoney = ({ customers, setCustomers, transactions, setTransactions }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const sender = customers.find((c) => c.id === parseInt(id));
  const [transferAmount, setTransferAmount] = useState('');
  const [recipientId, setRecipientId] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  if (!id || !sender) {
    return (
      <div className="send-money-container">
        <div className="send-money-content">
          <h1>Send Money</h1>
          <p>Invalid or missing customer ID. Please select a customer from the <Link to="/AllCustomers">All Customers</Link> page.</p>
        </div>
      </div>
    );
  }

  const handleTransfer = () => {
    const amountToTransfer = parseInt(transferAmount);
    const recipient = customers.find((c) => c.id === parseInt(recipientId));

    if (!amountToTransfer || amountToTransfer <= 0) {
      setError('Please enter a valid amount.');
      return;
    }

    if (amountToTransfer > sender.amount) {
      setError('Insufficient balance.');
      return;
    }

    if (!recipient) {
      setError('Please select a valid recipient.');
      return;
    }

    const updatedCustomers = customers.map((c) => {
      if (c.id === sender.id) {
        return {
          ...c,
          amount: c.amount - amountToTransfer,
        };
      } else if (c.id === recipient.id) {
        return {
          ...c,
          amount: c.amount + amountToTransfer,
        };
      } else {
        return c;
      }
    });

    const newTransaction = {
      id: transactions.length + 1,
      sender: sender.name,
      recipient: recipient.name,
      amount: amountToTransfer,
      date: new Date().toLocaleString(),
    };

    setCustomers(updatedCustomers);
    setTransactions([...transactions, newTransaction]);
    setSuccessMessage('Money sent successfully!');
    setTimeout(() => {
      setSuccessMessage('');
      navigate('/AllCustomers');
    }, 2000);

    setTransferAmount('');
    setRecipientId('');
  };

  return (
    <div className="send-money-container">
      <div className="send-money-content">
        <h1>Send Money</h1>
        <div className="customer-details">
          <p><strong>Name:</strong> {sender.name}</p>
          <p><strong>Account Number:</strong> {sender.accountNumber}</p>
          <p><strong>Current Amount:</strong> {sender.amount}</p>
        </div>
        <div className="input-group">
          <label htmlFor="transferAmount">Amount to Transfer:</label>
          <input
            type="number"
            id="transferAmount"
            placeholder="Enter amount to transfer"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="recipientId">Recipient:</label>
          <select
            id="recipientId"
            value={recipientId}
            onChange={(e) => setRecipientId(e.target.value)}
          >
            <option value="">Select recipient</option>
            {customers
              .filter((customer) => customer.id !== sender.id)
              .map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name} ({customer.accountNumber})
                </option>
              ))}
          </select>
        </div>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <button className="button" onClick={handleTransfer}>Send</button>
      </div>
    </div>
  );
};

export default SendMoney;
