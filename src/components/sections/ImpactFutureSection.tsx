import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  TrendingUp,
  ShieldCheck,
  Syringe,
  Smartphone,
  Database,
  MessageCircle,
  Cpu,
  Bell,
  Target,
  Rocket,
} from 'lucide-react';

const impactItems = [
  {
    icon: TrendingUp,
    title: 'Increased Health Awareness',
    description: 'Empowering rural communities with knowledge about diseases, prevention, and healthy living practices.',
    color: '#1E88E5',
    bgColor: '#E3F2FD',
  },
  {
    icon: ShieldCheck,
    title: 'Reduced Misinformation',
    description: 'Providing WHO-verified health information to counter dangerous myths and unverified remedies.',
    color: '#43A047',
    bgColor: '#E8F5E9',
  },
  {
    icon: Syringe,
    title: 'Improved Vaccination Rates',
    description: 'Automated reminders help parents keep their children\'s vaccinations on schedule.',
    color: '#FB8C00',
    bgColor: '#FFF3E0',
  },
  {
    icon: Smartphone,
    title: 'Quick Guidance',
    description: 'Instant access to health advice through smartphones, reducing unnecessary travel to clinics.',
    color: '#7E57C2',
    bgColor: '#EDE7F6',
  },
];

const futurePlans = [
  {
    icon: Cpu,
    title: 'Bhashini Integration',
    description: 'Leveraging Government of India\'s Bhashini AI for accurate translations across 22+ languages.',
  },
  {
    icon: Database,
    title: 'Government Health DB',
    description: 'Integration with government health databases for real-time vaccination records and health schemes.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Chatbot',
    description: 'Access Sehat-Saathi directly through WhatsApp without installing any additional app.',
  },
  {
    icon: Target,
    title: 'Real-time AI Assistant',
    description: 'Advanced AI capabilities for more accurate symptom analysis and personalized health recommendations.',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Intelligent vaccination and check-up reminders based on age, location, and health history.',
  },
  {
    icon: Rocket,
    title: 'Startup Potential',
    description: 'Scaling to become a comprehensive rural healthcare platform with telemedicine integration.',
  },
];

export function ImpactFutureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#E3F2FD]/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-[#E8F5E9]/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Impact Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F5E9] rounded-full mb-6"
              >
                <Target className="w-4 h-4 text-[#43A047]" />
                <span className="text-sm font-medium text-[#43A047]">Our Impact</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Making a{' '}
                <span className="bg-gradient-to-r from-[#1E88E5] to-[#43A047] bg-clip-text text-transparent">
                  Difference
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Sehat-Saathi is designed to create meaningful change in rural healthcare 
                accessibility and awareness across India.
              </motion.p>
            </div>

            {/* Impact Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {impactItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -5 }}
                  className="flex gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <item.icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Scope Section */}
          <div>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF3E0] rounded-full mb-6"
              >
                <Rocket className="w-4 h-4 text-[#FB8C00]" />
                <span className="text-sm font-medium text-[#FB8C00]">Future Roadmap</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                What's{' '}
                <span className="bg-gradient-to-r from-[#FB8C00] to-[#F57C00] bg-clip-text text-transparent">
                  Coming Next
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Our vision extends beyond a chatbot. Here's what we're building 
                to create a comprehensive rural healthcare ecosystem.
              </motion.p>
            </div>

            {/* Future Plans Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {futurePlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E3F2FD] to-[#E8F5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1E88E5] to-[#43A047] rounded-xl flex items-center justify-center mb-4">
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
