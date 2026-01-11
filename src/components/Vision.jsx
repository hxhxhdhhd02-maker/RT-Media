import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Vision.css';

const Vision = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="vision" className="vision-section">
            <div className="vision-bg-grid"></div>

            <div className="container vision-container" ref={ref}>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="vision-title">
                        مش مجرد صفحة..
                        <br />
                        <motion.span 
                            initial={{ opacity: 0, filter: 'blur(20px)' }}
                            animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="vision-subtitle"
                        >
                            .. ده كيان
                        </motion.span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="vision-content"
                >
                    {/* Decorative quote marks */}
                    <span className="vision-quote-mark">”</span>

                    <p className="vision-text">
                        رؤيتنا إننا نخلي البيزنس بتاعك <span className="vision-highlight">حي</span>، <span className="vision-highlight">بيتنفس</span>، وبيتفاعل مع الناس في الوقت الحقيقي.
                        عشان كده إحنا <strong className="vision-brand">Real Time Media</strong>.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Vision;
