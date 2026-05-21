// Eventos Privados, Contacto, Tickets pages
const { useState, useEffect } = React;

function EventosPrivados({ onNav }) {
  const [type, setType] = useState('cumple');
  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="Privatizaciones · Empresas · Celebraciones"
        title='Eventos<br/><em style="font-style:normal;font-weight:300;color:var(--gold)">privados</em>'
        subtitle="Cumpleaños, despedidas, eventos corporativos o privatizaciones completas. La sala más imponente de la Costa Blanca, a tu disposición."
      />

      <div style={{ padding: '0 24px 80px' }}>
        <div className="container-wide" style={{ margin: '0 auto' }}>

          {/* Type selector */}
          <div className="ep-types">
            {[
              { k: 'cumple', l: 'Cumpleaños', desc: '20–200 personas', icon: '✦' },
              { k: 'despedida', l: 'Despedidas', desc: 'Solteros y solteras', icon: '◈' },
              { k: 'empresa', l: 'Eventos corporativos', desc: 'Empresas y marcas', icon: '◉' },
              { k: 'priv', l: 'Privatización total', desc: 'Sala completa · 1.500 pax', icon: '◆' },
            ].map((t) => (
              <button key={t.k} onClick={() => setType(t.k)} className={`ep-type${type === t.k ? ' active' : ''}`}>
                <span className="ep-type-icon">{t.icon}</span>
                <span>
                  <p className="serif" style={{ fontSize: 19, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.3, marginBottom: 2 }}>{t.l}</p>
                  <p style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--w40)' }}>{t.desc}</p>
                </span>
              </button>
            ))}
          </div>

          {/* Two-column: image + features */}
          <div className="ep-split">
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: 380, background: 'var(--night-3)' }}>
              <img src={GALLERY[2]} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,5,9,0.4), rgba(8,5,9,0.7))' }}></div>
              <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'var(--gold-dim)', border: '1px solid var(--gold-border)',
                  padding: '6px 12px', borderRadius: 999,
                  fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)',
                  marginBottom: 14,
                }}>El espacio</span>
                <p className="serif" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: -1 }}>
                  Tu evento.<br/><em style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--gold)' }}>A tu medida.</em>
                </p>
              </div>
            </div>
            <div>
              <span className="eyebrow">Qué incluye</span>
              <h3 className="serif" style={{ fontSize: 30, fontWeight: 800, textTransform: 'uppercase', letterSpacing: -0.3, marginTop: 10, marginBottom: 24 }}>
                Producción a tu nivel.
              </h3>
              <ul style={{ listStyle: 'none', display: 'grid', gap: 0 }}>
                {[
                  ['Espacio reservado', 'Zona privada o sala completa'],
                  ['Catering personalizado', 'Coctelería · cena · finger food'],
                  ['DJ + producción', 'Música, luces y FX a tu gusto'],
                  ['Seguridad y staff', 'Coordinador dedicado · staff propio'],
                  ['Decoración temática', 'Globos, vinilos, branding, attrezzo'],
                  ['Animación', 'Performers, GoGos, sax, percusión'],
                  ['Photo & video', 'Reportaje profesional opcional'],
                ].map(([k, v], i) => (
                  <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid var(--w08)', gap: 16, alignItems: 'baseline' }}>
                    <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)' }}>{k}</span>
                    <span style={{ fontSize: 13.5, color: 'var(--w60)', textAlign: 'right' }}>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div style={{ marginTop: 80, background: 'var(--night-2)', border: '1px solid var(--w08)', borderRadius: 'var(--radius-lg)', padding: '40px 28px' }} className="ep-form">
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span className="eyebrow">Solicitud de presupuesto</span>
              <h3 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: -0.5, marginTop: 12 }}>
                Cuéntanos tu <em style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--gold)' }}>evento</em>.
              </h3>
              <p style={{ fontSize: 13.5, color: 'var(--w60)', marginTop: 12, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
                Te respondemos en menos de 24h con una propuesta personalizada y disponibilidad de fechas.
              </p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Solicitud enviada. Te contactaremos en menos de 24h.'); }} style={{ maxWidth: 640, margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
                <div className="field"><label>Nombre completo</label><input required placeholder="Tu nombre" /></div>
                <div className="field"><label>Empresa (opcional)</label><input placeholder="Si aplica" /></div>
                <div className="field"><label>Email</label><input required type="email" placeholder="tu@email.com" /></div>
                <div className="field"><label>Teléfono</label><input required type="tel" placeholder="+34 600 00 00 00" /></div>
                <div className="field">
                  <label>Tipo de evento</label>
                  <select required>
                    <option>Cumpleaños</option>
                    <option>Despedida de soltero/a</option>
                    <option>Evento corporativo</option>
                    <option>Privatización total</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="field"><label>Personas estimadas</label><input required type="number" min="10" placeholder="Ej: 60" /></div>
                <div className="field"><label>Fecha preferida</label><input required type="date" /></div>
                <div className="field"><label>Fecha alternativa</label><input type="date" /></div>
              </div>
              <div className="field"><label>Cuéntanos más</label><textarea placeholder="Concepto, presupuesto orientativo, peticiones especiales..."></textarea></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, margin: '16px 0 24px', fontSize: 12, color: 'var(--w60)', lineHeight: 1.5 }}>
                <input type="checkbox" required style={{ marginTop: 3, accentColor: 'var(--gold)' }} />
                <span>He leído y acepto la <a href="#" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>política de privacidad</a>.</span>
              </div>
              <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '16px 26px' }}>
                Enviar solicitud →
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .ep-types {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin-bottom: 50px;
        }
        @media (min-width: 600px) { .ep-types { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) { .ep-types { grid-template-columns: repeat(4, 1fr); } }
        .ep-type {
          display: flex; align-items: center; gap: 14px;
          padding: 22px 20px;
          background: var(--night-2);
          border: 1px solid var(--w08);
          border-radius: var(--radius-md);
          text-align: left;
          transition: all 250ms ease;
        }
        .ep-type:hover { border-color: var(--gold-border); }
        .ep-type.active { border-color: var(--gold); background: var(--gold-dim); }
        .ep-type-icon { font-size: 26px; color: var(--gold); flex-shrink: 0; }

        .ep-split {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        @media (min-width: 900px) { .ep-split { grid-template-columns: 1.1fr 1fr; gap: 56px; align-items: center; } }
        @media (min-width: 768px) { .ep-form { padding: 56px 48px; } }
      `}</style>
    </div>
  );
}

function Contacto({ onNav }) {
  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="Estamos en Denia"
        title='<em style="font-style:normal;font-weight:300;color:var(--gold)">Contacto</em>'
        subtitle="Reservas, prensa, colaboraciones, dudas. Elige el canal que prefieras."
      />

      <div style={{ padding: '0 24px 100px' }}>
        <div className="container-wide" style={{ margin: '0 auto' }}>

          {/* Channels grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, marginBottom: 60 }}>
            {[
              { eye: 'Taquilla', title: 'Entradas y reservas', email: 'taquilla@condadoclub.es', tel: '601 602 030', icon: '✦' },
              { eye: 'Eventos privados', title: 'Cumpleaños · empresas', email: 'eventos@condadoclub.es', tel: '965 270 027', icon: '◈' },
              { eye: 'Prensa & Marketing', title: 'Medios y colaboraciones', email: 'prensa@condadoclub.es', tel: '', icon: '◉' },
              { eye: 'Trabaja con nosotros', title: 'RRHH y empleo', email: 'rrhh@condadoclub.es', tel: '', icon: '◆' },
            ].map((c, i) => (
              <div key={i} style={{
                background: 'var(--night-2)', border: '1px solid var(--w08)',
                borderRadius: 'var(--radius-md)', padding: 26,
                transition: 'all 300ms ease',
              }} className="contact-card">
                <div style={{ fontSize: 22, color: 'var(--gold)', marginBottom: 14 }}>{c.icon}</div>
                <span className="eyebrow" style={{ fontSize: 9.5 }}>{c.eye}</span>
                <p className="serif" style={{ fontSize: 19, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.3, marginTop: 8, marginBottom: 14 }}>{c.title}</p>
                <a href={`mailto:${c.email}`} style={{ display: 'block', fontSize: 13, color: 'var(--w60)', marginBottom: 4 }}>{c.email}</a>
                {c.tel && <a href={`tel:${c.tel.replace(/\s/g, '')}`} style={{ display: 'block', fontSize: 13, color: 'var(--w60)' }}>{c.tel}</a>}
              </div>
            ))}
          </div>

          <div className="contact-split">
            {/* Map placeholder + address */}
            <div>
              <span className="eyebrow">Dónde estamos</span>
              <h3 className="serif" style={{ fontSize: 30, fontWeight: 800, textTransform: 'uppercase', letterSpacing: -0.3, marginTop: 10, marginBottom: 18 }}>
                Dénia, Alicante.<br/><em style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--gold)' }}>Costa Blanca</em>.
              </h3>

              <div style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--w08)',
                background: 'linear-gradient(135deg, #0F0B14 0%, #160F1C 50%, #0F0B14 100%)',
                marginBottom: 20,
              }}>
                {/* Faux map */}
                <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)"/>
                  <path d="M 0 180 Q 100 160 180 175 T 400 165 L 400 300 L 0 300 Z" fill="rgba(232,169,74,0.04)"/>
                  <path d="M 0 180 Q 100 160 180 175 T 400 165" stroke="rgba(232,169,74,0.25)" strokeWidth="1" fill="none"/>
                  <path d="M 20 100 L 120 90 L 200 110 L 280 95 L 380 105" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none"/>
                  <path d="M 60 50 L 120 70 L 180 60 L 220 80 L 300 70" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none"/>
                  <circle cx="210" cy="140" r="6" fill="var(--gold)"/>
                  <circle cx="210" cy="140" r="14" fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.5">
                    <animate attributeName="r" from="6" to="26" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" from="0.7" to="0" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <text x="220" y="138" fill="white" fontSize="9" fontFamily="'Barlow', sans-serif" fontWeight="700" letterSpacing="2">CONDADO CLUB</text>
                  <text x="220" y="150" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="Barlow" letterSpacing="1">DÉNIA</text>
                  <text x="20" y="195" fill="rgba(232,169,74,0.5)" fontSize="7" fontFamily="Barlow" letterSpacing="1.5">MEDITERRÁNEO</text>
                  <text x="290" y="55" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="Barlow" letterSpacing="1.5">MONTGÓ</text>
                </svg>
                <a href="https://maps.google.com/?q=Denia+Alicante" target="_blank" rel="noreferrer" className="btn btn-gold btn-sm" style={{ position: 'absolute', bottom: 16, right: 16 }}>
                  Abrir en Maps →
                </a>
              </div>

              <div style={{ display: 'grid', gap: 16 }}>
                {[
                  ['Dirección', 'Calle Marqués de Campo, 42 · 03700 Dénia (Alicante)'],
                  ['Cómo llegar', 'AP-7 salida 62 · 1h desde Valencia · 1h desde Alicante'],
                  ['Parking', 'Parking público a 2 min · gratis viernes y sábados'],
                  ['Horario', 'Vie-Sáb 23:30–06:00 · eventos especiales otros días'],
                ].map(([k, v], i) => (
                  <div key={i}>
                    <p className="micro" style={{ color: 'var(--gold)', marginBottom: 4 }}>{k}</p>
                    <p style={{ fontSize: 13.5, color: 'var(--w60)', lineHeight: 1.6 }}>{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{
              background: 'var(--night-2)', border: '1px solid var(--w08)',
              borderRadius: 'var(--radius-lg)', padding: '32px 24px',
            }} className="contact-form">
              <span className="eyebrow">Formulario rápido</span>
              <h3 className="serif" style={{ fontSize: 28, fontWeight: 800, textTransform: 'uppercase', letterSpacing: -0.3, marginTop: 10, marginBottom: 22 }}>
                Escríbenos.
              </h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Mensaje enviado. Te respondemos pronto.'); }}>
                <div className="field"><label>Nombre</label><input required placeholder="Tu nombre" /></div>
                <div className="field"><label>Email</label><input required type="email" placeholder="tu@email.com" /></div>
                <div className="field">
                  <label>Asunto</label>
                  <select required>
                    <option>Reservas y entradas</option>
                    <option>Mesas VIP</option>
                    <option>Eventos privados</option>
                    <option>Prensa / colaboraciones</option>
                    <option>Objetos perdidos</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="field"><label>Mensaje</label><textarea required placeholder="Cuéntanos en qué te podemos ayudar..."></textarea></div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, margin: '4px 0 22px', fontSize: 12, color: 'var(--w60)', lineHeight: 1.5 }}>
                  <input type="checkbox" required style={{ marginTop: 3, accentColor: 'var(--gold)' }} />
                  <span>Acepto la <a href="#" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>política de privacidad</a>.</span>
                </div>
                <button type="submit" className="btn btn-gold" style={{ width: '100%' }}>Enviar mensaje →</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-card:hover { border-color: var(--gold-border); transform: translateY(-3px); }
        .contact-split {
          display: grid; grid-template-columns: 1fr; gap: 28px;
        }
        @media (min-width: 900px) {
          .contact-split { grid-template-columns: 1fr 1fr; gap: 40px; }
          .contact-form { padding: 40px 36px; }
        }
      `}</style>
    </div>
  );
}

function Tickets({ onNav }) {
  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="Compra de entradas"
        title='Comprar<br/><em style="font-style:normal;font-weight:300;color:var(--gold)">tickets</em>'
        subtitle="Selecciona un evento y reserva tu acceso. Plazas limitadas, recomendamos comprar con antelación."
      />
      <div style={{ padding: '0 24px 100px' }}>
        <div className="container-wide" style={{ margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {EVENTS.map((ev) => <EventCard key={ev.id} event={ev} onNav={onNav} width="100%" />)}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { EventosPrivados, Contacto, Tickets });
