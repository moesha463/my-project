import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Kontakt</h2>
            <div className="text-gray-300 leading-relaxed text-sm sm:text-base">
                <p className="mb-4">
                    Imate pitanja ili trebate dodatne informacije? Naš tim je dostupan za podršku. Kontaktirajte nas putem sljedećih kanala:
                </p>
                <p className="mb-4">
                    <strong>E-pošta:</strong> contact@kladjenjehrvatska.hr
                </p>
                <p className="mb-4">
                    <strong>Telefon:</strong> +385 1 2345 678
                </p>
                <p className="mb-4">
                    <strong>Adresa:</strong> Ulica Primorska 12, 10000 Zagreb, Hrvatska
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">Društvene mreže</h3>
                <p className="mb-4">
                    Pratite nas na društvenim mrežama za najnovije vijesti i promocije:
                </p>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-casino-gold hover:underline">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-casino-gold hover:underline">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-casino-gold hover:underline">Instagram</a>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;