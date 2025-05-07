import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { footerLinks } from '../data/footerLinks';

function Footer() {
    return (
        <footer className="bg-black text-gray-300 p-4 sm:p-6" style={{ marginTop: "40px" }}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-casino-gold font-bold mb-2 text-base sm:text-lg">18+ | Igrajte odgovorno</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        {footerLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="pulse"
                            >
                                <img src={link.image} alt={link.name} className="h-8 sm:h-10" />
                            </motion.a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end space-x-2 sm:space-x-4 gap-2">
                    {[
                        { to: '/terms', label: 'Uvjeti korištenja' },
                        { to: '/privacy', label: 'Politika privatnosti' },
                        { to: '/about', label: 'O nama' },
                        { to: '/contact', label: 'Kontakt' }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link to={item.to} className="text-casino-gold hover:underline text-base sm:text-lg">
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto mt-6 px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="bg-dark-card p-4 sm:p-6 rounded-lg flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 glow-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-4xl sm:text-5xl text-casino-gold glowing-orange-icon">🛑</span>
                    <p className="text-gray-300 text-center sm:text-left text-sm sm:text-base leading-relaxed">
                        <span className="font-bold text-casino-gold">18+ Samo</span> | Klađenje Hrvatska ne pruža izravan pristup uslugama klađenja ili kockanja. Naša platforma služi isključivo za informiranje i preporuke. Posjetitelji moraju biti stariji od 18 godina i pridržavati se principa odgovornog klađenja. Igrajte pametno i u skladu s lokalnim zakonima.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;