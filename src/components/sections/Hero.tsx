import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Green radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-green-600/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 lg:gap-6 mb-12"
        >
          <div className="bg-white rounded-lg p-1.5">
            <img
              src="/images/logos/losautomatas.png"
              alt="Los Autómatas"
              className="h-8 lg:h-10 w-auto object-contain"
            />
          </div>
          <span className="text-muted-foreground/30 font-mono text-lg lg:text-xl">×</span>
          <img
            src="/images/logos/optmedia.png"
            alt="OPT MEDIA LATAM"
            className="h-10 lg:h-12 w-auto object-contain"
          />
        </motion.div>

        {/* Title */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-6">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="block text-foreground"
          >
            Informe de
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="block"
          >
            <span className="text-gradient-green glow-green-text">Oportunidades</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="block text-foreground"
          >
            con Inteligencia Artificial
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
        >
          OPT MEDIA LATAM × Los Autómatas
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-base text-muted-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Seis áreas de oportunidad identificadas para optimizar procesos mediante inteligencia
          artificial y automatización en todas las áreas de OPT MEDIA LATAM.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#resumen" className="block animate-bounce">
          <ArrowDown className="w-5 h-5 text-emerald-500/60" />
        </a>
      </motion.div>
    </section>
  );
};
