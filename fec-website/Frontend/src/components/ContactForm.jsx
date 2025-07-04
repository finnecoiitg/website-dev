import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <div className="contact-form-text-container">
                <p className="contact-form-title">
                    Have a question or an idea to share with us? Drop us a line
                </p>
            </div>
            <div className="contact-form-fields-container">
                <form className="contact-form">
                    <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" className="form-input" placeholder="Your Name"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className="form-input" placeholder="Your Email"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea id="message" rows="4" className="form-textarea" placeholder="Your Message"></textarea>
                    </div>
                    <div className="btn"><button type="submit" className="submit-button"> SUBMIT <span>→</span></button></div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
