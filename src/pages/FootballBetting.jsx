import React from 'react';
import { motion } from 'framer-motion';
import BrandCard from '../components/BrandCard';
import { brands } from '../data/brands';
import HeroSection from '../components/HeroSection';

function FootballBetting() {
    const shuffledBrands = [...brands].sort(() => Math.random() - 0.5);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <HeroSection />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">Preporučene platforme za nogomet</h2>
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
                <h3 className="text-xl sm:text-2xl font-semibold text-casino-gold mb-4">Nogometno klađenje u Hrvatskoj</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Nogomet je najpopularniji sport za klađenje u Hrvatskoj, privlačeći milijune navijača koji žele dodati uzbuđenje svojim omiljenim utakmicama. Naše preporučene platforme nude širok izbor oklada na domaće lige, poput HNL-a, kao i na međunarodne turnire poput Lige prvaka i Svjetskog prvenstva. Možete se kladiti na različite ishode, uključujući pobjednika utakmice, broj golova, strijelce i više. Sve platforme koje preporučujemo nude konkurentne koeficijente i mogućnost klađenja uživo, omogućujući vam da reagirate na događaje tijekom utakmice. Uz to, mnoge platforme pružaju detaljne statistike i prijenose uživo, pomažući vam da donesete informirane odluke. Sigurnost je zajamčena kroz licenciranje i regulaciju, dok bonusi poput besplatnih oklada čine nogometno klađenje još privlačnijim. Bez obzira jeste li navijač Dinama, Hajduka ili svjetskih klubova poput Barcelone i Manchester Uniteda, naše platforme imaju nešto za svakoga. Pronađite najbolju stranicu za nogometno klađenje i uživajte u vrhunskom iskustvu uz Klađenje Hrvatska!
                </p>
            </section>
        </motion.div>
    );
}

export default FootballBetting;