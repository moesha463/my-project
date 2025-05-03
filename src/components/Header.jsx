import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-black text-casino-gold p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <motion.h1
                    className="text-2xl sm:text-3xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Klađenje Hrvatska
                </motion.h1>
                <button
                    className="lg:hidden text-casino-gold text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent z-20`}>
                    <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 p-4 lg:p-0">
                        {[
                            { to: '/', label: 'Početna' },
                            { to: '/mobile-betting', label: 'Mobilno klađenje' },
                            { to: '/football-betting', label: 'Nogometno klađenje' },
                            { to: '/about', label: 'O nama' },
                            { to: '/contact', label: 'Kontakt' }
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="relative"
                            >
                                <Link
                                    to={item.to}
                                    className="hover:underline hover:underline-offset-4 transition text-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;