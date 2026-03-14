import type { Intent, Language } from '@/types';

export const supportedLanguages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
];

export const intents: Intent[] = [
  {
    id: 'dengue_symptoms',
    patterns: ['dengue', 'dengue symptoms', 'dengue fever', 'डेंगू', 'डेंगू के लक्षण'],
    responses: {
      en: 'Dengue symptoms include high fever (104°F), severe headache, pain behind the eyes, joint and muscle pain, nausea, vomiting, swollen glands, and skin rash. If symptoms worsen or you experience severe abdominal pain, bleeding, or difficulty breathing, consult a doctor immediately.',
      hi: 'डेंगू के लक्षणों में तेज बुखार (104°F), गंभीर सिरदर्द, आंखों के पीछे दर्द, जोड़ों और मांसपेशियों में दर्द, मतली, उल्टी, ग्रंथियों में सूजन और त्वचा पर चकत्ते शामिल हैं। यदि लक्षण बिगड़ जाते हैं या आपको गंभीर पेट दर्द, ब्लीडिंग, या सांस लेने में कठिनाई हो, तो तुरंत डॉक्टर से परामर्श करें।',
      bn: 'ডেঙ্গুর লক্ষণগুলির মধ্যে রয়েছে উচ্চ জ্বর (104°F), তীব্র মাথাব্যথা, চোখের পিছনে ব্যথা, জয়েন্ট এবং পেশীর ব্যথা, বমি বমি ভাব, বমি, গ্রন্থির ফোলা এবং ত্বকের র্যাশ।',
      ta: 'டெங்கு அறிகுறிகளில் உயர் காய்ச்சல் (104°F), கடுமையான தலைவலி, கண்களுக்குப் பின்னால் வலி, மூட்டு மற்றும் தசை வலி, குமட்டல், வாந்தி, சுரப்பி வீக்கம் மற்றும் தோல் தடிப்பு ஆகியவை அடங்கும்.',
      te: 'డెంగ్యూ లక్షణాలలో ఎక్కువ జ్వరం (104°F), తీవ్రమైన తలనొప్పి, కళ్ళ వెనుక నొప్పి, కీళ్ళు మరియు కండరాల నొప్పి, వాంతులు, వాంతులు, గ్రంథుల వాపు మరియు చర్మ దద్దుర్లు ఉంటాయి.',
    },
  },
  {
    id: 'fever_treatment',
    patterns: ['fever', 'i have fever', 'bukhar', 'बुखार', 'बुखार हो तो क्या करें', 'fever treatment'],
    responses: {
      en: 'If you have fever: 1) Drink plenty of fluids (water, ORS, coconut water) 2) Get adequate rest 3) Wear light clothing 4) Use a damp cloth on forehead. If fever is above 102°F (39°C), lasts more than 2 days, or is accompanied by severe headache, rash, or difficulty breathing, consult a doctor immediately.',
      hi: 'यदि आपको बुखार है: 1) भरपूर तरल पदार्थ पिएं (पानी, ORS, नारियल पानी) 2) पर्याप्त आराम करें 3) हल्के कपड़े पहनें 4) माथे पर गीला कपड़ा रखें। यदि बुखार 102°F (39°C) से अधिक है, 2 दिनों से अधिक समय तक रहता है, या गंभीर सिरदर्द, चकत्ते, या सांस लेने में कठिनाई के साथ हो, तो तुरंत डॉक्टर से परामर्श करें।',
      bn: 'যদি আপনার জ্বর থাকে: 1) প্রচুর তরল পান করুন (পানি, ORS, নারকেল জল) 2) পর্যাপ্ত বিশ্রাম নিন 3) হালকা পোশাক পরুন 4) কপালে ভেজা কাপড় ব্যবহার করুন।',
      ta: 'உங்களுக்கு காய்ச்சல் இருந்தால்: 1) நிறைய திரவங்கள் குடிக்கவும் (நீர், ORS, தேங்காய் நீர்) 2) போதுமான ஓய்வு எடுக்கவும் 3) இலேசான ஆடைகளை அணியவும் 4) நெற்றியில் ஈரமான துணியைப் பயன்படுத்தவும்.',
      te: 'మీకు జ్వరం ఉంటే: 1) ఎక్కువ ద్రవాలు తాగండి (నీరు, ORS, కొబ్బరి నీరు) 2) తగినంత విశ్రాంతి తీసుకోండి 3) తేలికపాటి దుస్తులు ధరించండి 4) నుదిటిపై తడి బట్టను ఉపయోగించండి.',
    },
  },
  {
    id: 'malaria_prevention',
    patterns: ['malaria', 'prevent malaria', 'malaria prevention', 'मलेरिया', 'मलेरिया से बचाव', 'मच्छर'],
    responses: {
      en: 'To prevent malaria: 1) Sleep under insecticide-treated mosquito nets 2) Use mosquito repellents (creams, coils, vaporizers) 3) Wear full-sleeved clothing, especially at dawn and dusk 4) Keep surroundings clean - no stagnant water 5) Use window and door screens 6) Get preventive medication if traveling to endemic areas.',
      hi: 'मलेरिया से बचाव के लिए: 1) कीटनाशक युक्त मच्छरदानी के नीचे सोएं 2) मच्छर भगाने वाले उत्पादों का उपयोग करें (क्रीम, कॉइल, वेपोराइजर) 3) पूर्ण बाहों वाले कपड़े पहनें, विशेष रूप से सुबह और शाम 4) आसपास साफ-सफाई रखें - कोई स्थिर पानी नहीं 5) खिड़की और दरवाजे पर जाली लगाएं 6) यदि एंडेमिक क्षेत्रों में यात्रा कर रहे हैं तो निवारक दवा लें।',
      bn: 'ম্যালেরিয়া প্রতিরোধ করতে: 1) কীটনাশকযুক্ত মশারি নেটের নিচে ঘুমান 2) মশা প্রতিরোধক ব্যবহার করুন (ক্রিম, কয়েল, ভ্যাপোরাইজার) 3) পূর্ণ হাতার পোশাক পরুন, বিশেষত ভোরে এবং সন্ধ্যায়',
      ta: 'மலேரியாவைத் தடுக்க: 1) பூச்சிக்கொல்லி பூசப்பட்ட கொசு வலைகளுக்கு கீழ் தூங்குங்கள் 2) கொசு விரட்டிகளைப் பயன்படுத்துங்கள் (கிரீம்கள், காயில்கள், வாஷ்பைசர்கள்) 3) முழு கையுறை ஆடைகளை அணியுங்கள், குறிப்பாக விடியற்காலை மற்றும் மாலையில்',
      te: 'మలేరియాను నివారించడానికి: 1) కీటకనాశిని చికిత్స పొందిన దోమ జాలాల కింద నిద్రపోండి 2) దోమ వికర్షకాలను ఉపయోగించండి (క్రీమ్‌లు, కాయిళ్ళు, వాపరైజర్‌లు) 3) పూర్తి స్లీవ్‌ల దుస్తులు ధరించండి, ముఖ్యంగా ఉదయం మరియు సాయంత్రం',
    },
  },
 {
    id: 'diabetes_symptoms',
    patterns: ['diabetes', 'diabetes symptoms', 'sugar', 'blood sugar', 'मधुमेह', 'डायबिटीज', 'शुगर'],
    responses: {
      en: 'Common symptoms of diabetes include: 1) Frequent urination (especially at night) 2) Increased thirst and hunger 3) Unexplained weight loss 4) Fatigue and weakness 5) Blurred vision 6) Slow-healing sores or frequent infections 7) Tingling or numbness in hands/feet. If you experience these symptoms, get your blood sugar tested and consult a doctor.',
      hi: 'मधुमेह के सामान्य लक्षणों में शामिल हैं: 1) बार-बार पेशाब आना (विशेष रूप से रात में) 2) अत्यधिक प्यास और भूख 3) अकारण वजन घटना 4) थकान और कमजोरी 5) धुंधला दिखना 6) धीरे ठीक होने वाले घाव या बार-बार संक्रमण 7) हाथ/पैरों में झनझनाहट या सुन्नपन। यदि आपको ये लक्षण महसूस हों, तो अपनी ब्लड शुगर जांच कराएं और डॉक्टर से परामर्श करें।',
      bn: 'ডায়াবেটিসের সাধারণ লক্ষণগুলির মধ্যে রয়েছে: 1) ঘনঘন প্রস্রাব (বিশেষ করে রাতে) 2) বেশি তৃষ্ণা ও ক্ষুধা 3) অব্যাখ্যায়িত ওজন হ্রাস 4) ক্লান্তি ও দুর্বলতা',
      ta: 'நீரிழிவின் பொதுவான அறிகுறிகளில் அடங்கும்: 1) அடிக்கடி சிறுநீர் கழித்தல் (குறிப்பாக இரவில்) 2) அதிகற்ற தாகம் மற்றும் பசி 3) விளக்கமற்ற எடை இழப்பு 4) சோர்வு மற்றும் பலவீனம்',
      te: 'మధుమేహం యొక్క సాధారణ లక్షణాలు: 1) తరచుగా మూత్ర విసర్జన (ముఖ్యంగా రాత్రిపూట) 2) పెరిగిన దాహం మరియు ఆకలి 3) వివరణ లేని బరువు తగ్గడం 4) అలసట మరియు బలహీనత',
    },
  },
  {
    id: 'cold_cough',
    patterns: ['cold', 'cough', 'cold and cough', 'sardi', 'khansi', 'सर्दी', 'खांसी', 'जुकाम'],
    responses: {
      en: 'For cold and cough relief: 1) Drink warm fluids (ginger tea, honey-lemon water, soup) 2) Get plenty of rest 3) Use steam inhalation 2-3 times daily 4) Gargle with warm salt water 5) Stay hydrated 6) Use honey for cough (not for children under 1 year) 7) Keep head elevated while sleeping. Consult a doctor if symptoms persist beyond 7 days, or if you have high fever, chest pain, or difficulty breathing.',
      hi: 'सर्दी और खांसी से राहत के लिए: 1) गर्म तरल पदार्थ पिएं (अदरक की चाय, शहद-नींबू पानी, सूप) 2) भरपूर आराम करें 3) दिन में 2-3 बार भाप लें 4) गर्म नमक के पानी से गरारे करें 5) हाइड्रेटेड रहें 6) खांसी के लिए शहद का उपयोग करें (1 साल से कम बच्चों के लिए नहीं) 7) सोते समय सिर को ऊंचा रखें। यदि लक्षण 7 दिनों से अधिक समय तक बने रहें, या यदि आपको तेज बुखार, सीने में दर्द, या सांस लेने में कठिनाई हो तो डॉक्टर से परामर्श करें।',
      bn: 'সর্দি ও কাশির উপশমের জন্য: 1) গরম তরল পান করুন (আদা চা, মধু-লেবু জল, স্যুপ) 2) প্রচুর বিশ্রাম নিন 3) দিনে 2-3 বার ভাপ নিন',
      ta: 'குளிர் மற்றும் இருமல் நிவாரணத்திற்கு: 1) சூடான திரவங்களைக் குடிக்கவும் (இஞ்சி தேநீர், தேன்-எலுமிச்சை நீர், சூப்) 2) நிறைய ஓய்வு எடுக்கவும் 3) நாளில் 2-3 முறை நீராவி பிடிக்கவும்',
      te: 'జలుబు మరియు దగ్గు నివారణ కోసం: 1) వేడి ద్రవాలు తాగండి (అల్లం టీ, తేనె-నిమ్మ నీరు, సూప్) 2) ఎక్కువ విశ్రాంతి తీసుకోండి 3) రోజుకు 2-3 సార్లు ఆవిరి పీల్చండి',
    },
  },
  {
    id: 'stay_healthy',
    patterns: ['healthy', 'stay healthy', 'health tips', 'good health', 'स्वस्थ', 'सेहत', 'तंदुरुस्ती'],
    responses: {
      en: 'To stay healthy: 1) Eat a balanced diet with fruits, vegetables, whole grains, and proteins 2) Exercise regularly (30 minutes daily walking) 3) Drink 8-10 glasses of clean water daily 4) Maintain personal hygiene - wash hands regularly 5) Get 7-8 hours of sleep 6) Avoid smoking and limit alcohol 7) Manage stress through meditation or yoga 8) Get regular health check-ups and vaccinations on time.',
      hi: 'स्वस्थ रहने के लिए: 1) फलों, सब्जियों, साबुत अनाज और प्रोटीन से युक्त संतुलित आहार लें 2) नियमित रूप से व्यायाम करें (रोजाना 30 मिनट की सैर) 3) रोजाना 8-10 गिलास साफ पानी पिएं 4) व्यक्तिगत स्वच्छता बनाए रखें - नियमित रूप से हाथ धोएं 5) 7-8 घंटे की नींद लें 6) धूम्रपान से बचें और शराब की सीमा रखें 7) ध्यान या योग के माध्यम से तनाव प्रबंधित करें 8) नियमित स्वास्थ्य जांच और समय पर टीकाकरण कराएं।',
      bn: 'সুস্থ থাকতে: 1) ফলমূল, শাকসবজি, সম্পূর্ণ শস্য এবং প্রোটিন সহ একটি সংতুলিত খাদ্য গ্রহণ করুন 2) নিয়মিত ব্যায়াম করুন (প্রতিদিন 30 মিনিট হাঁটা)',
      ta: 'ஆரோக்கியமாக இருக்க: 1) பழங்கள், காய்கறிகள், முழு தானியங்கள் மற்றும் புரதங்களுடன் சீரான உணவை உண்ணுங்கள் 2) வழக்கமாக உடற்பயிற்சி செய்யுங்கள் (தினமும் 30 நிமிட நடைபயிற்சி)',
      te: 'ఆరోగ్యంగా ఉండటానికి: 1) పండ్లు, కూరగాయలు, మొత్తం ధాన్యాలు మరియు ప్రోటీన్లతో సమతుల్య ఆహారం తీసుకోండి 2) నియమితంగా వ్యాయామం చేయండి (రోజుకు 30 నిమిషాల నడక)',
    },
  },
  {
    id: 'vaccination',
    patterns: ['vaccination', 'vaccine', 'immunization', 'टीका', 'टीकाकरण', 'वैक्सीन'],
    responses: {
      en: 'Vaccination is crucial for preventing diseases. Important vaccines include: 1) Childhood vaccines (BCG, DPT, Polio, Measles) 2) COVID-19 vaccine 3) Hepatitis B 4) Tetanus (every 10 years) 5) Influenza (yearly) 6) Typhoid. Keep a vaccination card to track schedules. Contact your nearest health center or ASHA worker for free vaccinations under government programs.',
      hi: 'टीकाकरण बीमारियों को रोकने के लिए महत्वपूर्ण है। महत्वपूर्ण टीकों में शामिल हैं: 1) बचपन के टीके (बीसीजी, डीपीटी, पोलियो, खसरा) 2) कोविड-19 वैक्सीन 3) हेपेटाइटिस बी 4) टेटनस (हर 10 साल में) 5) इन्फ्लूएंजा (सालाना) 6) टाइफाइड। शेड्यूल ट्रैक करने के लिए टीकाकरण कार्ड रखें। सरकारी कार्यक्रमों के तहत निःशुल्क टीकाकरण के लिए अपने निकटतम स्वास्थ्य केंद्र या आशा कार्यकर्ता से संपर्क करें।',
      bn: 'টিকা প্রদান রোগ প্রতিরোধের জন্য অত্যন্ত গুরুত্বপূর্ণ। গুরুত্বপূর্ণ টিকাগুলির মধ্যে রয়েছে: বিসিজি, ডিপিটি, পোলিও, হাম, কোভিড-১৯, হেপাটাইটিস বি ইত্যাদি।',
      ta: 'தடுப்பூசி நோய்களைத் தடுப்பதற்கு மிகவும் முக்கியமானது. முக்கியமான தடுப்பூசிகள்: பிசிஜி, டிபிடி, போலியோ, தட்டம்மை, கோவிட்-19, ஹெபடைட்டிஸ் பி போன்றவை.',
      te: 'టీకాలు వ్యాధులను నివారించడంలో కీలకం. ముఖ్యమైన టీకాలు: బీసీజీ, డీపీటీ, పోలియో, చికెన్‌పాక్స్, కోవిడ్-19, హెపటైటిస్ బి మొదలైనవి.',
    },
  },
  {
    id: 'covid',
    patterns: ['covid', 'corona', 'coronavirus', 'कोविड', 'कोरोना'],
    responses: {
      en: 'COVID-19 symptoms include fever, cough, fatigue, loss of taste/smell, sore throat, and difficulty breathing. Prevention: 1) Wear masks in crowded places 2) Wash hands frequently 3) Maintain social distance 4) Get vaccinated 5) Avoid touching face. If symptomatic, get tested and isolate. Consult a doctor immediately if you have breathing difficulty or chest pain.',
      hi: 'कोविड-19 के लक्षणों में बुखार, खांसी, थकान, स्वाद/गंध की कमी, गले में खराश और सांस लेने में कठिनाई शामिल है। बचाव: 1) भीड़भाड़ वाली जगहों पर मास्क पहनें 2) बार-बार हाथ धोएं 3) सामाजिक दूरी बनाए रखें 4) टीका लगवाएं 5) चेहरे को छूने से बचें। यदि लक्षण हों, तो जांच कराएं और अलग रहें। यदि सांस लेने में कठिनाई या सीने में दर्द हो तो तुरंत डॉक्टर से परामर्श करें।',
      bn: 'কোভিড-19 এর লক্ষণগুলির মধ্যে রয়েছে জ্বর, কাশি, ক্লান্তি, স্বাদ/গন্ধ হ্রাস, গলা ব্যথা এবং শ্বাসকষ্ট।',
      ta: 'கோவிட்-19 அறிகுறிகளில் காய்ச்சல், இருமல், சோர்வு, சுவை/மணம் இழப்பு, தொண்டை வலி மற்றும் மூச்சுத்திணறல் ஆகியவை அடங்கும்.',
      te: 'కోవిడ్-19 లక్షణాలలో జ్వరం, దగ్గు, అలసట, రుచి/వాసన కోల్పోవడం, గొంతు నొప్పి మరియు శ్వాస తీసుకోవడంలో ఇబ్బంది ఉంటాయి.',
    },
  },
  {
    id: 'greeting',
    patterns: ['hello', 'hi', 'hey', 'namaste', 'नमस्ते', 'हैलो', 'হ্যালো', 'வணக்கம்', 'హలో'],
    responses: {
      en: 'Hello! I am Sehat-Saathi, your AI health companion. I can help you with health information, disease symptoms, prevention tips, and general wellness advice. How can I assist you today?',
      hi: 'नमस्ते! मैं सेहत-साथी हूं, आपका AI स्वास्थ्य साथी। मैं आपको स्वास्थ्य जानकारी, बीमारी के लक्षण, बचाव युक्तियों और सामान्य कल्याण सलाह में मदद कर सकता हूं। मैं आज आपकी कैसे मदद कर सकता हूं?',
      bn: 'হ্যালো! আমি সেহত-সাথী, আপনার AI স্বাস্থ্য সঙ্গী। আমি আপনাকে স্বাস্থ্য তথ্য, রোগের লক্ষণ, প্রতিরোধ টিপস এবং সাধারণ সুস্থতা পরামর্শে সাহায্য করতে পারি।',
      ta: 'வணக்கம்! நான் செஹத்-சாதி, உங்கள் AI சுகாதார துணை. நான் உங்களுக்கு சுகாதார தகவல், நோய் அறிகுறிகள், தடுப்பு குறிப்புகள் மற்றும் பொதுவான ஆரோக்கிய ஆலோசனைகளில் உதவ முடியும்.',
      te: 'హలో! నేను సెహత్-సాథి, మీ AI ఆరోగ్య సహచరుడిని. నేను మీకు ఆరోగ్య సమాచారం, వ్యాధి లక్షణాలు, నివారణ చిట్కాలు మరియు సాధారణ ఆరోగ్య సలహాలలో సహాయం చేయగలను.',
    },
  },
  {
    id: 'fallback',
    patterns: [],
    responses: {
      en: 'I apologize, but I did not fully understand your question. I can help you with information about: dengue, malaria, diabetes, fever, cold and cough, COVID-19, vaccination, and general health tips. Please ask about these topics or rephrase your question.',
      hi: 'मुझे खेद है, लेकिन मैं आपके प्रश्न को पूरी तरह से समझ नहीं पाया। मैं आपकी मदद कर सकता हूं: डेंगू, मलेरिया, मधुमेह, बुखार, सर्दी-खांसी, कोविड-19, टीकाकरण और सामान्य स्वास्थ्य युक्तियों के बारे में जानकारी के साथ। कृपया इन विषयों के बारे में पूछें या अपना प्रश्न दोबारा पूछें।',
      bn: 'আমি দুঃখিত, কিন্তু আমি আপনার প্রশ্নটি পুরোপুরি বুঝতে পারিনি। আমি আপনাকে সাহায্য করতে পারি: ডেঙ্গু, ম্যালেরিয়া, ডায়াবেটিস, জ্বর, সর্দি-কাশি, কোভিড-19, টিকা এবং সাধারণ স্বাস্থ্য টিপস সম্পর্কে তথ্য দিয়ে।',
      ta: 'மன்னிக்கவும், ஆனால் உங்கள் கேள்வியை முழுமையாக புரிந்துகொள்ள முடியவில்லை. நான் உங்களுக்கு உதவ முடியும்: டெங்கு, மலேரியா, நீரிழிவு, காய்ச்சல், குளிர்-இருமல், கோவிட்-19, தடுப்பூசி மற்றும் பொதுவான ஆரோக்கிய குறிப்புகள் பற்றிய தகவல்.',
      te: 'నేను క్షమాపణలు కోరుతున్నాను, కానీ నేను మీ ప్రశ్నను పూర్తిగా అర్థం చేసుకోలేకపోయాను. నేను మీకు సహాయం చేయగలను: డెంగ్యూ, మలేరియా, మధుమేహం, జ్వరం, జలుబు-దగ్గు, కోవిడ్-19, టీకాలు మరియు సాధారణ ఆరోగ్య చిట్కాల గురించి సమాచారం.',
    },
  },
];

export function findIntent(input: string): Intent {
  const normalizedInput = input.toLowerCase().trim();
  
  for (const intent of intents) {
    if (intent.id === 'fallback') continue;
    
    for (const pattern of intent.patterns) {
      if (normalizedInput.includes(pattern.toLowerCase())) {
        return intent;
      }
    }
  }
  
  return intents.find(i => i.id === 'fallback')!;
}

export function getResponse(intent: Intent, languageCode: string): string {
  const disclaimer = {
    en: '\n\n⚠️ Disclaimer: This information is for awareness only and does not replace professional medical advice. Please consult a doctor for proper diagnosis and treatment.',
    hi: '\n\n⚠️ अस्वीकरण: यह जानकारी केवल जागरूकता के लिए है और पेशेवर चिकित्सा सलाह को प्रतिस्थापित नहीं करती है। कृपया उचित निदान और उपचार के लिए डॉक्टर से परामर्श करें।',
    bn: '\n\n⚠️ দাবিত্যাগ: এই তথ্য শুধুমাত্র সচেতনতার জন্য এবং পেশাদার চিকিৎসা পরামর্শের পরিবর্তে নয়। সঠিক রোগ নির্ণয় এবং চিকিৎসার জন্য ডাক্তারের পরামর্শ নিন।',
    ta: '\n\n⚠️ மறுப்பு: இந்த தகவல் விழிப்புணர்வுக்கு மட்டுமே மற்றும் தொழில்முறை மருத்துவ ஆலோசனைக்கு மாற்றாக அல்ல. சரியான கண்டறிதல் மற்றும் சிகிச்சைக்கு மருத்துவரை அணுகவும்.',
    te: '\n\n⚠️ DISCLAIMER: ఈ సమాచారం అవగాహన కోసం మాత్రమే మరియు వృత్తిపరమైన వైద్య సలహాకు బదులుగా ఉండదు. సరైన నిర్ధారణ మరియు చికిత్స కోసం దయచేసి డాక్టర్ను సంప్రదించండి.',
  };
  
  const response = intent.responses[languageCode] || intent.responses['en'];
  const disc = disclaimer[languageCode as keyof typeof disclaimer] || disclaimer['en'];
  
  return response + disc;
}

export function processMessage(input: string, languageCode: string): string {
  const intent = findIntent(input);
  return getResponse(intent, languageCode);
}
