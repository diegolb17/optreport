import type { AreaSolution } from "@/data/solutions";
import { GlassCard } from "@/components/common/GlassCard";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AlertTriangle, CheckCircle2, Target, Wrench, ShieldAlert, Beaker } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  PenLine: Beaker,
  BarChart3: ShieldAlert,
  Search: AlertTriangle,
  ShieldCheck: CheckCircle2,
  FileSpreadsheet: Target,
  Bell: Wrench,
};

interface AreaSectionProps {
  solution: AreaSolution;
  index: number;
}

export const AreaSection = ({ solution, index }: AreaSectionProps) => {
  const IconComponent = iconMap[solution.icon] || Beaker;

  return (
    <AnimatedSection
      id={solution.id}
      className="section-padding relative"
      delay={index * 0.1}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${solution.color} opacity-30`} />

      <div className="section-container relative z-10">
        {/* Area header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <IconComponent className="w-5 h-5 text-emerald-500" />
          </div>
          <span className="font-display text-2xl lg:text-3xl text-foreground">{solution.area}</span>
          <span
            className={`ml-auto text-xs font-mono tracking-wider uppercase px-3 py-1 rounded-full border ${
              solution.priority === "alta"
                ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
                : "text-amber-400 border-amber-500/30 bg-amber-500/10"
            }`}
          >
            Prioridad: {solution.priority}
          </span>
        </div>

        <div className="divider-green mb-8" />

        {/* Problem / Solution grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Problems */}
          <GlassCard>
            <div className="flex items-center gap-2 mb-5">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h3 className="font-display text-lg text-foreground">Situacion Actual</h3>
            </div>
            <ul className="space-y-3">
              {solution.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 mt-2 shrink-0" />
                  {problem}
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Solutions */}
          <GlassCard>
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <h3 className="font-display text-lg text-foreground">Solucion Propuesta</h3>
            </div>
            <ul className="space-y-3">
              {solution.solutions.map((sol) => (
                <li key={sol} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-2 shrink-0" />
                  {sol}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* Bottom: Tools + Goal + Custom software badge */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Tools */}
          <GlassCard hover={false}>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-4 h-4 text-emerald-500" />
              <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">Herramientas</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {solution.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-3 py-1.5 rounded-full border border-emerald-500/15 bg-emerald-500/5 text-emerald-400 font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Goal */}
          <GlassCard hover={false}>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-4 h-4 text-emerald-500" />
              <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">Objetivo</h4>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {solution.goal}
            </p>
            {solution.customSoftware && (
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <Beaker className="w-3 h-3" />
                Propuesta de desarrollo de software interno
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </AnimatedSection>
  );
};
