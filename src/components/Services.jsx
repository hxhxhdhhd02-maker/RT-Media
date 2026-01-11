import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaPenFancy, FaCamera, FaPaintBrush, FaMobileAlt, FaChartLine, FaCode, FaGraduationCap } from 'react-icons/fa';
import './Services.css';

const servicesData = [
    { icon: <FaVideo />, title: "تصوير وإنتاج فيديو", desc: "تصوير فيديوهات ريلز – إعلانات – بودكاست – مؤتمرات" },
    { icon: <FaPenFancy />, title: "كتابة المحتوى", desc: "كتابة سكريبتات احترافية تناسب تخصصك وجمهورك" },
    { icon: <FaCamera />, title: "تصوير فوتوغرافي", desc: "تصوير ميداني في العيادات، الشركات، أو أي مكان عمل" },
    { icon: <FaPaintBrush />, title: "تصميم جرافيك", desc: "تصميمات سوشيال ميديا وإعلانات بصريّة قوية" },
    { icon: <FaMobileAlt />, title: "إدارة سوشيال ميديا", desc: "إدارة صفحات السوشيال ميديا بشكل يومي ومنظم" },
    { icon: <FaChartLine />, title: "إعلانات ممولة", desc: "إطلاق وتنظيم حملات إعلانات ممولة لتحقيق نتائج فعلية" },
    { icon: <FaCode />, title: "تصميم المواقع", desc: "تصميم وبرمجة مواقع احترافية متجاوبة مع جميع الأجهزة" },
    { icon: <FaGraduationCap />, title: "منصات تعليمية", desc: "تطوير منصات تعليمية تفاعلية لإدارة الدورات والطلاب" },
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="section-header">
                    <h2>خدماتنا</h2>
                    <p>كل خدماتنا بنفس الهوية البصرية لضمان تجربة احترافية موحدة</p>
                </div>
                
                <motion.div 
                    className="services-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {servicesData.map((service, index) => (
                        <motion.div key={index} className="service-card" variants={item}>
                            <div className="icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
