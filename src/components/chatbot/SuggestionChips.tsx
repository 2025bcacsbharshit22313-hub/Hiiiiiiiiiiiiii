import { motion } from 'framer-motion';

interface SuggestionChipsProps {
  onSelect: (text: string) => void;
  language: string;
}

const suggestionsByLanguage: { [key: string]: string[] } = {
  en: [
    'What are symptoms of dengue?',
    'How to prevent malaria?',
    'What should I do if I have fever?',
    'Cold and cough treatment?',
    'What are symptoms of diabetes?',
    'How to stay healthy?',
  ],
  hi: [
    'डेंगू के लक्षण क्या हैं?',
    'मलेरिया से कैसे बचें?',
    'बुखार हो तो क्या करें?',
    'सर्दी खांसी का इलाज?',
    'मधुमेह के लक्षण क्या हैं?',
    'स्वस्थ कैसे रहें?',
  ],
  bn: [
    'ডেঙ্গুর লক্ষণ কী?',
    'ম্যালেরিয়া থেকে কীভাবে বাঁচবেন?',
    'জ্বর হলে কী করবেন?',
    'সর্দি-কাশির চিকিৎসা?',
  ],
  ta: [
    'டெங்கு அறிகுறிகள் என்ன?',
    'மலேரியாவை எவ்வாறு தடுப்பது?',
    'காய்ச்சல் இருந்தால் என்ன செய்வது?',
    'குளிர் மற்றும் இருமல் சிகிச்சை?',
  ],
  te: [
    'డెంగ్యూ లక్షణాలు ఏమిటి?',
    'మలేరియాను ఎలా నివారించాలి?',
    'జ్వరం వస్తే ఏమి చేయాలి?',
    'జలుబు దగ్గు చికిత్స?',
  ],
  mr: [
    'डेंग्यूची लक्षणे काय आहेत?',
    'मलेरियापासून कसे बचावावे?',
    'ताप आल्यास काय करावे?',
    'सर्दी-खोकल्याचे उपचार?',
  ],
  gu: [
    'ડેન્ગ્યુના લક્ષણો શું છે?',
    'મેલેરિયાથી કેવી રીતે બચવું?',
    'તાવ આવે તો શું કરવું?',
    'શરદી-ઉધરસનો ઈલાજ?',
  ],
  kn: [
    'ಡೆಂಗ್ಯೂ ಲಕ್ಷಣಗಳು ಯಾವುವು?',
    'ಮಲೇರಿಯಾದಿಂದ ಹೇಗೆ ತಪ್ಪಿಸಿಕೊಳ್ಳುವುದು?',
    'ಜ್ವರ ಬಂದರೆ ಏನು ಮಾಡಬೇಕು?',
    'ಜುಲಾಬು-ಕೆಮ್ಮು ಚಿಕಿತ್ಸೆ?',
  ],
};

export function SuggestionChips({ onSelect, language }: SuggestionChipsProps) {
  const suggestions = suggestionsByLanguage[language] || suggestionsByLanguage['en'];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {suggestions.map((suggestion, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, backgroundColor: '#E3F2FD' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(suggestion)}
          className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-[#1E88E5] hover:border-[#1E88E5] transition-colors shadow-sm"
        >
          {suggestion}
        </motion.button>
      ))}
    </div>
  );
}
