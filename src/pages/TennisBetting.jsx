import React from 'react';
import { motion } from 'framer-motion';
import BrandCard from '../components/BrandCard';
import { brands } from '../data/brands';
import HeroSection from '../components/HeroSection';

function TennisBetting() {
    const shuffledBrands = [...brands].sort(() => Math.random() - 0.5);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <HeroSection />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">Preporučene platforme za tenis</h2>
            <div className="flex flex-col gap-6 mb-12">
                {shuffledBrands.map((brand, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <BrandCard brand={brand} />
                    </motion.div>
                ))}
            </div>
            <section className="bg-dark-card p-4 sm:p-8 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-casino-gold mb-4">Tenisko klađenje u Hrvatskoj</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Tenis je izuzetno popularan sport za klađenje u Hrvatskoj, posebice zahvaljujući uspjesima hrvatskih igrača na svjetskoj sceni. Naše preporučene platforme nude širok izbor oklada na turnire poput ATP i WTA serija, Grand Slamova (Australian Open, Roland Garros, Wimbledon, US Open) te domaćih turnira poput Umag ATP-a. Možete se kladiti na pobjednika meča, broj setova, broj gemova, pa čak i na specifične ishode poput taj-brejka. Platforme nude konkurentne koeficijente i klađenje uživo, omogućujući vam da pratite mečeve u stvarnom vremenu i reagirate na promjene tijekom igre. Detaljne statistike, prijenosi uživo i analize pomažu vam u donošenju informiranih odluka. Sve platforme su licencirane i sigurne, s dodatnim pogodnostima poput bonusa dobrodošlice i besplatnih oklada. Bilo da podržavate hrvatske zvijezde ili svjetske igrače poput Novaka Đokovića i Rafe Nadala, naše platforme pružaju vrhunsko iskustvo klađenja. Pronađite najbolju stranicu za tenisko klađenje uz Klađenje Hrvatska!
                </p>
            </section>
        </motion.div>
    );
}

export default TennisBetting;