
import React from 'react';
import './Transactions.css';

const Transactions = ({ transactions }) => {
  return (
    <div className="transactions-container">
      <h1>Transaction History</h1>
      <div className="transactions-list">
        {transactions.map((transaction) => (
          <div className="transaction" key={transaction.id}>
            <p><strong>Sender:</strong> {transaction.sender}</p>
            <p><strong>Recipient:</strong> {transaction.recipient}</p>
            <p><strong>Amount:</strong> {transaction.amount}</p>
            <p><strong>Date:</strong> {transaction.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
