---
badge: "Kulisy projektu"
title: "O projekcie"
lead: "Wybory architektoniczne, stos inżynieryjny i metodyka wytwarzania."
tabs:
  - id: "why-project"
    index: "01"
    tabTitle: "Dlaczego powstał ten projekt"
    heading: "Motywacja inżynieryjna i manifest"
    text: "Portfolio powstało jako manifest bezkompromisowego podejścia inżynieryjnego: rezygnacja z gotowych bibliotek UI, surowa geometria i najwyższa wydajność. Celem było udowodnienie, że nowoczesna sieć może być wyrazista wizualnie i wysoce interaktywna bez narzutu ciężkich bibliotek klienckich."
  - id: "why-astro"
    index: "02"
    tabTitle: "Dlaczego wybrałem Astro"
    heading: "Astro kontra tradycyjne SPA"
    text: "Astro wybrano ze względu na paradygmat Zero-JS domyślnie oraz architekturę wysp (Islands Architecture). W przeciwieństwie do Next.js, który narzuca hydratację nawet statycznym treściom, Astro generuje czysty HTML, włączając interaktywność tylko tam, gdzie jest ona konieczna."
    metrics:
      - label: "Wielkość runtime JS"
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
    tabTitle: "Jak wykorzystałem AI"
    heading: "AI jako akcelerator inżynieryjny"
    text: "Sztuczna inteligencja była wykorzystywana pragmatycznie — jako mnożnik produktywności, a nie autopilot. Pozwoliło to na przyspieszenie zadań rutynowych, automatyzację lokalizacji i optymalizację shaderów animacji."
    highlights:
      - badge: "Hero Shader"
        title: "Optymalizacja animacji Hero"
        description: "Shader ditheringu został zoptymalizowany przy wsparciu AI: usunięto zbędne iteracje w potoku fragmentów, zredukowano rozmiar i osiągnięto stałe 60 FPS na smartfonach."
      - badge: "Productivity"
        title: "Rutyna i lokalizacja i18n"
        description: "Generowanie ścisłych schematów Zod, automatyzacja tłumaczeń na 4 języki i refaktoryzacja struktur danych."
      - badge: "Architecture"
        title: "Przegląd architektoniczny"
        description: "Weryfikacja kontraktu design-systemu, audyt dostępności WCAG i zapobieganie wyciekom pamięci w interaktywnych widżetach."
---
