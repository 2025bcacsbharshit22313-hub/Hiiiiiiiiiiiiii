import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Check, ArrowRight } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English', status: 'available' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', status: 'available' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', status: 'available' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', status: 'available' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', status: 'available' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', status: 'coming' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', status: 'coming' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', status: 'coming' },
];

export function LanguageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="language"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#E3F2FD]/30 to-[#E8F5E9]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F5E9] rounded-full mb-6"
              >
                <Globe className="w-4 h-4 text-[#43A047]" />
                <span className="text-sm font-medium text-[#43A047]">Multilingual</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Speak Your{' '}
                <span className="bg-gradient-to-r from-[#1E88E5] to-[#43A047] bg-clip-text text-transparent">
                  Language
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-600 mb-8"
              >
                Health information should be accessible to everyone, regardless of 
                the language they speak. Sehat-Saathi supports multiple Indian languages 
                to ensure no one is left behind.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#43A047] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">8+ Indian languages supported</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#43A047] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Natural conversation in your language</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#43A047] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Powered by Bhashini AI (coming soon)</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8"
              >
                <a
                  href="#chatbot"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#chatbot')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-[#1E88E5] font-semibold hover:gap-3 transition-all"
                >
                  Try it now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Right Column - Language Cards */}
            <div className="grid grid-cols-2 gap-4">
              {languages.map((language, index) => (
                <motion.div
                  key={language.code}
                  initial={{ opacity: 0, y: 30, rotate: -5 }}
                  animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`relative p-5 rounded-2xl border transition-all ${
                    language.status === 'available'
                      ? 'bg-white border-gray-100 shadow-lg hover:shadow-xl'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {language.nativeName}
                    </span>
                    {language.status === 'available' && (
                      <div className="w-3 h-3 bg-[#43A047] rounded-full" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{language.name}</p>
                  
                  {language.status === 'coming' && (
                    <span className="absolute top-3 right-3 px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                      Coming Soon
                    </span>
                  )}

                  {/* Decorative */}
                  <div 
                    className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full opacity-20 ${
                      language.status === 'available' ? 'bg-[#1E88E5]' : 'bg-gray-400'
                    }`} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
