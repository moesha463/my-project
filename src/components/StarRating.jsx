import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

function StarRating({ rating }) {
    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <FaStar
                        className={`h-5 w-5 ${index < rating ? 'text-casino-gold' : 'text-gray-600'}`}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default StarRating;