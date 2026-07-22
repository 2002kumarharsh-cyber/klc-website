export interface PCCGrade {
  id: string;
  name: string;
  type: "PCC";
  specs: {
    apparentDensity: string;
    lossOnDrying: string;
    specificSurfaceDiameter: string;
    d50: string;
    flowPoint: string;
    fineness: string;
    dopAbsorption: string;
    assay: string;
    crystallineHabit: string;
    totalBacterialCount?: string;
    yeastMoldCount?: string;
  };
  recommendedFor: string[];
}

export interface GCCGrade {
  id: string;
  name: string;
  type: "GCC";
  specs: {
    d50: string;
    d97: string;
    fineness: string;
    brightness: string;
    whiteness: string;
  };
  recommendedFor: string[];
}

export type ProductGrade = PCCGrade | GCCGrade;

export const pccGrades: PCCGrade[] = [
  {
    id: "klc-11",
    name: "KLC-11",
    type: "PCC",
    specs: {
      apparentDensity: "0.42-0.45",
      lossOnDrying: "0.8 MAX",
      specificSurfaceDiameter: "0.33",
      d50: "5-7",
      flowPoint: "22-26",
      fineness: "100%",
      dopAbsorption: "50-60",
      assay: "98%",
      crystallineHabit: "Aragonite",
    },
    recommendedFor: ["rubber", "paints-and-coatings", "detergent", "friction-materials"]
  },
  {
    id: "klc-111",
    name: "KLC-111",
    type: "PCC",
    specs: {
      apparentDensity: "0.45-0.50",
      lossOnDrying: "0.8 MAX",
      specificSurfaceDiameter: "0.33",
      d50: "5-7",
      flowPoint: "22-26",
      fineness: "100%",
      dopAbsorption: "50-60",
      assay: "98%",
      crystallineHabit: "Aragonite",
    },
    recommendedFor: ["rubber", "paints-and-coatings", "pharmaceutical", "food", "cosmetics-and-personal-care", "friction-materials"]
  },
  {
    id: "klc-11-ultra",
    name: "KLC-11 Ultra",
    type: "PCC",
    specs: {
      apparentDensity: "0.36-0.39",
      lossOnDrying: "1.0 MAX",
      specificSurfaceDiameter: "0.30",
      d50: "4-5",
      flowPoint: "29-32",
      fineness: "100%",
      dopAbsorption: "55-65",
      assay: "99%",
      crystallineHabit: "Aragonite",
    },
    recommendedFor: ["rubber", "pharmaceutical", "food", "cosmetics-and-personal-care"]
  },
  {
    id: "klc-10",
    name: "KLC-10",
    type: "PCC",
    specs: {
      apparentDensity: "0.74-0.83",
      lossOnDrying: "1.0 MAX",
      specificSurfaceDiameter: "0.45",
      d50: "6-8",
      flowPoint: "12-15",
      fineness: "100%",
      dopAbsorption: "26-32",
      assay: "97%",
      crystallineHabit: "Semi-Calcite",
    },
    recommendedFor: ["plastics-and-pvc", "adhesives-and-sealants"]
  },
  {
    id: "klc-121",
    name: "KLC-121",
    type: "PCC",
    specs: {
      apparentDensity: "0.52-0.55",
      lossOnDrying: "1.0 MAX",
      specificSurfaceDiameter: "0.38",
      d50: "4-6",
      flowPoint: "22-24",
      fineness: "100%",
      dopAbsorption: "40-50",
      assay: "97%",
      crystallineHabit: "Aragonite",
    },
    recommendedFor: ["rubber", "paper", "paints-and-coatings", "detergent", "glass"]
  },
  {
    id: "klc-101",
    name: "KLC-101",
    type: "PCC",
    specs: {
      apparentDensity: "0.70-0.85",
      lossOnDrying: "0.5 MAX",
      specificSurfaceDiameter: "1.4",
      d50: "7-9",
      flowPoint: "12-16",
      fineness: "100%",
      dopAbsorption: "24-32",
      assay: "99.5%",
      crystallineHabit: "Aragonite",
      totalBacterialCount: "100 MAX",
      yeastMoldCount: "10 MAX"
    },
    recommendedFor: ["pharmaceutical", "food"]
  }
];

export const gccGrades: GCCGrade[] = [
  {
    id: "klc-g-7",
    name: "KLC-G-7",
    type: "GCC",
    specs: {
      d50: "2",
      d97: "7.8",
      fineness: "99.6%",
      brightness: "95.7%",
      whiteness: "97.7%"
    },
    recommendedFor: ["plastics-and-pvc", "paper", "paints-and-coatings", "adhesives-and-sealants", "glass", "construction-and-building-materials", "ceramics"]
  },
  {
    id: "klc-g-10",
    name: "KLC-G-10",
    type: "GCC",
    specs: {
      d50: "3.5",
      d97: "9.5",
      fineness: "99.6%",
      brightness: "95.6%",
      whiteness: "97.6%"
    },
    recommendedFor: ["plastics-and-pvc", "paper", "paints-and-coatings", "adhesives-and-sealants", "glass", "construction-and-building-materials", "ceramics"]
  },
  {
    id: "klc-g-15",
    name: "KLC-G-15",
    type: "GCC",
    specs: {
      d50: "5",
      d97: "14.8",
      fineness: "99.6%",
      brightness: "96%",
      whiteness: "98%"
    },
    recommendedFor: ["plastics-and-pvc", "paper", "paints-and-coatings", "adhesives-and-sealants", "glass", "construction-and-building-materials", "ceramics"]
  },
  {
    id: "klc-g-20",
    name: "KLC-G-20",
    type: "GCC",
    specs: {
      d50: "5.5",
      d97: "19.4",
      fineness: "99.6%",
      brightness: "95.6%",
      whiteness: "97.6%"
    },
    recommendedFor: ["plastics-and-pvc", "paper", "paints-and-coatings", "adhesives-and-sealants", "glass", "construction-and-building-materials", "ceramics"]
  },
  {
    id: "klc-g-25",
    name: "KLC-G-25",
    type: "GCC",
    specs: {
      d50: "6",
      d97: "24",
      fineness: "99.6%",
      brightness: "95.6%",
      whiteness: "97.6%"
    },
    recommendedFor: ["plastics-and-pvc", "paper", "paints-and-coatings", "adhesives-and-sealants", "glass", "construction-and-building-materials", "ceramics"]
  }
];

export const allProductGrades: ProductGrade[] = [...pccGrades, ...gccGrades];
