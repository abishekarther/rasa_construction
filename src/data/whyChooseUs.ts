export interface WhyItem {
  id:          string;
  title:       string;
  description: string;
  stat?:       string;
  iconName:    string;
  ta?: {
    title:       string;
    description: string;
    stat?:       string;
  };
}

export const whyChooseUs: WhyItem[] = [
  {
    id:          "owner-involved",
    title:       "Owner-Involved in Every Project",
    description: "Gurusamy A is personally reachable on every job. You speak directly to the person responsible — not a booking agent or middlemen.",
    stat:        "Direct Access",
    iconName:    "UserCheck",
    ta: {
      title:       "ஒவ்வொரு திட்டத்திலும் உரிமையாளர் ஈடுபாடு",
      description: "குருசாமி A ஒவ்வொரு வேலையிலும் தனிப்பட்ட முறையில் தொடர்பு கொள்ளக்கூடியவர். நீங்கள் நேரடியாக பொறுப்பான நபருடன் பேசுகிறீர்கள் — புக்கிங் ஏஜென்ட் அல்லது இடைத்தரகர் இல்லை.",
      stat:        "நேரடி அணுகல்",
    },
  },
  {
    id:          "maintained-equipment",
    title:       "Inspection-Grade Equipment",
    description: "Every item in our inventory is inspected after return and serviced before the next deployment. Bent tubes, worn threads, and faulty clamps are replaced — not rented.",
    stat:        "100+ Units",
    iconName:    "ShieldCheck",
    ta: {
      title:       "ஆய்வு தரம் கொண்ட உபகரணங்கள்",
      description: "எங்கள் இருப்பில் உள்ள ஒவ்வொரு பொருளும் திரும்பியதும் ஆய்வு செய்யப்பட்டு அடுத்த பயன்பாட்டிற்கு முன் சரிசெய்யப்படுகிறது. வளைந்த குழாய்கள், தேய்ந்த த்ரெட்கள் மற்றும் குறைபாடுள்ள கிளாம்புகள் மாற்றப்படுகின்றன — வாடகைக்கு விடப்படுவதில்லை.",
      stat:        "100+ யூனிட்கள்",
    },
  },
  {
    id:          "on-time-delivery",
    title:       "Delivery on Your Confirmed Date",
    description: "We don't push deliveries or ask you to 'wait a day.' When your start date is confirmed, equipment arrives on that date, erected and ready for handover.",
    stat:        "500+ Projects",
    iconName:    "Clock",
    ta: {
      title:       "உங்கள் உறுதிப்படுத்தப்பட்ட தேதியில் டெலிவரி",
      description: "நாங்கள் டெலிவரியை தள்ளிவைக்கவோ, 'ஒரு நாள் காத்திருங்கள்' என்று கேட்கவோ மாட்டோம். உங்கள் தொடக்க தேதி உறுதிப்படுத்தப்பட்டதும், அந்த தேதியில் உபகரணம் வந்து, அமைக்கப்பட்டு, ஒப்படைப்பிற்கு தயாராக இருக்கும்.",
      stat:        "500+ திட்டங்கள்",
    },
  },
  {
    id:          "honest-pricing",
    title:       "Transparent Pricing",
    description: "Your quoted price is your final price. No hidden charges at project end, no inflated damage costs for normal wear, no deposit surprises.",
    stat:        "No Hidden Fees",
    iconName:    "BadgeIndianRupee",
    ta: {
      title:       "வெளிப்படையான விலை நிர்ணயம்",
      description: "உங்களுக்கு தரப்பட்ட விலையே இறுதி விலை. திட்டம் முடிவில் மறைமுக கட்டணங்கள் இல்லை, சாதாரண தேய்மானத்திற்கு அதிகப்படியான சேத கட்டணம் இல்லை, டெபாசிட் ஆச்சரியங்கள் இல்லை.",
      stat:        "மறைமுக கட்டணங்கள் இல்லை",
    },
  },
  {
    id:          "safety-first",
    title:       "Safety Standards Enforced",
    description: "All scaffold setups follow IS code requirements. We never allow clients to skip base plates, diagonal bracing, or safety checks to save time — even when they ask.",
    stat:        "IS Code Compliant",
    iconName:    "HardHat",
    ta: {
      title:       "பாதுகாப்பு தரநிலைகள் கண்டிப்பாக பின்பற்றப்படும்",
      description: "அனைத்து ஸ்காஃபோல்ட் அமைப்புகளும் IS கோட் தேவைகளை பின்பற்றுகின்றன. நேரத்தை மிச்சப்படுத்த வாடிக்கையாளர்கள் கேட்டாலும் கூட, பேஸ் பிளேட்கள், டையகனல் பிரேசிங் அல்லது பாதுகாப்பு சோதனைகளை தவிர்க்க நாங்கள் ஒருபோதும் அனுமதிக்க மாட்டோம்.",
      stat:        "IS கோட் இணக்கம்",
    },
  },
  {
    id:          "district-coverage",
    title:       "Coverage Across South Tamil Nadu",
    description: "Active across Tirunelveli, Kanyakumari, Tenkasi, and Nagercoil districts. We know local site conditions, material access, and contractor timelines in the region.",
    stat:        "4+ Districts",
    iconName:    "MapPin",
    ta: {
      title:       "தென் தமிழ்நாடு முழுவதும் சேவை",
      description: "திருநெல்வேலி, கன்னியாகுமரி, தென்காசி மற்றும் நாகர்கோவில் மாவட்டங்களில் செயல்படுகிறோம். பிராந்தியத்தில் உள்ளூர் தள நிலைமைகள், பொருள் அணுகல் மற்றும் கான்ட்ராக்டர் காலக்கெடுக்களை நாங்கள் அறிவோம்.",
      stat:        "4+ மாவட்டங்கள்",
    },
  },
];
