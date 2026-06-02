// Calendario, Mesas VIP pages
const { useState, useEffect } = React;

function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header style={{ padding: '140px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 280, maxWidth: '120vw',
        background: 'radial-gradient(ellipse, rgba(232,169,74,0.08) 0%, transparent 65%)',
      }}></div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="serif" style={{
          fontSize: 'clamp(48px, 8vw, 110px)',
          fontWeight: 800, textTransform: 'uppercase',
          lineHeight: 0.9, letterSpacing: -1,
          marginTop: 12, marginBottom: subtitle ? 18 : 0,
        }} dangerouslySetInnerHTML={{ __html: title }}/>
        {subtitle && <p style={{ fontSize: 15, color: 'var(--w60)', maxWidth: 620, margin: '0 auto', lineHeight: 1.65 }}>{subtitle}</p>}
      </div>
    </header>
  );
}

const MONTH_NUM = { abr: 4, may: 5, jun: 6, jul: 7, ago: 8 };

function Calendario({ onNav }) {
  const today = new Date();
  const futureEvents = EVENTS.filter((ev) => {
    const evDate = new Date(2026, (MONTH_NUM[ev.monthKey] || 1) - 1, parseInt(ev.day, 10));
    return evDate >= today;
  });

  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="Agenda completa · 2026"
        title='Próximos<br/><em style="font-style:normal;font-weight:300;color:var(--gold)">eventos</em>'
        subtitle="Toda la temporada en Condado Club. Descubre los próximos shows y reserva tu entrada antes de que se agoten."
      />

      <div style={{ padding: '0 24px 100px' }}>
        <div className="container-wide" style={{ margin: '0 auto' }}>

          <p className="micro" style={{ marginBottom: 36 }}>
            <strong style={{ color: 'var(--gold)' }}>{futureEvents.length}</strong>&nbsp; próximos eventos
          </p>

          {futureEvents.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--w40)' }}>
              <p>No hay próximos eventos disponibles.</p>
            </div>
          ) : (
            <div className="cal-grid">
              {futureEvents.map((ev) => (
                <article key={ev.id} className="cal-card">
                  <div className="cal-card-img-wrap">
                    <img src={ev.image} alt={ev.name} className="cal-card-img" />
                    <div className="cal-card-img-grad"></div>
                    <div className="cal-card-date-badge">
                      <span className="serif" style={{ fontSize: 36, fontWeight: 800, lineHeight: 1, letterSpacing: -1, display: 'block' }}>{ev.day}</span>
                      <span style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginTop: 2 }}>{ev.dayName}</span>
                      <span style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--w60)', display: 'block' }}>{ev.month}</span>
                    </div>
                    {ev.badge && <span className="cal-card-badge">{ev.badge}</span>}
                  </div>
                  <div className="cal-card-body">
                    <div style={{ flex: 1 }}>
                      <h3 className="serif cal-card-title">{ev.name}</h3>
                      <p className="cal-card-artist">{ev.support}</p>
                    </div>
                    <button className="btn btn-gold" style={{ width: '100%', marginTop: 18 }} onClick={() => onNav('/tickets')}>
                      Tickets y VIP
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .cal-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .cal-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (min-width: 1024px) {
          .cal-grid { grid-template-columns: repeat(3, 1fr); gap: 28px; }
        }

        .cal-card {
          background: var(--night-2);
          border: 1px solid var(--w08);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 300ms ease, transform 300ms ease, box-shadow 300ms ease;
        }
        .cal-card:hover {
          border-color: var(--gold-border);
          transform: translateY(-4px);
          box-shadow: 0 24px 50px rgba(0,0,0,0.45);
        }

        .cal-card-img-wrap {
          position: relative;
          aspect-ratio: 3 / 4;
          overflow: hidden;
        }
        .cal-card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 600ms ease;
        }
        .cal-card:hover .cal-card-img { transform: scale(1.05); }
        .cal-card-img-grad {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,5,9,0.75) 0%, transparent 55%);
        }

        .cal-card-date-badge {
          position: absolute;
          top: 14px; left: 14px;
          background: rgba(8,5,9,0.75);
          backdrop-filter: blur(8px);
          border: 1px solid var(--w15);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          text-align: center;
          min-width: 54px;
        }

        .cal-card-badge {
          position: absolute;
          top: 14px; right: 14px;
          background: var(--gold);
          color: var(--night);
          font-size: 9px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          padding: 5px 11px; border-radius: 999px;
        }

        .cal-card-body {
          padding: 20px 20px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .cal-card-title {
          font-size: clamp(20px, 3vw, 26px);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.3px;
          line-height: 1.05;
          margin-bottom: 8px;
        }

        .cal-card-artist {
          font-size: 13px;
          color: var(--w60);
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}

const VIP_TABLES = [
  {
    id: 'escenario',
    name: 'VIP Escenario',
    price: '150',
    pax: '6 personas',
    location: 'Junto al DJ en el escenario',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&q=80',
    features: ['Acceso VIP para 6 personas', '1 botella incluida', '12 refrescos incluidos', 'Mesa reservada', 'Zona privada junto al DJ', 'Acceso prioritario sin cola'],
    tag: 'La experiencia top',
  },
  {
    id: 'sala',
    name: 'VIP Sala',
    price: '€450',
    pax: '6 personas',
    location: 'Mesas en la pista',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80',
    features: ['Acceso VIP para 6 personas', '1 botella incluida', '12 refrescos incluidos', 'Mesa reservada', 'Acceso prioritario sin cola'],
    tag: 'La más reservada',
  },
  {
    id: 'palco1',
    name: 'VIP 1º Palco',
    price: '€350',
    pax: '6 personas',
    location: 'Palco bajo · sala principal',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80',
    features: ['Acceso VIP para 6 personas', '1 botella incluida', '12 refrescos incluidos', 'Mesa reservada', 'Zona elevada con vista a pista'],
  },
  {
    id: 'palco2',
    name: 'VIP 2º Palco',
    price: '€250',
    pax: '6 personas',
    location: 'Palco alto · sala principal',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=80',
    features: ['Acceso VIP para 6 personas', '1 botella incluida', '12 refrescos incluidos', 'Mesa reservada', 'Vista panorámica desde palco superior'],
  },
];

function MesasVIP({ onNav }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="Reservas premium"
        title='Zonas <em style="font-style:normal;font-weight:300;color:var(--gold)">VIP</em>'
        subtitle="Vive la fiesta como nunca. Elige tu zona y disfruta del mejor ambiente con mesa propia y servicio exclusivo. Una experiencia inolvidable en Condado."
      />

      <div style={{ padding: '0 24px 60px' }}>
        <div className="container-wide" style={{ margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {VIP_TABLES.map((t) => (
              <article key={t.id} className="vip-card">
                <div className="vip-img-wrap">
                  <img src={t.img} alt={t.name} />
                  <div className="vip-img-grad"></div>
                  {t.tag && <span className="vip-tag">{t.tag}</span>}
                  <div className="vip-img-meta">
                    <p className="serif" style={{ fontSize: 48, fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: -1 }}>
                      {t.name}
                    </p>
                  </div>
                </div>
                <div style={{ padding: '24px 24px 24px' }}>
                  <p className="micro" style={{ color: 'var(--gold)', marginBottom: 12 }}>Ubicación</p>
                  <p style={{ fontSize: 13.5, color: 'var(--w60)', marginBottom: 18, lineHeight: 1.6 }}>{t.location}</p>
                  <p className="micro" style={{ color: 'var(--gold)', marginBottom: 12 }}>Incluye</p>
                  <ul style={{ listStyle: 'none', marginBottom: 22 }}>
                    {t.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '7px 0', fontSize: 13, color: 'var(--w60)' }}>
                        <span style={{ color: 'var(--gold)', fontSize: 14, lineHeight: 1.4 }}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => onNav('/calendario')} className="btn btn-gold" style={{ width: '100%' }}>
                    Entradas y VIP →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Condiciones generales VIP */}
          <div style={{
            marginTop: 56,
            background: 'var(--night-2)',
            border: '1px solid var(--w08)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px 28px',
          }} className="vip-conds">
            <span className="eyebrow">Condiciones generales</span>
            <h3 className="serif" style={{ fontSize: 26, fontWeight: 800, textTransform: 'uppercase', letterSpacing: -0.3, marginTop: 10, marginBottom: 20 }}>
              Zonas <em style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--gold)' }}>VIP</em>
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'El máximo de ocupación por mesa VIP es de 6 personas. *Consultar precios de suplemento VIP por persona con consumición incluida (hasta 9 personas máximo).',
                'Todas las mesas incluyen: Acceso hasta 6 personas + 1 Botella + 12 refrescos + "Sweet Candies".',
                'Reservando tu Mesa VIP tienes un acceso ágil a la sala. Sin esperas ni colas.',
              ].map((line, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, fontSize: 14, color: 'var(--w60)', lineHeight: 1.65 }}>
                  <span style={{ flexShrink: 0, width: 22, height: 22, marginTop: 2, borderRadius: 6, background: 'var(--gold-dim)', border: '1px solid var(--gold-border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontSize: 10, fontWeight: 700 }}>{i + 1}</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Reservation modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: 'fixed', inset: 0, zIndex: 300,
          background: 'rgba(8,5,9,0.85)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24, animation: 'fadeUp 250ms ease both',
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: 'var(--night-2)', border: '1px solid var(--gold-border)',
            borderRadius: 'var(--radius-lg)', maxWidth: 480, width: '100%',
            padding: 36, position: 'relative',
            maxHeight: '90vh', overflowY: 'auto',
          }}>
            <button onClick={() => setSelected(null)} style={{
              position: 'absolute', top: 16, right: 16,
              width: 32, height: 32, borderRadius: 999,
              background: 'var(--w08)', color: 'var(--white)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18,
            }}>×</button>
            <span className="eyebrow">Reserva · {selected.name}</span>
            <h3 className="serif" style={{ fontSize: 36, fontWeight: 800, textTransform: 'uppercase', letterSpacing: -0.5, marginTop: 10, marginBottom: 8 }}>
              Mesa {selected.name}
            </h3>
            <p style={{ fontSize: 13, color: 'var(--w60)', marginBottom: 24 }}>
              Desde <strong style={{ color: 'var(--gold)' }}>{selected.price}</strong> · {selected.pax}
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Solicitud enviada. Te contactaremos en breve.'); setSelected(null); }}>
              <div className="field"><label>Nombre completo</label><input required placeholder="Tu nombre" /></div>
              <div className="field"><label>Email</label><input required type="email" placeholder="tu@email.com" /></div>
              <div className="field"><label>Teléfono</label><input required type="tel" placeholder="+34 600 00 00 00" /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div className="field"><label>Fecha</label><input required type="date" /></div>
                <div className="field"><label>Personas</label><input required type="number" min="1" defaultValue="6" /></div>
              </div>
              <div className="field"><label>Comentarios</label><textarea placeholder="Cumpleaños, despedida, peticiones especiales..." style={{ minHeight: 80 }}></textarea></div>
              <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: 8 }}>Confirmar reserva</button>
              <p style={{ fontSize: 11, color: 'var(--w40)', marginTop: 14, textAlign: 'center', lineHeight: 1.6 }}>
                Te confirmaremos disponibilidad por email en menos de 24h.
              </p>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .vip-card {
          background: var(--night-2);
          border: 1px solid var(--w08);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex; flex-direction: column;
          transition: all 350ms ease;
        }
        .vip-card:hover { border-color: var(--gold-border); transform: translateY(-4px); box-shadow: 0 24px 50px rgba(0,0,0,0.4); }
        .vip-img-wrap { position: relative; aspect-ratio: 4/3; overflow: hidden; }
        .vip-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 600ms ease; }
        .vip-card:hover .vip-img-wrap img { transform: scale(1.06); }
        .vip-img-grad {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,5,9,0.95) 0%, rgba(8,5,9,0.4) 45%, transparent 100%);
        }
        .vip-img-meta { position: absolute; bottom: 20px; left: 22px; right: 22px; }
        .vip-tag {
          position: absolute; top: 16px; left: 16px;
          background: var(--gold); color: var(--night);
          font-size: 9px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          padding: 5px 11px; border-radius: 999px;
        }
        @media (min-width: 768px) {
          .vip-info { grid-template-columns: 1fr 1fr; gap: 40px; padding: 48px; }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { Calendario, MesasVIP, PageHeader });
