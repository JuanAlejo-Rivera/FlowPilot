export const en = {
  common: {
    brand: 'FlowPilot',
    language: {
      label: 'Language',
      en: 'EN',
      es: 'ES',
    },
    backHome: 'Back to home',
  },
  nav: {
    features: 'Features',
    benefits: 'Benefits',
    customers: 'Customers',
    pricing: 'Pricing',
    startFree: 'Start free',
    toggleMenu: 'Toggle menu',
    homeAria: 'FlowPilot home',
  },
  landing: {
    badge: 'New · Public beta',
    hero: {
      titleLead: 'The AI workspace that',
      titleAccent: 'runs the loop for you',
      titleTail: '.',
      subtitle:
        'FlowPilot keeps every idea, task and decision in one place and uses AI to turn the noise of work into a clear plan your whole team can follow.',
      watchDemo: 'Watch 90s demo',
      note: 'No credit card · Free for up to 5 teammates',
    },
    mock: {
      workspace: 'Workspace',
      dashboard: 'Dashboard',
      boards: 'Boards',
      decisions: 'Decisions',
      inbox: 'Inbox',
      team: 'Team',
      launchTitle: 'Atlas launch',
      launchMeta: '12 tasks · 4 owners',
      onTrack: 'On track',
      inProgress: 'In progress',
      review: 'Review',
      done: 'Done',
      onboardingFlow: 'Onboarding flow',
      pricingCopy: 'Pricing copy',
      heroMock: 'Hero mock',
      authApi: 'Auth API',
      brandDeck: 'Brand deck',
      domainSetup: 'Domain setup',
    },
    features: {
      badge: 'Features',
      title: 'Everything your team needs to ship the next thing.',
      lead:
        "Built for product, design and engineering teams who do not want to babysit their tools.",
      captureTitle: 'AI Capture',
      captureDesc:
        'Drop a thought, an email or a meeting note. FlowPilot turns raw input into structured tasks, owners and decisions in seconds.',
      boardsTitle: 'Smart Boards',
      boardsDesc:
        'Boards that group related work by project, owner and momentum, and reorganize themselves as priorities shift.',
      memoryTitle: 'Decision Memory',
      memoryDesc:
        'Every decision is captured, attributed and searchable forever. No more "what did we agree on?" three months later.',
    },
    benefits: {
      badge: 'Why teams switch',
      title: 'Less coordinating. More building.',
      lead:
        'FlowPilot replaces the busywork of keeping everyone on the same page, so the real work moves faster.',
      meetingsMetric: '70%',
      meetingsLabel: 'fewer status meetings',
      meetingsDesc: 'Async updates roll up automatically into a daily team brief.',
      onboardingMetric: '4x',
      onboardingLabel: 'faster onboarding',
      onboardingDesc: 'New hires get instant context: projects, decisions and owners.',
      truthMetric: '1',
      truthLabel: 'source of truth',
      truthDesc: 'Tasks, docs and decisions live in one connected workspace.',
    },
    proof: {
      badge: 'Trusted by modern teams',
      title: 'From scrappy startups to scale-ups.',
      testimonial:
        '"We replaced three tools with FlowPilot in our first week. Decisions stopped getting lost, and our standups got 10 minutes shorter."',
      person: 'Maya Rodriguez',
      role: 'Head of Product, Northwind',
      teamsValue: '10k+',
      teamsLabel: 'teams onboarded',
      ratingValue: '4.9★',
      ratingLabel: 'avg. rating',
      savedValue: '2.3h',
      savedLabel: 'saved per week',
      uptimeValue: '99.9%',
      uptimeLabel: 'uptime',
      logos: ['Northwind', 'Acme Co', 'Lumen', 'Helio', 'Parallax', 'Quanta'],
    },
    cta: {
      title: 'Bring your team into the flow.',
      lead: 'Free for up to 5 teammates. Set up your workspace in under 2 minutes.',
      emailPlaceholder: 'you@company.com',
      emailAria: 'Work email',
      requestAccess: 'Request access',
      note: 'No credit card · Cancel anytime',
    },
    footer: {
      blurb: 'The AI workspace where ideas, tasks and decisions stay organized.',
      product: 'Product',
      company: 'Company',
      resources: 'Resources',
      madeWith: 'Made with care.',
      links: {
        features: 'Features',
        benefits: 'Benefits',
        pricing: 'Pricing',
        about: 'About',
        careers: 'Careers',
        press: 'Press',
        docs: 'Docs',
        changelog: 'Changelog',
        status: 'Status',
      },
    },
  },
  pages: {
    demo: {
      title: 'Product demo',
      description:
        'This route is ready for an embedded video or a short guided demo of FlowPilot.',
    },
    pricing: {
      title: 'Pricing',
      description:
        'Define your plans, limits and upgrade path here. The route is already wired with React Router.',
    },
    about: {
      title: 'About FlowPilot',
      description:
        'Use this page to explain mission, team and why this product exists.',
    },
    careers: {
      title: 'Careers',
      description: 'Share open roles, values and your hiring process.',
    },
    press: {
      title: 'Press',
      description: 'Add media assets, press releases and contact information.',
    },
    docs: {
      title: 'Documentation',
      description: 'Centralize product docs, onboarding guides and API references.',
    },
    changelog: {
      title: 'Changelog',
      description: 'Publish product updates and release notes in one place.',
    },
    status: {
      title: 'System status',
      description: 'Expose uptime, incidents and maintenance windows to users.',
    },
    notFound: {
      title: 'Page not found',
      description: 'The route you requested does not exist.',
    },
  },
} as const
