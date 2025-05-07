import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import AgePopup from './components/AgePopup';
import Home from './pages/Home';
import MobileBetting from './pages/MobileBetting';
import FootballBetting from './pages/FootballBetting';
import BasketballBetting from './pages/BasketballBetting';
import HockeyBetting from './pages/HockeyBetting';
import TennisBetting from './pages/TennisBetting';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    const [showPopup, setShowPopup] = useState(true);

    const handleAgeConfirm = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showPopup]);

    return (
        <BrowserRouter>
            {showPopup && <AgePopup onConfirm={handleAgeConfirm} />}
            <div className={`flex flex-col min-h-screen bg-dark ${showPopup ? 'blurred' : ''}`}>
                <Header />
                <motion.main
                    className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mobile-betting" element={<MobileBetting />} />
                        <Route path="/football-betting" element={<FootballBetting />} />
                        <Route path="/basketball-betting" element={<BasketballBetting />} />
                        <Route path="/hockey-betting" element={<HockeyBetting />} />
                        <Route path="/tennis-betting" element={<TennisBetting />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </motion.main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
