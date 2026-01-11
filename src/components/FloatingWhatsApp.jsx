import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <motion.a 
        href="https://wa.me/201015726742" 
        target="_blank" 
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
            position: 'fixed',
            bottom: '30px',
            left: '30px',
            background: '#25d366',
            color: '#fff',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.4), 0 0 0 4px rgba(37, 211, 102, 0.2)',
            zIndex: 9999, // Higher than everything
            cursor: 'pointer',
            textDecoration: 'none'
        }}
    >
        <FaWhatsapp />
    </motion.a>
  );
};

export default FloatingWhatsApp;
