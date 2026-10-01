export interface ProcessStep {
  step:  string;
  label: string;
  desc:  string;
  ta?: {
    label: string;
    desc:  string;
  };
}

export const processSteps: ProcessStep[] = [
  {
    step:  "01",
    label: "Site Requirement Discussion",
    desc:  "We talk through your project — floor count, construction type, material quantities, and timeline — before anything moves. No guesswork, no generic packages.",
    ta: {
      label: "தள தேவை விவாதம்",
      desc:  "எதுவும் நகர்வதற்கு முன் உங்கள் திட்டத்தை — மாடி எண்ணிக்கை, கட்டுமான வகை, பொருள் அளவுகள் மற்றும் காலக்கெடு — பற்றி நாங்கள் விவாதிக்கிறோம். யூகங்கள் இல்லை, பொதுவான தொகுப்புகள் இல்லை.",
    },
  },
  {
    step:  "02",
    label: "Material & Work Planning",
    desc:  "We recommend the right scaffolding system, centring configuration, or hoist type for your specific site. Equipment is reserved and confirmed.",
    ta: {
      label: "பொருள் & வேலை திட்டமிடல்",
      desc:  "உங்கள் குறிப்பிட்ட தளத்திற்கு சரியான ஸ்காஃபோல்டிங் அமைப்பு, சென்டரிங் கட்டமைப்பு அல்லது ஹாய்ஸ்ட் வகையை நாங்கள் பரிந்துரைக்கிறோம். உபகரணங்கள் ஒதுக்கப்பட்டு உறுதிப்படுத்தப்படும்.",
    },
  },
  {
    step:  "03",
    label: "Delivery & Setup",
    desc:  "Equipment is delivered on your agreed date. Our crew handles erection and safety checks — handover happens only when everything is verified.",
    ta: {
      label: "டெலிவரி & அமைப்பு",
      desc:  "உங்கள் ஒப்புக்கொள்ளப்பட்ட தேதியில் உபகரணம் டெலிவரி செய்யப்படும். எங்கள் குழு அமைப்பு மற்றும் பாதுகாப்பு சோதனைகளை கையாளுகிறது — எல்லாம் சரிபார்க்கப்பட்ட பிறகே ஒப்படைப்பு நடக்கும்.",
    },
  },
  {
    step:  "04",
    label: "Execution & Site Coordination",
    desc:  "We stay available throughout your rental period. Adjustments, reconfigurations, and replacements are handled without delay.",
    ta: {
      label: "செயல்படுத்தல் & தள ஒருங்கிணைப்பு",
      desc:  "உங்கள் வாடகை காலம் முழுவதும் நாங்கள் கிடைக்கிறோம். சரிசெய்தல்கள், மறுகட்டமைப்பு மற்றும் மாற்றீடுகள் தாமதமின்றி கையாளப்படும்.",
    },
  },
  {
    step:  "05",
    label: "Completion & Takedown",
    desc:  "When your work is complete, we disassemble and remove all equipment promptly so your finishing and cladding work isn't held up.",
    ta: {
      label: "நிறைவு & அகற்றுதல்",
      desc:  "உங்கள் வேலை முடிந்ததும், உங்கள் ஃபினிஷிங் மற்றும் கிளாடிங் வேலை தாமதமாகாமல் இருக்க அனைத்து உபகரணங்களையும் விரைவாக அகற்றுகிறோம்.",
    },
  },
];
