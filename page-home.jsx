// Home page
const { useState, useEffect } = React;

function Home({ onNav }) {
  return (
    <div className="page-enter">
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 'var(--hero-min)', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} src="uploads/video-hero-condado.mp4" />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(8,5,9,0.4) 0%, rgba(8,5,9,0.4) 45%, rgba(8,5,9,0.88) 100%)',
        }}></div>
        <div style={{ position: 'relative', zIndex: 2, padding: 'calc(60px * var(--pad-scale)) 24px calc(60px * var(--pad-scale))', width: '100%', maxWidth: 1440, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'var(--gold-dim)', border: '1px solid var(--gold-border)',
            padding: '6px 14px', borderRadius: 999, marginBottom: 22,
            fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)',
          }}>
            <strong>TOP #94</strong>Mejores clubs del mundo 2025
          </div>
          <h1 className="serif" style={{
            fontSize: 'calc(clamp(54px, 9vw, 120px) * var(--type-scale))',
            textTransform: 'uppercase',
            lineHeight: 0.9,
            marginBottom: 14,
          }}>
            Donde el sol<br/>cae y <em style={{ color: 'var(--gold)' }}>empieza</em><br/>la noche.
          </h1>
          <p style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--w40)', marginBottom: 32 }}>
            Condado Club · Denia · Costa Blanca
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#/calendario" onClick={(e) => { e.preventDefault(); onNav('/calendario'); }} className="btn btn-gold">Ver próximos eventos →</a>
            <a href="#/mesas-vip" onClick={(e) => { e.preventDefault(); onNav('/mesas-vip'); }} className="btn btn-ghost">Reservar mesa VIP</a>
          </div>
        </div>
      </section>

      {/* PRÓXIMOS EVENTOS — teaser */}
      <section className="container">
        <div className="container-wide" style={{ margin: '0 auto' }}>
          <div className="section-head">
            <div>
              <span className="eyebrow">Agenda</span>
              <h2 style={{ marginTop: 10 }}>Próximos <em>eventos</em></h2>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 14, overflowX: 'auto', paddingBottom: 8 }} className="no-scrollbar">
            {EVENTS.map((ev) => <EventCard key={ev.id} event={ev} onNav={onNav} width={280} />)}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
            <a href="#/calendario" onClick={(e) => { e.preventDefault(); onNav('/calendario'); }} className="btn btn-ghost">
              Ver calendario completo →
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        {[
          { num: '#94', label: 'Mejor club del mundo' },
          { num: '15',  label: 'Años en Denia · est. 2010' },
          { num: '1.500', label: 'Personas · 3 niveles' },
          { num: '06:00', label: 'Last call · todos los findes' },
        ].map((s, i) => (
          <div key={i} className="stat">
            <div className="stat-num serif">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* DENIA BREAK */}
      <div style={{ position: 'relative', padding: 'calc(120px * var(--pad-scale)) 24px', overflow: 'hidden', textAlign: 'center' }}>
        <img src="assets/sala/sala-condado-01.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(8,5,9,0.65) 0%, rgba(8,5,9,0.45) 40%, rgba(8,5,9,0.75) 100%)',
        }}></div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 820, margin: '0 auto' }}>
          <span className="eyebrow" style={{ marginBottom: 12 }}>Costa Blanca · Denia · Alicante</span>
          <h2 className="serif" style={{
            fontSize: 'clamp(48px, 7vw, 86px)',
            fontWeight: 800,
            textTransform: 'uppercase',
            lineHeight: 0.92,
            letterSpacing: -1,
            marginBottom: 22,
            marginTop: 14,
          }}>
            El Mediterráneo<br/>de día. <em style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--gold)' }}>Condado</em><br/>de noche.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--w60)', lineHeight: 1.75, marginBottom: 36, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            Cuando el atardecer tiñe el mar de naranja y el Montgó se convierte en silueta, Condado despierta. El mayor show de la Costa Blanca empieza donde otros terminan.
          </p>
          <a href="#/sala" onClick={(e) => { e.preventDefault(); onNav('/sala'); }} className="btn btn-gold">
            Descubrir la sala
          </a>
        </div>
      </div>

      {/* ARTISTAS — muro */}
      <section className="container">
        <div className="container-wide" style={{ margin: '0 auto' }}>
          <div className="section-head">
            <div>
              <span className="eyebrow">The House of Artists · +200 nombres en 15 años</span>
              <h2 style={{ marginTop: 10 }}><em>Artistas</em> que han<br/>pasado por Condado.</h2>
            </div>
          </div>
          <div className="home-artists-grid">
            {ARTISTS.slice(0, 10).map((a, i) => (
              <div key={i} className="home-artist-card">
                <img src={a.img} alt={a.name} loading="lazy" />
                <div className="home-artist-grad"></div>
                <div className="home-artist-body">
                  <p className="serif" style={{ fontSize: 18, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 3 }}>
                    {a.name}
                  </p>
                  <p className="micro">{a.genre}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
            <a href="#/artistas" onClick={(e) => { e.preventDefault(); onNav('/artistas'); }} className="btn btn-ghost">
              Ver más artistas →
            </a>
          </div>
        </div>
        <style>{`
          .home-artists-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          @media (min-width: 600px)  { .home-artists-grid { grid-template-columns: repeat(3, 1fr); gap: 12px; } }
          @media (min-width: 900px)  { .home-artists-grid { grid-template-columns: repeat(4, 1fr); } }
          @media (min-width: 1200px) { .home-artists-grid { grid-template-columns: repeat(5, 1fr); gap: 14px; } }
          .home-artist-card {
            position: relative; overflow: hidden;
            border-radius: var(--radius-md);
            aspect-ratio: 4/5;
            background: var(--night-2);
            cursor: pointer;
            transition: transform 350ms ease;
          }
          .home-artist-card:hover { transform: translateY(-6px); }
          .home-artist-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 500ms ease; }
          .home-artist-card:hover img { transform: scale(1.06); }
          .home-artist-grad {
            position: absolute; inset: 0;
            background: linear-gradient(to top, rgba(8,5,9,0.97) 0%, rgba(8,5,9,0.4) 55%, transparent 100%);
          }
          .home-artist-body { position: absolute; left: 16px; right: 16px; bottom: 16px; }
        `}</style>
      </section>

      {/* SALA TEASER (links to /sala) */}
      <section className="container" style={{ background: 'var(--night-2)' }}>
        <div className="container-wide" style={{ margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Lo que nos hace distintos</span>
          <h2 className="serif" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: -0.5, marginTop: 12, marginBottom: 40 }}>
            No es una discoteca.<br/><em style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--gold)' }}>Es un show.</em>
          </h2>

          <div className="home-gallery" style={{ marginBottom: 40 }}>
            <div className="hg-item hg-a">
              <img src="assets/events/interstellar.jpg" alt="Interstellar" loading="lazy" />
            </div>
            <div className="hg-item hg-b">
              <img src="assets/sala/zona-vip-escenario.jpg" alt="Zona VIP" loading="lazy" />
            </div>
            <div className="hg-item hg-c">
              <img src="assets/events/fever.jpg" alt="Fever" loading="lazy" />
            </div>
            <div className="hg-item hg-d">
              <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} src="uploads/video-hero-condado.mp4" />
            </div>
            <div className="hg-item hg-e">
              <img src="assets/events/prive.jpg" alt="Privé" loading="lazy" />
            </div>
            <div className="hg-item hg-f">
              <img src="assets/sala/sala-condado-01.jpg" alt="Sala Condado" loading="lazy" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, textAlign: 'left' }}>
            {[
              { icon: '✦', title: 'Producción artística', desc: 'Shows en vivo, performers y escenografías diseñadas para impactar.' },
              { icon: '◈', title: 'Efectos especiales', desc: 'Llamas, CO₂, confeti y pirotecnia. Tecnología de primer nivel.' },
              { icon: '◉', title: 'Sonido L-Acoustics', desc: 'Sistema calibrado para que cada frecuencia se sienta en el cuerpo.' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'var(--night-3)', border: '1px solid var(--w08)',
                borderRadius: 'var(--radius-md)', padding: 28,
                transition: 'all 300ms ease',
              }}>
                <div style={{ fontSize: 24, color: 'var(--gold)', marginBottom: 16 }}>{item.icon}</div>
                <p className="serif" style={{ fontSize: 19, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.3, marginBottom: 10 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: 'var(--w40)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <a href="#/sala" onClick={(e) => { e.preventDefault(); onNav('/sala'); }} className="btn btn-ghost">Conocer la sala →</a>
          </div>
        </div>
        <style>{`
          .home-gallery {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 300px 240px 260px;
            gap: 10px;
          }
          @media (min-width: 600px) { .home-gallery { gap: 12px; } }
          @media (min-width: 1200px) { .home-gallery { gap: 14px; grid-template-rows: 340px 260px 300px; } }
          .hg-item {
            overflow: hidden;
            background: var(--night-3);
            position: relative;
            border-radius: var(--radius-md);
          }
          .hg-item img {
            width: 100%; height: 100%;
            object-fit: cover; display: block;
            transition: transform 600ms ease;
          }
          .hg-item:hover img { transform: scale(1.04); }
          .hg-a { grid-column: 1; grid-row: 1 / 3; }
          .hg-b { grid-column: 2; grid-row: 1; }
          .hg-c { grid-column: 3; grid-row: 1; }
          .hg-d { grid-column: 2; grid-row: 2 / 4; }
          .hg-e { grid-column: 3; grid-row: 2 / 4; }
          .hg-f { grid-column: 1; grid-row: 3; }
          @media (max-width: 700px) {
            .home-gallery {
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 200px 200px 200px;
            }
            .hg-a { grid-column: 1; grid-row: 1 / 3; }
            .hg-b { grid-column: 2; grid-row: 1; }
            .hg-c { grid-column: 2; grid-row: 2; }
            .hg-d { grid-column: 1 / 3; grid-row: 3; }
            .hg-e { display: none; }
            .hg-f { display: none; }
          }
        `}</style>
      </section>

      {/* VIP teaser */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr', background: 'var(--night-3)' }} className="vip-teaser">
        <div style={{ position: 'relative', minHeight: 300, overflow: 'hidden' }}>
          <img src="assets/events/prive.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,5,9,0.3) 0%, rgba(8,5,9,0.7) 100%)' }}></div>
          <div style={{
            position: 'absolute', top: 24, left: 24,
            background: 'var(--gold-dim)', border: '1px solid var(--gold-border)',
            padding: '6px 12px', borderRadius: 999,
            fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)',
          }}>Experiencia VIP</div>
        </div>
        <div style={{ padding: '56px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className="eyebrow">Reservas privadas</span>
          <h2 className="serif" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: -0.5, marginTop: 12, marginBottom: 24 }}>
            Tu zona.<br/><em style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--gold)' }}>Tus reglas.</em>
          </h2>
          <ul style={{ listStyle: 'none', margin: '12px 0 28px' }}>
            {[
              'Mesa reservada con acceso prioritario',
              'Botella de bienvenida incluida',
              'Atención personal toda la noche',
              'Posición privilegiada frente al escenario',
            ].map((f, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--w05)', fontSize: 14, color: 'var(--w60)' }}>
                <span style={{ width: 22, height: 22, flexShrink: 0, background: 'var(--gold-dim)', border: '1px solid var(--gold-border)', borderRadius: 6, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: 'var(--gold)' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a href="#/mesas-vip" onClick={(e) => { e.preventDefault(); onNav('/mesas-vip'); }} className="btn btn-gold" style={{ alignSelf: 'flex-start' }}>
            Ver mesas VIP →
          </a>
        </div>
        <style>{`
          @media (min-width: 768px) {
            .vip-teaser { grid-template-columns: 1fr 1fr; }
            .vip-teaser > div:last-child { padding: 80px 64px; }
            .vip-teaser > div:first-child { min-height: 540px; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <div style={{ position: 'relative', padding: '100px 24px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, var(--gold-border), transparent)',
        }}></div>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700, height: 260, maxWidth: '90vw',
          background: 'radial-gradient(ellipse, rgba(232,169,74,0.08) 0%, transparent 70%)',
        }}></div>
        <h2 className="serif" style={{
          position: 'relative', zIndex: 2,
          fontSize: 'clamp(48px, 7vw, 86px)',
          fontWeight: 800, textTransform: 'uppercase',
          lineHeight: 0.92, letterSpacing: -1, marginBottom: 12,
        }}>
          Esta noche,<br/><em style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--gold)' }}>Condado.</em>
        </h2>
        <p style={{ position: 'relative', zIndex: 2, fontSize: 11, color: 'var(--w40)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 36 }}>
          Quedan plazas para el próximo evento · Denia, Alicante
        </p>
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          <a href="#/tickets" onClick={(e) => { e.preventDefault(); onNav('/tickets'); }} className="btn btn-gold">Comprar tickets</a>
          <a href="#/mesas-vip" onClick={(e) => { e.preventDefault(); onNav('/mesas-vip'); }} className="btn btn-ghost">Reservar VIP</a>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Home });
