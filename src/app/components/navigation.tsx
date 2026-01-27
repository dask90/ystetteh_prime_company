"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, ChevronDown, Wheat, Factory, Building2, Ship, Plane, Heart, Car, Sparkles } from 'lucide-react';

const subsidiaries = [
  {
    id: 'farm-products',
    name: 'Farm Products',
    description: 'Premium livestock trading',
    icon: Wheat,
  },
  {
    id: 'plastic-rubber',
    name: 'Plastic & Rubber Production',
    description: 'Industrial manufacturing excellence',
    icon: Factory,
  },
  {
    id: 'real-estate',
    name: 'Real Estate Development',
    description: 'Premium property development',
    icon: Building2,
  },
  {
    id: 'logistics',
    name: 'International Logistics',
    description: 'China ↔ Ghana trade solutions',
    icon: Ship,
  },
  {
    id: 'travel-tour',
    name: 'Travel & Tour',
    description: 'China visa & travel services',
    icon: Plane,
  },
  {
    id: 'charity',
    name: 'Charity Foundation',
    description: 'Community impact & development',
    icon: Heart,
  },
  {
    id: 'air-garage',
    name: 'Air Garage',
    description: 'Professional tyre services',
    icon: Car,
  },
  {
    id: 'beauty-salon',
    name: 'Obaapa Beauty Salon',
    description: 'Premium beauty & wellness',
    icon: Sparkles,
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const isActive = (path: string) => pathname === path;
  const isHome = pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome
        ? 'bg-[#1a1a1a] shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
              <img
                src="/logo/logo.png"
                alt="Y.S. Tetteh Prime Limited Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:block">
              <div className="text-white text-lg tracking-tight">
                Y.S. Tetteh Prime Limited
              </div>
              <div className="text-[#c9a961] text-xs tracking-widest">
                DIVERSIFIED GROUP
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm tracking-wide transition-colors ${isActive('/')
                ? 'text-[#c9a961]'
                : 'text-white/90 hover:text-[#c9a961]'
                }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-sm tracking-wide transition-colors ${isActive('/about')
                ? 'text-[#c9a961]'
                : 'text-white/90 hover:text-[#c9a961]'
                }`}
            >
              About the Group
            </Link>

            {/* Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`text-sm tracking-wide transition-colors flex items-center gap-1 ${pathname.startsWith('/subsidiaries')
                  ? 'text-[#c9a961]'
                  : 'text-white/90 hover:text-[#c9a961]'
                  }`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Mega Dropdown */}
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-screen max-w-4xl">
                  <div className="bg-[#2a2a2a] border border-white/10 shadow-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      {subsidiaries.map((subsidiary) => {
                        const Icon = subsidiary.icon;
                        return (
                          <Link
                            key={subsidiary.id}
                            href={`/subsidiaries/${subsidiary.id}`}
                            onClick={closeMenu}
                            className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors text-left group"
                          >
                            <div className="w-10 h-10 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a961]/20 transition-colors">
                              <Icon className="w-5 h-5 text-[#c9a961]" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white text-sm mb-1 group-hover:text-[#c9a961] transition-colors">
                                {subsidiary.name}
                              </div>
                              <div className="text-white/60 text-xs">
                                {subsidiary.description}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/leadership"
              className={`text-sm tracking-wide transition-colors ${isActive('/leadership')
                ? 'text-[#c9a961]'
                : 'text-white/90 hover:text-[#c9a961]'
                }`}
            >
              Leadership
            </Link>

            {/* <Link
              href="/careers"
              className={`text-sm tracking-wide transition-colors ${isActive('/careers')
                ? 'text-[#c9a961]'
                : 'text-white/90 hover:text-[#c9a961]'
                }`}
            >
              Careers
            </Link> */}

            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#c9a961] text-[#1a1a1a] text-sm tracking-wide hover:bg-[#d4b56f] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#2a2a2a] border-t border-white/10">
            <div className="py-4 space-y-2">
              <Link
                href="/"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 text-sm ${isActive('/')
                  ? 'text-[#c9a961] bg-white/5'
                  : 'text-white/90'
                  }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 text-sm ${isActive('/about')
                  ? 'text-[#c9a961] bg-white/5'
                  : 'text-white/90'
                  }`}
              >
                About the Group
              </Link>

              <div className="space-y-1">
                <div className="px-4 py-2 text-xs text-white/60 tracking-widest">
                  OUR COMPANIES
                </div>
                {subsidiaries.map((subsidiary) => {
                  const Icon = subsidiary.icon;
                  return (
                    <Link
                      key={subsidiary.id}
                      href={`/subsidiaries/${subsidiary.id}`}
                      onClick={closeMenu}
                      className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-white/5"
                    >
                      <Icon className="w-4 h-4 text-[#c9a961]" />
                      <span className="text-sm text-white/90">
                        {subsidiary.name}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/leadership"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 text-sm ${isActive('/leadership')
                  ? 'text-[#c9a961] bg-white/5'
                  : 'text-white/90'
                  }`}
              >
                Leadership
              </Link>

              <Link
                href="/careers"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 text-sm ${isActive('/careers')
                  ? 'text-[#c9a961] bg-white/5'
                  : 'text-white/90'
                  }`}
              >
                Careers
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 text-sm ${isActive('/contact')
                  ? 'text-[#c9a961] bg-white/5'
                  : 'text-white/90'
                  }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
