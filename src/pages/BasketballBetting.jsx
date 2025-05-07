import React from 'react';
import { motion } from 'framer-motion';
import BrandCard from '../components/BrandCard';
import { brands } from '../data/brands';
import HeroSection from '../components/HeroSection';

function BasketballBetting() {
    const shuffledBrands = [...brands].sort(() => Math.random() - 0.5);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <HeroSection />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">Preporučene platforme za košarku</h2>
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
                <h3 className="text-xl sm:text-2xl font-semibold text-casino-gold mb-4">Košarkaško klađenje u Hrvatskoj</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Košarka je jedan od najpopularnijih sportova za klađenje u Hrvatskoj, posebno zahvaljujući uspjesima hrvatskih klubova i reprezentacije. Naše preporučene platforme nude širok izbor oklada na domaće lige, poput Premijer lige, te na međunarodne turnire kao što su Euroliga, NBA i svjetska prvenstva. Možete se kladiti na različite ishode, uključujući pobjednika utakmice, ukupan broj poena, individualne učinke igrača i više. Platforme pružaju konkurentne koeficijente i mogućnost klađenja uživo, omogućujući vam da pratite utakmice i reagirate na ključne trenutke. Detaljne statistike, prijenosi uživo i analize dostupne su kako biste donosili informirane odluke. Sve platforme su licencirane i regulirane, osiguravajući sigurnost vaših podataka i sredstava. Uz bonuse poput besplatnih oklada i povrata novca, košarkaško klađenje postaje još uzbudljivije. Bilo da podržavate Cedevitu, Cibonu ili svjetske gigante poput Lakersa i Celticsa, naše platforme nude vrhunsko iskustvo klađenja. Pronađite najbolju stranicu za košarkaško klađenje s Klađenje Hrvatska!
                </p>
            </section>
        </motion.div>
    );
}

export default BasketballBetting;