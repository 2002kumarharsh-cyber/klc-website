import React from "react";
import { PCCGrade, GCCGrade } from "@/data/products";
import { slugToTitle } from "@/lib/utils";

interface SpecTableProps {
  grades: (PCCGrade | GCCGrade)[];
}

export default function SpecTable({ grades }: SpecTableProps) {
  if (grades.length === 0) return null;

  // Determine if they are PCC or GCC by looking at the first item
  const isPCC = grades[0].type === "PCC";

  // Define properties display mapping for PCC and GCC
  const pccKeys = [
    { key: "apparentDensity", label: "Apparent Density (g/ml)" },
    { key: "lossOnDrying", label: "Loss on drying (105°C)" },
    { key: "specificSurfaceDiameter", label: "Specific Surface Diameter (µm)" },
    { key: "d50", label: "Particle Size Medium Diameter (d50) (µm)" },
    { key: "flowPoint", label: "Flow Point (ml/15g)" },
    { key: "fineness", label: "Fineness Residue (Passing 325 Mesh / 45 µm)" },
    { key: "dopAbsorption", label: "D.O.P. Absorption (g/100g)" },
    { key: "assay", label: "Assay (as CaCO₃)" },
    { key: "crystallineHabit", label: "Crystalline Habit" },
    { key: "totalBacterialCount", label: "Total Bacterial Count (cfu/gm)" },
    { key: "yeastMoldCount", label: "Yeast & mold count (cfu/gm)" }
  ];

  const gccKeys = [
    { key: "d50", label: "Particle Size Medium Diameter (d50) (µm)" },
    { key: "d97", label: "Particle Size Medium Diameter (d97) (µm)" },
    { key: "fineness", label: "Fineness Residue (Passing 325 Mesh / 45 µm)" },
    { key: "brightness", label: "Brightness" },
    { key: "whiteness", label: "Whiteness" }
  ];

  const rowKeys = isPCC ? pccKeys : gccKeys;

  return (
    <div className="w-full overflow-hidden border border-border-custom rounded-lg shadow-sm bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          
          {/* Table Header: Grades */}
          <thead>
            <tr className="bg-primary text-white border-b border-border-custom">
              <th className="p-4 font-display font-semibold min-w-[200px] sticky left-0 bg-primary z-10">
                Properties / Parameters
              </th>
              {grades.map((grade) => (
                <th key={grade.id} className="p-4 font-display font-semibold text-center min-w-[120px] bg-primary">
                  {grade.name}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body: Specs */}
          <tbody className="divide-y divide-border-custom">
            {rowKeys.map((row) => {
              // Check if at least one grade has a value for this property
              const hasValue = grades.some((grade) => {
                const specVal = (grade.specs as any)[row.key];
                return specVal !== undefined && specVal !== "—" && specVal !== "";
              });

              // Skip rows with no values across all grades (e.g. bacterial count for standard PCC grades)
              if (!hasValue) return null;

              return (
                <tr key={row.key} className="hover:bg-surface-2 transition-colors">
                  {/* Property Label (Sticky Column for convenient scroll reading) */}
                  <td className="p-3.5 font-medium text-primary sticky left-0 bg-white group-hover:bg-surface-2 border-r border-border-custom/30 font-display z-10">
                    {row.label}
                  </td>
                  {/* Property Values per Grade */}
                  {grades.map((grade) => {
                    const value = (grade.specs as any)[row.key] || "—";
                    return (
                      <td key={grade.id} className="p-3.5 text-center font-mono text-text-secondary tabular-nums">
                        {value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
      
      {/* Scroll indicator banner */}
      <div className="bg-surface-2 px-4 py-2 text-[10px] text-text-secondary font-medium tracking-wide border-t border-border-custom/50 flex justify-between items-center">
        <span>* Standard laboratory analysis values</span>
        <span className="sm:hidden text-accent font-semibold animate-pulse">Swipe left to view all grades &rarr;</span>
      </div>

    </div>
  );
}
