import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Stats.css';

// Counter Component for the "Cool Motion" number effect
const Counter = ({ value, label, suffix = "+" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current));
    
    useEffect(() => {
        if (isInView) {
            // Parse number from string (e.g. "150+" -> 150)
            const numericValue = parseInt(value.replace(/,/g, '').replace(/\+/g, '').replace(/M/g, '000000'));
            // Start animation
            spring.set(numericValue);
        }
    }, [isInView, value, spring]);

    return (
        <motion.div 
            ref={ref}
            className="stat-item"
            whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(0, 224, 255, 0.6)" }}
        >
            <div className="stat-number">
                <motion.span>{display}</motion.span>
                <span className="stat-suffix">{suffix}</span>
            </div>
            <p className="stat-label">{label}</p>
        </motion.div>
    );
};

const Stats = () => {
    return (
        <section className="stats-section">
             <div className="container" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="stats-container"
                >
                    <Counter value="150" label="عميل سعيد" />
                    
                    <div className="divider"></div>
                    
                    <Counter value="320" label="مشروع ناجح" />
                    
                    <div className="divider"></div>
                    
                    <div className="stat-item">
                         <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                         >
                             <span className="mega-stat">5M+</span>
                         </motion.div>
                         <p className="stat-label">وصول ومشاهدو</p>
                    </div>

                </motion.div>
             </div>
        </section>
    );
};

export default Stats;
