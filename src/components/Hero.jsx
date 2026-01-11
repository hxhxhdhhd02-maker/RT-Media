import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaPlay } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="hero-title">
                        RT <span className="text-stroke">Media</span>
                    </h1>
                </motion.div>
                
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    نحول وجودك الرقمي إلى <span className="highlight">تأثير حقيقي</span>
                </motion.p>
                
                <motion.div 
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <a href="#contact" className="btn-primary">ابــدأ رحلتـك</a>
                    <a href="#services" className="btn-secondary">
                         تعرف علينا <span style={{ marginRight: '8px' }}>↓</span>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="scroll-text">اكتشف المزيد</span>
                <FaArrowDown />
            </motion.div>

            {/* Background Atmosphere */}
            <div className="hero-glow primary-glow"></div>
            <div className="hero-glow secondary-glow"></div>
        </section>
    );
};

export default Hero;
