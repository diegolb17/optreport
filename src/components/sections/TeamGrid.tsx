import { teamMembers } from "@/data/team";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const TeamGrid = () => {
  return (
    <AnimatedSection id="equipo" className="section-padding relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-emerald-500 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
            Talento Humano
          </span>
          <h2 className="section-title">
            Equipo <span className="text-gradient-green">OPT MEDIA LATAM</span>
          </h2>
          <p className="section-subtitle text-center mx-auto mt-6">
            Conoce a los profesionales que impulsan OPT MEDIA LATAM. La innovacion con IA
            se construye con las personas, potenciando su talento con tecnologia.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center p-4 rounded-2xl green-border transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02]"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden mb-3 ring-1 ring-emerald-500/10 group-hover:ring-emerald-500/30 transition-all duration-300">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-medium text-foreground leading-tight mb-0.5">
                {member.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-tight">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
