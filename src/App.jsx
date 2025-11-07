
import React from 'react';

function App() {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment",
      location: "Kathmandu, Nepal",
      price: "$250,000",
      image: "/r1.png",
      beds: 3,
      baths: 2,
      sqft: "1,500"
    },
    {
      id: 2,
      title: "Luxury Villa", 
      location: "Pokhara, Nepal",
      price: "$450,000",
      image: "/r2.png",
      beds: 4,
      baths: 3,
      sqft: "2,800"
    },
    {
      id: 3,
      title: "Family Home",
      location: "Lalitpur, Nepal", 
      price: "$350,000",
      image: "/r3.png",
      beds: 3,
      baths: 2,
      sqft: "2,000"
    },
    {
      id: 4,
      title: "Studio Apartment",
      location: "Bhaktapur, Nepal",
      price: "$120,000", 
      image: "/r1.png",
      beds: 1,
      baths: 1,
      sqft: "800"
    },
    {
      id: 5,
      title: "Penthouse Suite",
      location: "Kathmandu, Nepal",
      price: "$600,000",
      image: "/r2.png",
      beds: 3,
      baths: 3,
      sqft: "3,200"
    },
    {
      id: 6,
      title: "Garden House",
      location: "Pokhara, Nepal",
      price: "$280,000",
      image: "/r3.png",
      beds: 2,
      baths: 2, 
      sqft: "1,800"
    },
    {
      id: 7,
      title: "Mountain View Villa",
      location: "Nagarkot, Nepal",
      price: "$520,000",
      image: "/r1.png",
      beds: 4,
      baths: 4,
      sqft: "3,500"
    },
    {
      id: 8, 
      title: "City Center Apartment",
      location: "Kathmandu, Nepal",
      price: "$180,000",
      image: "/r2.png",
      beds: 2,
      baths: 1,
      sqft: "1,200"
    },
    {
      id: 9,
      title: "Lakeside Cottage", 
      location: "Pokhara, Nepal",
      price: "$320,000",
      image: "/r3.png",
      beds: 3,
      baths: 2,
      sqft: "2,200"
    },
    {
      id: 10,
      title: "Commercial Space",
      location: "Kathmandu, Nepal",
      price: "$750,000",
      image: "/r1.png",
      beds: "Office",
      baths: 2,
      sqft: "5,000"
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="/logo.png" alt="Logo" className="logo-img" />
            NepalRealEstate
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#properties">Properties</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <img src="/hero-image.png" alt="Hero" className="hero-bg" />
        <div className="hero-content">
          <h1>Find Your Dream Home in Nepal</h1>
          <p>Discover 10+ amazing properties across beautiful locations in Nepal</p>
          <button className="cta-button">View All Properties</button>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="properties">
        <h2 className="section-title">10 Featured Properties</h2>
        <p className="section-subtitle">Explore our handpicked selection of premium properties</p>
        
        <div className="properties-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.image} alt={property.title} className="property-image" />
              <div className="property-info">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-location">{property.location}</p>
                
                <div className="property-features">
                  <span> {property.beds} beds</span>
                  <span> {property.baths} baths</span>
                  <span> {property.sqft} sqft</span>
                </div>
                
                <div className="property-price">{property.price}</div>
                <button className="property-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <h3 className="partners-title">Our Partners</h3>
        <div className="partners-grid">
          <img src="/equinix.png" alt="Equinix" className="partner-logo" />
          <img src="/prologis.png" alt="Prologis" className="partner-logo" />
          <img src="/tower.png" alt="Tower" className="partner-logo" />
          <img src="/realty.png" alt="Realty" className="partner-logo" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="contact-title">Contact Our Team</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3 className="contact-name">Subina Thapa</h3>
            <p className="contact-phone"> 9</p>
          </div>
          <div className="contact-card">
            <h3 className="contact-name">Subin Thapa</h3>
            <p className="contact-phone"> 9</p>
          </div>
          <div className="contact-card">
            <h3 className="contact-name">Nalina thapa</h3>
            <p className="contact-phone">9</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <img src="/logo2.png" alt="Logo" className="footer-logo" />
        <p>&copy; 2025 NepalRealEstate. All rights reserved.</p>
        <p>Developed by: Subina Thapa </p>
        <p>Contact: 9741698460 </p>
      </footer>
    </div>
  );
}

export default App;
