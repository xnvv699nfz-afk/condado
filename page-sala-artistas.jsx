// Sala + Artistas pages
const { useState, useEffect } = React;

function Sala({ onNav }) {
  const [tab, setTab] = useState('sala');

  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="El espacio · 3 niveles · 1.500 personas"
        title='La <em style="font-style:normal;font-weight:300;color:var(--gold)">Sala</em>'
        subtitle="Una de las salas más imponentes de la Costa Blanca. Sonido L-Acoustics, escenografía teatral y tecnología de espectáculo: cada noche, una producción distinta."
      />

      {/* Sub-nav: Sala / Artistas */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: 8,
        padding: '0 24px',
        marginBottom: 40,
      }}>
        <div style={{ display: 'flex', gap: 4, background: 'var(--w05)', border: '1px solid var(--w15)', borderRadius: 999, padding: 4 }}>
          <button onClick={() => setTab('sala')} className={`subtab${tab === 'sala' ? ' active' : ''}`}>La Sala</button>
          <button onClick={() => { setTab('artistas'); onNav('/artistas'); }} className={`subtab${tab === 'artistas' ? ' active' : ''}`}>Artistas →</button>
        </div>
      </div>

      <div style={{ padding: '0 24px 60px' }}>
        <div className="container-wide" style={{ margin: '0 auto' }}>
          {/* Hero gallery / specs split */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr', gap: 28,
          }} className="sala-hero">
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4/3', background: 'var(--night-3)' }}>
              <img src={GALLERY[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,5,9,0.7) 0%, transparent 50%)' }}></div>
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                <p className="serif" style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: -1 }}>
                  Pista<br/><em style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--gold)' }}>central</em>
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="eyebrow">Especificaciones técnicas</span>
              <h3 className="serif" style={{ fontSize: 32, fontWeight: 800, textTransform: 'uppercase', letterSpacing: -0.3, marginTop: 10, marginBottom: 20 }}>
                Diseñada para el <em style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--gold)' }}>show</em>.
              </h3>
              <ul style={{ listStyle: 'none', display: 'grid', gap: 0 }}>
                {[
                  ['Capacidad total', '1.500 personas'],
                  ['Niveles', '3 alturas · pista, anillo, terraza'],
                  ['Sistema de sonido', 'L-Acoustics K2 · subgraves SB28'],
                  ['Iluminación', '120 cabezas robóticas · láser RGB'],
                  ['Efectos especiales', 'CO₂ · llamas · confeti · pirotecnia'],
                  ['LED', '180 m² de pantallas a escena completa'],
                  ['Aforo VIP', '24 mesas · 3 categorías'],
                ].map(([k, v], i) => (
                  <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid var(--w08)', gap: 16, alignItems: 'baseline' }}>
                    <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--w40)' }}>{k}</span>
                    <span style={{ fontSize: 14, color: 'var(--white)', textAlign: 'right' }}>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pillars */}
          <div style={{ marginTop: 80 }}>
            <span className="eyebrow">Cuatro pilares</span>
            <h2 className="serif" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: -0.5, marginTop: 12, marginBottom: 36 }}>
              Lo que nos hace <em style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--gold)' }}>distintos</em>.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
              {[
                { icon: '✦', title: 'Producción artística', desc: 'Cada noche, una producción única: bailarines, performers, escenografías y conceptos diseñados para el show.' },
                { icon: '◈', title: 'Efectos especiales', desc: 'Tecnología de escenario de gran formato: pirotecnia, columnas de llama, CO₂, cascadas de confeti.' },
                { icon: '◉', title: 'Sonido L-Acoustics', desc: 'Sistema K2 con subgraves SB28. Calibrado para que cada frecuencia se sienta exactamente donde toca.' },
                { icon: '◆', title: 'Exclusividad real', desc: 'Acceso controlado, zonas premium y atención dedicada. La diferencia entre ir de fiesta y vivirla.' },
              ].map((p, i) => (
                <div key={i} style={{
                  background: 'var(--night-2)', border: '1px solid var(--w08)',
                  borderRadius: 'var(--radius-md)', padding: 28,
                }}>
                  <div style={{ fontSize: 24, color: 'var(--gold)', marginBottom: 18 }}>{p.icon}</div>
                  <p className="serif" style={{ fontSize: 19, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.3, marginBottom: 10 }}>{p.title}</p>
                  <p style={{ fontSize: 13, color: 'var(--w40)', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div style={{ marginTop: 80 }}>
            <div className="section-head" style={{ marginBottom: 24 }}>
              <div>
                <span className="eyebrow">En directo</span>
                <h2 style={{ marginTop: 10 }}>La <em>sala</em> esta temporada</h2>
              </div>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="micro" style={{ borderBottom: '1px solid rgba(255,255,255,0.18)', paddingBottom: 3 }}>
                @condado.club →
              </a>
            </div>
            <div className="sala-gallery">
              {GALLERY.map((img, i) => (
                <div key={i} className={`g-cell g-cell-${i}`}>
                  <img src={img} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA to artistas */}
          <div style={{
            marginTop: 80,
            padding: '56px 32px',
            background: 'linear-gradient(135deg, var(--night-2), var(--night-3))',
            border: '1px solid var(--gold-border)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
          }}>
            <span className="eyebrow">+200 artistas en 15 años</span>
            <h3 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: -0.5, marginTop: 12, marginBottom: 16 }}>
              ¿Quién ha pasado por <em style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--gold)' }}>Condado</em>?
            </h3>
            <p style={{ fontSize: 14, color: 'var(--w60)', maxWidth: 560, margin: '0 auto 28px', lineHeight: 1.7 }}>
              Reggaeton, urban, electronic, house. Los nombres que han marcado la escena hispana en los últimos 15 años.
            </p>
            <button onClick={() => onNav('/artistas')} className="btn btn-gold">Ver todos los artistas →</button>
          </div>
        </div>
      </div>

      <style>{`
        .subtab {
          padding: 10px 22px;
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase; font-weight: 500;
          color: var(--w60);
          border-radius: 999px;
          transition: all 200ms ease;
        }
        .subtab.active { background: var(--gold); color: var(--night); font-weight: 700; }
        @media (min-width: 900px) {
          .sala-hero { grid-template-columns: 1.2fr 1fr; gap: 56px; }
        }
        .sala-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          grid-auto-rows: 180px;
        }
        .sala-gallery .g-cell { overflow: hidden; border-radius: var(--radius-md); background: var(--night-3); }
        .sala-gallery img { width: 100%; height: 100%; object-fit: cover; transition: transform 600ms ease; }
        .sala-gallery .g-cell:hover img { transform: scale(1.06); }
        .sala-gallery .g-cell-0 { grid-row: span 2; }
        @media (min-width: 768px) {
          .sala-gallery { grid-template-columns: repeat(4, 1fr); grid-auto-rows: 220px; gap: 12px; }
          .sala-gallery .g-cell-0 { grid-row: span 2; grid-column: span 1; }
          .sala-gallery .g-cell-3 { grid-row: span 2; }
        }
      `}</style>
    </div>
  );
}

function Artistas({ onNav }) {
  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="+200 nombres · 15 años"
        title='<em style="font-style:normal;font-weight:300;color:var(--gold)">Artistas</em>'
        subtitle="Los nombres que han hecho historia en Condado. Reggaeton, urban, electronic. Lo mejor de la escena hispana en directo."
      />

      <div style={{
        display: 'flex', justifyContent: 'center', gap: 8,
        padding: '0 24px', marginBottom: 30,
      }}>
        <div style={{ display: 'flex', gap: 4, background: 'var(--w05)', border: '1px solid var(--w15)', borderRadius: 999, padding: 4 }}>
          <button onClick={() => onNav('/sala')} className="subtab">← La Sala</button>
          <button className="subtab active">Artistas</button>
        </div>
      </div>

      <div style={{ padding: '0 24px 100px' }}>
        <div className="container-wide" style={{ margin: '0 auto' }}>
          <div className="artists-grid">
            {ARTISTS.map((a, i) => (
              <div key={i} className="artist-card">
                <img src={a.img} alt={a.name} loading="lazy" />
                <div className="artist-grad"></div>
                <div className="artist-body">
                  <p className="serif" style={{ fontSize: 19, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 3 }}>
                    {a.name}
                  </p>
                  <p className="micro">{a.genre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .artists-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        @media (min-width: 600px) { .artists-grid { grid-template-columns: repeat(3, 1fr); gap: 12px; } }
        @media (min-width: 900px) { .artists-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (min-width: 1200px) { .artists-grid { grid-template-columns: repeat(5, 1fr); gap: 14px; } }
        .artist-card {
          position: relative; overflow: hidden;
          border-radius: var(--radius-md);
          aspect-ratio: 3/4;
          cursor: pointer;
          transition: transform 350ms ease;
        }
        .artist-card:hover { transform: translateY(-6px); }
        .artist-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 500ms ease; }
        .artist-card:hover img { transform: scale(1.06); }
        .artist-grad {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,5,9,0.96) 0%, rgba(8,5,9,0.4) 55%, transparent 100%);
        }
        .artist-body { position: absolute; left: 16px; right: 16px; bottom: 16px; }
      `}</style>
    </div>
  );
}

Object.assign(window, { Sala, Artistas });
