import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you. We have received your inquiry.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="pt-24 min-h-screen bg-cream">
            <section className="section">
                <div className="container">
                    <div className="grid lg-grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <p className="badge">Contact Us</p>
                            <h1 className="main-heading">Get in <span className="serif">Touch</span></h1>
                            <p className="hero-desc mb-12">Our specialists are ready to provide the assertive legal counsel you need.</p>

                            <div className="flex flex-col gap-8">
                                <div className="flex gap-6 items-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Call Us 24/7</h4>
                                        <p className="text-primary font-bold text-xl">1-800-LAW-HEAL</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Email Us</h4>
                                        <p className="text-muted">counsel@bizcomlegal.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Our Office</h4>
                                        <p className="text-muted">123 Justice Way, Suite 400<br />Central City, ST 12345</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="form-card"
                            style={{ backgroundColor: 'white', border: '1px solid rgba(0,0,0,0.05)' }}
                        >
                            <h2 className="text-2xl font-bold mb-6 text-dark">Send a Message</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="form-group">
                                    <label className="label text-dark">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="input"
                                        style={{ backgroundColor: '#f9fafb', color: 'black', borderColor: '#e5e7eb' }}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label text-dark">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="input"
                                        style={{ backgroundColor: '#f9fafb', color: 'black', borderColor: '#e5e7eb' }}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label text-dark">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="input"
                                        style={{ backgroundColor: '#f9fafb', color: 'black', borderColor: '#e5e7eb' }}
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label text-dark">Message</label>
                                    <textarea
                                        rows="4"
                                        required
                                        className="textarea"
                                        style={{ backgroundColor: '#f9fafb', color: 'black', borderColor: '#e5e7eb' }}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button className="btn btn-primary w-full py-4 text-lg">
                                    Send Message <ArrowRight className="ml-2" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
