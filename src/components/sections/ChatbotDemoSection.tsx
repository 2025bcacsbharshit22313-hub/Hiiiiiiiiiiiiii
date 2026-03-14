import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, MessageSquare, Zap, Shield } from 'lucide-react';
import { ChatbotInterface } from '@/components/chatbot/ChatbotInterface';

const features = [
  {
    icon: Zap,
    title: 'Instant Responses',
    description: 'Get answers to your health queries in seconds',
  },
  {
    icon: Shield,
    title: 'Verified Information',
    description: 'All responses based on WHO guidelines',
  },
  {
    icon: MessageSquare,
    title: 'Natural Conversation',
    description: 'Chat naturally like talking to a doctor',
  },
];

export function ChatbotDemoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isChatOpen, setIsChatOpen] = useState(true);

  return (
    <section
      id="chatbot"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1E88E5]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#43A047]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E3F2FD] rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#1E88E5]" />
              <span className="text-sm font-medium text-[#1E88E5]">Interactive Demo</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Try the{' '}
              <span className="bg-gradient-to-r from-[#1E88E5] to-[#43A047] bg-clip-text text-transparent">
                Chatbot
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Experience how Sehat-Saathi provides instant health guidance. 
              Ask questions about symptoms, prevention, and general health tips.
            </motion.p>
          </div>

          {/* Chatbot Interface */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <ChatbotInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#E3F2FD] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#1E88E5]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Sample Questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 mb-4">Try asking questions like:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                '"What are symptoms of dengue?"',
                '"How to prevent malaria?"',
                '"What should I do if I have fever?"',
                '"How to stay healthy?"',
              ].map((question, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600"
                >
                  {question}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
