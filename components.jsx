// Shared components — Nav, Footer, Logo, etc.
const { useState, useEffect, useRef } = React;

function Logo({ size = 'md' }) {
  const dim = size === 'sm' ? 24 : 30;
  const txt = size === 'sm' ? 14 : 17;
  return (
    <a href="#/" onClick={(e) => { e.preventDefault(); window.location.hash = '/'; }} className="logo" style={{ fontSize: txt }}>
      <span className="logo-mark" style={{ width: dim, height: dim }}></span>
      <span className="logo-text">
        <span>Condado</span>
        <small>CLUB</small>
      </span>
    </a>
  );
}

const NAV_ITEMS = [
  { name: 'Calendario', path: '/calendario' },
  { name: 'Zonas VIP', path: '/mesas-vip' },
  { name: 'Sala', path: '/sala' },
  { name: 'Eventos Privados', path: '/eventos-privados' },
  { name: 'Contacto', path: '/contacto' },
];

function Nav({ route, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setOpen(false); document.body.style.overflow = ''; }, [route]);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const go = (path) => (e) => {
    e.preventDefault();
    onNav(path);
  };

  return (
    <>
      <nav className={`nav${scrolled || route !== '/' ? ' scrolled' : ''}`}>
        <Logo />
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <a
                href={`#${item.path}`}
                onClick={go(item.path)}
                className={`nav-link${route === item.path || (item.path === '/sala' && route === '/artistas') ? ' active' : ''}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <a href="#/tickets" onClick={go('/tickets')} className="btn btn-gold nav-cta">Comprar Tickets</a>
        <button className={`burger${open ? ' open' : ''}`} onClick={toggle} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`drawer${open ? ' open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.path}
            href={`#${item.path}`}
            onClick={go(item.path)}
            className={`drawer-link${route === item.path ? ' active' : ''}`}
          >
            {item.name}
          </a>
        ))}
        <a href="#/tickets" onClick={go('/tickets')} className="btn btn-gold" style={{ marginTop: 18, padding: '16px 36px' }}>
          Comprar Tickets
        </a>
        <div style={{ marginTop: 24, display: 'flex', gap: 14 }}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon"><InstagramIcon /></a>
          <a href="https://facebook.com"  target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon"><FacebookIcon /></a>
          <a href="https://tiktok.com"    target="_blank" rel="noreferrer" aria-label="TikTok" className="social-icon"><TikTokIcon /></a>
        </div>
      </div>
    </>
  );
}

function InstagramIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>;
}
function FacebookIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-9h3l.5-4H13V6.4c0-1.1.3-1.9 1.9-1.9H17V1c-.4 0-1.6-.1-3-.1-3 0-5 1.8-5 5.1V9H6v4h3v9h4z"/></svg>;
}
function TikTokIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 7.2c-1.6 0-3.1-.6-4.2-1.7-1-1-1.5-2.4-1.5-3.8h-3.2v13.2c0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9.3 0 .6 0 .9.1V8.7c-.3 0-.6-.1-.9-.1-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2V9.2c1.4 1 3 1.6 4.7 1.6V7.2z"/></svg>;
}

function Footer({ onNav }) {
  const go = (path) => (e) => { e.preventDefault(); onNav(path); };
  return (
    <footer className="footer">
      <div className="container-wide" style={{ margin: '0 auto' }}>
        <div className="footer-grid">
          <div>
            <Logo size="sm" />
            <div style={{
              display: 'flex', width: 'fit-content', alignItems: 'center', gap: 10,
              background: 'var(--gold-dim)', border: '1px solid var(--gold-border)',
              padding: '6px 12px', borderRadius: 999, marginTop: 18,
              fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)',
            }}>
              <strong>#94</strong> · Mejor Club del Mundo
            </div>
            <p style={{ fontSize: 13, color: 'var(--w60)', lineHeight: 1.7, marginTop: 22, maxWidth: 280 }}>
              Calle Marqués de Campo, 42<br/>
              03700 Dénia (Alicante)<br/>
              España · Costa Blanca
            </p>
          </div>

          <div>
            <p className="micro" style={{ color: 'var(--gold)', marginBottom: 14 }}>Contacto</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li><a href="tel:601602030" style={linkStyle}>601 602 030</a></li>
              <li><a href="tel:965270027" style={linkStyle}>965 270 027</a></li>
              <li><a href="mailto:taquilla@condadoclub.es" style={linkStyle}>taquilla@condadoclub.es</a></li>
              <li style={{ marginTop: 8 }}><a href="#" style={{ ...linkStyle, color: 'var(--gold)' }}>Trabaja con nosotros →</a></li>
            </ul>
          </div>

          <div>
            <p className="micro" style={{ color: 'var(--gold)', marginBottom: 14 }}>Redes sociales</p>
            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://facebook.com"  target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://tiktok.com"    target="_blank" rel="noreferrer" className="social-icon" aria-label="TikTok"><TikTokIcon /></a>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 28, borderTop: '1px solid var(--w08)', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px', justifyContent: 'center' }}>
            {['Aviso legal', 'Política de privacidad', 'Política de cookies', 'Términos y condiciones'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--w40)' }}>{l}</a>
            ))}
          </div>
          <p style={{ fontSize: 11, color: 'var(--w40)', textAlign: 'center', letterSpacing: 0.5 }}>
            © 2026 Condado Club · Dénia, Alicante · Todos los derechos reservados
          </p>
        </div>
      </div>

      <style>{`
        .social-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 38px; height: 38px;
          border-radius: 999px;
          background: var(--w05);
          border: 1px solid var(--w15);
          color: var(--w60);
          transition: all 200ms ease;
        }
        .social-icon:hover { color: var(--gold); border-color: var(--gold-border); background: var(--gold-dim); }
      `}</style>
    </footer>
  );
}
const linkStyle = { fontSize: 13, color: 'var(--w60)', transition: 'color 200ms ease' };

// Shared data ----------------------------------------------------------------
const EVENTS = [
  { id: 1, name: 'Old School Reggaeton', date: 'Jue 30 Abr · 23:00', day: '30', month: 'Abr', monthKey: 'abr', dayName: 'JUE', support: 'Chover · Piera', genre: 'Reggaeton · Urban', image: 'assets/events/old-school.jpg', badge: 'Próxima', sold: 'Quedan 89' },
  { id: 2, name: 'Fever',                 date: 'Sáb 16 May · 23:00', day: '16', month: 'May', monthKey: 'may', dayName: 'SÁB', support: 'Taron · Angel Belmonte', genre: 'Electronic · House', image: 'assets/events/fever.jpg', sold: 'Quedan 234' },
  { id: 3, name: 'Privé',                 date: 'Sáb 13 Jun · 23:00', day: '13', month: 'Jun', monthKey: 'jun', dayName: 'SÁB', support: 'Mitch van Staveren · Suel', genre: 'Urban · House', image: 'assets/events/prive.jpg', sold: 'Quedan 412' },
  { id: 4, name: 'Friday Mode > On',      date: 'Vie 20 Jun · 23:00', day: '20', month: 'Jun', monthKey: 'jun', dayName: 'VIE', support: 'Residentes · Denia', genre: 'Urban · Reggaeton', image: 'assets/events/friday-mode.jpg', sold: 'Quedan 156' },
  { id: 5, name: 'Yan Block',             date: 'Mié 22 Jul · 23:00', day: '22', month: 'Jul', monthKey: 'jul', dayName: 'MIÉ', support: 'En concierto · Denia', genre: 'Urban · Trap', image: 'assets/events/yan-block.jpg', badge: 'En venta', sold: 'Quedan 67' },
  { id: 6, name: 'Interstellar',          date: 'Sáb 08 Ago · 23:00', day: '08', month: 'Ago', monthKey: 'ago', dayName: 'SÁB', support: '10 Years of Music · Condado', genre: 'Todos los géneros', image: 'assets/events/interstellar.jpg', badge: 'Próximamente' },
];

const ARTISTS = [
  { name: 'Luar la L',          genre: 'Trap Latino',   img: 'assets/artists/luar-la-condado.jpg' },
  { name: 'Yan Block',          genre: 'Urban · Trap',   img: 'https://images.unsplash.com/photo-1571266028243-d220ff95ca75?w=600&q=80' },
  { name: 'Casper Mágico',      genre: 'Trap · Urban',   img: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=600&q=80' },
  { name: 'Luar la L',          genre: 'Trap Latino',    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80' },
  { name: 'Roa',                genre: 'Urban · Trap',   img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80' },
  { name: 'Young Cister',       genre: 'Trap',           img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80' },
  { name: 'Xivo y Fernandezz',  genre: 'Urban',          img: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&q=80' },
  { name: 'Dann Valero',        genre: 'Urban · Trap',   img: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80' },
  { name: 'Alvamaice',          genre: 'Urban',          img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80&sat=-100' },
  { name: 'Taron',              genre: 'House',          img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80' },
  { name: 'Angel Belmonte',     genre: 'Electronic',     img: 'https://images.unsplash.com/photo-1571266028243-d220ff95ca75?w=600&q=80&hue=240' },
  { name: 'Mitch van Staveren', genre: 'House · Tech',   img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80&hue=120' },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1571266028243-d220ff95ca75?w=900&q=80',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=80',
  'https://images.unsplash.com/photo-1574169208507-84376144848b?w=900&q=80',
  'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=900&q=80',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&q=80',
];

function EventCard({ event, onNav, width }) {
  return (
    <div className="event-card" style={{ width }}>
      <img src={event.image} alt={event.name} loading="lazy" />
      <div className="event-grad"></div>
      {event.badge && <span className="event-badge">{event.badge}</span>}
      <div className="event-body">
        <p style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>
          {event.date}
        </p>
        <h3 className="serif" style={{ fontSize: 26, fontWeight: 800, textTransform: 'uppercase', letterSpacing: -0.3, lineHeight: 0.95, marginBottom: 4 }}>
          {event.name}
        </h3>
        <p style={{ fontSize: 11.5, color: 'var(--w40)', letterSpacing: 0.3, marginBottom: 14 }}>
          {event.support}
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-gold btn-sm" style={{ flex: 1 }} onClick={() => onNav('/tickets')}>Tickets y VIP</button>
        </div>
      </div>
      <style>{`
        .event-card {
          position: relative;
          aspect-ratio: 4/5.5;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--night-2);
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 400ms ease, box-shadow 400ms ease;
        }
        .event-card:hover { transform: translateY(-6px); box-shadow: 0 24px 50px rgba(0,0,0,0.5); }
        .event-card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 600ms ease; }
        .event-card:hover img { transform: scale(1.05); }
        .event-grad {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,5,9,0.97) 0%, rgba(8,5,9,0.65) 38%, rgba(8,5,9,0.12) 65%, transparent 100%);
        }
        .event-badge {
          position: absolute; top: 14px; left: 14px;
          background: var(--gold); color: var(--night);
          font-size: 9px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          padding: 5px 11px; border-radius: 999px; z-index: 3;
        }
        .event-body {
          position: absolute; left: 0; right: 0; bottom: 0;
          padding: 20px;
          z-index: 2;
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { Nav, Footer, Logo, EventCard, NAV_ITEMS, EVENTS, ARTISTS, GALLERY, InstagramIcon, FacebookIcon, TikTokIcon });
