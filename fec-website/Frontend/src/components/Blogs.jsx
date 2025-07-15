import React from "react";
import './Blogs.css';

import Navbar from "./Navbar";
import BlogContent from './BlogContent'
import ContactForm from './ContactForm';
import Footer from "./Footer";
import Yes3 from '../img/Yes3.png';

export default function Blogs() {
    return (
        <div className="blogs-container">
            <Navbar />
            <div className="blogs-header">
                <h1>Blogs</h1>
                <h3>Welcome to our blog, your gateway to a world of ideas, inspiration, and valuable insights. Explore our diverse articles, written with expertise.</h3>
            </div>
            <BlogContent/>
            <section className="contact-form-section">
              <div className="imageNearBy">
                <img src={Yes3} alt="Yes" />
              </div>
              <ContactForm />
            </section>
            <Footer />
        </div>
    )
}