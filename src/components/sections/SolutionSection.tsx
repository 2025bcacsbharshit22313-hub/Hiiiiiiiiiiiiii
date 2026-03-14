import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Bot,
  ShieldCheck,
  Languages,
  Bell,
  Smartphone,
  HeartPulse,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    id: 'ai-chatbot',
    icon: Bot,
    title: 'AI Health Chatbot',
    description: 'Get instant answers to your health queries through our intelligent chatbot powered by advanced AI.',
    color: '#1E88E5',
    bgColor: '#E3F2FD',
  },
  {
    id: 'verified-info',
    icon: ShieldCheck,
    title: 'Verified Information',
    description: 'All health information is validated from trusted medical sources and WHO guidelines.',
    color: '#43A047',
    bgColor: '#E8F5E9',
  },
  {
    id: 'multilingual',
    icon: Languages,
    title: 'Multilingual Support',
    description: 'Access health information in 8+ Indian languages including Hindi, Bengali, Tamil, and more.',
    color: '#FB8C00',
    bgColor: '#FFF3E0',
  },
  {
    id: 'reminders',
    icon: Bell,
    title: 'Vaccination Reminders',
    description: 'Never miss a vaccination with automated reminders and schedule tracking.',
    color: '#E53935',
    bgColor: '#FFEBEE',
  },
  {
    id: 'smartphone',
    icon: Smartphone,
    title: 'Smartphone Access',
    description: 'Access healthcare guidance anytime, anywhere through your smartphone - no internet required for basic features.',
    color: '#7E57C2',
    bgColor: '#EDE7F6',
  },
  {
    id: 'awareness',
    icon: HeartPulse,
    title: 'Disease Awareness',
    description: 'Learn about symptoms, prevention, and treatment of common diseases affecting rural communities.',
    color: '#00ACC1',
    bgColor: '#E0F7FA',
  },
];

const benefits = [
  'Free for all users',
  'Works on low-end smartphones',
  'Offline mode available',
  'Government approved information',
  'Privacy focused',
  'No registration required',
];

export function SolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="solution"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#1E88E5]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-[#43A047]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F5E9] rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#43A047]" />
              <span className="text-sm font-medium text-[#43A047]">Our Solution</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              How{' '}
              <span className="bg-gradient-to-r from-[#1E88E5] to-[#43A047] bg-clip-text text-transparent">
                Sehat-Saathi
              </span>{' '}
              Helps
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Our AI-powered platform brings quality healthcare information to every 
              corner of rural India, breaking down barriers of distance, language, and cost.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full overflow-hidden">
                  {/* Hover Gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${feature.bgColor} 0%, transparent 100%)` 
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: feature.bgColor }}
                  >
                    <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="relative text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Corner */}
                  <div 
                    className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: feature.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-[#1E88E5] to-[#43A047] rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px',
                }}
              />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Why Choose Sehat-Saathi?
                </h3>
                <p className="text-white/80 text-lg">
                  Designed specifically for rural India, our platform addresses 
                  the unique challenges faced by underserved communities.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 mb-6">Available on all smartphones</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Android', 'iOS', 'WhatsApp', 'Web'].map((platform, index) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white rounded-xl shadow-md border border-gray-100 flex items-center gap-2"
                >
                  <Smartphone className="w-5 h-5 text-[#1E88E5]" />
                  <span className="font-medium text-gray-700">{platform}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
