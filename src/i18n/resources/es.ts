export const es = {
  common: {
    brand: 'FlowPilot',
    language: {
      label: 'Idioma',
      en: 'EN',
      es: 'ES',
    },
    backHome: 'Volver al inicio',
  },
  nav: {
    features: 'Funciones',
    benefits: 'Beneficios',
    customers: 'Clientes',
    pricing: 'Precios',
    startFree: 'Comenzar gratis',
    toggleMenu: 'Abrir menu',
    homeAria: 'Inicio de FlowPilot',
  },
  landing: {
    badge: 'Nuevo · Beta publica',
    hero: {
      titleLead: 'El espacio de trabajo con IA que',
      titleAccent: 'cierra el ciclo por ti',
      titleTail: '.',
      subtitle:
        'FlowPilot mantiene cada idea, tarea y decision en un solo lugar y usa IA para convertir el ruido del trabajo en un plan claro para todo tu equipo.',
      watchDemo: 'Ver demo de 90s',
      note: 'Sin tarjeta · Gratis hasta 5 integrantes',
    },
    mock: {
      workspace: 'Espacio',
      dashboard: 'Panel',
      boards: 'Tableros',
      decisions: 'Decisiones',
      inbox: 'Bandeja',
      team: 'Equipo',
      launchTitle: 'Lanzamiento Atlas',
      launchMeta: '12 tareas · 4 responsables',
      onTrack: 'En curso',
      inProgress: 'En progreso',
      review: 'Revision',
      done: 'Hecho',
      onboardingFlow: 'Flujo de onboarding',
      pricingCopy: 'Copy de precios',
      heroMock: 'Mock del hero',
      authApi: 'API de auth',
      brandDeck: 'Brand deck',
      domainSetup: 'Configuracion de dominio',
    },
    features: {
      badge: 'Funciones',
      title: 'Todo lo que tu equipo necesita para lanzar lo siguiente.',
      lead:
        'Pensado para equipos de producto, diseno e ingenieria que no quieren perseguir sus herramientas.',
      captureTitle: 'Captura con IA',
      captureDesc:
        'Suelta una idea, un correo o una nota de reunion. FlowPilot convierte entrada cruda en tareas, responsables y decisiones en segundos.',
      boardsTitle: 'Tableros inteligentes',
      boardsDesc:
        'Tableros que agrupan trabajo por proyecto, responsable y ritmo, y se reorganizan cuando cambian las prioridades.',
      memoryTitle: 'Memoria de decisiones',
      memoryDesc:
        'Cada decision queda registrada, atribuida y disponible en busqueda para siempre. Nunca mas "que habiamos acordado?".',
    },
    benefits: {
      badge: 'Por que los equipos cambian',
      title: 'Menos coordinacion. Mas construccion.',
      lead:
        'FlowPilot reemplaza el trabajo operativo de mantener a todos alineados para que el trabajo real avance mas rapido.',
      meetingsMetric: '70%',
      meetingsLabel: 'menos reuniones de estado',
      meetingsDesc: 'Las actualizaciones asincronas se resumen automaticamente cada dia.',
      onboardingMetric: '4x',
      onboardingLabel: 'onboarding mas rapido',
      onboardingDesc:
        'Las nuevas personas obtienen contexto inmediato: proyectos, decisiones y responsables.',
      truthMetric: '1',
      truthLabel: 'fuente de verdad',
      truthDesc: 'Tareas, docs y decisiones viven en un espacio conectado.',
    },
    proof: {
      badge: 'Confiado por equipos modernos',
      title: 'Desde startups pequenas hasta scale-ups.',
      testimonial:
        '"Reemplazamos tres herramientas con FlowPilot en la primera semana. Las decisiones dejaron de perderse y nuestros standups son 10 minutos mas cortos."',
      person: 'Maya Rodriguez',
      role: 'Head of Product, Northwind',
      teamsValue: '10k+',
      teamsLabel: 'equipos activos',
      ratingValue: '4.9★',
      ratingLabel: 'calificacion promedio',
      savedValue: '2.3h',
      savedLabel: 'ahorradas por semana',
      uptimeValue: '99.9%',
      uptimeLabel: 'disponibilidad',
      logos: ['Northwind', 'Acme Co', 'Lumen', 'Helio', 'Parallax', 'Quanta'],
    },
    cta: {
      title: 'Lleva a tu equipo al flow.',
      lead: 'Gratis hasta 5 integrantes. Configura tu espacio en menos de 2 minutos.',
      emailPlaceholder: 'tu@empresa.com',
      emailAria: 'Correo de trabajo',
      requestAccess: 'Solicitar acceso',
      note: 'Sin tarjeta · Cancela cuando quieras',
    },
    footer: {
      blurb: 'El espacio con IA donde ideas, tareas y decisiones quedan organizadas.',
      product: 'Producto',
      company: 'Empresa',
      resources: 'Recursos',
      madeWith: 'Hecho con cuidado. Potenciado por IA.',
      links: {
        features: 'Funciones',
        benefits: 'Beneficios',
        pricing: 'Precios',
        about: 'Acerca de',
        careers: 'Carreras',
        press: 'Prensa',
        docs: 'Docs',
        changelog: 'Novedades',
        status: 'Estado',
      },
    },
  },
  pages: {
    demo: {
      title: 'Demo del producto',
      description:
        'Esta ruta esta lista para incrustar un video o una demo guiada corta de FlowPilot.',
    },
    pricing: {
      title: 'Precios',
      description:
        'Define aqui tus planes, limites y ruta de upgrade. La ruta ya esta conectada con React Router.',
    },
    about: {
      title: 'Acerca de FlowPilot',
      description: 'Usa esta pagina para explicar mision, equipo y por que existe este producto.',
    },
    careers: {
      title: 'Carreras',
      description: 'Comparte vacantes, valores y tu proceso de contratacion.',
    },
    press: {
      title: 'Prensa',
      description: 'Agrega assets para medios, comunicados y datos de contacto.',
    },
    docs: {
      title: 'Documentacion',
      description: 'Centraliza docs del producto, guias de onboarding y referencias API.',
    },
    changelog: {
      title: 'Novedades',
      description: 'Publica actualizaciones y notas de version en un solo lugar.',
    },
    status: {
      title: 'Estado del sistema',
      description: 'Muestra disponibilidad, incidentes y mantenimientos a tus usuarios.',
    },
    notFound: {
      title: 'Pagina no encontrada',
      description: 'La ruta que solicitaste no existe.',
    },
  },
} as const
