import React from 'react';
import { motion } from 'framer-motion';

function Terms() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Uvjeti korištenja</h2>
            <div className="text-gray-300 leading-relaxed text-sm sm:text-base">
                <p className="mb-4">
                    Dobrodošli na Klađenje Hrvatska. Korištenjem ove web stranice pristajete na sljedeće uvjete korištenja. Ako se ne slažete s ovim uvjetima, molimo vas da ne koristite stranicu.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">1. Priroda usluge</h3>
                <p className="mb-4">
                    Klađenje Hrvatska je informativni resurs koji pruža informacije o legalnim platformama za klađenje u Hrvatskoj. Mi nismo operater klađenja i ne pružamo izravan pristup igrama na sreću. Sve informacije na stranici su samo za informativne svrhe.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">2. Dobna ograničenja</h3>
                <p className="mb-4">
                    Ova stranica namijenjena je samo osobama starijim od 18 godina. Pristupom stranici potvrđujete da imate najmanje 18 godina. Ne snosimo odgovornost za neovlašteno korištenje stranice od strane maloljetnika.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">3. Odgovornost korisnika</h3>
                <p className="mb-4">
                    Korisnici su odgovorni za provjeru zakonitosti klađenja u svojoj jurisdikciji. Preporučujemo da se kladite odgovorno i koristite samo licencirane platforme.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">4. Točnost informacija</h3>
                <p className="mb-4">
                    Iako nastojimo osigurati točnost svih informacija, ne možemo jamčiti da su sve informacije na stranici uvijek ažurirane ili potpune. Korisnici bi trebali provjeriti informacije izravno s platformama za klađenje.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">5. Promjene uvjeta</h3>
                <p className="mb-4">
                    Zadržavamo pravo izmjene ovih uvjeta u bilo kojem trenutku. Ažurirani uvjeti bit će objavljeni na ovoj stranici, a nastavak korištenja stranice smatrat će se prihvaćanjem novih uvjeta.
                </p>
                <p>
                    Za dodatna pitanja, kontaktirajte nas putem stranice za kontakt.
                </p>
            </div>
        </motion.div>
    );
}

export default Terms;