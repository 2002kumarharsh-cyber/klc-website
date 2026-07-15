import React from "react";
import { ChemProperty } from "@/data/chemicalAnalysis";

interface ChemicalAnalysisProps {
  title: string;
  properties: ChemProperty[];
}

export default function ChemicalAnalysis({ title, properties }: ChemicalAnalysisProps) {
  // Split properties array in half to render two equal columns
  const halfLength = Math.ceil(properties.length / 2);
  const leftCol = properties.slice(0, halfLength);
  const rightCol = properties.slice(halfLength);

  return (
    <div className="bg-white border border-border-custom rounded-lg shadow-sm p-6 sm:p-8">
      <h3 className="font-display font-bold text-lg text-primary mb-6 border-b border-border-custom/50 pb-3">
        {title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
        
        {/* Left Column */}
        <div className="space-y-3">
          {leftCol.map((prop) => (
            <div key={prop.property} className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-border-custom/20">
              <span className="font-medium text-text-secondary font-display">{prop.property}</span>
              <span className="font-mono text-primary font-semibold tabular-nums">{prop.value}</span>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          {rightCol.map((prop) => (
            <div key={prop.property} className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-border-custom/20">
              <span className="font-medium text-text-secondary font-display">{prop.property}</span>
              <span className="font-mono text-primary font-semibold tabular-nums">{prop.value}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Verification footer */}
      <div className="mt-6 text-[10px] text-text-secondary italic leading-relaxed pt-3 border-t border-border-custom/30">
        Note: The above values represent typical chemical characteristics obtained from average production lots. Minor deviations might occur. Custom specifications can be arranged upon technical evaluation.
      </div>

    </div>
  );
}
