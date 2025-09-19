import React from 'react';
import emailjs from '@emailjs/browser';
import contactImage from '../assets/images/contact-image.png';
import './Contact.css';

const Contact = () => {
  const form = React.useRef();
  const [status, setStatus] = React.useState('Send Message');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // All your keys are now in place.
    emailjs.sendForm(
      'service_dltj06r',      // ✅ Your Service ID
      'template_5gaw0yd',     // ✅ Your Template ID
      form.current,
      'W1Pgms-BAdL-lG0LY'       // ✅ Your Public Key
    )
    .then((result) => {
        console.log('SUCCESS!', result.text);
        setStatus('Message Sent!');
        form.current.reset();
    }, (error) => {
        console.log('FAILED...', error.text);
        setStatus('Failed to Send');
    });
  };

  return (
    <div className="contact section">
      <div className="container contact-container">
        <div className="contact-form-wrapper">
          <h2>Get In Touch</h2>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="from_name">Your Name</label>
              <input type="text" id="from_name" name="from_name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="from_email">Your Email</label>
              <input type="email" id="from_email" name="from_email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" disabled={status === 'Sending...'}>
              {status}
            </button>
          </form>
        </div>
        
        <div className="contact-image">
          <img src={contactImage} alt="Contact illustration" />
        </div>
      </div>
    </div>
  );
};

export default Contact;