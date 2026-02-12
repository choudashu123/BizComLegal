import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import {
    Phone,
    MessageCircle,
    ShieldCheck,
    Menu,
    X,
    ArrowRight,
    ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
    }, [location]);

    const expertiseSectors = [
        "Residential Property", "Commercial Real Estate", "Real Estate Investment Trusts", "Hospitality",
        "Retail & Logistics", "Infrastructure", "Industrial Developments", "Healthcare Facilities",
        "Public-Private Partnerships", "Construction", "Urban Development", "Mixed-Use Projects"
    ];

    const expertiseServices = [
        "Conveyancing & Settlements", "Lease Negotiations", "Zoning & Land Use", "Property Litigation",
        "Real Estate Finance", "Title Disputes & Insurance", "Construction Law", "Tax Appeals",
        "Eminent Domain", "Environmental Compliance", "Joint Ventures", "Property Management Law",
        "Foreclosure Defense", "Landlord-Tenant Disputes", "Closing Services", "Due Diligence",
        "Easements & Rights of Way", "Brokerage Representation", "Development Agreements"
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#fcfbf7' }}>
            {/* Redesigned Navbar */}
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{ position: 'fixed', padding: isScrolled ? '0.1rem 0' : '0.3rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="container flex justify-between items-center">
                    <Link to="/" className="brand">
                        <img src="/logo-png.PNG" alt="BizCom Legal Logo" />
                    </Link>

                    <div className="nav-links flex items-center gap-8">
                        <Link to="/about" className="nav-link">Our People</Link>
                        <div className="dropdown">
                            <span className="nav-link dropdown-trigger">
                                Expertise <ChevronDown size={14} className="chevron" />
                            </span>
                            <div className="dropdown-content mega-menu" style={{ color: 'white' }}>
                                <div className="mega-title-row">
                                    <h2 className="mega-main-title">Sectors & services</h2>
                                </div>
                                <div className="mega-column">
                                    <h3 className="mega-column-title">SECTORS</h3>
                                    <div className="mega-list">
                                        {expertiseSectors.map((sector, i) => (
                                            <Link key={i} to="/services" className="mega-item">
                                                <ArrowRight size={12} className="mega-chevron" /> {sector}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="mega-column-services">
                                    <h3 className="mega-column-title">SERVICES</h3>
                                    <div className="mega-list">
                                        {expertiseServices.map((service, i) => (
                                            <Link key={i} to="/services" className="mega-item">
                                                <ArrowRight size={12} className="mega-chevron" /> {service}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/services" className="nav-link">Services</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                        <Link to="/contact" className="btn btn-talk" style={{ backgroundColor: 'var(--primary)', color: 'white', fontWeight: 'bold' }}>TALK TO US</Link>
                    </div>

                    <button className="md-hidden" style={{ background: 'none', border: 'none', color: '#1a1a1a' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-dark pt-24 px-6 md-hidden"
                        style={{ backgroundColor: '#020617', paddingTop: '6rem' }}
                    >
                        <div className="flex flex-col gap-6" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                            <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Practice Areas</Link>
                            <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
                            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
                            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                            <a href="tel:1-800-LAW-HEAL" className="btn btn-primary py-4">
                                <Phone /> Call 24/7
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            {/* Footer */}
            <footer className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#000', color: 'white' }}>
                <div className="container">
                    <div className="grid md-grid-cols-3 gap-12">
                        <div>
                            <div className="brand mb-6" style={{ height: '32px' }}>
                                <img src="/logo-png.PNG" alt="BizCom Legal Logo" style={{ height: '100%', width: 'auto' }} />
                                <span style={{ marginLeft: '1rem', fontWeight: 'bold', fontSize: '1.25rem', color: 'white' }}>BIZCOM LEGAL</span>
                            </div>
                            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                                Elite real estate representation for investors, developers, and homeowners. Protecting your assets with rigorous due diligence and assertive litigation.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Quick Links</h4>
                            <ul className="flex flex-col gap-4" style={{ listStyle: 'none', color: '#94a3b8' }}>
                                <li><Link to="/services" className="nav-link" style={{ color: '#94a3b8' }}>Practice Areas</Link></li>
                                <li><Link to="/services" className="nav-link" style={{ color: '#94a3b8' }}>Service Hub</Link></li>
                                <li><Link to="/about" className="nav-link" style={{ color: '#94a3b8' }}>Our Attorneys</Link></li>
                                <li><Link to="/contact" className="nav-link" style={{ color: '#94a3b8' }}>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Contact Us</h4>
                            <div className="flex flex-col gap-4">
                                <a href="tel:1-800-LAW-HEAL" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', textDecoration: 'none' }}>
                                    <Phone /> 1-800-LAW-HEAL
                                </a>
                                <p style={{ color: '#94a3b8' }}>
                                    123 Justice Way, Suite 400<br />
                                    Central City, ST 12345
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
                        © {new Date().getFullYear()} BizCom Legal. All rights reserved. Attorney Advertising.
                    </div>
                </div>
            </footer>

            {/* WhatsApp Floating Bubble */}
            <a href="https://wa.me/1-800-LAW-HEAL" className="whatsapp-bubble">
                <MessageCircle size={32} />
                <span style={{ position: 'absolute', top: '-0.25rem', right: '-0.25rem', height: '1rem', width: '1rem', display: 'flex' }}>
                    <span style={{ position: 'absolute', height: '100%', width: '100%', borderRadius: '9999px', background: '#f87171', opacity: 0.75 }}></span>
                    <span style={{ position: 'relative', height: '100%', width: '100%', borderRadius: '9999px', background: '#ef4444' }}></span>
                </span>
            </a>
        </div>
    );
};

export default App;
