import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about">
          <h2>About Us</h2>
          <div className="about-grid">
            <div>
              <p>At H-D Notary, we provide professional notary services with integrity and attention to detail. With years of experience, we ensure that all your notary needs are handled efficiently and accurately.</p>
              <p>We are commissioned notaries serving the local community with a commitment to excellence in every interaction.</p>
            </div>
            <div>
              <p>Our mission is to provide accessible, reliable notary services that make important document processing simple and stress-free for our clients.</p>
              <p>We understand the importance of proper document notarization and take pride in our meticulous approach to every signing.</p>
            </div>
          </div>
        </section>
        
        <section id="services">
          <h2>Our Services</h2>
          <p>We offer a comprehensive range of notary services to meet your needs:</p>
          <div className="services-grid">
            <ServiceCard 
              type="real-estate" 
              title="Real Estate Closings" 
              description="Professional notarization for all your real estate transactions." 
            />
            <ServiceCard 
              type="poa" 
              title="Power of Attorney" 
              description="Legally authorize someone to act on your behalf." 
            />
            <ServiceCard 
              type="affidavit" 
              title="Affidavits & Statements" 
              description="Official notarization of sworn statements and affidavits." 
            />
            <ServiceCard 
              type="mobile" 
              title="Mobile Notary" 
              description="We come to you for convenient notarization services." 
            />
          </div>
        </section>
        
        
        <section id="contact">
          <h2>Contact Us</h2>
          <p>We're here to assist with all your notary needs. Reach out through any of the following methods:</p>
          <div className="contact-methods">
            <div className="contact-method">
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
              <p>Available Mon-Fri, 9am-5pm</p>
            </div>
            <div className="contact-method">
              <h3>Email</h3>
              <p>info@hdnotary.com</p>
              <p>We respond within 24 hours</p>
            </div>
            <div className="contact-method">
              <h3>Location</h3>
              <p>123 Main Street</p>
              <p>City, State 12345</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;