import { roadmap } from "@/data/roadmap";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Roadmap = () => {
  return (
    <AnimatedSection id="roadmap" className="section-padding relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-emerald-500 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
            Implementacion
          </span>
          <h2 className="section-title">
            Hoja de <span className="text-gradient-green">Ruta</span>
          </h2>
          <p className="section-subtitle text-center mx-auto mt-6">
            Plan de implementacion por fases, priorizando las soluciones de mayor impacto
            para OPT MEDIA LATAM.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-emerald-500/20 via-emerald-500/40 to-emerald-500/20 -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {roadmap.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Phase number */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-emerald-500 font-mono">{phase.phase}</span>
                  </div>
                  <div className="h-[1px] flex-1 bg-emerald-500/20 hidden lg:block" />
                </div>

                {/* Content */}
                <div className="premium-card rounded-2xl p-6 lg:p-8">
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {phase.description}
                  </p>

                  <ul className="space-y-2.5">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-500/60 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
