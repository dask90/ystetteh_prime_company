"use client";

import { MapPin, Phone, Mail, Clock, Send, Building2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subsidiary: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your message. We will respond within 24 hours.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            subsidiary: '',
            message: '',
        });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const subsidiaries = [
        'General Inquiry',
        'Farm Products',
        'Plastic & Rubber Production',
        'Real Estate Development',
        'International Logistics',
        'Travel & Tour',
        'Charity Foundation',
        'Air Garage',
        'Obaapa Beauty Salon',
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="relative py-24 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                        GET IN TOUCH
                    </span>
                    <h1 className="text-5xl lg:text-6xl mb-6">Contact Us</h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        We're here to answer your questions and discuss opportunities for
                        collaboration.
                    </p>
                </div>
            </section>

            {/* Contact Information & Form */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-8">
                            <div>
                                <h2 className="text-2xl text-[#1a1a1a] mb-8">Contact Information</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                                        <Building2 className="w-6 h-6 text-[#c9a961]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm text-[#c9a961] mb-1">Group Head Office</h3>
                                        <p className="text-gray-700">
                                            Y.S. Tetteh Prime Limited
                                            <br />
                                            Accra, Ghana
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-[#c9a961]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm text-[#c9a961] mb-1">Phone</h3>
                                        <p className="text-gray-700">+233 XX XXX XXXX</p>
                                        <p className="text-gray-700">+233 XX XXX XXXX</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-[#c9a961]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm text-[#c9a961] mb-1">Email</h3>
                                        <p className="text-gray-700">info@ystettehprime.com</p>
                                        <p className="text-gray-700">contact@ystettehprime.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-[#c9a961]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm text-[#c9a961] mb-1">Business Hours</h3>
                                        <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                        <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                                        <p className="text-gray-700">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8">
                                <div className="aspect-video bg-gray-100 flex items-center justify-center border border-gray-200">
                                    <MapPin className="w-12 h-12 text-[#c9a961]" />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center">
                                    View on Google Maps
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-gray-50 p-8 lg:p-12">
                                <h2 className="text-2xl text-[#1a1a1a] mb-2">Send us a Message</h2>
                                <p className="text-gray-600 mb-8">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm text-gray-700 mb-2"
                                            >
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm text-gray-700 mb-2"
                                            >
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm text-gray-700 mb-2"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors"
                                                placeholder="+233 XX XXX XXXX"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="company"
                                                className="block text-sm text-gray-700 mb-2"
                                            >
                                                Company/Organization
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors"
                                                placeholder="Your company"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subsidiary"
                                            className="block text-sm text-gray-700 mb-2"
                                        >
                                            Which company are you interested in? *
                                        </label>
                                        <select
                                            id="subsidiary"
                                            name="subsidiary"
                                            required
                                            value={formData.subsidiary}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors"
                                        >
                                            <option value="">Select a company</option>
                                            {subsidiaries.map((sub) => (
                                                <option key={sub} value={sub}>
                                                    {sub}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm text-gray-700 mb-2"
                                        >
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#c9a961] focus:outline-none transition-colors resize-none"
                                            placeholder="Tell us about your inquiry..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full md:w-auto px-8 py-4 bg-[#c9a961] text-[#1a1a1a] hover:bg-[#d4b56f] transition-colors flex items-center justify-center gap-2"
                                    >
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subsidiary Contacts */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                            DIRECT CONTACTS
                        </span>
                        <h2 className="text-4xl text-[#1a1a1a] mb-4">
                            Contact Our Subsidiaries Directly
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            For specific inquiries, you can reach out directly to individual business
                            units
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                name: 'Farm Products',
                                email: 'farm@ystettehprime.com',
                                phone: '+233 XX XXX XXXX',
                            },
                            {
                                name: 'Plastic & Rubber',
                                email: 'manufacturing@ystettehprime.com',
                                phone: '+233 XX XXX XXXX',
                            },
                            {
                                name: 'Real Estate',
                                email: 'realestate@ystettehprime.com',
                                phone: '+233 XX XXX XXXX',
                            },
                            {
                                name: 'Logistics',
                                email: 'logistics@ystettehprime.com',
                                phone: '+233 XX XXX XXXX',
                            },
                            {
                                name: 'Travel & Tour',
                                email: 'travel@ystettehprime.com',
                                phone: '+233 XX XXX XXXX',
                            },
                            {
                                name: 'Charity Foundation',
                                email: 'charity@ystettehprime.com',
                                phone: '+233 XX XXX XXXX',
                            },
                            {
                                name: 'Air Garage',
                                email: 'garage@ystettehprime.com',
                                phone: '+233 XX XXX XXXX',
                            },
                            {
                                name: 'Obaapa Beauty',
                                email: 'beauty@ystettehprime.com',
                                phone: '+233 XX XXX XXXX',
                            },
                        ].map((subsidiary) => (
                            <div
                                key={subsidiary.name}
                                className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-lg text-[#1a1a1a] mb-4">{subsidiary.name}</h3>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-[#c9a961] flex-shrink-0" />
                                        <span className="break-all">{subsidiary.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-[#c9a961] flex-shrink-0" />
                                        <span>{subsidiary.phone}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
