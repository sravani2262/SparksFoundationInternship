
import React from 'react';
import { Link } from 'react-router-dom';
import './AllCustomers.css';

const AllCustomers = ({ customers }) => {
  return (
    <div className="all-customers-container">

      <h1 className="page-title">All Customers</h1>
      <div className="customers-list">
        {customers.map((customer) => (
          <div className="customer" key={customer.id}>
            <div className="customer-header">
              <h3 className="customer-name">{customer.name}</h3>
              <p className="account-number">Account Number: {customer.accountNumber}</p>
            </div>
            <div className="customer-details">
              <p><strong className='amount'>Current Amount:</strong> ${customer.amount}</p>
            </div>
            <div className="transfer-button-container">
              <Link to={`/SendMoney/${customer.id}`} className="transfer-button">
                Transfer
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="back-link">
        Back
      </Link>
    </div>
  );
};

export default AllCustomers;
