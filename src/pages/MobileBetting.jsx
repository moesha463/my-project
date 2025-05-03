import React from 'react';
import { motion } from 'framer-motion';
import BrandCard from '../components/BrandCard';
import { brands } from '../data/brands';
import HeroSection from '../components/HeroSection';

function MobileBetting() {
    const shuffledBrands = [...brands].sort(() => Math.random() - 0.5);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <HeroSection />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">Preporučene mobilne platforme</h2>
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
                <h3 className="text-xl sm:text-2xl font-semibold text-casino-gold mb-4">Mobilno klađenje u Hrvatskoj</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Mobilno klađenje revolucioniralo je način na koji igrači pristupaju sportskim okladama i casino igrama. Uz najbolje mobilne platforme za klađenje u Hrvatskoj, možete se kladiti bilo gdje i bilo kada, koristeći svoje pametne telefone ili tablete. Sve platforme koje preporučujemo optimizirane su za mobilne uređaje, nudeći intuitivna sučelja, brzo učitavanje i sigurne transakcije. Bilo da preferirate klađenje uživo na nogometne utakmice ili igranje casino igara poput ruleta i slotova, ove platforme pružaju besprijekorno iskustvo. Mobilne aplikacije često dolaze s dodatnim značajkama, poput push obavijesti o novim promocijama ili live streaminga utakmica. Naše preporučene stranice podržavaju različite operativne sustave, uključujući iOS i Android, osiguravajući kompatibilnost s većinom uređaja. Sigurnost je prioritet, pa sve platforme koriste naprednu enkripciju za zaštitu vaših podataka i transakcija. Osim toga, mobilne platforme nude iste bonuse i promocije kao i desktop verzije, uključujući bonuse dobrodošlice, besplatne vrtnje i povrat novca. Naša misija je pomoći vam pronaći najbolje mobilne stranice za klađenje koje zadovoljavaju vaše potrebe, bilo da ste početnik ili iskusni igrač. Pronađite platformu koja vam najviše odgovara i uživajte u fleksibilnosti mobilnog klađenja uz Klađenje Hrvatska!
                </p>
            </section>
        </motion.div>
    );
}
export default MobileBetting;