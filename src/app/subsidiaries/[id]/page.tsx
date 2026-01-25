import { Phone, Mail, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { subsidiaryData } from '@/app/data/subsidiaries';
import { notFound } from 'next/navigation';

interface SubsidiaryPageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return Object.keys(subsidiaryData).map((id) => ({
        id,
    }));
}

export default async function SubsidiaryPage({ params }: SubsidiaryPageProps) {
    const { id } = await params;
    const data = subsidiaryData[id];

    if (!data) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <ImageWithFallback
                        src={data.heroImage}
                        alt={data.name}
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to right, rgba(26, 26, 26, 0.95), rgba(26, 26, 26, 0.7)), linear-gradient(to bottom, transparent, ${data.color}22)`,
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div
                            className="inline-block px-4 py-2 mb-6 border"
                            style={{
                                borderColor: data.color,
                                backgroundColor: `${data.color}15`,
                                color: data.color,
                            }}
                        >
                            <span className="text-sm tracking-widest">{data.tagline}</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl text-white mb-6">{data.name}</h1>
                        <p className="text-xl text-white/80 leading-relaxed">{data.about}</p>
                    </div>
                </div>
            </section>

            {/* About the Business */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span
                                className="text-sm tracking-widest mb-4 block"
                                style={{ color: data.color }}
                            >
                                ABOUT US
                            </span>
                            <h2 className="text-4xl text-[#1a1a1a] mb-6">Scope of Operations</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">{data.scope}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {data.services.slice(0, 4).map((service: any, index: number) => {
                                const Icon = service.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-gray-50 p-6 border-t-4"
                                        style={{ borderTopColor: data.color }}
                                    >
                                        <div
                                            className="w-12 h-12 mb-4 flex items-center justify-center"
                                            style={{ backgroundColor: `${data.color}15` }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: data.color }} />
                                        </div>
                                        <h3 className="text-sm text-[#1a1a1a] mb-2">{service.title}</h3>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services/Offerings */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span
                            className="text-sm tracking-widest mb-4 block"
                            style={{ color: data.color }}
                        >
                            WHAT WE OFFER
                        </span>
                        <h2 className="text-4xl text-[#1a1a1a] mb-4">Our Services</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.services.map((service: any, index: number) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                                >
                                    <div
                                        className="w-12 h-12 mb-6 flex items-center justify-center"
                                        style={{ backgroundColor: `${data.color}15` }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color: data.color }} />
                                    </div>
                                    <h3 className="text-xl text-[#1a1a1a] mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process/How It Works */}
            {data.process && (
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span
                                className="text-sm tracking-widest mb-4 block"
                                style={{ color: data.color }}
                            >
                                OUR PROCESS
                            </span>
                            <h2 className="text-4xl text-[#1a1a1a] mb-4">How It Works</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {data.process.map((item: any, index: number) => (
                                <div key={index} className="text-center">
                                    <div
                                        className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl text-white"
                                        style={{ backgroundColor: data.color }}
                                    >
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl text-[#1a1a1a] mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Call to Action */}
            <section
                className="py-24 text-white"
                style={{ backgroundColor: data.color }}
            >
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl mb-6">Get In Touch</h2>
                    <p className="text-xl text-white/90 mb-12 leading-relaxed">
                        Ready to work with us? Contact our team for inquiries, quotes, or to learn
                        more about our services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:+233XXXXXXXXX`}
                            className="px-8 py-4 bg-white hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                            style={{ color: data.color }}
                        >
                            <Phone className="w-5 h-5" />
                            Call Us
                        </a>
                        <a
                            href={`mailto:info@ystettehprime.com`}
                            className="px-8 py-4 bg-white hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                            style={{ color: data.color }}
                        >
                            <Mail className="w-5 h-5" />
                            Email Us
                        </a>
                        <a
                            href={`https://wa.me/233XXXXXXXXX`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                            style={{ color: data.color }}
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
