import React from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaBuilding, FaUtensils, FaUniversity, FaBullhorn, FaClinicMedical } from 'react-icons/fa';
import './Clients.css';

const clients = [
  { icon: <FaClinicMedical />, label: "عيادات طبية" },
  { icon: <FaHospital />, label: "مراكز طبية" },
  { icon: <FaBuilding />, label: "شركات" },
  { icon: <FaUtensils />, label: "مطاعم" },
  { icon: <FaUniversity />, label: "مؤسسات تعليمية" },
  { icon: <FaBullhorn />, label: "حملات دعائية" },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
};

const Clients = () => {
    return (
        <section className="clients-section">
            <div className="container" style={{ maxWidth: '1200px', margin: 'auto' }}>
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', color: '#00e0ff' }}
                >
                    عملاؤنا
                </motion.h2>
                
                <motion.div 
                    className="clients-track"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {clients.map((client, idx) => (
                        <motion.div 
                            key={idx}
                            className="client-pill"
                            variants={item}
                        >
                            <div className="client-icon">{client.icon}</div>
                            <p className="client-label">{client.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;
