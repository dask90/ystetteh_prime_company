import { Target, Eye, CheckCircle2, TrendingUp, Users, Award, Globe, Shield } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export default function AboutPage() {
    const timeline = [
        {
            year: '2008',
            title: 'Foundation',
            description: 'Y.S. Tetteh Prime Limited established with initial focus on agricultural trade',
        },
        {
            year: '2012',
            title: 'Manufacturing Expansion',
            description: 'Launched plastic and rubber production facility',
        },
        {
            year: '2015',
            title: 'International Operations',
            description: 'Established China-Ghana logistics corridor',
        },
        {
            year: '2018',
            title: 'Diversification',
            description: 'Expanded into real estate, travel, and automotive services',
        },
        {
            year: '2020',
            title: 'Social Impact',
            description: 'Founded Y.S. Tetteh Charity Foundation',
        },
        {
            year: '2026',
            title: 'Today',
            description: 'Operating 8 successful companies across multiple sectors',
        },
    ];

    const values = [
        {
            title: 'Integrity',
            description: 'Conducting business with honesty, transparency, and ethical principles',
            icon: Shield,
        },
        {
            title: 'Excellence',
            description: 'Pursuing the highest standards in everything we do',
            icon: Award,
        },
        {
            title: 'Innovation',
            description: 'Embracing new ideas and technologies to stay ahead',
            icon: TrendingUp,
        },
        {
            title: 'Collaboration',
            description: 'Building strong partnerships and empowering our teams',
            icon: Users,
        },
        {
            title: 'Sustainability',
            description: 'Creating long-term value for all stakeholders',
            icon: Globe,
        },
        {
            title: 'Quality',
            description: 'Delivering superior products and services consistently',
            icon: CheckCircle2,
        },
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="relative py-24 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                        ABOUT THE GROUP
                    </span>
                    <h1 className="text-5xl lg:text-6xl mb-6">
                        Building Excellence Across Africa
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        A diversified conglomerate committed to delivering exceptional value through
                        innovation, integrity, and operational excellence.
                    </p>
                </div>
            </section>

            {/* Company History */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                                OUR STORY
                            </span>
                            <h2 className="text-4xl text-[#1a1a1a] mb-6">Company History</h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p>
                                    Y.S. Tetteh Prime Limited Company was founded with a vision to create
                                    a diversified business group that would become a pillar of economic
                                    development in Ghana and beyond. What began as a focused agricultural
                                    trading operation has evolved into a multi-sector conglomerate
                                    operating across eight distinct business units.
                                </p>
                                <p>
                                    Through strategic planning, disciplined execution, and unwavering
                                    commitment to excellence, we have built a reputation for reliability,
                                    quality, and innovation. Our growth has been driven by our ability to
                                    identify opportunities, execute with precision, and deliver exceptional
                                    value to our stakeholders.
                                </p>
                                <p>
                                    Today, we operate across agriculture, manufacturing, logistics, real
                                    estate, travel, automotive services, beauty and wellness, and
                                    charitable initiatives. Our international footprint spans Ghana and
                                    China, with strategic partnerships that enable us to serve markets
                                    across continents.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-96">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkyMzc2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Company building"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Vision & Mission */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-12 text-white">
                            <Eye className="w-12 h-12 text-[#c9a961] mb-6" />
                            <h3 className="text-2xl mb-4">Our Vision</h3>
                            <p className="text-white/80 leading-relaxed">
                                To be the most trusted and diversified business group in Africa,
                                recognized for operational excellence, innovation, and creating
                                sustainable value for all stakeholders.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#c9a961] to-[#a68751] p-12 text-[#1a1a1a]">
                            <Target className="w-12 h-12 text-[#1a1a1a] mb-6" />
                            <h3 className="text-2xl mb-4">Our Mission</h3>
                            <p className="text-[#1a1a1a]/80 leading-relaxed">
                                To deliver exceptional products and services across our business
                                portfolio while fostering economic development, creating employment
                                opportunities, and contributing to community prosperity.
                            </p>
                        </div>
                    </div>

                    {/* Core Values */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                                WHAT DRIVES US
                            </span>
                            <h2 className="text-4xl text-[#1a1a1a] mb-4">Core Values</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                The principles that guide our decisions and define our culture
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {values.map((value) => {
                                const Icon = value.icon;
                                return (
                                    <div
                                        key={value.title}
                                        className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                                    >
                                        <div className="w-12 h-12 bg-[#c9a961]/10 flex items-center justify-center mb-6">
                                            <Icon className="w-6 h-6 text-[#c9a961]" />
                                        </div>
                                        <h3 className="text-xl text-[#1a1a1a] mb-3">{value.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div>
                        <div className="text-center mb-12">
                            <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                                OUR JOURNEY
                            </span>
                            <h2 className="text-4xl text-[#1a1a1a] mb-4">Timeline of Growth</h2>
                        </div>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#c9a961]/20 hidden md:block" />

                            <div className="space-y-8">
                                {timeline.map((item, index) => (
                                    <div key={item.year} className="relative flex gap-8 items-start">
                                        {/* Year Badge */}
                                        <div className="w-16 flex-shrink-0">
                                            <div className="w-16 h-16 bg-[#c9a961] flex items-center justify-center text-[#1a1a1a] relative z-10">
                                                <span className="text-sm">{item.year}</span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pb-8">
                                            <h3 className="text-xl text-[#1a1a1a] mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Long-term Strategy */}
            <section className="py-24 bg-[#1a1a1a] text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <span className="text-[#c9a961] text-sm tracking-widest mb-4 block">
                        LOOKING AHEAD
                    </span>
                    <h2 className="text-4xl lg:text-5xl mb-8">Long-Term Growth Strategy</h2>
                    <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                        <p>
                            Our strategic roadmap focuses on sustainable expansion, technological
                            innovation, and market leadership. We are committed to strengthening our
                            core businesses while exploring new opportunities in emerging sectors.
                        </p>
                        <p>
                            Through strategic partnerships, investment in talent and technology, and
                            unwavering focus on operational excellence, we aim to double our impact
                            over the next decade while maintaining the integrity and quality standards
                            that define our brand.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
