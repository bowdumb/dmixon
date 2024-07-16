import React from 'react';
import '../styles/Contact.css';
import BodyContent from './BodyContent';

function Contact() {
    return (
        <BodyContent>
        <div className = "contact-content">
            <h1 className="contact-header">
                danielle@haventherapyandconsulting.com
            </h1>
            <div className="contact-button">
            <a href="mailto:mixond@gmail.com">Contact Danielle via email</a>
            </div>
        </div>
        </BodyContent>
    )
};

export default Contact;