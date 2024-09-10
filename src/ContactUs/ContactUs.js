import React, { useState } from 'react';
import NavBar from '../Navbar/Navbar';
import './ContactUs.css'; // Import custom CSS
import Footer from "../Footer/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; 

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save data to local storage
        const existingData = JSON.parse(localStorage.getItem('contactData')) || [];
        localStorage.setItem('contactData', JSON.stringify([...existingData, formData]));
        // Clear the form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-us-page">
            <NavBar />
            <div className="container mt-5">
                <h1 className="text-center mb-4">Contact Us</h1>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                    <div className="product-page">
      <section className="product-section">
        <h2>Contact Us</h2>
        <div className="product-cards">
          <div className="product-card">
            <FaMapMarkerAlt className="product-card-icon" />
            <h3>Address</h3>
            <p>Street-15, Garhi Chaukhandi, Sec-121, Noida 201304 (UP), India</p>
            <a href="/get-started" className="btn">Get Started</a>
          </div>
          <div className="product-card">
            <FaPhone className="product-card-icon" />
            <h3>Phone</h3>
            <p>+91 9878623254</p>
            <a href="/get-started" className="btn">Get Started</a>
          </div>
          <div className="product-card">
            <FaEnvelope className="product-card-icon" />
            <h3>Email</h3>
            <p>newindiasoftwaresolutions@gmail.com</p>
            <a href="/get-started" className="btn">Get Started</a>
          </div>
        </div>
      </section>

      {/* Other sections... */}

    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ContactUs;

