import { StatsCounter } from "@/components/common/StatsCounter";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const ExecutiveSummary = () => {
  return (
    <AnimatedSection id="resumen" className="section-padding relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-emerald-500 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
            Panorama General
          </span>
          <h2 className="section-title">
            Resumen <span className="text-gradient-green">Ejecutivo</span>
          </h2>
          <p className="section-subtitle text-center mx-auto mt-6">
            Analizamos las operaciones de OPT MEDIA LATAM para identificar oportunidades
            de automatización e inteligencia artificial en cada área. Este informe presenta
            las soluciones priorizadas según su impacto potencial y viabilidad de implementación.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-4xl mx-auto">
          <StatsCounter value={6} label="Áreas Analizadas" delay={0} />
          <StatsCounter value={15} suffix="+" label="Procesos Automatizables" delay={0.1} />
          <StatsCounter value={80} suffix="%" label="Mejora en Eficiencia Operativa" delay={0.2} />
          <StatsCounter value={90} suffix="%" label="Reducción de Tareas Manuales" delay={0.3} />
        </div>
      </div>
    </AnimatedSection>
  );
};
