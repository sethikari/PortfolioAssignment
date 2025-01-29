/**
 * File: Contact.js
 * Student Name: John Pablo Berber
 * Student ID: 301337112
 * Date: 01/28/2025
 * Description: This component provides a contact form where users can send a message. 
 * It includes input fields for name, contact details, and a message section.
 */

import React, { useState } from 'react';

const Contact = () => {
    // State to store form input values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    // Function to handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        alert('Thank you for your message!');
        window.location.href = '/';
    };

    return (
        <div>
            {/* Header Section */}
            <h1>Contact Me</h1>
            <br/>

            {/* Contact Details */}
            <ul>
                <li>Phone: 437-332-4074</li>
                <li>Email: john.berber74@gmail.com</li>
            </ul>

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;