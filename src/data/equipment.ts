export interface EquipmentItem {
  id:           string;
  name:         string;
  description:  string;
  variants?:    string;
  iconName:     string;
  image:        string;
  ta?: {
    name:        string;
    description: string;
    variants?:   string;
  };
}

export const equipment: EquipmentItem[] = [
  {
    id:          "scaffold-tubes",
    name:        "Scaffold Tubes & Clamps",
    description: "Strong MS tubular steel scaffolding (48.3mm) with safety clamps. Suitable for any building height.",
    variants:    "2m, 3m, 4m, 6m lengths",
    iconName:    "Columns",
    image:       "/equipment/scaffold-tubes.png",
    ta: {
      name:        "ஸ்காஃபோல்ட் குழாய்கள் & கிளாம்ப்புகள்",
      description: "உறுதியான 48.3மிமீ MS ஸ்டீல் குழாய்கள் மற்றும் சேஃப்டி கிளாம்ப்புகள். எந்த மாடி கட்டிடத்திற்கும் ஏற்றது.",
      variants:    "2மீ, 3மீ, 4மீ, 6மீ நீளங்கள்",
    },
  },
  {
    id:          "scaffold-frames",
    name:        "Scaffold Frame Sets",
    description: "Walk-through & narrow frames for quick scaffolding setup on building facades and interiors.",
    variants:    "Standard & Walk-through",
    iconName:    "LayoutGrid",
    image:       "/equipment/scaffold-frames.png",
    ta: {
      name:        "ஸ்காஃபோல்ட் பிரேம்கள் (Frames)",
      description: "வெளிப்புற பூச்சு மற்றும் உள் வேலைகளுக்கு எளிதாக அமைக்கும் வாக்-த்ரூ பிரேம் அமைப்புகள்.",
      variants:    "ஸ்டாண்டர்ட் & வாக்-த்ரூ வகை",
    },
  },
  {
    id:          "centring-props",
    name:        "Adjustable Steel Props",
    description: "Heavy-duty telescopic acrow props for RCC slab and beam shuttering support.",
    variants:    "2m–4m adjustable",
    iconName:    "AlignVerticalJustifyCenter",
    image:       "/equipment/centring-props.png",
    ta: {
      name:        "அட்ஜஸ்டபிள் ஸ்டீல் பிராப்ஸ் (Props)",
      description: "ரூஃப் ஸ்லாப் மற்றும் பீம் சப்போர்ட்டிற்கு உயரம் சரிசெய்யக்கூடிய உறுதியான ஸ்டீல் பிராப்ஸ்.",
      variants:    "2மீ - 4மீ சரிசெய்யலாம்",
    },
  },
  {
    id:          "ms-plates",
    name:        "MS Shuttering Plates",
    description: "Smooth mild-steel shuttering plates for clean concrete slab surfaces.",
    variants:    "0.9m×0.6m, 1.2m×0.6m",
    iconName:    "Layers",
    image:       "/equipment/ms-plates.png",
    ta: {
      name:        "MS ஷட்டரிங் பிளேட்டுகள்",
      description: "ஸ்லாப் மற்றும் பீம் கான்கிரீட் ஊற்ற பயன்படும் தளிவான MS ஷட்டரிங் ஷீட்கள்.",
      variants:    "0.9மீ×0.6மீ, 1.2மீ×0.6மீ",
    },
  },
  {
    id:          "h-frames",
    name:        "H-Frames & Support Channels",
    description: "High-load capacity steel H-frames to bridge spans and support thick slab casting.",
    variants:    "Standard & Heavy-Duty",
    iconName:    "Minus",
    image:       "/equipment/h-frames.png",
    ta: {
      name:        "H-பிரேம்கள் & சப்போர்ட் சேனல்கள்",
      description: "அதிக எடையுள்ள ஸ்லாப்களை தாங்கி நிற்கும் பலமான ஸ்டீல் H-பிரேம் அமைப்புகள்.",
      variants:    "ஹெவி டியூட்டி ரகம்",
    },
  },
  {
    id:          "vertical-hoist",
    name:        "Electric Vertical Hoist",
    description: "Electric material elevator hoist to lift construction materials quickly to upper floors (up to 500kg).",
    variants:    "Daily / Monthly Rental",
    iconName:    "ArrowUpDown",
    image:       "/equipment/vertical-hoist.png",
    ta: {
      name:        "எலெக்ட்ரிக் வெர்டிகல் ஹாய்ஸ்ட் (Hoist)",
      description: "மாடிகளுக்கு பொருட்களை எளிதாகவும் வேகமாகவும் மேலே தூக்க உதவும் எலெக்ட்ரிக் மெட்டீரியல் லிஃப்ட் (500kg வரை).",
      variants:    "தினசரி / மாத வாடகை",
    },
  },
  {
    id:          "base-plates",
    name:        "Base Plates & U-Jacks",
    description: "Heavy base plates and top U-jacks for precise leveling on uneven ground.",
    variants:    "150mm & 200mm base",
    iconName:    "Square",
    image:       "/equipment/base-plates.png",
    ta: {
      name:        "பேஸ் பிளேட்கள் & U-ஜாக்குகள்",
      description: "சமமற்ற தரையிலும் ஸ்காஃபோல்டிங்கை நேராக நிறுத்த உதவும் பேஸ் பிளேட் மற்றும் U-ஜாக்குகள்.",
      variants:    "150மிமீ & 200மிமீ பிளேட்டுகள்",
    },
  },
  {
    id:          "couplers",
    name:        "Scaffold Couplers & Clamps",
    description: "Right-angle, swivel, and sleeve couplers for rigid and safe tube connections.",
    variants:    "Full Coupler Range",
    iconName:    "Settings",
    image:       "/equipment/couplers.png",
    ta: {
      name:        "ஸ்காஃபோல்ட் கப்ளர்கள் & கிளாம்ப்புகள்",
      description: "குழாய்களை இறுக இணைக்கும் ரைட்-ஆங்கிள், ஸ்விவல் மற்றும் ஸ்லீவ் கப்ளர்கள்.",
      variants:    "அனைத்து வகை கப்ளர்கள்",
    },
  },
];
