import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__info">
                    <p>&copy; {new Date().getFullYear()} New India Software Solutions Pvt Ltd</p>
                    <p>Current Time: {currentTime}</p>
                </div>
                <div className="footer__socials">
                    <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
