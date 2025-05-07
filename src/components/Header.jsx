import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) setIsDropdownOpen(false); // Close dropdown when menu closes
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
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
                    <a href="/">Klađenje Hrvatska</a>
                </motion.h1>
                <button
                    className="lg:hidden text-casino-gold text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent z-20`}>
                    <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 p-4 lg:p-0">
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            className="relative"
                        >
                            <Link
                                to="/"
                                className="hover:underline hover:underline-offset-4 transition text-lg"
                                onClick={handleLinkClick}
                            >
                                Početna
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            className="relative group"
                        >
                            <button
                                className="flex items-center hover:underline hover:underline-offset-4 transition text-lg"
                            >
                                Kategorije
                            </button>
                            <ul className={`${isDropdownOpen ? 'block' : 'hidden'} lg:group-hover:block absolute left-0 mt-2 w-48 bg-black text-casino-gold rounded-md shadow-lg z-30 lg:mt-0 lg:bg-opacity-90`}>
                                {[
                                    { to: '/mobile-betting', label: 'Mobilno klađenje' },
                                    { to: '/football-betting', label: 'Nogometno klađenje' },
                                    { to: '/basketball-betting', label: 'Košarkaško klađenje' },
                                    { to: '/hockey-betting', label: 'Klađenje na hokej' },
                                    { to: '/tennis-betting', label: 'Tenisko klađenje' }
                                ].map((item, index) => (
                                    <li key={index} className="px-4 py-2 hover:bg-gray-800">
                                        <Link
                                            to={item.to}
                                            className="block hover:underline transition text-lg"
                                            onClick={handleLinkClick}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            className="relative"
                        >
                            <Link
                                to="/about"
                                className="hover:underline hover:underline-offset-4 transition text-lg"
                                onClick={handleLinkClick}
                            >
                                O nama
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            className="relative"
                        >
                            <Link
                                to="/contact"
                                className="hover:underline hover:underline-offset-4 transition text-lg"
                                onClick={handleLinkClick}
                            >
                                Kontakt
                            </Link>
                        </motion.li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;