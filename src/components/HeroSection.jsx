import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
    return (
        <section className="hero-section py-12 sm:py-16 text-center relative overflow-hidden" style={{marginBottom: "20px"}}>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900 to-black opacity-80"></div>
            <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-casino-gold to-yellow-400 mb-8 sm:mb-10 z-10 px-4 opacity-100"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Najbolje stranice za klađenje u Hrvatskoj!
            </motion.h1>
            <div className="flex justify-center space-x-6 sm:space-x-12 mb-8 sm:mb-12 z-10 relative flex-wrap gap-4 px-4">
                {[
                    { src: '/src/images/soccer_ball__07233.webp', alt: 'Nogomet' },
                    { src: '/src/images/ball-of-basketball.svg', alt: 'Košarka' },
                    { src: '/src/images/hockey.svg', alt: 'Hokej' }
                ].map((icon, index) => (
                    <motion.img
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                        className="w-12 h-12 sm:w-16 sm:h-16 transform hover:scale-110 transition-transform duration-300 glowing-orange-icon"
                        initial={{ scale: 0, rotate: -15 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
                    />
                ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 z-10 relative px-4">
                {[
                    { icon: '/src/images/license-3.png', text: 'Licencirane platforme u Hrvatskoj' },
                    { icon: '/src/images/odds.svg', text: 'Visoki koeficijenti' },
                    { icon: '/src/images/free-gift-icon-912-thumb.png', text: 'Atraktivni bonusi' }
                ].map((point, index) => (
                    <motion.div
                        key={index}
                        className="bg-dark-card bg-opacity-85 p-4 sm:p-6 rounded-xl flex items-center space-x-3 sm:space-x-5 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto max-w-xs"
                        initial={{ opacity: 0, x: index === 1 ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 + index * 0.2 }}
                    >
                        <img src={point.icon} alt={point.text} className="w-8 h-8 sm:w-10 sm:h-10 glowing-orange-icon" />
                        <p className="text-white font-semibold text-sm sm:text-lg">{point.text}</p>
                    </motion.div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
}

export default HeroSection;