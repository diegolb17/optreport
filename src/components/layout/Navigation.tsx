import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "resumen", label: "Resumen" },
  { id: "equipo", label: "Equipo" },
  { id: "areas", label: "Oportunidades" },
  { id: "roadmap", label: "Hoja de Ruta" },
  { id: "contacto", label: "Contacto" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      return new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
    });

    observers.forEach((obs, i) => {
      const el = document.getElementById(sections[i].id);
      if (obs && el) obs.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-emerald-500/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logos */}
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-md p-1">
                <img
                  src="/images/logos/losautomatas.png"
                  alt="Los Autómatas"
                  className="h-5 lg:h-6 w-auto object-contain"
                />
              </div>
              <span className="text-muted-foreground/40 font-mono text-sm">×</span>
              <img
                src="/images/logos/optmedia.png"
                alt="OPT MEDIA LATAM"
                className="h-7 lg:h-8 w-auto object-contain"
              />
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`relative text-sm tracking-wide transition-colors ${
                    activeSection === id
                      ? "text-emerald-500"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-emerald-500"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop spacer (removed CTA button) */}
            <div className="hidden lg:block w-[1px]" />

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground p-2"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center gap-8"
          >
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-2xl font-display transition-colors ${
                  activeSection === id ? "text-emerald-500" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
