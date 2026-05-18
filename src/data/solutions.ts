export interface AreaSolution {
  id: string;
  icon: string;
  area: string;
  priority: "alta" | "media";
  problems: string[];
  solutions: string[];
  tools: string[];
  goal: string;
  customSoftware: boolean;
  color: string;
}

export const solutions: AreaSolution[] = [
  {
    id: "redaccion",
    icon: "PenLine",
    area: "Redaccion",
    priority: "alta",
    problems: [
      "Busqueda manual de palabras clave sin apoyo de IA",
      "Redaccion manual de contenidos para blogs y sitios web",
      "No se utiliza IA generativa para la creacion de imagenes",
      "Tiempos prolongados en la produccion de articulos"
    ],
    solutions: [
      "Implementacion de MCP SEM Rush para obtencion automatica de keywords y analisis SEO",
      "Desarrollo de skill de redaccion OPT MEDIA LATAM con IA para contenido organico menor a 5000 palabras",
      "Generacion automatica de imagenes con IA integrada al flujo de redaccion",
      "Pipeline automatizado desde keyword research hasta publicacion"
    ],
    tools: ["SEM Rush MCP", "Claude AI", "Generacion de Imagenes IA"],
    goal: "Reducir el equipo de redaccion a 1 persona que gestione todo el contenido con asistencia de IA",
    customSoftware: true,
    color: "from-emerald-500/20 to-green-900/20"
  },
  {
    id: "sem",
    icon: "BarChart3",
    area: "Google Ads (SEM)",
    priority: "alta",
    problems: [
      "Generacion manual de reportes de campanas publicitarias",
      "Alertas de campanas llegan a un correo que no se revisa",
      "Analisis de rendimiento requiere extraccion manual de datos",
      "No hay alertas tempranas sobre cambios en el rendimiento"
    ],
    solutions: [
      "MCP Google Ads para consultas directas sobre rendimiento de campanas",
      "Sistema de alertas automatizadas redirigidas a canales activos (Google Chat, WhatsApp)",
      "Reportes automatizados con analisis de tendencias y deteccion de anomalias",
      "Dashboard inteligente con metricas clave en tiempo real"
    ],
    tools: ["Google Ads MCP", "Claude Code", "Google Sheets API"],
    goal: "Eliminar la generacion manual de reportes y recibir alertas inteligentes en tiempo real",
    customSoftware: false,
    color: "from-blue-500/20 to-green-900/20"
  },
  {
    id: "seo",
    icon: "Search",
    area: "SEO",
    priority: "alta",
    problems: [
      "Creacion lenta de subpaginas y landings en WordPress",
      "Problemas de compatibilidad con actualizaciones constantes de WordPress",
      "Dependencia de Elementor (herramienta que sera descontinuada)",
      "Proceso manual para insertar etiquetas de seguimiento",
      "Flujo lento desde diseno en Figma hasta desarrollo web funcional"
    ],
    solutions: [
      "MCP WordPress para creacion asistida y rapida de landings y subpaginas",
      "Gestion automatizada de compatibilidades y actualizaciones",
      "Migracion a flujo sin Elementor con bloques nativos de WordPress",
      "Insercion automatizada de etiquetas de seguimiento y configuracion SEO",
      "MCP Figma para exportacion directa de disenos a codigo funcional, reduciendo el tiempo de desarrollo web hasta 10x"
    ],
    tools: ["WordPress MCP", "Figma MCP", "SEM Rush MCP", "Claude Code"],
    goal: "Reducir de horas a minutos la creacion de nuevas paginas y landings, pasando del diseno en Figma a web funcional 10 veces mas rapido",
    customSoftware: false,
    color: "from-purple-500/20 to-green-900/20"
  },
  {
    id: "postventa",
    icon: "ShieldCheck",
    area: "Post Venta",
    priority: "media",
    problems: [
      "Monitoreo manual del estado de las webs de clientes",
      "Verificacion manual de carga de blogs y velocidad del sitio",
      "Transferencia manual de datos desde Looker Studio a Google Sheets",
      "No hay sistema de recordatorios para pendientes del equipo"
    ],
    solutions: [
      "Automatizacion de capturas de pantalla con deteccion IA de anomalias visuales (Playwright)",
      "Sistema de verificacion automatica de carga de blogs y rendimiento web",
      "Automatizacion Looker Studio a Google Sheets con actualizacion programada",
      "Sistema de recordatorios internos con frecuencia configurable por colaborador"
    ],
    tools: ["Playwright", "Looker API", "Google Sheets API", "Claude Vision"],
    goal: "Monitoreo automatico 24/7 de todas las webs con deteccion proactiva de incidencias",
    customSoftware: true,
    color: "from-amber-500/20 to-green-900/20"
  },
  {
    id: "finanzas",
    icon: "FileSpreadsheet",
    area: "Finanzas y Administracion",
    priority: "alta",
    problems: [
      "Registro manual diario de estados de cuenta bancarios en Sheets",
      "Conciliacion manual entre estados de cuenta y control de facturas",
      "Seguimiento manual de pagos vencidos y comunicacion con clientes",
      "Alta dependencia de planillas de calculo para todas las operaciones financieras"
    ],
    solutions: [
      "Software interno de conciliacion bancaria automatica con integracion a APIs bancarias",
      "MCP Google Sheets para consultas en lenguaje natural sobre datos financieros",
      "Sistema automatico de deteccion de pagos vencidos y envio de recordatorios",
      "Dashboard financiero automatizado con proyecciones y alertas de flujo de caja"
    ],
    tools: ["Claude Code MCP", "Google Sheets API", "Software Interno", "APIs Bancarias"],
    goal: "Automatizar el 90% de las tareas financieras repetitivas y eliminar la carga manual diaria",
    customSoftware: true,
    color: "from-green-600/30 to-emerald-900/30"
  },
  {
    id: "generales",
    icon: "Bell",
    area: "Iniciativas Generales",
    priority: "media",
    problems: [
      "No existe un sistema de recordatorios recurrentes para el equipo",
      "Seguimiento manual de cumpleanos de contactos clave de clientes",
      "Proceso manual de onboarding para nuevos clientes",
      "Vencimientos y fechas importantes no tienen alertas automaticas"
    ],
    solutions: [
      "Sistema centralizado de recordatorios con envio por Google Chat y WhatsApp",
      "Recordatorios automaticos de cumpleanos y fechas clave de clientes",
      "Plantilla automatizada de onboarding de clientes con envio por Gmail",
      "Alertas de vencimientos programadas con 1 mes de anticipacion"
    ],
    tools: ["Google Chat API", "WhatsApp API", "Google Sheets", "Gmail API"],
    goal: "Implementar un ecosistema de recordatorios inteligentes que cubra todas las necesidades del equipo",
    customSoftware: false,
    color: "from-rose-500/20 to-green-900/20"
  }
];
