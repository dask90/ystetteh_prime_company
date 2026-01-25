import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const subsidiaries = [
  { id: 'farm-products', name: 'Farm Products' },
  { id: 'plastic-rubber', name: 'Plastic & Rubber Production' },
  { id: 'real-estate', name: 'Real Estate Development' },
  { id: 'logistics', name: 'International Logistics' },
  { id: 'travel-tour', name: 'Travel & Tour' },
  { id: 'charity', name: 'Charity Foundation' },
  { id: 'air-garage', name: 'Air Garage' },
  { id: 'beauty-salon', name: 'Obaapa Beauty Salon' },
];

export function Footer() {

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#c9a961] flex items-center justify-center">
                <span className="text-[#1a1a1a] font-bold text-xl">YS</span>
              </div>
              <div>
                <div className="text-white text-sm">Y.S. Tetteh Prime</div>
                <div className="text-[#c9a961] text-xs">Limited Company</div>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-6">
              A diversified group of companies delivering excellence across agriculture,
              manufacturing, logistics, and services.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-white/5 hover:bg-[#c9a961]/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-white/60 hover:text-[#c9a961]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 hover:bg-[#c9a961]/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4 text-white/60 hover:text-[#c9a961]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 hover:bg-[#c9a961]/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white/60 hover:text-[#c9a961]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 hover:bg-[#c9a961]/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-white/60 hover:text-[#c9a961]" />
              </a>
            </div>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="text-white text-sm tracking-widest mb-6">OUR COMPANIES</h3>
            <ul className="space-y-3">
              {subsidiaries.slice(0, 4).map((subsidiary) => (
                <li key={subsidiary.id}>
                  <Link
                    href={`/subsidiaries/${subsidiary.id}`}
                    className="text-white/60 hover:text-[#c9a961] text-sm transition-colors"
                  >
                    {subsidiary.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Companies */}
          <div>
            <h3 className="text-white text-sm tracking-widest mb-6">MORE COMPANIES</h3>
            <ul className="space-y-3">
              {subsidiaries.slice(4).map((subsidiary) => (
                <li key={subsidiary.id}>
                  <Link
                    href={`/subsidiaries/${subsidiary.id}`}
                    className="text-white/60 hover:text-[#c9a961] text-sm transition-colors"
                  >
                    {subsidiary.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-sm tracking-widest mb-6">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a961] mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Group Head Office, Accra, Ghana
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c9a961] mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm">+233 XX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#c9a961] mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm">info@ystettehprime.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Y.S. Tetteh Prime Limited Company. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-white/40 hover:text-[#c9a961] text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-white/40 hover:text-[#c9a961] text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
