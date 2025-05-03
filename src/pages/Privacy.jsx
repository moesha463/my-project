import React from 'react';
import { motion } from 'framer-motion';

function Privacy() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Politika privatnosti</h2>
            <div className="text-gray-300 leading-relaxed text-sm sm:text-base">
                <p className="mb-4">
                    Na Klađenje Hrvatska ozbiljno shvaćamo vašu privatnost. Ova politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše podatke.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">1. Prikupljanje podataka</h3>
                <p className="mb-4">
                    Ne prikupljamo osobne podatke osim ako ih dobrovoljno ne pružite putem kontakt obrasca. Možemo prikupljati neosobne podatke, poput podataka o pregledavanju, putem kolačića.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">2. Korištenje kolačića</h3>
                <p className="mb-4">
                    Koristimo kolačiće za poboljšanje korisničkog iskustva, analizu prometa i prilagodbu sadržaja. Možete upravljati postavkama kolačića u svom pregledniku.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">3. Dijeljenje podataka</h3>
                <p className="mb-4">
                    Ne prodajemo niti dijelimo vaše podatke s trećim stranama, osim ako to nije potrebno za pružanje usluga ili je zakonski obvezno.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">4. Sigurnost podataka</h3>
                <p className="mb-4">
                    Koristimo standardne sigurnosne mjere za zaštitu vaših podataka. Međutim, nijedan prijenos podataka putem interneta nije potpuno siguran.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">5. Vaša prava</h3>
                <p className="mb-4">
                    U skladu s GDPR-om, imate pravo na pristup, ispravak ili brisanje svojih podataka. Kontaktirajte nas za više informacija.
                </p>
                <p>
                    Ako imate pitanja o našoj politici privatnosti, obratite se putem stranice za kontakt.
                </p>
            </div>
        </motion.div>
    );
}

export default Privacy;