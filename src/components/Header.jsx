import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-new.png';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroHeight = window.innerHeight; // Approximate height of hero section

            if (currentScrollY > heroHeight) {
                // Only apply hide/show logic after scrolling past hero
                if (currentScrollY > lastScrollY && currentScrollY > 50) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            } else {
                // Always visible over hero
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="header-container">
                <div className="logo-section">
                    <img src={logo} alt="Avocco Logo" className="logo" />
                </div>

                <nav className="nav-menu">
                    <ul>
                        <li><a href="#new-releases">NEW RELEASES</a></li>
                        <li><a href="#men">MEN</a></li>
                        <li><a href="#women">WOMEN</a></li>
                        <li><a href="#kids">KIDS</a></li>
                        <li><a href="#sale">SALE</a></li>
                    </ul>
                </nav>

                <div className="header-icons">
                    <button aria-label="Search" className="icon-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                    <button aria-label="Cart" className="icon-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <style>{`
        .header {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%) translateY(0);
          width: 95%;
          max-width: 1400px;
          z-index: 100;
          background: rgba(20, 20, 20, 0.8);
          backdrop-filter: blur(10px);
          padding: 8px 30px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }
        .header.hidden {
          transform: translateX(-50%) translateY(-200%);
          opacity: 0;
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          height: 30px;
          width: auto;
          filter: invert(1) brightness(2);
        }
        .nav-menu ul {
          display: flex;
          gap: 30px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-menu a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s;
        }
        .nav-menu a:hover {
          color: #aaa;
        }
        .header-icons {
          display: flex;
          gap: 20px;
          color: white;
        }
        .icon-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }
        }
      `}</style>
        </header>
    );
};

export default Header;
