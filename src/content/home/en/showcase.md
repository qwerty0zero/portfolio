---
badge: "Under the Hood"
title: "About the Project"
lead: "Architectural choices, engineering stack, and development methodology."
tabs:
  - id: "why-project"
    index: "01"
    tabTitle: "Why I Built This Project"
    heading: "Engineering Motivation & Principles"
    text: "This portfolio was engineered as a manifesto of an uncompromising approach to software development: zero template component libraries, strict geometric discipline, and raw performance. The goal was to prove that modern web experiences can be visually engaging and interactive while maintaining instantaneous response times without heavy client-side runtimes."
  - id: "why-astro"
    index: "02"
    tabTitle: "Why Astro"
    heading: "Astro vs Traditional SPAs"
    text: "Astro was chosen for its Zero-JS by default paradigm and Islands Architecture. Unlike Next.js, which ships a substantial hydration runtime even to mostly static content, Astro delivers pristine HTML and activates client JavaScript strictly where interactivity is genuinely required."
    metrics:
      - label: "JS Runtime Baseline"
        astroVal: "0 KB"
        nextVal: "85 KB"
        unit: "KB"
        astroPercent: 4
        nextPercent: 85
      - label: "Core Web Vitals (Lighthouse)"
        astroVal: "100"
        nextVal: "88"
        unit: "/100"
        astroPercent: 100
        nextPercent: 88
      - label: "Interaction to Next Paint (INP)"
        astroVal: "< 5ms"
        nextVal: "~42ms"
        unit: "ms"
        astroPercent: 8
        nextPercent: 68
  - id: "how-ai"
    index: "03"
    tabTitle: "How I Leveraged AI"
    heading: "AI as an Engineering Multiplier"
    text: "AI was utilized pragmatically as a productivity amplifier rather than an autopilot. It accelerated repetitive tasks, automated multi-locale i18n synchronization, and assisted in mathematical shader optimizations."
    highlights:
      - badge: "Hero Shader"
        title: "Hero Animation Optimization"
        description: "The dither shader was rewritten with AI assistance: eliminated redundant loop calculations in the fragment pipeline, reduced bundle size, and locked a steady 60 FPS on mobile devices."
      - badge: "Productivity"
        title: "Workflow & i18n Acceleration"
        description: "Generation of strict Zod schemas, 4-locale translation automation, and context-preserving data architecture refactoring."
      - badge: "Architecture"
        title: "Architectural Review"
        description: "Design system contract verification, WCAG accessibility validation, and proactive memory leak prevention across interactive widgets."
---
