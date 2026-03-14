import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  ShieldCheck,
  Stethoscope,
  ChevronDown,
  ChevronUp,
  Activity,
} from 'lucide-react';

interface Disease {
  id: string;
  name: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
  symptoms: string[];
  prevention: string[];
  seeDoctor: string[];
}

const diseases: Disease[] = [
  {
    id: 'dengue',
    name: 'Dengue',
    emoji: '🦟',
    color: '#E53935',
    bgColor: '#FFEBEE',
    borderColor: '#EF9A9A',
    symptoms: [
      'High fever (104°F / 40°C)',
      'Severe headache and eye pain',
      'Joint and muscle pain',
      'Skin rash (appears 3–4 days after fever)',
      'Nausea, vomiting',
      'Swollen lymph glands',
    ],
    prevention: [
      'Sleep under mosquito nets',
      'Use mosquito repellents (creams, coils)',
      'Eliminate stagnant water around home',
      'Wear full-sleeved clothing at dawn and dusk',
      'Install window and door screens',
    ],
    seeDoctor: [
      'Severe abdominal pain',
      'Persistent vomiting',
      'Bleeding from nose, gums, or in urine',
      'Fever lasting more than 2–3 days',
      'Difficulty breathing',
    ],
  },
  {
    id: 'malaria',
    name: 'Malaria',
    emoji: '🦠',
    color: '#FB8C00',
    bgColor: '#FFF3E0',
    borderColor: '#FFCC80',
    symptoms: [
      'Cyclical fever with chills and sweating',
      'Headache and muscle aches',
      'Nausea and vomiting',
      'Fatigue and weakness',
      'Anemia (paleness)',
      'Jaundice (yellowing of skin)',
    ],
    prevention: [
      'Sleep under insecticide-treated bed nets',
      'Take preventive medication for high-risk areas',
      'Use indoor residual spraying',
      'Remove stagnant water near home',
      'Wear full-sleeved clothing in the evening',
    ],
    seeDoctor: [
      'High fever with shaking chills',
      'Confusion or altered consciousness',
      'Severe headache or neck stiffness',
      'Difficulty breathing',
      'Symptoms in a pregnant woman or child',
    ],
  },
  {
    id: 'diabetes',
    name: 'Diabetes',
    emoji: '🩸',
    color: '#7E57C2',
    bgColor: '#EDE7F6',
    borderColor: '#CE93D8',
    symptoms: [
      'Frequent urination (especially at night)',
      'Excessive thirst and hunger',
      'Unexplained weight loss',
      'Fatigue and weakness',
      'Blurred vision',
      'Slow-healing sores or frequent infections',
    ],
    prevention: [
      'Eat a balanced diet low in sugar and processed foods',
      'Exercise regularly (30 min daily walk)',
      'Maintain a healthy weight',
      'Avoid tobacco and limit alcohol',
      'Get regular blood sugar tests after age 40',
    ],
    seeDoctor: [
      'Blood sugar readings above 200 mg/dL',
      'Sudden blurred vision',
      'Wounds that do not heal',
      'Numbness or tingling in feet',
      'Chest pain or shortness of breath',
    ],
  },
  {
    id: 'fever',
    name: 'Fever',
    emoji: '🌡️',
    color: '#1E88E5',
    bgColor: '#E3F2FD',
    borderColor: '#90CAF9',
    symptoms: [
      'Body temperature above 100.4°F (38°C)',
      'Shivering and chills',
      'Sweating',
      'Headache and body aches',
      'Loss of appetite',
      'General weakness and fatigue',
    ],
    prevention: [
      'Wash hands frequently with soap and water',
      'Drink clean, boiled, or filtered water',
      'Eat freshly cooked hot food',
      'Keep vaccinations up to date',
      'Avoid contact with sick individuals',
    ],
    seeDoctor: [
      'Fever above 103°F (39.4°C)',
      'Fever lasting more than 2 days',
      'Fever with stiff neck or severe headache',
      'Fever with rash',
      'Difficulty breathing or chest pain',
    ],
  },
  {
    id: 'cold-cough',
    name: 'Cold & Cough',
    emoji: '🤧',
    color: '#43A047',
    bgColor: '#E8F5E9',
    borderColor: '#A5D6A7',
    symptoms: [
      'Runny or blocked nose',
      'Sore throat',
      'Sneezing and mild cough',
      'Mild headache',
      'Low-grade fever',
      'Body aches and tiredness',
    ],
    prevention: [
      'Wash hands regularly, especially before eating',
      'Avoid touching your face with unwashed hands',
      'Cover mouth and nose when coughing or sneezing',
      'Stay away from sick people',
      'Drink warm fluids (ginger tea, honey-lemon water)',
    ],
    seeDoctor: [
      'Symptoms lasting more than 7–10 days',
      'High fever above 102°F',
      'Chest pain or difficulty breathing',
      'Coughing up blood',
      'Severe sore throat making swallowing difficult',
    ],
  },
  {
    id: 'typhoid',
    name: 'Typhoid',
    emoji: '💊',
    color: '#00ACC1',
    bgColor: '#E0F7FA',
    borderColor: '#80DEEA',
    symptoms: [
      'Sustained high fever (103–104°F)',
      'Headache and stomach pain',
      'Loss of appetite',
      'Diarrhea or constipation',
      'Rose-colored spots on trunk',
      'Weakness and fatigue',
    ],
    prevention: [
      'Drink only safe, boiled or treated water',
      'Eat freshly cooked and hot food',
      'Wash hands thoroughly before eating and after toilet',
      'Get the typhoid vaccine',
      'Avoid raw/unpeeled fruits and vegetables from unsafe sources',
    ],
    seeDoctor: [
      'High fever lasting 2–3 days or more',
      'Severe stomach pain',
      'Persistent diarrhea with blood',
      'Confusion or unusual drowsiness',
      'Signs of dehydration (no urine, dry mouth)',
    ],
  },
];


export function DiseaseInfoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [expandAll, setExpandAll] = useState(false);

  return (
    <section
      id="diseases"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1E88E5]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#43A047]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFEBEE] rounded-full mb-6"
            >
              <Activity className="w-4 h-4 text-[#E53935]" />
              <span className="text-sm font-medium text-[#E53935]">Disease Awareness</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Know Your{' '}
              <span className="bg-gradient-to-r from-[#E53935] to-[#FB8C00] bg-clip-text text-transparent">
                Diseases
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto mb-6"
            >
              Tap any card to learn symptoms, prevention strategies, and when to seek
              medical help for common diseases in India.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => setExpandAll(!expandAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              {expandAll ? (
                <>
                  <ChevronUp className="w-4 h-4" /> Collapse All
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" /> Expand All
                </>
              )}
            </motion.button>
          </div>

          {/* Disease Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseases.map((disease, index) => (
              <ExpandableCard
                key={disease.id}
                disease={disease}
                index={index}
                isInView={isInView}
                forceExpanded={expandAll}
              />
            ))}
          </div>

          {/* Disclaimer Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-5"
          >
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 mb-1">Important Disclaimer</p>
              <p className="text-sm text-amber-700">
                The information provided here is for general awareness purposes only and does
                <strong> not</strong> replace professional medical advice, diagnosis, or treatment.
                Always consult a qualified doctor for health concerns.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Wrapper to support forceExpanded from parent */
function ExpandableCard({
  disease,
  index,
  isInView,
  forceExpanded,
}: {
  disease: Disease;
  index: number;
  isInView: boolean;
  forceExpanded: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'symptoms' | 'prevention' | 'doctor'>('symptoms');

  // Sync with forceExpanded toggle
  const effectiveExpanded = forceExpanded || expanded;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden"
      style={{ borderColor: disease.borderColor }}
    >
      {/* Card Header */}
      <div
        className="p-5 flex items-center justify-between cursor-pointer select-none"
        style={{ backgroundColor: disease.bgColor }}
        onClick={() => setExpanded(!expanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
        aria-expanded={effectiveExpanded}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm"
            style={{ backgroundColor: disease.color + '20' }}
          >
            {disease.emoji}
          </div>
          <div>
            <h3 className="text-xl font-bold" style={{ color: disease.color }}>
              {disease.name}
            </h3>
            <p className="text-sm text-gray-500">{disease.symptoms.length} symptoms listed</p>
          </div>
        </div>
        <motion.div animate={{ rotate: effectiveExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5" style={{ color: disease.color }} />
        </motion.div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {effectiveExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              {(
                [
                  { key: 'symptoms', label: 'Symptoms', icon: Activity },
                  { key: 'prevention', label: 'Prevention', icon: ShieldCheck },
                  { key: 'doctor', label: 'See Doctor', icon: Stethoscope },
                ] as const
              ).map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={(e) => { e.stopPropagation(); setActiveTab(key); }}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs sm:text-sm font-medium transition-all border-b-2 ${
                    activeTab === key ? '' : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                  style={activeTab === key ? { borderColor: disease.color, color: disease.color } : {}}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-5">
              <AnimatePresence mode="wait">
                <motion.ul
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  {(activeTab === 'symptoms'
                    ? disease.symptoms
                    : activeTab === 'prevention'
                    ? disease.prevention
                    : disease.seeDoctor
                  ).map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-xs font-bold"
                        style={{ backgroundColor: disease.color }}
                      >
                        {i + 1}
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>

              {activeTab === 'doctor' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 flex items-start gap-2 p-3 rounded-xl text-sm"
                  style={{ backgroundColor: disease.bgColor }}
                >
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: disease.color }} />
                  <span className="text-gray-700">
                    If you experience any of these warning signs, seek medical attention <strong>immediately</strong>.
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed preview tags */}
      {!effectiveExpanded && (
        <div className="px-5 pb-4">
          <div className="flex gap-2 flex-wrap">
            {disease.symptoms.slice(0, 3).map((s, i) => {
              const words = s.split(' ');
              const truncated = words.length > 3;
              const preview = truncated ? words.slice(0, 3).join(' ') + '…' : s;
              return (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-full border"
                  style={{ color: disease.color, borderColor: disease.borderColor, backgroundColor: disease.bgColor }}
                >
                  {preview}
                </span>
              );
            })}
            {disease.symptoms.length > 3 && (
              <span className="text-xs px-2.5 py-1 rounded-full text-gray-400 border border-gray-200">
                +{disease.symptoms.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
