
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h1 className="head">Contact Us</h1>
        <p>We'd love to hear from you! Contact us through one of the methods below:</p>

        <div className="contact-methods">
          <div className="contact-method">
            <h3>Email</h3>
            <p>contact@sparksbank.com</p>
          </div>
          <div className="contact-method">
            <h3>Phone</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="contact-method">
            <h3>Address</h3>
            <p>123 Sparks Street, Hyderabad, India</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name" className="green-label">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="green-label">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="green-label">Message</label>
              <textarea id="message" name="message" placeholder="Enter your message" rows="6" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
