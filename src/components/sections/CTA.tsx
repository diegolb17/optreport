import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const CTA = () => {
  return (
    <AnimatedSection id="contacto" className="section-padding relative">
      {/* Green glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <span className="text-emerald-500 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
            Próximos Pasos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Transformemos
            <span className="block text-gradient-green">OPT MEDIA LATAM</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Los resultados detallados y el plan de implementación están listos para
            transformar cada área con automatización e inteligencia artificial.
          </p>

          <div className="mt-12 p-6 premium-card rounded-2xl inline-block text-left">
            <p className="text-xs text-muted-foreground font-mono mb-2 tracking-wider uppercase">Contacto Directo</p>
            <p className="text-sm text-foreground/80">
              <span className="text-emerald-500">Diego Luna</span> — Director de IA
            </p>
            <p className="text-sm text-muted-foreground">
              losautomatasperu@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
