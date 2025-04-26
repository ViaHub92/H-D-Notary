import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import { FaPhone, FaEnvelope, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about">
          <h2>About Us</h2>
          
          <div className="about-container">
            <div className="about-intro">
              <p className="about-tagline">Professional notary services with integrity and attention to detail.</p>
              
              <p>Hi, my name is Samuel Hairston, and I'm a certified NNA Notary Public and Loan Signing Agent proudly serving Oceanside, Vista, and Carlsbad. I specialize in providing accurate, reliable, and professional notary services to title companies, escrow offices, real estate agents, and individual clients.</p>
              
              <p>Though I'm newly certified, I've undergone extensive training to ensure every signing is handled with precision, care, and attention to detail. I understand the importance of making your clients feel comfortable and confident during the signing process, and I'm committed to creating a seamless experience from start to finish.</p>
              
              <p>I take pride in being punctual, professional, and prepared for every appointment. Whether it's a loan refinance, buyer package, seller package, or any other document signing, you can count on me to represent your company with excellence.</p>
              
              <p>When I'm not assisting clients, I'm focused on continuing education to stay up-to-date with industry standards and best practices — because I believe every signing deserves my absolute best.</p>
              
              <p>If you're looking for a dependable signing agent you can trust to get the job done right, I'd love to be your go-to partner.</p>
            </div>
            
            <div className="about-features">
              <div className="feature-item">
                <h3>Our Mission</h3>
                <p>Our mission is to provide professional, accurate, and seamless loan signing services that build trust and deliver peace of mind for every client.</p>
              </div>
              
              <div className="feature-item">
                <h3>Our Approach</h3>
                <p>We combine attention to detail, clear communication, and a client-first mindset to ensure every signing experience is smooth, efficient, and stress-free.</p>
              </div>
              
              <div className="feature-item">
                <h3>Our Commitment</h3>
                <p>We are committed to punctuality, professionalism, and excellence — treating every signing as an opportunity to represent you with integrity and care.</p>
              </div>
            </div>
            
            <div className="certifications">
              <a 
                href="https://www.signingagent.com/profile/161908212" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="certification-badge-link"
                aria-label="Verify NNA Certification"
              >
                <div className="certification-badge">
                  <FaCheckCircle className="cert-icon" />
                  <p>NNA Certified Loan Signing Agent</p>
                </div>
              </a>
            </div>
          </div>
        </section>
        
        <section id="services">
          <h2>Our Services</h2>
          <p>We offer a comprehensive range of notary services to meet your needs:</p>
          <div className="services-grid">
            <ServiceCard 
              type="real-estate" 
              title="Loan Signing Services" 
              description="Handling buyer, seller, refinance, HELOC, and loan modification documents with precision and care to ensure smooth, error-free closings." 
            />
            <ServiceCard 
              type="affidavit" 
              title="General Notary Work" 
              description="Providing mobile notary services for affidavits, power of attorney, healthcare directives, trust documents, and other important paperwork." 
            />
            <ServiceCard 
              type="poa" 
              title="Real Estate Document Signings" 
              description="Assisting real estate professionals, title companies, and escrow officers by accurately executing closing documents and guiding clients through the signing process." 
            />
            <ServiceCard 
              type="mobile" 
              title="Mobile Notary Services" 
              description="Offering convenient, flexible travel to homes, offices, hospitals, and other locations to meet clients where they are — saving them time and stress." 
            />
          </div>
        </section>
        
        <section id="contact">
          <h2>Make an Appointment</h2>
          <p>We're here to assist with all your notary needs. Reach out through any of the following methods:</p>
          <div className="contact-methods">
            
            <a 
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3gQXvZTxAd7HLcNqMT5_dVUEYzPoJxNuBIQQcNLdObKD51RzME6qo4SZGRjPrWOd-1nOip_60-" 
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-link"
            >
              <div className="contact-method">
                <FaCalendarAlt className="contact-icon" />
                <h3>Book Appt.</h3>
                <p>Book a convenient time</p>
                <p>Quick and easy online scheduling</p>
              </div>
            </a>
            
            <a 
              href="tel:2092796046" 
              className="contact-method-link"
            >
              <div className="contact-method">
                <FaPhone className="contact-icon" />
                <h3>Phone</h3>
                <p>(209) 279-6046</p>
                <p>Available Mon-Fri, 9am-5pm</p>
              </div>
            </a>
            
            <a 
              href="mailto:hdnotary2025@gmail.com" 
              className="contact-method-link"
            >
              <div className="contact-method">
                <FaEnvelope className="contact-icon" />
                <h3>Email</h3>
                <p>hdnotary2025@gmail.com</p>
                <p>We respond within 24 hours</p>
              </div>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;