import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-24 min-h-screen bg-cream">
            <section className="section">
                <div className="container">
                    <div className="grid md-grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <p className="badge">Our Legacy</p>
                            <h1 className="main-heading">
                                Dedicated to <span className="serif">Real Estate Law</span>
                            </h1>
                            <p className="hero-desc">
                                Since 2010, BizCom Legal has been at the forefront of real estate litigation and transactions. We specialize in high-stakes cases where precision and assertiveness are paramount.
                            </p>
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="flex gap-4 items-start">
                                    <ShieldCheck className="text-primary mt-1" />
                                    <div>
                                        <h3 className="font-bold">Protecting Your Assets</h3>
                                        <p className="text-muted text-sm">Rigorous due diligence for every transaction.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <ShieldCheck className="text-primary mt-1" />
                                    <div>
                                        <h3 className="font-bold">Assertive Litigation</h3>
                                        <p className="text-muted text-sm">Unwavering defense in property disputes.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="relative">
                            <img src="/lady-justice-statue.jpg" alt="About BizCom Legal" className="rounded-2xl shadow-2xl" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
