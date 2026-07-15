export interface ChemProperty {
  property: string;
  value: string;
}

export const pccChemicalAnalysis: ChemProperty[] = [
  { property: "Color", value: "Bright white" },
  { property: "Specific gravity", value: "2.65-2.75" },
  { property: "Solution in 5N HCl", value: "Clear" },
  { property: "Soluble Alkali (Na₂O) max", value: "0.15%" },
  { property: "pH", value: "9.3-10.3" },
  { property: "Loss on Drying (at 105°C)", value: "0.5% - 1.0%" },
  { property: "Iron (as Fe) max", value: "0.02%" },
  { property: "Manganese (as Mn) max", value: "0.00%" },
  { property: "Lead (as Pb) max", value: "5 ppm" },
  { property: "Copper (as Cu)", value: "Negligible" },
  { property: "Arsenic (as As)", value: "Less than 2 ppm" },
  { property: "Chloride (as Cl)", value: "Traces" },
  { property: "Fluoride (as F)", value: "Traces" },
  { property: "Phosphate (PO₄) max", value: "0.10%" },
  { property: "Sulphate (SO₄) max", value: "0.16%" },
  { property: "Silica (SiO₂) max", value: "0.05%" },
  { property: "Matter insoluble in HCl max", value: "0.10%" },
  { property: "Magnesia (as MgO) max", value: "0.05%" }
];

export const gccChemicalAnalysis: ChemProperty[] = [
  { property: "CaCO₃", value: "94.00 - 98.50%" },
  { property: "CaO", value: "53.50 - 55.50%" },
  { property: "MgCO₃", value: "0.31%" },
  { property: "MgO", value: "0.20 - 0.40%" },
  { property: "Acid Insoluble Residue", value: "0.31 - 0.72%" },
  { property: "Silica as SiO₂", value: "0.30%" },
  { property: "Fe₂O₃", value: "0.50%" },
  { property: "Al₂O₃", value: "0.17%" },
  { property: "Loss on ignition", value: "43.50%" }
];
