import { Mail, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export default function LeadershipPage() {
    const boardMembers = [
        {
            name: 'Emmanuel K. Osei',
            position: 'Board Member - Finance',
            image: 'https://images.unsplash.com/photo-1763739528307-ad10867048b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjkyODA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            bio: 'Over 20 years of financial leadership experience',
        },
        {
            name: 'Dr. Abena Mensah',
            position: 'Board Member - Strategy',
            image: 'https://images.unsplash.com/photo-1745174837801-b7f37abe9d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5MjgwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            bio: 'Strategic advisor with expertise in corporate development',
        },
        {
            name: 'Kwame Asante',
            position: 'Board Member - Operations',
            image: 'https://images.unsplash.com/photo-1763739528307-ad10867048b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjkyODA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            bio: 'Operational excellence expert with international experience',
        },
        {
            name: 'Grace Boateng',
            position: 'Board Member - Legal & Compliance',
            image: 'https://images.unsplash.com/photo-1745174837801-b7f37abe9d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5MjgwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            bio: 'Corporate law specialist with deep regulatory knowledge',
        },
    ];

    const management = [
        {
            name: 'Michael Owusu',
            position: 'Group Chief Operating Officer',
            department: 'Operations',
        },
        {
            name: 'Sarah Agyeman',
            position: 'Group Chief Financial Officer',
            department: 'Finance',
        },
        {
            name: 'Daniel Appiah',
            position: 'Head of International Logistics',
            department: 'Logistics',
        },
        {
            name: 'Rebecca Ansah',
            position: 'Head of Real Estate Division',
            department: 'Real Estate',
        },
        {
            name: 'Joseph Mensah',
            position: 'Head of Manufacturing',
            department: 'Manufacturing',
        },
        {
            name: 'Linda Ofori',
            position: 'Group Human Resources Director',
            department: 'HR',
        },
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="relative py-24 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                        GOVERNANCE
                    </span>
                    <h1 className="text-5xl lg:text-6xl mb-6">Leadership & Governance</h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        Our leadership team brings decades of combined experience in building and
                        scaling successful businesses across Africa and beyond.
                    </p>
                </div>
            </section>

            {/* Chairman Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                        <div className="lg:col-span-2">
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

                        <div className="lg:col-span-3">
                            <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                                FOUNDER & CHAIRMAN
                            </span>
                            <h2 className="text-4xl text-[#1a1a1a] mb-6">Y.S. Tetteh</h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                                <p>
                                    Y.S. Tetteh is the visionary founder and Chairman of Y.S. Tetteh Prime
                                    Limited Company. With over three decades of entrepreneurial experience,
                                    he has built the company from a single agricultural trading operation
                                    into a diversified conglomerate operating across eight business sectors.
                                </p>
                                <p>
                                    His strategic vision, unwavering commitment to excellence, and deep
                                    understanding of both local and international markets have been
                                    instrumental in the group's success. Under his leadership, the company
                                    has established strong partnerships across Ghana and China, creating a
                                    robust platform for sustainable growth.
                                </p>
                                <p>
                                    Beyond business, Y.S. Tetteh is committed to community development
                                    through the Y.S. Tetteh Charity Foundation, which focuses on education,
                                    healthcare, and economic empowerment initiatives.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button className="w-10 h-10 bg-[#c9a961]/10 hover:bg-[#c9a961]/20 flex items-center justify-center transition-colors">
                                    <Mail className="w-5 h-5 text-[#c9a961]" />
                                </button>
                                <button className="w-10 h-10 bg-[#c9a961]/10 hover:bg-[#c9a961]/20 flex items-center justify-center transition-colors">
                                    <Linkedin className="w-5 h-5 text-[#c9a961]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Board of Directors */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                            BOARD OF DIRECTORS
                        </span>
                        <h2 className="text-4xl text-[#1a1a1a] mb-4">Experienced Governance</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our board brings diverse expertise and strategic guidance to ensure
                            sustainable growth and stakeholder value creation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {boardMembers.map((member) => (
                            <div
                                key={member.name}
                                className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group"
                            >
                                <div className="aspect-[4/5] overflow-hidden">
                                    <ImageWithFallback
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg text-[#1a1a1a] mb-1">{member.name}</h3>
                                    <p className="text-[#c9a961] text-sm mb-3">{member.position}</p>
                                    <p className="text-gray-600 text-sm">{member.bio}</p>
                                    <div className="flex gap-3 mt-4">
                                        <button className="w-8 h-8 bg-[#c9a961]/10 hover:bg-[#c9a961]/20 flex items-center justify-center transition-colors">
                                            <Mail className="w-4 h-4 text-[#c9a961]" />
                                        </button>
                                        <button className="w-8 h-8 bg-[#c9a961]/10 hover:bg-[#c9a961]/20 flex items-center justify-center transition-colors">
                                            <Linkedin className="w-4 h-4 text-[#c9a961]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Management Team */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                            EXECUTIVE TEAM
                        </span>
                        <h2 className="text-4xl text-[#1a1a1a] mb-4">Management Leadership</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our management team drives operational excellence across all business
                            units.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {management.map((exec) => (
                            <div
                                key={exec.name}
                                className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-[#c9a961]/10 flex items-center justify-center mb-4">
                                    <span className="text-[#c9a961] text-lg">
                                        {exec.name.charAt(0)}
                                    </span>
                                </div>
                                <h3 className="text-lg text-[#1a1a1a] mb-1">{exec.name}</h3>
                                <p className="text-[#c9a961] text-sm mb-2">{exec.position}</p>
                                <p className="text-gray-600 text-sm">{exec.department}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Governance Statement */}
            <section className="py-24 bg-[#1a1a1a] text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                        OUR COMMITMENT
                    </span>
                    <h2 className="text-4xl lg:text-5xl mb-8">Corporate Governance</h2>
                    <p className="text-white/80 text-lg leading-relaxed">
                        We are committed to the highest standards of corporate governance,
                        transparency, and accountability. Our governance framework ensures that we
                        operate with integrity, protect stakeholder interests, and create long-term
                        sustainable value while maintaining ethical business practices across all our
                        operations.
                    </p>
                </div>
            </section>
        </div>
    );
}
