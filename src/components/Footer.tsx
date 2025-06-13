
import { Calculator, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[#03045E] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Calculator className="h-8 w-8" />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Calculator className="h-10 w-10 text-[#FFD60A] animate-bounce" />
                <div className="absolute -inset-1 bg-[#FFD60A]/20 rounded-full blur-sm"></div>
              </div>
              <span className="text-3xl font-bold">UCMAS</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming young minds through the ancient art of abacus learning. 
              Building mathematical confidence for over 15 years.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD60A] hover:text-[#03045E] transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-6 text-[#FFD60A]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#FFD60A] transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl font-bold mb-6 text-[#FFD60A]">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FFD60A]" />
                <span className="text-white/80">+91 9937229788</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FFD60A]" />
                <span className="text-white/80">ucmas.dumduma@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FFD60A] mt-1" />
                <span className="text-white/80">
                  B 148, Phase 5, DDHB Colony<br />
                  Dumduma, Bhubaneswar-19
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <h3 className="text-xl font-bold mb-6 text-[#FFD60A]">Stay Updated</h3>
            <p className="text-white/80 mb-4">
              Subscribe to get the latest news and updates about our programs.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FFD60A] transition-all duration-300"
              />
              <button className="w-full bg-[#FFD60A] text-[#03045E] py-2 px-4 rounded-lg font-semibold hover:bg-[#FFD60A]/90 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-center md:text-left">
              © 2024 UCMAS Dumduma. All rights reserved.
            </div>
            <div className="text-white/60 text-center md:text-right">
              Empowering minds, one calculation at a time.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
