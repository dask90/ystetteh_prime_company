import Link from 'next/link';
import { Briefcase, Users, TrendingUp, Award, Heart, Globe, ArrowRight } from 'lucide-react';

export default function CareersPage() {
    const benefits = [
        {
            title: 'Growth Opportunities',
            description: 'Advance your career across our diverse business portfolio',
            icon: TrendingUp,
        },
        {
            title: 'Collaborative Culture',
            description: 'Work with talented professionals in a supportive environment',
            icon: Users,
        },
        {
            title: 'Competitive Compensation',
            description: 'Industry-leading salary packages and benefits',
            icon: Award,
        },
        {
            title: 'Work-Life Balance',
            description: 'Flexible arrangements that support your well-being',
            icon: Heart,
        },
        {
            title: 'International Exposure',
            description: 'Opportunities to work on Ghana-China business operations',
            icon: Globe,
        },
        {
            title: 'Professional Development',
            description: 'Continuous learning and skill development programs',
            icon: Briefcase,
        },
    ];

    const openings = [
        {
            title: 'Senior Logistics Coordinator',
            department: 'International Logistics',
            location: 'Accra, Ghana',
            type: 'Full-time',
        },
        {
            title: 'Real Estate Development Manager',
            department: 'Real Estate Division',
            location: 'Accra, Ghana',
            type: 'Full-time',
        },
        {
            title: 'Manufacturing Quality Supervisor',
            department: 'Plastic & Rubber Production',
            location: 'Tema, Ghana',
            type: 'Full-time',
        },
        {
            title: 'Agricultural Operations Manager',
            department: 'Farm Products',
            location: 'Ashanti Region',
            type: 'Full-time',
        },
        {
            title: 'Travel Consultant',
            department: 'Travel & Tour',
            location: 'Accra, Ghana',
            type: 'Full-time',
        },
        {
            title: 'Finance Analyst',
            department: 'Group Finance',
            location: 'Accra, Ghana',
            type: 'Full-time',
        },
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="relative py-24 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                        JOIN OUR TEAM
                    </span>
                    <h1 className="text-5xl lg:text-6xl mb-6">Build Your Career With Us</h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        Join a dynamic, diversified group that values talent, innovation, and
                        personal growth. Be part of building Africa's future.
                    </p>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                            EMPLOYEE EXPERIENCE
                        </span>
                        <h2 className="text-4xl text-[#1a1a1a] mb-4">Why Work With The Group</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We offer more than just a job—we provide a platform for professional
                            growth and personal development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit) => {
                            const Icon = benefit.icon;
                            return (
                                <div
                                    key={benefit.title}
                                    className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-[#c9a961]/10 flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-[#c9a961]" />
                                    </div>
                                    <h3 className="text-xl text-[#1a1a1a] mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Culture */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                                WORKPLACE CULTURE
                            </span>
                            <h2 className="text-4xl text-[#1a1a1a] mb-6">Empowering Our People</h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p>
                                    At Y.S. Tetteh Prime Limited, we believe our people are our greatest
                                    asset. We foster a culture of collaboration, innovation, and mutual
                                    respect where every team member can thrive and contribute to our
                                    collective success.
                                </p>
                                <p>
                                    Our diverse business portfolio offers unique opportunities for career
                                    progression. Whether you're interested in manufacturing, logistics,
                                    real estate, or any of our other sectors, you'll find opportunities to
                                    learn, grow, and make a meaningful impact.
                                </p>
                                <p>
                                    We invest in our people through comprehensive training programs,
                                    mentorship opportunities, and clear career pathways. Your success is
                                    our success.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#c9a961]/10 p-8 text-center">
                                <div className="text-4xl text-[#c9a961] mb-2">500+</div>
                                <div className="text-sm text-gray-700">Employees</div>
                            </div>
                            <div className="bg-[#c9a961]/10 p-8 text-center">
                                <div className="text-4xl text-[#c9a961] mb-2">8</div>
                                <div className="text-sm text-gray-700">Business Units</div>
                            </div>
                            <div className="bg-[#c9a961]/10 p-8 text-center">
                                <div className="text-4xl text-[#c9a961] mb-2">15+</div>
                                <div className="text-sm text-gray-700">Years Operating</div>
                            </div>
                            <div className="bg-[#c9a961]/10 p-8 text-center">
                                <div className="text-4xl text-[#c9a961] mb-2">2</div>
                                <div className="text-sm text-gray-700">Countries</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                            OPPORTUNITIES
                        </span>
                        <h2 className="text-4xl text-[#1a1a1a] mb-4">Open Positions</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore current openings across our business portfolio
                        </p>
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {openings.map((job) => (
                            <div
                                key={job.title}
                                className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl text-[#1a1a1a] mb-2 group-hover:text-[#c9a961] transition-colors">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                            <span className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4 text-[#c9a961]" />
                                                {job.department}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Globe className="w-4 h-4 text-[#c9a961]" />
                                                {job.location}
                                            </span>
                                            <span className="px-3 py-1 bg-[#c9a961]/10 text-[#c9a961] text-xs">
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <button className="px-6 py-3 bg-[#c9a961] text-[#1a1a1a] hover:bg-[#d4b56f] transition-colors flex items-center gap-2 self-start md:self-center">
                                        Apply Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application CTA */}
            <section className="py-24 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl mb-6">Don't See The Right Role?</h2>
                    <p className="text-xl text-white/70 mb-12 leading-relaxed">
                        We're always looking for talented individuals to join our team. Send us your
                        resume and we'll keep you in mind for future opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#c9a961] text-[#1a1a1a] hover:bg-[#d4b56f] transition-colors flex items-center justify-center gap-2"
                        >
                            Submit General Application
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
