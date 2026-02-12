import React, { useState, useEffect } from 'react';
import {
    Phone,
    ShieldCheck,
    Clock,
    CheckCircle2,
    AlertCircle,
    FileText,
    ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', issue: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submit:', formData);
        alert('Thank you. A specialist will call you within 15 minutes.');
        setFormData({ name: '', phone: '', issue: '' });
    };

    return (
        <>
            {/* New Redesigned Hero Section */}
            <section style={{ paddingTop: '40px', height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div className="hero-banner" style={{ flex: '0 0 55vh', backgroundImage: 'url("/lady-justice-statue.jpg")' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
                </div>

                <div className="hero-content-area flex-grow flex flex-col justify-center" style={{ backgroundColor: '#fcfbf7' }}>
                    <div className="container-full relative">
                        <div className="seal-badge">
                            <div className="seal-ring-outer">
                                <div className="seal-ring-inner">
                                    <img src="/logo-png.PNG" alt="BizCom Legal" className="seal-logo" />
                                    <span className="seal-inner-text-bottom">Defending Rights<br />Since 2010</span>
                                    <div style={{ marginTop: '0.25rem' }}>
                                        <ShieldCheck size={20} color="var(--primary)" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-grid">
                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="main-heading"
                                >
                                    Real Estate Law & <br />
                                    <span className="serif">Litigation Lawyers</span>
                                </motion.h1>
                                <div style={{ width: '40px', height: '1.5px', background: '#ccc', marginBottom: '0.5rem' }}></div>
                                <button className="btn-consult" style={{ marginTop: '0.25rem', padding: '0.6rem 1rem', fontSize: '0.8rem' }}>
                                    Book a Consultation <ArrowRight size={16} />
                                </button>
                            </div>
                            <div className="flex flex-col justify-end pb-2">
                                <motion.div
                                    initial={{ opacity: 0, x: 15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="hero-tagline"
                                >
                                    <span><span className="emphasize">Seamless</span> Closings.</span>
                                    <span><span className="emphasize">Assertive</span> Litigation.</span>
                                    <span><span className="emphasize">Expert</span> Counsel.</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Conversion Hero Section */}
            <section id="emergency" style={{ backgroundColor: '#020617', padding: '3rem 0', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <div className="grid-65-35 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="badge">
                                <Clock size={16} /> Immediate Action Required
                            </div>
                            <h2 className="hero-title" style={{ fontSize: '2.35rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                                Property crisis? <br />
                                <span className="text-gradient">
                                    Protect your assets immediately.
                                </span>
                            </h2>
                            <p className="hero-desc" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
                                Whether facing a contract breach or a title dispute, the hours before a closing are critical. We provide assertive counsel and immediate legal interventions for property owners.
                            </p>

                            <div style={{ background: 'rgba(30, 41, 59, 0.4)', border: '1px solid #334155', padding: '1.5rem', borderRadius: '1.5rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '-1rem', left: '1.5rem', background: 'var(--primary)', padding: '0.25rem 1rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                    Critical Advice
                                </div>
                                <h3 className="flex items-center gap-2 mb-3" style={{ fontSize: '1.1rem' }}>
                                    <AlertCircle className="text-secondary" style={{ color: 'var(--primary)' }} /> Immediate Steps to Take:
                                </h3>
                                <ul className="flex flex-col gap-3" style={{ listStyle: 'none' }}>
                                    {[
                                        "Do not sign any property releases or agreements under pressure.",
                                        "Document all communication with buyers, sellers, or brokers.",
                                        "Ask for a formal legal review of any last-minute contract changes.",
                                        "Call us now to halt unfair property seizures or breaches."
                                    ].map((step, i) => (
                                        <li key={i} className="flex gap-3" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                                            <CheckCircle2 className="shrink-0" size={16} style={{ color: '#10b981', marginTop: '3px' }} />
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="form-card"
                        >
                            <div className="mb-3">
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.15rem' }}>Get Instant Relief</h2>
                                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Tell us what's happening. We'll listen without judgment.</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label className="label">Your Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="input"
                                        style={{ padding: '0.65rem', fontSize: '0.9rem' }}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="label">Mobile Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="(555) 000-0000"
                                        className="input"
                                        style={{ padding: '0.65rem', fontSize: '0.9rem' }}
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="label">Briefly Describe the Property Issue</label>
                                    <textarea
                                        rows="2"
                                        required
                                        placeholder="e.g., Contract breach, closing dispute..."
                                        className="textarea"
                                        style={{ padding: '0.65rem', fontSize: '0.9rem' }}
                                        value={formData.issue}
                                        onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                                    ></textarea>
                                </div>
                                <button className="btn btn-primary w-full" style={{ background: 'var(--primary)', padding: '0.85rem', fontSize: '0.95rem', border: 'none' }}>
                                    Request Emergency Callback
                                </button>
                                <p style={{ textAlign: 'center', fontSize: '0.65rem', color: '#64748b', marginTop: '0.75rem' }}>
                                    Your information is subject to attorney-client privilege.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Knowledge Center Section */}
            <section id="knowledge-center" className="section bg-cream" style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div className="mb-12">
                        <p style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Intelligence Collection</p>
                        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '1', marginBottom: '1.5rem', color: 'var(--text)' }}>
                            Knowledge<br />
                            <span style={{ color: 'var(--primary)' }}>Center</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '400px', fontSize: '0.95rem', lineHeight: '1.6' }}>
                            Access our exclusive legal frameworks for high-stakes property transactions and complex litigation.
                        </p>
                    </div>

                    <div className="grid md-grid-cols-12 gap-8">
                        <div className="md-col-span-12 lg-col-span-7">
                            <div className="featured-protocol-card">
                                <p className="featured-tag">FEATURED INTELLIGENCE</p>
                                <h3 className="featured-title">The Master<br />Transaction<br />Protocol</h3>
                                <p className="featured-desc">
                                    A definitive legal framework for residential and commercial acquisitions, integrated with rigorous risk detection protocols.
                                </p>
                                <button className="btn-download">
                                    DOWNLOAD COLLECTION <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="md-col-span-12 lg-col-span-5 flex flex-col gap-6">
                            <div className="mini-intel-card">
                                <div className="intel-icon">
                                    <FileText size={20} />
                                </div>
                                <div className="intel-content">
                                    <h4>Asset Due Diligence</h4>
                                    <p>14-point specialist audit for property investments.</p>
                                </div>
                            </div>
                            <div className="mini-intel-card">
                                <div className="intel-icon">
                                    <ShieldCheck size={20} />
                                </div>
                                <div className="intel-content">
                                    <h4>Litigation Strategy</h4>
                                    <p>Frameworks for zoning and title dispute resolution.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Firm Authority Section */}
            <section id="firm-authority" className="section bg-dark-section" style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div className="grid md-grid-cols-2 gap-16 items-start">
                        <div>
                            <p style={{ color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1.5rem', borderLeft: '2px solid var(--primary)', paddingLeft: '1rem' }}>FIRM AUTHORITY</p>
                            <div style={{ marginBottom: '3rem' }}>
                                <div className="authority-main-stat">15m</div>
                                <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>Average Response Time</h3>
                                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', maxWidth: '480px' }}>
                                    In Real Estate, timing is everything. Our "Rapid Action" protocol ensures that every client receives expert counsel when it matters most—before the window of opportunity closes.
                                </p>
                            </div>

                            <div className="flex flex-col gap-8">
                                <div className="stat-item">
                                    <div className="stat-val">$2B+</div>
                                    <div className="stat-lab">ASSET VALUE</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-val">1k+</div>
                                    <div className="stat-lab">CASES WON</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="authority-testimonial">
                                <p className="testimonial-quote">
                                    "The closing was falling apart due to a last-minute title issue. They cleared the lien in 24 hours. Pure excellence."
                                </p>
                                <div className="testimonial-meta">
                                    <span className="initials">DS</span>
                                    <div>
                                        <div className="name">DAVID S.</div>
                                        <div className="role">Commercial Developer</div>
                                    </div>
                                </div>
                            </div>

                            <div className="authority-testimonial">
                                <p className="testimonial-quote">
                                    "Their litigation team is assertive and achieved exactly what we needed in a complex zoning dispute."
                                </p>
                                <div className="testimonial-meta">
                                    <span className="initials">LM</span>
                                    <div>
                                        <div className="name">LINDA M.</div>
                                        <div className="role">Property Investor</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
