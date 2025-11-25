import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="link-column">
            <h3>CONTACT US</h3>
            <ul>
              <li><a href="#">Email Us</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Store Locator</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>SHIPPING & RETURNS</h3>
            <ul>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns Policy</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>ABOUT US</h3>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 AVOCCO. All rights reserved.</p>
        <div className="social-links">
          <a href="#">INSTAGRAM</a>
          <a href="#">TWITTER</a>
          <a href="#">FACEBOOK</a>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #111;
          color: white;
          padding: 60px 40px 20px;
          border-top: 1px solid #333;
        }
        .footer-content {
          max-width: 1400px;
          margin: 0 auto 60px;
          display: flex;
          justify-content: center;
        }
        .footer-links {
          display: flex;
          gap: 100px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .link-column h3 {
          font-size: 0.9rem;
          font-weight: 800;
          margin-bottom: 20px;
          color: white;
        }
        .link-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .link-column li {
          margin-bottom: 10px;
        }
        .link-column a {
          color: #888;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s;
        }
        .link-column a:hover {
          color: white;
        }
        .footer-bottom {
          max-width: 1400px;
          margin: 0 auto;
          padding-top: 20px;
          border-top: 1px solid #222;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: #666;
        }
        .social-links {
          display: flex;
          gap: 20px;
        }
        .social-links a {
          color: #666;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }
        .social-links a:hover {
          color: white;
        }
        @media (max-width: 768px) {
          .footer-links {
            gap: 40px;
            text-align: center;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
