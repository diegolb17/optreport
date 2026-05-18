export interface RoadmapPhase {
  phase: number;
  title: string;
  items: string[];
  description: string;
}

export const roadmap: RoadmapPhase[] = [
  {
    phase: 1,
    title: "Finanzas y Automatizacion Global",
    description: "Desarrollo de software interno de conciliacion bancaria, implementacion de MCP Google Sheets para finanzas, sistema de recordatorios global, y plantillas de onboarding automatizadas.",
    items: [
      "Software de conciliacion bancaria automatica",
      "MCP Google Sheets para consultas financieras",
      "Dashboard financiero automatizado",
      "Sistema de recordatorios multi-canal",
      "Plantillas de onboarding automatizadas"
    ]
  },
  {
    phase: 2,
    title: "SEO y Monitoreo Post Venta",
    description: "Optimizacion de WordPress con MCP para creacion rapida de landings, automatizacion de monitoreo de sitios web, e integracion Looker Studio a Google Sheets.",
    items: [
      "MCP WordPress con flujo sin Elementor",
      "Migracion a bloques nativos de WordPress",
      "Monitoreo automatico con Playwright + IA",
      "Automatizacion Looker Studio a Sheets",
      "Sistema de recordatorios internos"
    ]
  },
  {
    phase: 3,
    title: "Automatizacion de Contenido y SEM",
    description: "Implementacion de MCP SEM Rush para keyword research automatizado, desarrollo del skill de redaccion IA de OPT MEDIA LATAM, y configuracion de MCP Google Ads con alertas inteligentes.",
    items: [
      "MCP SEM Rush para keywords automaticas",
      "Skill de redaccion IA OPT MEDIA LATAM",
      "MCP Google Ads con alertas en tiempo real",
      "Pipeline contenido: keyword a publicacion"
    ]
  }
];
