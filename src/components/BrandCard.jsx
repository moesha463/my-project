import React from 'react';
import { motion } from 'framer-motion';
import StarRating from './StarRating';

function BrandCard({ brand }) {
    return (
        <motion.div
            className="bg-dark-card p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 glow-card hover:border-casino-gold transition-all mb-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
        >
            <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-40 sm:h-48 object-contain rounded-md mb-4"
            />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{brand.name}</h3>
                <StarRating rating={brand.rating} />
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">{brand.description}</p>
            <div className="text-gray-300 mb-4 text-sm sm:text-base">
                <p><strong>Bonus dobrodošlice:</strong> {brand.bonus}</p>
                <p><strong>Podržani sportovi:</strong> {brand.sports}</p>
                <p><strong>Načini plaćanja:</strong> {brand.payments}</p>
            </div>
            <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-casino-gold text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-500 transition w-full sm:w-auto text-center block"
            >
                Posjeti {brand.name}
            </a>
        </motion.div>
    );
}

export default BrandCard;