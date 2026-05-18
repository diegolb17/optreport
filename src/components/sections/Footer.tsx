export const Footer = () => {
  return (
    <footer className="border-t border-emerald-500/10 py-10 lg:py-14">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logos */}
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-md p-0.5">
              <img
                src="/images/logos/losautomatas.png"
                alt="Los Autómatas"
                className="h-5 w-auto object-contain"
              />
            </div>
            <span className="text-muted-foreground/20 font-mono text-sm">+</span>
            <img
              src="/images/logos/optmedia.png"
              alt="OPT MEDIA LATAM"
              className="h-6 w-auto object-contain opacity-60"
            />
          </div>

          {/* Info */}
          <div className="text-center lg:text-right">
            <p className="text-xs text-muted-foreground/50 font-mono">
              © {new Date().getFullYear()} Los Autómatas × OPT MEDIA LATAM
            </p>
            <p className="text-xs text-muted-foreground/40 mt-1">
              Informe de Oportunidades con Inteligencia Artificial
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
