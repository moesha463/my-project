import React from 'react';
import { motion } from 'framer-motion';
import BrandCard from '../components/BrandCard';
import { brands } from '../data/brands';
import HeroSection from '../components/HeroSection';

function HockeyBetting() {
    const shuffledBrands = [...brands].sort(() => Math.random() - 0.5);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <HeroSection />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">Preporučene platforme za hokej</h2>
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
                <h3 className="text-xl sm:text-2xl font-semibold text-casino-gold mb-4">Hokejaško klađenje u Hrvatskoj</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Hokej na ledu sve više privlači pažnju u Hrvatskoj, posebice zahvaljujući uspjesima klubova poput Medveščaka i rastućem interesu za međunarodne lige. Naše preporučene platforme nude raznovrsne opcije klađenja na hrvatsku ligu, europske lige poput EBEL-a, te na NHL i svjetska prvenstva. Kladite se na pobjednika utakmice, ukupan broj golova, strijelce ili čak specifične događaje poput prekršaja. Platforme omogućuju klađenje uživo, što vam daje priliku da reagirate na brze promjene tijekom utakmice. Uz prijenose uživo i detaljne statistike, možete donositi informirane odluke temeljene na formi timova i igrača. Sve platforme su sigurne, licencirane i regulirane, uz dodatne pogodnosti poput bonusa dobrodošlice i besplatnih oklada. Bilo da podržavate domaće timove ili pratite svjetske hokejaške gigante poput Toronto Maple Leafsa ili Pittsburgh Penguinsa, naše platforme pružaju uzbudljivo iskustvo klađenja. Pronađite najbolju stranicu za hokejaško klađenje uz Klađenje Hrvatska!
                </p>
            </section>
        </motion.div>
    );
}

export default HockeyBetting;