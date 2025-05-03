import React from 'react';
import { motion } from 'framer-motion';

function AgePopup({ onConfirm }) {
    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 flex justify-center items-center z-50 age-popup backdrop-blur"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="bg-dark-card p-6 sm:p-8 rounded-lg shadow-xl text-center max-w-md mx-4 border border-casino-gold">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Potvrda dobi</h2>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">Morate imati 18 ili više godina za pristup ovom sajtu.</p>
                <motion.button
                    onClick={onConfirm}
                    className="bg-casino-gold text-black px-4 sm:px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Potvrdi (18+)
                </motion.button>
            </div>
        </motion.div>
    );
}

export default AgePopup;
