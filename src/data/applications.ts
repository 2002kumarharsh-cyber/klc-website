export interface Application {
  slug: string;
  name: string;
  headline: string;
  benefits: string[];
  recommendedProducts: string[]; // grade IDs
  imagePrimary: string;
  imageSecondary?: string;
}

export const applications: Application[] = [
  {
    slug: "rubber",
    name: "Rubber Industry",
    headline: "Used in tyres, tubes, conveyor belts, footwear, and molded rubber goods to improve strength, durability, and processing efficiency.",
    benefits: [
      "Improves tensile strength, stiffness, and hardness",
      "Enhances abrasion resistance and product life",
      "Provides better processing and surface finish"
    ],
    recommendedProducts: ["klc-11", "klc-111", "klc-11-ultra", "klc-121"],
    imagePrimary: "/images/applications/rubber industry 01.jpg",
    imageSecondary: "/images/applications/rubber industry 02.jpg"
  },
  {
    slug: "plastics-and-pvc",
    name: "Plastics & PVC Industry",
    headline: "Widely used in PVC pipes, conduits, and polymer compounds to enhance rigidity, dimensional stability, and processing performance.",
    benefits: [
      "Improves stiffness and ring strength",
      "Enhances impact resistance with fine grades",
      "Improves extrusion efficiency and heat stability"
    ],
    recommendedProducts: ["klc-10", "klc-g-7", "klc-g-10", "klc-g-15", "klc-g-20", "klc-g-25"],
    imagePrimary: "/images/applications/plastics and pvc industry 01.jpg",
    imageSecondary: "/images/applications/plastics and pvc industry 02.jpg"
  },
  {
    slug: "paper",
    name: "Paper Industry",
    headline: "Used in writing, printing, and coated papers to improve brightness, opacity, and print quality while reducing pulp consumption.",
    benefits: [
      "Enhances whiteness and opacity",
      "Improves surface smoothness and printability",
      "Enables cost-effective paper production"
    ],
    recommendedProducts: ["klc-121", "klc-g-7", "klc-g-10", "klc-g-15", "klc-g-20", "klc-g-25"],
    imagePrimary: "/images/applications/paper industry 01.jpg",
    imageSecondary: "/images/applications/paper industry 02.jpg"
  },
  {
    slug: "paints-and-coatings",
    name: "Paints & Coatings",
    headline: "Used as an extender pigment to improve coating performance, finish, and cost efficiency in paints.",
    benefits: [
      "Improves dispersion and coverage",
      "Controls gloss and surface finish",
      "Enhances durability and weather resistance"
    ],
    recommendedProducts: ["klc-11", "klc-111", "klc-121", "klc-g-7", "klc-g-10", "klc-g-15", "klc-g-20", "klc-g-25"],
    imagePrimary: "/images/applications/paints and coatings 01.jpg",
    imageSecondary: "/images/applications/paints and coatings 02.jpg"
  },
  {
    slug: "adhesives-and-sealants",
    name: "Adhesives & Sealants",
    headline: "Used in various adhesive systems to control flow properties, improve bonding strength, and enhance formulation stability.",
    benefits: [
      "Provides excellent rheology and slump resistance",
      "Improves tensile strength and cohesion",
      "Reduces shrinkage and enhances consistency"
    ],
    recommendedProducts: ["klc-10", "klc-g-7", "klc-g-10", "klc-g-15", "klc-g-20", "klc-g-25"],
    imagePrimary: "/images/applications/adhesives and sealants 01.jpg",
    imageSecondary: "/images/applications/adhesives and sealants 02.jpg"
  },
  {
    slug: "detergent",
    name: "Detergent Industry",
    headline: "Used in detergent powders, cakes, and cleaning products to improve formulation efficiency and performance.",
    benefits: [
      "Improves bulk density and flow properties",
      "Acts as a filler and anti-caking agent",
      "Provides mild abrasive cleaning action"
    ],
    recommendedProducts: ["klc-11", "klc-121"],
    imagePrimary: "/images/applications/detergent industry 01.jpg"
  },
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical Industry",
    headline: "Used as both an active ingredient and excipient in tablets and healthcare formulations requiring high purity and safety.",
    benefits: [
      "Acts as an effective calcium supplement and antacid",
      "Provides excellent compressibility in tablets",
      "Ensures stability and controlled pH"
    ],
    recommendedProducts: ["klc-111", "klc-11-ultra", "klc-101"],
    imagePrimary: "/images/applications/phamaceutical industry 01.jpg", // Kept exact spelling in filesystem
    imageSecondary: "/images/applications/pharmaceutical indusry 02.jpg" // Kept exact spelling in filesystem
  },
  {
    slug: "food",
    name: "Food Industry",
    headline: "Used as a food additive (E170) for fortification, stabilisation, and texture enhancement in various food products.",
    benefits: [
      "Provides calcium enrichment",
      "Acts as an acidity regulator and firming agent",
      "Improves texture and flow properties"
    ],
    recommendedProducts: ["klc-111", "klc-11-ultra", "klc-101"],
    imagePrimary: "/images/applications/food industry 01.jpg",
    imageSecondary: "/images/applications/food industry 02.jpg"
  },
  {
    slug: "cosmetics-and-personal-care",
    name: "Cosmetics & Personal Care",
    headline: "Used in powders, creams, and oral care products for texture improvement, oil absorption, and finishing quality.",
    benefits: [
      "Excellent oil absorption and mattifying effect",
      "Provides smooth texture and opacity",
      "Acts as a mild abrasive in oral care"
    ],
    recommendedProducts: ["klc-111", "klc-11-ultra"],
    imagePrimary: "/images/applications/cosmetics and personal care 01.jpg",
    imageSecondary: "/images/applications/cometics and personal care 02.jpg" // Kept exact spelling in filesystem
  },
  {
    slug: "glass",
    name: "Glass Industry",
    headline: "Used as a stabiliser and flux in glass manufacturing to improve durability and processing efficiency.",
    benefits: [
      "Enhances chemical durability and strength",
      "Reduces melting temperature and energy consumption",
      "Improves clarity and finish"
    ],
    recommendedProducts: ["klc-121", "klc-g-7", "klc-g-10", "klc-g-15", "klc-g-20", "klc-g-25"],
    imagePrimary: "/images/applications/glass industry 01.jpg",
    imageSecondary: "/images/applications/glass industry 02.jpg"
  },
  {
    slug: "construction-and-building-materials",
    name: "Construction & Building Materials",
    headline: "Used in cement boards, pipes, and construction materials to enhance strength, durability, and workability.",
    benefits: [
      "Improves structural strength and stability",
      "Enhances workability and finish",
      "Provides cost-effective formulation"
    ],
    recommendedProducts: ["klc-g-7", "klc-g-10", "klc-g-15", "klc-g-20", "klc-g-25"],
    imagePrimary: "/images/applications/construction and building materials 01.jpg",
    imageSecondary: "/images/applications/construction and building materials 02.jpg"
  },
  {
    slug: "ceramics",
    name: "Ceramics Industry",
    headline: "Used in tiles, sanitary ware, and glazes to improve finish, durability, and thermal performance.",
    benefits: [
      "Acts as a flux for better melting and bonding",
      "Improves whiteness and surface finish",
      "Controls shrinkage and cracking"
    ],
    recommendedProducts: ["klc-g-7", "klc-g-10", "klc-g-15", "klc-g-20", "klc-g-25"],
    imagePrimary: "/images/applications/ceramics indsutry 01.jpg", // Kept exact spelling in filesystem
    imageSecondary: "/images/applications/ceramics industry 02.jpg"
  },
  {
    slug: "friction-materials",
    name: "Friction Materials",
    headline: "Used in brake linings and clutch facings to stabilize performance and improve durability.",
    benefits: [
      "Maintains consistent friction performance",
      "Reduces noise and vibration",
      "Improves heat resistance and wear life"
    ],
    recommendedProducts: ["klc-11", "klc-111"],
    imagePrimary: "/images/applications/friction materials 01.jpg",
    imageSecondary: "/images/applications/friction materials 02.jpg"
  }
];
