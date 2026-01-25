import Link from 'next/link';
import { ArrowRight, Wheat, Factory, Building2, Ship, Plane, Heart, Car, Sparkles, Globe, Shield, Award, Users, TrendingUp, MapPin, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const subsidiaries = [
    {
        id: 'farm-products',
        name: 'Farm Products',
        description: 'Premium livestock trading including cows, pigs, and goats. Sustainable farming practices with a focus on quality and scale.',
        icon: Wheat,
        color: '#7c9a6d',
    },
    {
        id: 'plastic-rubber',
        name: 'Plastic & Rubber Production',
        description: 'Industrial-grade manufacturing with international quality standards and cutting-edge production facilities.',
        icon: Factory,
        color: '#5a7a8a',
    },
    {
        id: 'real-estate',
        name: 'Real Estate Development',
        description: 'Premium residential and commercial property development across strategic locations in Ghana.',
        icon: Building2,
        color: '#a67c52',
    },
    {
        id: 'logistics',
        name: 'International Logistics',
        description: 'Reliable China ↔ Ghana trade routes with comprehensive shipping and logistics solutions.',
        icon: Ship,
        color: '#4a7c9a',
    },
    {
        id: 'travel-tour',
        name: 'Y.S. Tetteh Travel & Tour',
        description: 'Specialized China visa processing and travel services with proven expertise and client satisfaction.',
        icon: Plane,
        color: '#9a6a7c',
    },
    {
        id: 'charity',
        name: 'Y.S. Tetteh Charity Foundation',
        description: 'Community-focused initiatives creating lasting impact in education, health, and social development.',
        icon: Heart,
        color: '#c97a5a',
    },
    {
        id: 'air-garage',
        name: 'Y.S. Tetteh Air Garage',
        description: 'Professional tyre services including vulcanizing, inspection, patching, replacement, and balancing.',
        icon: Car,
        color: '#6a6a6a',
    },
    {
        id: 'beauty-salon',
        name: 'Obaapa Beauty Salon',
        description: 'Premium beauty and wellness services delivered in an elegant, world-class environment.',
        icon: Sparkles,
        color: '#d4a5a5',
    },
];

const industries = [
    { name: 'Agriculture', icon: Wheat },
    { name: 'Manufacturing', icon: Factory },
    { name: 'Real Estate', icon: Building2 },
    { name: 'Logistics', icon: Ship },
    { name: 'Travel & Tourism', icon: Plane },
    { name: 'Charity', icon: Heart },
    { name: 'Automotive', icon: Car },
    { name: 'Beauty & Wellness', icon: Sparkles },
];

const strengths = [
    {
        title: 'Scale',
        description: 'Operating across 8 diverse business sectors with proven track record',
        icon: TrendingUp,
    },
    {
        title: 'Reliability',
        description: 'Decades of trust built through consistent delivery and excellence',
        icon: Shield,
    },
    {
        title: 'Experience',
        description: 'Deep market knowledge across Ghana and international markets',
        icon: Award,
    },
    {
        title: 'Global Partnerships',
        description: 'Strategic China-Ghana operations with established trade networks',
        icon: Globe,
    },
];

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
                    <div className="absolute inset-0 opacity-10">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkyMzc2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Corporate building"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-[#c9a961]/10 border border-[#c9a961]/30 text-[#c9a961] text-sm tracking-widest">
                            DIVERSIFIED GROUP OF COMPANIES
                        </span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl text-white mb-6 tracking-tight leading-tight">
                        Y.S. Tetteh Prime
                        <br />
                        <span className="text-[#c9a961]">Limited Company</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                        A premier African-owned conglomerate delivering excellence across agriculture,
                        manufacturing, logistics, real estate, and service industries.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/about"
                            className="px-8 py-4 bg-[#c9a961] text-[#1a1a1a] hover:bg-[#d4b56f] transition-colors flex items-center justify-center gap-2 group"
                        >
                            Explore Our Companies
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:border-[#c9a961] hover:text-[#c9a961] transition-colors"
                        >
                            Contact Group Office
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-[#c9a961] rounded-full animate-bounce" />
                    </div>
                </div>
            </section>

            {/* Subsidiaries Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                            OUR PORTFOLIO
                        </span>
                        <h2 className="text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
                            Diversified Business Excellence
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Eight distinct companies unified under one vision of operational excellence
                            and sustainable growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {subsidiaries.map((subsidiary) => {
                            const Icon = subsidiary.icon;
                            return (
                                <Link
                                    key={subsidiary.id}
                                    href={`/subsidiaries/${subsidiary.id}`}
                                    className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 text-left group hover:-translate-y-1"
                                    style={{
                                        borderTopColor: subsidiary.color,
                                        borderTopWidth: '3px',
                                    }}
                                >
                                    <div
                                        className="w-14 h-14 mb-6 flex items-center justify-center transition-colors"
                                        style={{
                                            backgroundColor: `${subsidiary.color}15`,
                                        }}
                                    >
                                        <Icon
                                            className="w-7 h-7"
                                            style={{ color: subsidiary.color }}
                                        />
                                    </div>
                                    <h3 className="text-lg text-[#1a1a1a] mb-3 group-hover:text-[#c9a961] transition-colors">
                                        {subsidiary.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        {subsidiary.description}
                                    </p>
                                    <div
                                        className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all"
                                        style={{ color: subsidiary.color }}
                                    >
                                        Learn more
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industries We Operate In */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                            SECTORS
                        </span>
                        <h2 className="text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
                            Industries We Operate In
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {industries.map((industry) => {
                            const Icon = industry.icon;
                            return (
                                <div
                                    key={industry.name}
                                    className="bg-white p-8 text-center hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-16 h-16 bg-[#c9a961]/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-[#c9a961]/20 transition-colors">
                                        <Icon className="w-8 h-8 text-[#c9a961]" />
                                    </div>
                                    <h3 className="text-sm text-[#1a1a1a]">{industry.name}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Chairman's Message */}
            <section className="py-24 bg-[#1a1a1a] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                                LEADERSHIP
                            </span>
                            <h2 className="text-4xl lg:text-5xl mb-8">Chairman's Message</h2>
                            <div className="space-y-6 text-white/80 leading-relaxed">
                                <p>
                                    "Building Y.S. Tetteh Prime Limited has been a journey of vision,
                                    perseverance, and unwavering commitment to excellence. From our humble
                                    beginnings to becoming a diversified group operating across multiple
                                    continents, we have remained true to our core values."
                                </p>
                                <p>
                                    "Our success is built on trust, integrity, and the dedication of our
                                    people. As we continue to expand our footprint across Ghana and China,
                                    we remain committed to creating value for our stakeholders, empowering
                                    communities, and setting new standards of excellence in every industry
                                    we serve."
                                </p>
                                <p>
                                    "The future holds tremendous opportunities, and we are well-positioned
                                    to capitalize on them while staying true to the principles that have
                                    guided us from the beginning."
                                </p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <div className="text-xl mb-1">Y.S. Tetteh</div>
                                <div className="text-[#c9a961] text-sm tracking-widest">
                                    CHAIRMAN & FOUNDER
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="aspect-[4/5] bg-gradient-to-br from-[#c9a961] to-[#a68751] p-1">
                                    <ImageWithFallback
                                        src="https://images.unsplash.com/photo-1745174837801-b7f37abe9d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5MjgwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                        alt="Chairman Y.S. Tetteh"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#c9a961]/10 -z-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Operations */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                            INTERNATIONAL REACH
                        </span>
                        <h2 className="text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
                            Global Operations
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Connecting markets across continents with strategic operations in Ghana
                            and China.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="relative h-96 bg-gray-100">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1567619863607-cb9e8f595a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMG5ldHdvcmt8ZW58MXx8fHwxNzY5MjQzMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Global network"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-[#c9a961]" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-[#1a1a1a] mb-2">Ghana Operations</h3>
                                    <p className="text-gray-600">
                                        Comprehensive business operations across agriculture, manufacturing,
                                        real estate, and services throughout Ghana.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-6 h-6 text-[#c9a961]" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-[#1a1a1a] mb-2">China Partnerships</h3>
                                    <p className="text-gray-600">
                                        Strategic logistics network and trade partnerships facilitating
                                        seamless China-Ghana business operations.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                                    <Ship className="w-6 h-6 text-[#c9a961]" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-[#1a1a1a] mb-2">Trade Logistics</h3>
                                    <p className="text-gray-600">
                                        Established shipping routes and customs expertise ensuring reliable
                                        international trade operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Y.S. Tetteh Prime */}
            <section className="py-24 bg-[#2a2a2a] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                            OUR STRENGTHS
                        </span>
                        <h2 className="text-4xl lg:text-5xl mb-6">Why Y.S. Tetteh Prime</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {strengths.map((strength) => {
                            const Icon = strength.icon;
                            return (
                                <div key={strength.title} className="text-center">
                                    <div className="w-16 h-16 bg-[#c9a961]/10 mx-auto mb-6 flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-[#c9a961]" />
                                    </div>
                                    <h3 className="text-xl mb-4">{strength.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        {strength.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-gradient-to-br from-[#c9a961] to-[#a68751]">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
                        Partner With Excellence
                    </h2>
                    <p className="text-xl text-[#1a1a1a]/80 mb-12 leading-relaxed">
                        Explore opportunities to work with Y.S. Tetteh Prime Limited Company across
                        our diverse portfolio of businesses.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors flex items-center justify-center gap-2"
                        >
                            Get In Touch
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/careers"
                            className="px-8 py-4 bg-transparent border-2 border-[#1a1a1a]/30 text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors"
                        >
                            View Careers
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
