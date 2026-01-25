import { ArrowRight, CheckCircle2, Phone, Mail, MessageCircle, Wheat, Sprout, CircleDot, Factory, Settings, ShieldCheck, Building2, Home, Store, Ship, Plane, MapPin, Heart, Users, GraduationCap, Car, Gauge, Wrench, Sparkles, Scissors, Smile } from 'lucide-react';

export const subsidiaryData: Record<string, any> = {
    'farm-products': {
        name: 'Farm Products',
        tagline: 'Premium Livestock Trading',
        color: '#7c9a6d',
        heroImage: 'https://images.unsplash.com/photo-1700737837793-4190578e7ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlc3RvY2slMjBmYXJtJTIwY2F0dGxlfGVufDF8fHx8MTc2OTI4MTE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        about: 'Y.S. Tetteh Farm Products is a leading livestock trading operation specializing in premium cattle, pigs, and goats. With sustainable farming practices and a commitment to animal welfare, we supply high-quality livestock to markets across Ghana.',
        scope: 'Operating multiple farms across strategic locations, we maintain the highest standards of animal husbandry, health management, and ethical trading practices. Our operations scale to meet both individual and wholesale demand.',
        services: [
            {
                title: 'Cattle Trading',
                description: 'Premium beef cattle sourced from healthy, well-managed farms',
                icon: CircleDot,
            },
            {
                title: 'Pig Farming',
                description: 'High-quality pigs raised with modern farming techniques',
                icon: Sprout,
            },
            {
                title: 'Goat Supply',
                description: 'Healthy goats for meat and breeding purposes',
                icon: Wheat,
            },
            {
                title: 'Sustainable Practices',
                description: 'Environmentally responsible and ethical farming methods',
                icon: CheckCircle2,
            },
        ],
        process: [
            { step: '1', title: 'Selection', description: 'Careful selection of healthy livestock' },
            { step: '2', title: 'Care', description: 'Professional animal husbandry and health management' },
            { step: '3', title: 'Quality Check', description: 'Veterinary inspection and certification' },
            { step: '4', title: 'Delivery', description: 'Safe transport and delivery to customers' },
        ],
    },
    'plastic-rubber': {
        name: 'Plastic & Rubber Production',
        tagline: 'Industrial Manufacturing Excellence',
        color: '#5a7a8a',
        heroImage: 'https://images.unsplash.com/photo-1720282338064-6c47e32bc0b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzY5MjgxMTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        about: 'Our manufacturing division produces high-quality plastic and rubber products for industrial and commercial applications. With state-of-the-art facilities and rigorous quality control, we deliver products that meet international standards.',
        scope: 'Operating a modern manufacturing facility equipped with advanced machinery, we produce a wide range of plastic and rubber products serving diverse industries including construction, automotive, and consumer goods.',
        services: [
            {
                title: 'Plastic Manufacturing',
                description: 'Industrial-grade plastic products and components',
                icon: Factory,
            },
            {
                title: 'Rubber Production',
                description: 'Durable rubber products for various applications',
                icon: Settings,
            },
            {
                title: 'Quality Assurance',
                description: 'Strict quality control and international standards compliance',
                icon: ShieldCheck,
            },
            {
                title: 'Custom Solutions',
                description: 'Tailored manufacturing for specific client requirements',
                icon: CheckCircle2,
            },
        ],
        process: [
            { step: '1', title: 'Design', description: 'Product design and specifications' },
            { step: '2', title: 'Production', description: 'Manufacturing with precision machinery' },
            { step: '3', title: 'Quality Control', description: 'Rigorous testing and inspection' },
            { step: '4', title: 'Delivery', description: 'Packaging and distribution' },
        ],
    },
    'real-estate': {
        name: 'Real Estate Development',
        tagline: 'Premium Property Development',
        color: '#a67c52',
        heroImage: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzY5Mjc3NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        about: 'Y.S. Tetteh Real Estate Development specializes in creating premium residential and commercial properties that combine quality construction, strategic location, and modern design. We build spaces that enhance lifestyles and create lasting value.',
        scope: 'With a portfolio spanning residential estates, commercial complexes, and mixed-use developments, we bring professional expertise to every aspect of property development from land acquisition to project delivery.',
        services: [
            {
                title: 'Residential Development',
                description: 'Premium homes and residential estates',
                icon: Home,
            },
            {
                title: 'Commercial Properties',
                description: 'Office buildings and retail spaces',
                icon: Building2,
            },
            {
                title: 'Mixed-Use Projects',
                description: 'Integrated living, working, and shopping spaces',
                icon: Store,
            },
            {
                title: 'Property Management',
                description: 'Professional management and maintenance services',
                icon: CheckCircle2,
            },
        ],
        process: [
            { step: '1', title: 'Site Selection', description: 'Strategic location analysis and acquisition' },
            { step: '2', title: 'Design & Planning', description: 'Architectural design and regulatory approvals' },
            { step: '3', title: 'Construction', description: 'Quality building with experienced contractors' },
            { step: '4', title: 'Handover', description: 'Final inspection and property delivery' },
        ],
    },
    'logistics': {
        name: 'International Logistics',
        tagline: 'China ↔ Ghana Trade Solutions',
        color: '#4a7c9a',
        heroImage: 'https://images.unsplash.com/photo-1663672025510-9820760c825e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXBwaW5nJTIwY29udGFpbmVyc3xlbnwxfHx8fDE3NjkyMzYyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        about: 'Our logistics division provides comprehensive shipping and freight forwarding services connecting China and Ghana. With established trade routes, customs expertise, and reliable partners, we ensure your cargo reaches its destination safely and on time.',
        scope: 'Handling everything from small parcels to large commercial shipments, we offer end-to-end logistics solutions including freight forwarding, customs clearance, warehousing, and last-mile delivery.',
        services: [
            {
                title: 'Sea Freight',
                description: 'Cost-effective ocean shipping for all cargo sizes',
                icon: Ship,
            },
            {
                title: 'Air Freight',
                description: 'Fast delivery for time-sensitive shipments',
                icon: Plane,
            },
            {
                title: 'Customs Clearance',
                description: 'Expert handling of all customs procedures',
                icon: CheckCircle2,
            },
            {
                title: 'Warehousing',
                description: 'Secure storage and inventory management',
                icon: Store,
            },
        ],
        process: [
            { step: '1', title: 'Booking', description: 'Request quote and book your shipment' },
            { step: '2', title: 'Collection', description: 'Pickup from origin location' },
            { step: '3', title: 'Shipping', description: 'Transport via sea or air freight' },
            { step: '4', title: 'Delivery', description: 'Customs clearance and final delivery' },
        ],
    },
    'travel-tour': {
        name: 'Y.S. Tetteh Travel & Tour',
        tagline: 'China Visa & Travel Services',
        color: '#9a6a7c',
        heroImage: 'https://images.unsplash.com/photo-1596543864210-db0f87db765e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdHJhdmVsJTIwZGVwYXJ0dXJlfGVufDF8fHx8MTc2OTI4MTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        about: 'Y.S. Tetteh Travel & Tour specializes in China visa processing and travel services. With deep expertise in China-Ghana travel requirements and strong relationships with relevant authorities, we make your China travel seamless and stress-free.',
        scope: 'From visa application assistance to travel planning and support, we provide comprehensive services for business travelers, tourists, students, and anyone planning to visit China.',
        services: [
            {
                title: 'China Visa Processing',
                description: 'Expert assistance with all visa categories',
                icon: Plane,
            },
            {
                title: 'Travel Planning',
                description: 'Customized itineraries and bookings',
                icon: MapPin,
            },
            {
                title: 'Documentation Support',
                description: 'Help with all required paperwork',
                icon: CheckCircle2,
            },
            {
                title: 'Travel Advisory',
                description: 'Expert guidance on China travel requirements',
                icon: Users,
            },
        ],
        process: [
            { step: '1', title: 'Consultation', description: 'Discuss your travel needs and requirements' },
            { step: '2', title: 'Documentation', description: 'Prepare and review all necessary documents' },
            { step: '3', title: 'Application', description: 'Submit visa application and track progress' },
            { step: '4', title: 'Approval', description: 'Receive visa and travel preparations' },
        ],
    },
    'charity': {
        name: 'Y.S. Tetteh Charity Foundation',
        tagline: 'Community Impact & Development',
        color: '#c97a5a',
        heroImage: 'https://images.unsplash.com/photo-1766066015219-b10a97dbb781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjaGFyaXR5JTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjkyODExNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        about: 'The Y.S. Tetteh Charity Foundation is committed to creating lasting positive change in communities across Ghana. Through education, healthcare, and economic empowerment initiatives, we work to improve lives and create opportunities.',
        scope: 'Our programs focus on underserved communities, providing scholarships, healthcare support, skills training, and community development projects that create sustainable impact.',
        services: [
            {
                title: 'Education Support',
                description: 'Scholarships and school infrastructure development',
                icon: GraduationCap,
            },
            {
                title: 'Healthcare Initiatives',
                description: 'Medical outreach and health awareness programs',
                icon: Heart,
            },
            {
                title: 'Skills Training',
                description: 'Vocational training and economic empowerment',
                icon: Users,
            },
            {
                title: 'Community Projects',
                description: 'Infrastructure and social development initiatives',
                icon: CheckCircle2,
            },
        ],
        process: [
            { step: '1', title: 'Identify', description: 'Assess community needs and priorities' },
            { step: '2', title: 'Plan', description: 'Design targeted intervention programs' },
            { step: '3', title: 'Implement', description: 'Execute programs with community partners' },
            { step: '4', title: 'Impact', description: 'Monitor results and create lasting change' },
        ],
    },
    'air-garage': {
        name: 'Y.S. Tetteh Air Garage',
        tagline: 'Professional Tyre Services',
        color: '#6a6a6a',
        heroImage: 'https://images.unsplash.com/photo-1764015805414-df7de89d405b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB0aXJlJTIwc2VydmljZXxlbnwxfHx8fDE3NjkyMzMzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        about: 'Y.S. Tetteh Air Garage provides comprehensive tyre services with professional expertise and modern equipment. From routine maintenance to emergency repairs, we keep your vehicle running safely and efficiently.',
        scope: 'Serving both individual vehicle owners and commercial fleet operators, we offer a full range of tyre services including vulcanizing, inspection, patching, replacement, and balancing.',
        services: [
            {
                title: 'Tyre Vulcanizing',
                description: 'Professional tyre repair and vulcanizing services',
                icon: Wrench,
            },
            {
                title: 'Tyre Inspection',
                description: 'Comprehensive safety and condition assessments',
                icon: Gauge,
            },
            {
                title: 'Tyre Patching',
                description: 'Quick and reliable puncture repairs',
                icon: CheckCircle2,
            },
            {
                title: 'Tyre Replacement',
                description: 'Quality tyre sales and professional installation',
                icon: Car,
            },
            {
                title: 'Tyre Balancing',
                description: 'Precision balancing for smooth driving',
                icon: Settings,
            },
        ],
        process: [
            { step: '1', title: 'Inspection', description: 'Thorough assessment of tyre condition' },
            { step: '2', title: 'Diagnosis', description: 'Identify issues and recommend solutions' },
            { step: '3', title: 'Service', description: 'Professional repair or replacement' },
            { step: '4', title: 'Quality Check', description: 'Final inspection and testing' },
        ],
    },
    'beauty-salon': {
        name: 'Obaapa Beauty Salon',
        tagline: 'Premium Beauty & Wellness',
        color: '#d4a5a5',
        heroImage: 'https://images.unsplash.com/photo-1605980626247-eb3a2f10ec8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHNwYXxlbnwxfHx8fDE3NjkyODExNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        about: 'Obaapa Beauty Salon offers premium beauty and wellness services in an elegant, relaxing environment. Our skilled professionals use high-quality products and the latest techniques to help you look and feel your best.',
        scope: 'From hair care to skincare, makeup to nails, we provide comprehensive beauty services tailored to your individual needs and preferences.',
        services: [
            {
                title: 'Hair Services',
                description: 'Styling, treatments, coloring, and extensions',
                icon: Scissors,
            },
            {
                title: 'Skincare',
                description: 'Facials, treatments, and skin consultation',
                icon: Sparkles,
            },
            {
                title: 'Makeup Artistry',
                description: 'Professional makeup for all occasions',
                icon: Smile,
            },
            {
                title: 'Nail Care',
                description: 'Manicures, pedicures, and nail enhancements',
                icon: CheckCircle2,
            },
        ],
        process: [
            { step: '1', title: 'Consultation', description: 'Discuss your beauty goals and preferences' },
            { step: '2', title: 'Service', description: 'Professional treatment with quality products' },
            { step: '3', title: 'Styling', description: 'Expert finishing and styling' },
            { step: '4', title: 'Aftercare', description: 'Advice on maintaining your look' },
        ],
    },
};
