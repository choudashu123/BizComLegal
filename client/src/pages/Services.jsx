import React from 'react';
import { ArrowRight, ShieldCheck, FileText, Home, Briefcase, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        { icon: <Building size={32} />, title: "Commercial Real Estate", desc: "Complex lease negotiations, acquisitions, and development projects." },
        { icon: <Home size={32} />, title: "Residential Property", desc: "Seamless closings and settlements for homeowners and investors." },
        { icon: <ShieldCheck size={32} />, title: "Property Litigation", desc: "Assertive representation in title disputes and contract breaches." },
        { icon: <FileText size={32} />, title: "Zoning & Land Use", desc: "Expert guidance through regulatory frameworks and advocacy." },
        { icon: <Briefcase size={32} />, title: "Real Estate Finance", desc: "Strategic counsel for lenders and borrowers in property financing." },
        { icon: <ShieldCheck size={32} />, title: "Construction Law", desc: "Defending rights in construction disputes and agreements." },
    ];

    return (
        <div className="pt-24 min-h-screen bg-cream">
            <section className="section">
                <div className="container">
                    <div className="text-center mb-16">
                        <p className="badge">Our Expertise</p>
                        <h1 className="main-heading">Comprehensive <span className="serif">Legal Services</span></h1>
                        <p className="hero-desc mx-auto">Elite representation across all sectors of real estate law.</p>
                    </div>

                    <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="card"
                                style={{ backgroundColor: 'white', color: 'var(--text)' }}
                            >
                                <div className="text-primary mb-6">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-muted text-sm leading-relaxed mb-6">{service.desc}</p>
                                <button className="flex items-center gap-2 text-primary font-bold text-sm uppercase letter-spacing-widest">
                                    Learn More <ArrowRight size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
