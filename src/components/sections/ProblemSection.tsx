import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  CalendarX, 
  UserX,
  Stethoscope,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

const problems = [
  {
    id: 'population',
    icon: Users,
    value: '65%',
    label: 'Rural Population',
    description: 'Of India\'s population lives in rural \& semi-urban areas with limited healthcare access',
    color: '#1E88E5',
    bgColor: '#E3F2FD',
  },
  {
    id: 'distance',
    icon: MapPin,
    value: '100km',
    label: 'Average Distance',
    description: 'Travel distance to the nearest healthcare facility for rural residents',
    color: '#FB8C00',
    bgColor: '#FFF3E0',
  },
  {
    id: 'vaccination',
    icon: CalendarX,
    value: '32%',
    label: 'Missed Vaccinations',
    description: 'Of children miss their vaccination schedules due to lack of awareness',
    color: '#E53935',
    bgColor: '#FFEBEE',
  },
  {
    id: 'doctor-ratio',
    icon: UserX,
    value: '1:1000',
    label: 'Doctor-Patient Ratio',
    description: 'In rural areas vs WHO recommended 1:1000 ratio',
    color: '#43A047',
    bgColor: '#E8F5E9',
  },
];

const challenges = [
  {
    icon: Stethoscope,
    title: 'Limited Access to Doctors',
    description: 'Rural areas face severe shortage of qualified medical professionals',
  },
  {
    icon: AlertTriangle,
    title: 'Health Misinformation',
    description: 'Unverified health information spreads rapidly through social media',
  },
  {
    icon: TrendingUp,
    title: 'Long Travel Distances',
    description: 'Patients travel 100+ km for basic healthcare services',
  },
];

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const suffix = value.replace(/[0-9.]/g, '');
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="tabular-nums"
    >
      {inView ? value : `0${suffix}`}
    </motion.span>
  );
}

export function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E3F2FD]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#FFEBEE]/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFEBEE] rounded-full mb-6"
            >
              <AlertTriangle className="w-4 h-4 text-[#E53935]" />
              <span className="text-sm font-medium text-[#E53935]">The Challenge</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              The Healthcare Gap in{' '}
              <span className="bg-gradient-to-r from-[#E53935] to-[#FB8C00] bg-clip-text text-transparent">
                Rural India
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Millions of people in rural India struggle to access basic healthcare 
              services, leading to preventable diseases and health complications.
            </motion.p>
          </div>

          {/* Statistics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div 
                  className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${problem.bgColor} 0%, transparent 100%)` }}
                  />

                  {/* Icon */}
                  <div 
                    className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: problem.bgColor }}
                  >
                    <problem.icon className="w-7 h-7" style={{ color: problem.color }} />
                  </div>

                  {/* Value */}
                  <div 
                    className="relative text-4xl lg:text-5xl font-bold mb-2"
                    style={{ color: problem.color }}
                  >
                    <AnimatedCounter value={problem.value} inView={isInView} />
                  </div>

                  {/* Label */}
                  <h3 className="relative text-lg font-semibold text-gray-900 mb-2">
                    {problem.label}
                  </h3>

                  {/* Description */}
                  <p className="relative text-sm text-gray-500 leading-relaxed">
                    {problem.description}
                  </p>

                  {/* Decorative Element */}
                  <div 
                    className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-10"
                    style={{ backgroundColor: problem.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
              Key Healthcare Challenges
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-[#E3F2FD] rounded-2xl flex items-center justify-center mb-4">
                    <challenge.icon className="w-8 h-8 text-[#1E88E5]" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {challenge.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {challenge.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <blockquote className="text-xl lg:text-2xl text-gray-600 italic max-w-3xl mx-auto">
              "Healthcare is a fundamental right, yet millions in rural India 
              remain underserved. Technology can bridge this gap."
            </blockquote>
            <cite className="block mt-4 text-sm text-gray-500 not-italic">
              — World Health Organization Report
            </cite>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
