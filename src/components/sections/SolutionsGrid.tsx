import { solutions } from "@/data/solutions";
import { AreaSection } from "@/components/common/AreaSection";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const SolutionsGrid = () => {
  return (
    <AnimatedSection id="areas" className="section-padding relative">
      <div className="section-container text-center mb-12">
        <span className="text-emerald-500 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
          Oportunidades Identificadas
        </span>
        <h2 className="section-title">
          Areas de <span className="text-gradient-green">Transformacion</span>
        </h2>
        <p className="section-subtitle text-center mx-auto mt-6">
          Seis areas clave con soluciones priorizadas de automatizacion e IA,
          disenadas para maximizar el impacto en la operacion diaria.
        </p>
      </div>

      {solutions.map((solution, index) => (
        <AreaSection key={solution.id} solution={solution} index={index} />
      ))}
    </AnimatedSection>
  );
};
