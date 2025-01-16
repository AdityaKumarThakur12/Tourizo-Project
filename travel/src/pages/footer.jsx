import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: About */}
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Tourizo is your trusted travel partner for exploring the world's most beautiful destinations. 
            From historic landmarks to modern wonders, we bring your dream trips to life.
          </p>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/places">Destinations</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Section: Social Media */}
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Tourizo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
