const portfolioData = {
  navigation: {
    logo: "JR",
    links: [
      { text: "Home", url: "index.html" },
      { text: "Work", url: "index.html#projects" },
      { text: "About", url: "about.html" },
      { text: "Contact", url: "contact.html" }
    ]
  },
  hero: {
    tag: "UX Designer · Trilingual · 7+ years",
    headline: "Strategic design &",
    headlineStrong: "measurable impact.",
    subtitle: "Master's in UX. Led design systems, Figma adoption, and AI-driven research at enterprise scale.",
    image: "https://cdn.prod.website-files.com/60a52b953cdc7e6337817f11/69c6b774d14a0b497cad77cb_IMG_3450-2.jpg",
    ctaPrimary: { text: "View my work", url: "#projects" },
    ctaSecondary: { text: "About me", url: "about.html" },
    stats: [
      { number: "$93k", label: "Annual savings" },
      { number: "28%", label: "Engagement lift" },
      { number: "49%", label: "Faster navigation" },
      { number: "80%", label: "Time saved" }
    ]
  },
  about: {
    tag: "About me",
    headline: "Designer, researcher,",
    headlineStrong: "problem solver.",
    bio1: "I'm a Senior UX / Product Designer with 7+ years of experience designing enterprise-scale digital products for Fortune 500 companies. I hold a Master's in UX and have led design systems, AI-driven research initiatives, and cross-functional product design at Unum.",
    bio2: "I believe great design isn't just about aesthetics — it's about reducing cognitive load, building trust, and creating systems that scale. My work sits at the intersection of strategic thinking and pixel-level craft.",
    image: "https://cdn.prod.website-files.com/60a52b953cdc7e6337817f11/69c6b774d14a0b497cad77cb_IMG_3450-2.jpg",
    skills: [
      { category: "Design", items: "Product Design · UX Design · Design Systems · Interaction Design · Accessibility" },
      { category: "Research", items: "User Research · Usability Testing · Mixed Methods · AI-Driven Research" },
      { category: "Tools", items: "Figma · Miro · FigJam · Maze · UserTesting · Storybook" },
      { category: "Languages", items: "English · Spanish · Portuguese" }
    ],
    experience: [
      { period: "2021 – 2026", role: "UX Designer II", company: "Unum", description: "Led enterprise design systems, Figma adoption across cross-functional teams, and AI-driven UX research." },
      { period: "2019 – 2021", role: "Master's in UX", company: "University", description: "Focused on accessibility research, augmented reality wayfinding, and mixed-methods user research." }
    ],
    ctaText: "Get in touch",
    ctaUrl: "contact.html"
  },
  contact: {
    tag: "Contact",
    headline: "Let's work",
    headlineStrong: "together.",
    subtitle: "Open to senior / staff-level fully remote product design roles. Based in Dublin, Ireland.",
    email: "hello@jrosaux.com",
    linkedin: "",
    formspreeId: "",
    availability: "Available for remote roles · Dublin, Ireland"
  },
  industrySection: {
    title: "Industry work · 2021–2026",
    ndaBanner: {
      enabled: true,
      text: "These case studies are under NDA. To access the full work,",
      linkText: "request the password",
      linkUrl: "mailto:hello@jrosaux.com"
    },
    projects: [
      { id: "ind-1", date: "Unum · 2024–2026", title: "Design Systems & Figma Adoption", description: "Led enterprise-wide Figma rollout across cross-functional teams.", metric: "$93k saved annually", image: "", link: "project.html?id=ind-1", locked: true },
      { id: "ind-2", date: "Unum · 2023", title: "Care Hub Personalisation Flow", description: "Personalised experience driving measurable engagement growth.", metric: "+28% engagement", image: "", link: "project.html?id=ind-2", locked: true },
      { id: "ind-3", date: "Unum · 2022", title: "Super Admin Architecture", description: "Unified dashboard reducing task completion time across teams.", metric: "80% time saved", image: "", link: "project.html?id=ind-3", locked: true },
      { id: "ind-4", date: "Unum · 2021–2022", title: "AI-Driven UX Research", description: "Mixed-methods research informing product strategy with AI tooling.", metric: "Promoted to UX II", image: "", link: "project.html?id=ind-4", locked: true }
    ]
  },
  academicSection: {
    title: "Academic work · 2019–2021",
    projects: [
      { id: "aca-1", date: "Master's · 2020–2021", title: "AirAR — Airport Navigation", description: "Augmented reality app improving airport wayfinding for travellers.", metric: "49% faster navigation", image: "", link: "project.html?id=aca-1", locked: false },
      { id: "aca-2", date: "Master's · 2019–2020", title: "Universal Design for Low Vision", description: "Accessibility research and interface design for visually impaired users.", metric: "Inclusive research", image: "", link: "project.html?id=aca-2", locked: false },
      { id: "aca-3", date: "Master's · 2019", title: "Complex User Research", description: "In-depth qualitative and quantitative UX research methodologies.", metric: "Mixed methods", image: "", link: "project.html?id=aca-3", locked: false }
    ]
  },
  projectPages: {
    "ind-2": {
      title: "Behavioral Health",
      summary: "Behavioral Health is a platform that helps users find the right mental health support. It uses smart assessments to understand the user current mental health state and future goals.",
      role: "UX Designer II", timeline: "2023", team: "3 designers, 2 devs", tools: "Figma, Miro, UserTesting",
      heroImage: "",
      stats: [
        { number: "25%", label: "Reduced abandonment" },
        { number: "35%", label: "Better data quality" },
        { number: "43%", label: "Improved retention" },
        { number: "25%", label: "Fewer support tickets" }
      ],
      sections: {
        overview: { enabled: true, tagline: "User Experience Design", content: "<p>Behavioral Health is a comprehensive digital ecosystem designed to bridge the gap between recognizing a mental health need and accessing the right level of care.</p><ul><li><b>Therapy:</b> Clinical, one-on-one support with licensed professionals.</li><li><b>Coaching:</b> Goal-oriented, proactive support focused on life transitions.</li><li><b>Self-Guided:</b> Evidence-based resources for independent wellness.</li></ul>" },
        contribution: { enabled: true, content: "<ul><li>Interviewed 6 users and gathered feedback to understand why users were dropping off.</li><li>Built a Behavioral Health Figma design system that worked across different devices.</li><li>Led user testing of the new improved UX and turned findings into design improvements.</li><li>Made sure all designs met accessibility standards.</li></ul>" },
        challenge: { enabled: true, title: "The Challenge", content: "<p>Users were dropping off during the onboarding assessment. The legacy system felt clinical and interrogative, causing anxiety and abandonment.</p>", image: "" },
        problem: { enabled: false, title: "Problem to Solve", content: "", images: [] },
        strategy: { enabled: true, title: "UX Strategy", content: "<ul><li><b>Transparency &amp; Agency:</b> Replaced the black box questionnaire with a transparent roadmap.</li><li><b>Cognitive De-escalation:</b> Moved from interrogation to conversation UI patterns.</li><li><b>Safety Net Mechanism:</b> Treated sensitive topics as clinical triggers, not just data points.</li></ul>", image: "", images: [] },
        solution: { enabled: true, title: "The Solution", content: "<h4>A. Mix of Interactive UI</h4><p>We moved away from repetitive form fields and introduced visual checkboxes, preference scales, and sliders.</p><h4>B. Step Progress</h4><p>A 3-step system with time estimates, content previews, and real-time progress bar.</p><h4>C. Warnings and Pause</h4><p>Trigger warnings before sensitive questions and a Take a Break feature with automated session pickup.</p>", images: [] },
        prototype: { enabled: true, title: "Prototype walkthrough", videoUrl: "" },
        results: { enabled: true, title: "Results & Impact", content: "<p>By transforming the intake from a static clinical form into a supportive journey, we bridged the Experience Gap.</p><ul><li><b>Reduced Abandonment:</b> Completion rates increased by 25%.</li><li><b>Higher Data Quality:</b> 35% increase in honest reporting.</li><li><b>Improved Retention:</b> 43% of paused users returned within 48 hours.</li><li><b>Reduced Support Load:</b> 25% drop in technical help inquiries.</li></ul>", quote: "I felt like the system actually cared about how I was feeling. When I got overwhelmed, it gave me permission to step away without losing my work.", quoteAuthor: "User Testing Participant" },
        impact: { enabled: true, title: "The Impact", content: "<p>By humanizing the data-gathering process, we saw a significant shift in user behavior:</p><ul><li><b>Completion conversion:</b> Rates increased as users felt more oriented.</li><li><b>Retention:</b> The Pause feature brought users back to the platform.</li><li><b>Sentiment:</b> Users felt heard and supported rather than interrogated.</li></ul>" }
      }
    },
    "ind-1": {
      title: "Design Systems & Figma Adoption",
      summary: "Led enterprise-wide Figma rollout across cross-functional teams, saving $93k annually.",
      role: "UX Designer II", timeline: "2024–2026", team: "", tools: "Figma", heroImage: "",
      stats: [{ number: "$93k", label: "Saved annually" }],
      sections: {
        overview: { enabled: true, tagline: "Design Systems", content: "<p>Details coming soon.</p>" },
        contribution: { enabled: false, content: "" },
        challenge: { enabled: false, title: "The Challenge", content: "", image: "" },
        problem: { enabled: false, title: "Problem to Solve", content: "", images: [] },
        strategy: { enabled: false, title: "UX Strategy", content: "", image: "", images: [] },
        solution: { enabled: false, title: "The Solution", content: "", images: [] },
        prototype: { enabled: false, title: "Prototype", videoUrl: "" },
        results: { enabled: false, title: "Results & Impact", content: "", quote: "", quoteAuthor: "" },
        impact: { enabled: false, title: "The Impact", content: "" }
      }
    },
    "ind-3": {
      title: "Super Admin Architecture",
      summary: "Unified dashboard reducing task completion time across teams.",
      role: "UX Designer", timeline: "2022", team: "", tools: "Figma", heroImage: "",
      stats: [{ number: "80%", label: "Time saved" }],
      sections: {
        overview: { enabled: true, tagline: "Enterprise UX", content: "<p>Details coming soon.</p>" },
        contribution: { enabled: false, content: "" },
        challenge: { enabled: false, title: "The Challenge", content: "", image: "" },
        problem: { enabled: false, title: "Problem to Solve", content: "", images: [] },
        strategy: { enabled: false, title: "UX Strategy", content: "", image: "", images: [] },
        solution: { enabled: false, title: "The Solution", content: "", images: [] },
        prototype: { enabled: false, title: "Prototype", videoUrl: "" },
        results: { enabled: false, title: "Results & Impact", content: "", quote: "", quoteAuthor: "" },
        impact: { enabled: false, title: "The Impact", content: "" }
      }
    },
    "ind-4": {
      title: "AI-Driven UX Research",
      summary: "Mixed-methods research informing product strategy with AI tooling.",
      role: "UX Designer", timeline: "2021–2022", team: "", tools: "Figma, Miro", heroImage: "",
      stats: [],
      sections: {
        overview: { enabled: true, tagline: "UX Research", content: "<p>Details coming soon.</p>" },
        contribution: { enabled: false, content: "" },
        challenge: { enabled: false, title: "The Challenge", content: "", image: "" },
        problem: { enabled: false, title: "Problem to Solve", content: "", images: [] },
        strategy: { enabled: false, title: "UX Strategy", content: "", image: "", images: [] },
        solution: { enabled: false, title: "The Solution", content: "", images: [] },
        prototype: { enabled: false, title: "Prototype", videoUrl: "" },
        results: { enabled: false, title: "Results & Impact", content: "", quote: "", quoteAuthor: "" },
        impact: { enabled: false, title: "The Impact", content: "" }
      }
    },
    "aca-1": {
      title: "AirAR — Airport Navigation",
      summary: "Augmented reality app improving airport wayfinding for travellers.",
      role: "UX Researcher & Designer", timeline: "2020–2021", team: "", tools: "Figma, AR Kit", heroImage: "",
      stats: [{ number: "49%", label: "Faster navigation" }],
      sections: {
        overview: { enabled: true, tagline: "Master's Thesis", content: "<p>Details coming soon.</p>" },
        contribution: { enabled: false, content: "" },
        challenge: { enabled: false, title: "The Challenge", content: "", image: "" },
        problem: { enabled: false, title: "Problem to Solve", content: "", images: [] },
        strategy: { enabled: false, title: "UX Strategy", content: "", image: "", images: [] },
        solution: { enabled: false, title: "The Solution", content: "", images: [] },
        prototype: { enabled: false, title: "Prototype", videoUrl: "" },
        results: { enabled: false, title: "Results & Impact", content: "", quote: "", quoteAuthor: "" },
        impact: { enabled: false, title: "The Impact", content: "" }
      }
    },
    "aca-2": {
      title: "Universal Design for Low Vision",
      summary: "Accessibility research and interface design for visually impaired users.",
      role: "UX Researcher", timeline: "2019–2020", team: "", tools: "Figma", heroImage: "",
      stats: [],
      sections: {
        overview: { enabled: true, tagline: "Accessibility Research", content: "<p>Details coming soon.</p>" },
        contribution: { enabled: false, content: "" },
        challenge: { enabled: false, title: "The Challenge", content: "", image: "" },
        problem: { enabled: false, title: "Problem to Solve", content: "", images: [] },
        strategy: { enabled: false, title: "UX Strategy", content: "", image: "", images: [] },
        solution: { enabled: false, title: "The Solution", content: "", images: [] },
        prototype: { enabled: false, title: "Prototype", videoUrl: "" },
        results: { enabled: false, title: "Results & Impact", content: "", quote: "", quoteAuthor: "" },
        impact: { enabled: false, title: "The Impact", content: "" }
      }
    },
    "aca-3": {
      title: "Complex User Research",
      summary: "In-depth qualitative and quantitative UX research methodologies.",
      role: "UX Researcher", timeline: "2019", team: "", tools: "Miro, Survey tools", heroImage: "",
      stats: [],
      sections: {
        overview: { enabled: true, tagline: "UX Research", content: "<p>Details coming soon.</p>" },
        contribution: { enabled: false, content: "" },
        challenge: { enabled: false, title: "The Challenge", content: "", image: "" },
        problem: { enabled: false, title: "Problem to Solve", content: "", images: [] },
        strategy: { enabled: false, title: "UX Strategy", content: "", image: "", images: [] },
        solution: { enabled: false, title: "The Solution", content: "", images: [] },
        prototype: { enabled: false, title: "Prototype", videoUrl: "" },
        results: { enabled: false, title: "Results & Impact", content: "", quote: "", quoteAuthor: "" },
        impact: { enabled: false, title: "The Impact", content: "" }
      }
    }
  },
  footer: {
    copyright: "© 2026 Juliana Rosa · Created in Ireland",
    languages: ["EN", "ES", "PT"]
  }
};
