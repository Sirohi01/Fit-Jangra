import React, { useState } from 'react';
import '../styles/ContactUs.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Format the message for WhatsApp
        const whatsappMessage = `*New Message from Contact Us Form*\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
        
        // WhatsApp URL with encoded message
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="contact-section">
            <h2 className="contact-title">Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="contact-button">Send Query</button>
            </form>
        </section>
    );
};

export default Contact;
