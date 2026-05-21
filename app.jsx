// Main app — hash router + tweaks
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "vibe": "gold",
  "display": "oxanium",
  "intensity": "editorial"
}/*EDITMODE-END*/;

// Vibe palettes — accent system that reshapes mood
const VIBES = {
  gold:    { name: 'Gold',    main: '#E8A94A', light: '#F5C878', dim: 'rgba(232,169,74,0.12)', border: 'rgba(232,169,74,0.35)', heroGrad: 'linear-gradient(to right,#F0781A 0%,#C84018 10%,#9B2015 22%,#6B1030 38%,#3D0848 55%,#1A041E 72%,#080509 100%)' },
  neon:    { name: 'Neon',    main: '#C8FF2E', light: '#E0FF7A', dim: 'rgba(200,255,46,0.12)',  border: 'rgba(200,255,46,0.40)',  heroGrad: 'linear-gradient(to right,#1FCB4F 0%,#0E9B5B 18%,#0A6E5C 35%,#1B3556 55%,#160F1C 75%,#080509 100%)' },
  crimson: { name: 'Crimson', main: '#FF3A6E', light: '#FF7A9A', dim: 'rgba(255,58,110,0.14)',  border: 'rgba(255,58,110,0.40)',  heroGrad: 'linear-gradient(to right,#FF1F4F 0%,#D11B6A 18%,#7A1380 38%,#3D0848 60%,#1A041E 80%,#080509 100%)' },
  ice:     { name: 'Ice',     main: '#5DD6FF', light: '#A8E8FF', dim: 'rgba(93,214,255,0.14)',  border: 'rgba(93,214,255,0.45)',  heroGrad: 'linear-gradient(to right,#1F8FE0 0%,#1F5BD1 22%,#3A1FB0 45%,#2A0F7A 62%,#160933 80%,#080509 100%)' },
};

// Display type — different typographic personalities
const DISPLAYS = {
  condensed: { name: 'Condensed', family: "'Barlow Condensed', sans-serif", weight: 800, tracking: '-0.5px', italicWeight: 300, googleFonts: 'Barlow+Condensed:wght@300;400;600;700;800' },
  editorial: { name: 'Editorial', family: "'Playfair Display', 'Times New Roman', serif", weight: 900, tracking: '-1.5px', italicWeight: 400, googleFonts: 'Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700' },
  hyper:     { name: 'Hyper',     family: "'Anton', 'Arial Black', sans-serif", weight: 400, tracking: '0.5px', italicWeight: 400, googleFonts: 'Anton' },
  mono:      { name: 'Mono',      family: "'Space Grotesk', system-ui, sans-serif", weight: 700, tracking: '-1px', italicWeight: 400, googleFonts: 'Space+Grotesk:wght@400;500;700' },
  oxanium:   { name: 'Oxanium',   family: "'Barlow', sans-serif", weight: 700, tracking: '-0.5px', italicWeight: 400, googleFonts: 'Barlow:wght@300;400;500;700' },
};

// Intensity — spacing, type scale, gradient drama
const INTENSITIES = {
  cinematic: { name: 'Cinematic', scale: 1.18, pad: 1.25, heroMin: '108svh', gradStrength: 0.55, contrast: 1.08 },
  editorial: { name: 'Editorial', scale: 1.00, pad: 1.00, heroMin: '100svh', gradStrength: 0.40, contrast: 1.00 },
  compact:   { name: 'Compact',   scale: 0.86, pad: 0.72, heroMin: '82svh',  gradStrength: 0.28, contrast: 0.94 },
};

function applyTweaks(t) {
  const vibe = VIBES[t.vibe] || VIBES.gold;
  const display = DISPLAYS[t.display] || DISPLAYS.condensed;
  const intensity = INTENSITIES[t.intensity] || INTENSITIES.editorial;
  const r = document.documentElement.style;

  // Vibe palette
  r.setProperty('--gold', vibe.main);
  r.setProperty('--gold-light', vibe.light);
  r.setProperty('--gold-dim', vibe.dim);
  r.setProperty('--gold-border', vibe.border);
  r.setProperty('--hero-grad', vibe.heroGrad);

  // Display type
  r.setProperty('--serif', display.family);
  r.setProperty('--serif-weight', String(display.weight));
  r.setProperty('--serif-tracking', display.tracking);
  r.setProperty('--serif-italic-weight', String(display.italicWeight));

  // Intensity
  r.setProperty('--type-scale', String(intensity.scale));
  r.setProperty('--pad-scale', String(intensity.pad));
  r.setProperty('--hero-min', intensity.heroMin);
  r.setProperty('--grad-strength', String(intensity.gradStrength));

  // Ensure Google Font loaded for current display
  const fontId = 'tweak-font-' + t.display;
  if (display.googleFonts && !document.getElementById(fontId)) {
    const link = document.createElement('link');
    link.id = fontId;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${display.googleFonts}&display=swap`;
    document.head.appendChild(link);
  }
}

const ROUTES = {
  '/': Home,
  '/calendario': Calendario,
  '/mesas-vip': MesasVIP,
  '/sala': Sala,
  '/artistas': Artistas,
  '/eventos-privados': EventosPrivados,
  '/contacto': Contacto,
  '/tickets': Tickets,
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffect(() => { applyTweaks(t); }, [t.vibe, t.display, t.intensity]);

  const [route, setRoute] = useState(() => {
    const h = window.location.hash.replace('#', '');
    return ROUTES[h] ? h : '/';
  });

  useEffect(() => {
    const onHashChange = () => {
      const h = window.location.hash.replace('#', '') || '/';
      const next = ROUTES[h] ? h : '/';
      setRoute(next);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const onNav = (path) => {
    window.location.hash = path;
  };

  // Reveal-on-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [route]);

  const PageComponent = ROUTES[route] || Home;

  return (
    <>
      <Nav route={route} onNav={onNav} />
      <main key={route}>
        <PageComponent onNav={onNav} />
      </main>
      <Footer onNav={onNav} />
      <TweaksPanel>
        <TweakSection label="Vibe" />
        <TweakColor
          label="Accent palette"
          value={VIBES[t.vibe].main}
          options={Object.values(VIBES).map(v => v.main)}
          onChange={(hex) => {
            const key = Object.entries(VIBES).find(([_, v]) => v.main === hex)?.[0] || 'gold';
            setTweak('vibe', key);
          }}
        />
        <TweakSection label="Display type" />
        <TweakSelect
          label="Personality"
          value={t.display}
          options={Object.entries(DISPLAYS).map(([k, v]) => ({ value: k, label: v.name }))}
          onChange={(v) => setTweak('display', v)}
        />
        <TweakSection label="Intensity" />
        <TweakRadio
          label="Spacing & scale"
          value={t.intensity}
          options={Object.keys(INTENSITIES)}
          onChange={(v) => setTweak('intensity', v)}
        />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
