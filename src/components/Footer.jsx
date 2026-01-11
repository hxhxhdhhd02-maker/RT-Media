import React from 'react';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    
  const socialLinks = [
      { icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=100064991260401" },
      { icon: <FaInstagram />, url: "#" }, // Placeholder
      { icon: <FaLinkedin />, url: "#" }   // Placeholder
  ];

  return (
    <footer className="footer-section" id="contact">
      <div className="container" style={{ maxWidth: '1200px', margin: 'auto' }}>
        
        <div className="footer-content">
            {/* CTA Section */}
            <div className="footer-cta">
                <h2>
                    جاهز تبدأ <br/>
                    <span style={{ color: 'var(--primary)' }}>رحلة النجاح؟</span>
                </h2>
                <a href="https://wa.me/201015726742" target="_blank" rel="noreferrer" className="cta-button">
                   تواصل معنا الآن ↗
                </a>
            </div>

            {/* Links/Contact */}
            <div className="footer-links">
                <div className="contact-info">
                     <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '15px' }}>تواصل معنا</h3>
                     <p><FaPhone color="var(--primary)"/> 0101 572 6742</p>
                     <p><FaMapMarkerAlt color="var(--primary)"/> القاهرة، مصر</p>
                </div>
                
                <div style={{ marginTop: '20px' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '15px' }}>تابعنا</h3>
                    <div className="social-icons">
                        {socialLinks.map((item, i) => (
                            <a key={i} href={item.url} target="_blank" rel="noreferrer" className="social-icon">
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} RT Media. All rights reserved.</p>
            <p>Designed with ❤️ by RT Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
