import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      
      {/* Background Abstract Shapes */}
      <motion.div 
        animate={{ 
            rotate: 360, 
            scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="about-bg-shape"
      />

      <div className="container">
        
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="about-card"
        >
            {/* Glossy Reflection Effect */}
            <div className="glossy-effect"></div>

            <motion.h2 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="about-title"
            >
                <span style={{ position: 'relative', zIndex: 1 }}>من نحن؟</span>
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="title-underline"
                />
            </motion.h2>

            <div className="about-text">
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{ marginBottom: '20px' }}
                >
                    إحنا مش بس شركة سوشيال ميديا..
                </motion.p>
                
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    إحنا <strong className="partner-word">شريكك</strong> في بناء <span className="empire-word">إمبراطوريتك الرقمية</span>.
                </motion.p>
                
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="quote-text"
                >
                    "بندمج الإبداع الفني مع استراتيجيات التسويق الحديثة عشان نخلق ليك صوت مسموع وصورة متتشالش من البال."
                </motion.p>
            </div>

            {/* Floating Badge */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="floating-badge"
            >
                ★
            </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
