import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">O nama</h2>
            <div className="text-gray-300 leading-relaxed text-sm sm:text-base">
                <p className="mb-4">
                    Klađenje Hrvatska je vodeći informativni resurs posvećen pružanju najtočnijih i najnovijih informacija o legalnim platformama za klađenje u Hrvatskoj. Naša misija je pomoći igračima da donesu informirane odluke pružajući detaljne preglede, usporedbe i savjete o najboljim stranicama za sportske oklade i casino igre.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">Tko smo mi?</h3>
                <p className="mb-4">
                    Naš tim sastoji se od stručnjaka za klađenje i entuzijasta koji imaju godine iskustva u industriji igara na sreću. Strastveni smo u pomaganju igračima da pronađu sigurne, pouzdane i zabavne platforme za klađenje. Surađujemo s licenciranim operaterima kako bismo osigurali da sve naše preporuke zadovoljavaju najviše standarde kvalitete i sigurnosti.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">Naša obveza</h3>
                <p className="mb-4">
                    Ne pružamo izravan pristup igrama na sreću niti djelujemo kao operater klađenja. Umjesto toga, fokusiramo se na pružanje objektivnih informacija koje pomažu igračima da donesu najbolje odluke. Promičemo odgovorno klađenje i surađujemo s organizacijama poput GambleAware kako bismo osigurali da naši korisnici imaju pristup resursima za sigurno klađenje.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-casino-gold mb-2">Zašto odabrati nas?</h3>
                <p className="mb-4">
                    S našim detaljnim pregledima, ažuriranim informacijama i posvećenošću transparentnosti, Klađenje Hrvatska je vaš partner u svijetu klađenja. Bilo da ste početnik ili iskusni igrač, naš cilj je učiniti vaše iskustvo klađenja što ugodnijim i sigurnijim.
                </p>
                <p>
                    Pridružite se našoj zajednici i otkrijte najbolje platforme za klađenje u Hrvatskoj uz Klađenje Hrvatska!
                </p>
            </div>
        </motion.div>
    );
}

export default About;