import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'problem', label: 'Problem', href: '#problem' },
  { id: 'solution', label: 'Solution', href: '#solution' },
  { id: 'chatbot', label: 'Chatbot', href: '#chatbot' },
  { id: 'impact', label: 'Impact', href: '#impact' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-10 h-10 bg-gradient-to-br from-[#1E88E5] to-[#43A047] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <Heart className="w-5 h-5 text-white fill-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FB8C00] rounded-full" />
            </div>
            <span className={`font-semibold text-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            }`}>
              Sehat-Saathi
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeSection === link.id
                    ? 'text-[#1E88E5]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-[#E3F2FD] rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection('#chatbot')}
                className="bg-gradient-to-r from-[#1E88E5] to-[#43A047] hover:from-[#1976D2] hover:to-[#388E3C] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Try Chatbot
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1E88E5] to-[#43A047] rounded-xl flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white fill-white" />
                    </div>
                    <span className="font-semibold text-lg">Sehat-Saathi</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          activeSection === link.id
                            ? 'bg-[#E3F2FD] text-[#1E88E5]'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <Button
                    onClick={() => scrollToSection('#chatbot')}
                    className="bg-gradient-to-r from-[#1E88E5] to-[#43A047] text-white rounded-full mt-4"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Try Chatbot
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
