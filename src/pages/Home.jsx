import React from 'react';
import { motion } from 'framer-motion';
import BrandCard from '../components/BrandCard';
import { brands } from '../data/brands';
import HeroSection from '../components/HeroSection';

function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <HeroSection />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">Preporučene platforme</h2>
            <div className="flex flex-col gap-6 mb-12">
                {brands.map((brand, index) => (
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
                <h3 className="text-xl sm:text-2xl font-semibold text-casino-gold mb-4">Zašto odabrati naše preporuke?</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Dobrodošli na Klađenje Hrvatska, vaš pouzdani vodič kroz svijet legalnog klađenja u Hrvatskoj. Naš tim stručnjaka pomno je analizirao najbolje platforme za sportske oklade i casino igre kako bismo vam pružili samo najbolje opcije. Sve platforme koje preporučujemo licencirane su i regulirane od strane hrvatskih vlasti, osiguravajući sigurnost i transparentnost. Bez obzira jeste li ljubitelj nogometnih oklada, košarke ili uzbudljivih casino igara, naše preporuke su pažljivo odabrane kako bi zadovoljile različite potrebe igrača. Nudimo detaljne informacije o bonusima dobrodošlice, korisničkoj podršci, mobilnim aplikacijama i metodama plaćanja, pomažući vam da donesete informiranu odluku. Naša misija je jednostavna: pružiti vam sve potrebne informacije na jednom mjestu, uz naglasak na odgovorno klađenje. Osim toga, redovito ažuriramo naše preporuke kako bismo osigurali da uvijek imate pristup najnovijim ponudama i platformama. Klađenje bi trebalo biti zabavno i sigurno iskustvo, a mi smo tu da vam pomognemo u tome. Uz Klađenje Hrvatska, možete biti sigurni da birate platforme koje nude vrhunsku uslugu, brze isplate i atraktivne promocije. Pridružite se tisućama zadovoljnih igrača koji koriste naše preporuke za svoje klađenje i otkrijte zašto smo najbolji izbor za sve ljubitelje sportskih oklada i casino igara u Hrvatskoj. Ako imate bilo kakva pitanja ili trebate dodatne informacije, naš tim je uvijek dostupan putem kontakt stranice. Započnite svoje klađenje s povjerenjem uz Klađenje Hrvatska!
                </p>
            </section>
        </motion.div>
    );
}

export default Home;