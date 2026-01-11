import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    // Removed scroll logic completely since we want it static at top
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (!mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = 'visible';
    };

    return (
        <motion.header
            className="header"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
           <div className="container">
               <a href="#" className="logo" onClick={closeMenu}>
                   <h1>RT <span>Media</span></h1>
               </a>

               <button 
                   className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
                   onClick={toggleMenu}
                   aria-label="Toggle Navigation"
               >
                   <span className="bar"></span>
                   <span className="bar"></span>
                   <span className="bar"></span>
               </button>

               <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                   <a href="#services" className="nav-link" onClick={closeMenu}>خدماتنا</a>
                   <a href="#about" className="nav-link" onClick={closeMenu}>من نحن</a>
                   <a href="#portfolio" className="nav-link" onClick={closeMenu}>أعمالنا</a>
                   <a href="#testimonials" className="nav-link" onClick={closeMenu}>آراء العملاء</a>
                   <a href="#contact" className="nav-cta" onClick={closeMenu}>
                       احجز استشارة مجانية
                   </a>
               </nav>
           </div>
        </motion.header>
    );
};

export default Header;
