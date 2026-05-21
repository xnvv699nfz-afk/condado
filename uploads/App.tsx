import { useState, useEffect, useRef } from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import ZonasVip from './pages/ZonasVip';

// Import hero image
import heroImage from '@/imports/Copia_de_ALZ.MEDIA_-_10__ANIVERSARIO_CONDADO-147.jpg';

// Import VIP image
import vipImage from '@/imports/Copia_de_ALZ.MEDIA_-_10__ANIVERSARIO_CONDADO-193.jpg';

// Import event images
import ev1Image from '@/imports/ev1-old-school-1.png';
import ev2Image from '@/imports/ev2-fever-1.png';
import ev3Image from '@/imports/ev3-yan-block-1.png';
import ev4Image from '@/imports/ev4-interstellar-1.png';
import ev5Image from '@/imports/ev5-friday-mode-1.png';
import ev6Image from '@/imports/ev6-prive-1.png';

// Import gallery images
import gallery1 from '@/imports/Copia_de_20251011_CONDADO_ROA_RAULBMSTUDIOS00033.jpg';
import gallery2 from '@/imports/Copia_de__CCP7033.jpg';
import gallery3 from '@/imports/ALZ.MEDIA_-_10__ANIVERSARIO_CONDADO-78.jpg';
import gallery4 from '@/imports/Copia_de__ALZ9253_1_.jpg';
import gallery5 from '@/imports/Copia_de_ALZ.MEDIA_-_10__ANIVERSARIO_CONDADO-149.jpg';
import gallery6 from '@/imports/Copia_de_20251011_CONDADO_ROA_RAULBMSTUDIOS00627.jpg';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('all');
  const artistsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scroll = artistsScrollRef.current;
    if (!scroll) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - scroll.offsetLeft;
      scrollLeft = scroll.scrollLeft;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scroll.offsetLeft;
      const walk = (x - startX) * 1.4;
      scroll.scrollLeft = scrollLeft - walk;
    };

    scroll.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    scroll.addEventListener('mousemove', handleMouseMove);

    return () => {
      scroll.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      scroll.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const events = [
    {
      id: 1,
      name: 'Old School Reggaeton',
      date: 'Jue, 30 Abr',
      time: '23:00',
      support: 'Chover · Piera',
      badge: 'Próxima',
      month: 'abr',
      dayNum: '30',
      dayName: 'JUE',
      genre: 'Reggaeton · Urban',
      image: ev1Image,
    },
    {
      id: 2,
      name: 'Fever',
      date: 'Sáb, 16 May',
      time: '23:00',
      support: 'Taron · Angel Belmonte',
      month: 'may',
      dayNum: '16',
      dayName: 'SÁB',
      genre: 'Electronic · House',
      image: ev2Image,
    },
    {
      id: 3,
      name: 'Yan Block',
      date: 'Mié, 22 Jul',
      time: '23:00',
      support: 'En concierto · Denia',
      month: 'jul',
      dayNum: '22',
      dayName: 'MIÉ',
      genre: 'Urban · Trap',
      image: ev3Image,
    },
    {
      id: 4,
      name: 'Interstellar',
      date: 'Próximamente',
      time: '23:00',
      support: '10 Years of Music · Condado',
      month: 'ago',
      dayNum: '08',
      dayName: 'SÁB',
      genre: 'Todos los géneros',
      image: ev4Image,
    },
    {
      id: 5,
      name: 'Friday Mode > On',
      date: 'Vie · Cada semana',
      time: '23:00',
      support: 'Residentes · Denia',
      month: 'jun',
      dayNum: '20',
      dayName: 'VIE',
      genre: 'Urban · Reggaeton',
      image: ev5Image,
    },
    {
      id: 6,
      name: 'Privé',
      date: 'Sáb, 13 Jun',
      time: '23:00',
      support: 'Mitch van Staveren · Suel',
      month: 'jun',
      dayNum: '13',
      dayName: 'SÁB',
      genre: 'Urban · House',
      image: ev6Image,
    },
  ];

  const artists = [
    { name: 'Arcángel', genre: 'Reggaeton', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80' },
    { name: 'Yan Block', genre: 'Urban · Trap', image: 'https://images.unsplash.com/photo-1571266028243-d220ff95ca75?w=400&q=80' },
    { name: 'Casper Mágico', genre: 'Trap · Urban', image: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=400&q=80' },
    { name: 'Luar la L', genre: 'Trap Latino', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80' },
    { name: 'Roa', genre: 'Urban · Trap', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80' },
    { name: 'Young Cister', genre: 'Trap', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80' },
    { name: 'Xivo y Fernandezz', genre: 'Urban', image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&q=80' },
    { name: 'Dann Valero', genre: 'Urban · Trap', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&q=80' },
    { name: 'Alvamaice', genre: 'Urban', image: 'https://images.unsplash.com/photo-1571266028243-d220ff95ca75?w=400&q=80' },
  ];

  const galleryItems = [
    { image: gallery1 },
    { image: gallery2 },
    { image: gallery3 },
    { image: gallery4 },
    { image: gallery5 },
    { image: gallery6 },
  ];

  const filteredEvents = selectedMonth === 'all' ? events : events.filter(e => e.month === selectedMonth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen" style={{ fontFamily: 'var(--sans)' }}>
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] flex justify-between items-center transition-all duration-500 ${
          isScrolled
            ? 'bg-[rgba(8,5,9,0.88)] backdrop-blur-[16px] py-4 px-16 border-b border-[var(--w08)]'
            : 'py-7 px-16'
        }`}
      >
        <Link to="/" className="flex items-center">
          <svg height="38" viewBox="0 0 260 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Condado Club">
            <circle cx="28" cy="28" r="24" stroke="white" strokeWidth="2.5" fill="none"/>
            <path d="M28 5.5 A22.5 22.5 0 0 0 28 50.5 L28 5.5 Z" fill="white"/>
            <text x="64" y="26" fontFamily="'Oxanium', 'Arial Black', sans-serif" fontWeight="800" fontSize="23" fill="white" letterSpacing="1" textAnchor="start">CONDADO</text>
            <text x="64" y="48" fontFamily="'Oxanium', 'Arial Black', sans-serif" fontWeight="800" fontSize="23" fill="white" letterSpacing="1" textAnchor="start">CLUB</text>
          </svg>
        </Link>
        <ul className="hidden md:flex gap-8 list-none">
          {[
            { name: 'Eventos', to: '#eventos' },
            { name: 'Artistas', to: '#artistas' },
            { name: 'El Show', to: '#el-show' },
            { name: 'VIP', to: '/zonas-vip' },
            { name: 'Denia', to: '#denia' },
          ].map((item) => (
            <li key={item.name}>
              {item.to.startsWith('#') ? (
                <a
                  href={item.to}
                  className="text-[11px] tracking-[2px] uppercase text-[var(--w60)] hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.to}
                  className="text-[11px] tracking-[2px] uppercase text-[var(--w60)] hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <button className="hidden md:block bg-[var(--gold)] text-[var(--night)] text-[10px] font-bold tracking-[2px] uppercase px-[22px] py-[11px] rounded-[var(--radius-sm)] hover:bg-[var(--gold-light)] transition-all duration-200 hover:-translate-y-[1px]">
          Comprar Entradas
        </button>
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden flex flex-col gap-[5px] p-1 ${isMobileMenuOpen ? 'open' : ''}`}
        >
          <span className={`block w-[22px] h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}></span>
          <span className={`block w-[22px] h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-[22px] h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[199] bg-[rgba(8,5,9,0.97)] flex flex-col items-center justify-center gap-7">
          {[
            { name: 'Eventos', to: '#eventos' },
            { name: 'Artistas', to: '#artistas' },
            { name: 'El Show', to: '#el-show' },
            { name: 'VIP', to: '/zonas-vip' },
            { name: 'Denia', to: '#denia' },
          ].map((item) => (
            item.to.startsWith('#') ? (
              <a
                key={item.name}
                href={item.to}
                onClick={closeMobileMenu}
                className="text-[44px] font-[var(--serif)] font-extrabold uppercase tracking-[1px] hover:text-[var(--gold)] transition-colors duration-200"
                style={{ fontFamily: 'var(--serif)' }}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.to}
                onClick={closeMobileMenu}
                className="text-[44px] font-[var(--serif)] font-extrabold uppercase tracking-[1px] hover:text-[var(--gold)] transition-colors duration-200"
                style={{ fontFamily: 'var(--serif)' }}
              >
                {item.name}
              </Link>
            )
          ))}
          <button className="mt-3 bg-[var(--gold)] text-[var(--night)] text-[11px] font-bold tracking-[2px] uppercase px-9 py-[14px] rounded-[var(--radius-sm)]">
            Comprar Entradas
          </button>
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Condado Club"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(8,5,9,0.3) 0%, rgba(8,5,9,0.4) 50%, rgba(8,5,9,0.85) 100%)',
          }}
        ></div>
        <div className="relative z-[2] px-16 pb-[72px] w-full animate-[fadeUp_1.1s_cubic-bezier(0.16,1,0.3,1)_both]">
          <div className="inline-flex items-center gap-[10px] bg-[var(--gold-dim)] border border-[var(--gold-border)] px-4 py-[6px] rounded-full text-[10px] tracking-[2px] uppercase text-[var(--gold)] mb-[22px]">
            <strong className="font-bold">#94</strong> &nbsp;·&nbsp; Mejor discoteca del mundo &nbsp;·&nbsp; Denia, Alicante
          </div>
          <h1
            className="text-[clamp(60px,8.5vw,108px)] font-extrabold uppercase leading-[0.93] tracking-[-1px] mb-[10px]"
            style={{ fontFamily: 'var(--serif)' }}
          >
            Donde el sol<br />cae y <em className="font-light text-[var(--gold)]">empieza</em><br />la noche.
          </h1>
          <p className="text-[11px] tracking-[4px] uppercase text-[var(--w40)] mb-9">
            Condado Club &nbsp;·&nbsp; Denia &nbsp;·&nbsp; Costa Blanca
          </p>
          <div className="flex gap-[14px] items-center">
            <a href="#eventos" className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--night)] text-[10px] font-bold tracking-[2px] uppercase px-7 py-[15px] rounded-[var(--radius-sm)] hover:bg-[var(--gold-light)] transition-all duration-200 hover:-translate-y-[1px]">
              Ver próximos eventos
            </a>
            <a href="#vip" className="inline-flex items-center gap-2 bg-transparent text-[var(--w60)] text-[10px] font-medium tracking-[2px] uppercase px-6 py-[15px] rounded-[var(--radius-sm)] border border-[var(--w15)] hover:border-[var(--gold-border)] hover:text-[var(--gold)] transition-all duration-200">
              Reservar VIP →
            </a>
          </div>
        </div>
        <div className="hidden md:flex absolute bottom-7 right-16 z-[2] flex-col items-center gap-2">
          <span className="text-[9px] tracking-[3px] uppercase text-[var(--w40)]" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <div className="w-[1px] h-[56px] bg-gradient-to-b from-[var(--gold-border)] to-transparent animate-[scrollAnim_2.2s_ease-in-out_infinite]"></div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-t border-b border-[var(--w08)] py-[14px] bg-[var(--night-2)]">
        <div className="flex gap-0 whitespace-nowrap animate-[ticker_28s_linear_infinite] hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              <span className="inline-flex items-center gap-5 px-7 text-[11px] font-medium tracking-[2px] uppercase text-[var(--w40)]">
                <strong className="text-[var(--gold)] font-bold">Casper Mágico</strong>
                <span className="w-1 h-1 bg-[var(--gold-border)] rounded-full flex-shrink-0"></span>
              </span>
              <span className="inline-flex items-center gap-5 px-7 text-[11px] font-medium tracking-[2px] uppercase text-[var(--w40)]">
                Luar la L
                <span className="w-1 h-1 bg-[var(--gold-border)] rounded-full flex-shrink-0"></span>
              </span>
              <span className="inline-flex items-center gap-5 px-7 text-[11px] font-medium tracking-[2px] uppercase text-[var(--w40)]">
                <strong className="text-[var(--gold)] font-bold">Arcángel</strong>
                <span className="w-1 h-1 bg-[var(--gold-border)] rounded-full flex-shrink-0"></span>
              </span>
              <span className="inline-flex items-center gap-5 px-7 text-[11px] font-medium tracking-[2px] uppercase text-[var(--w40)]">
                Dann Valero
                <span className="w-1 h-1 bg-[var(--gold-border)] rounded-full flex-shrink-0"></span>
              </span>
              <span className="inline-flex items-center gap-5 px-7 text-[11px] font-medium tracking-[2px] uppercase text-[var(--w40)]">
                <strong className="text-[var(--gold)] font-bold">Roa</strong>
                <span className="w-1 h-1 bg-[var(--gold-border)] rounded-full flex-shrink-0"></span>
              </span>
              <span className="inline-flex items-center gap-5 px-7 text-[11px] font-medium tracking-[2px] uppercase text-[var(--w40)]">
                Young Cister
                <span className="w-1 h-1 bg-[var(--gold-border)] rounded-full flex-shrink-0"></span>
              </span>
              <span className="inline-flex items-center gap-5 px-7 text-[11px] font-medium tracking-[2px] uppercase text-[var(--w40)]">
                <strong className="text-[var(--gold)] font-bold">Xivo y Fernandezz</strong>
                <span className="w-1 h-1 bg-[var(--gold-border)] rounded-full flex-shrink-0"></span>
              </span>
              <span className="inline-flex items-center gap-5 px-7 text-[11px] font-medium tracking-[2px] uppercase text-[var(--w40)]">
                Alvamaice
                <span className="w-1 h-1 bg-[var(--gold-border)] rounded-full flex-shrink-0"></span>
              </span>
              <span className="inline-flex items-center gap-5 px-7 text-[11px] font-medium tracking-[2px] uppercase text-[var(--w40)]">
                <strong className="text-[var(--gold)] font-bold">#94 Best Clubs in the World · 2025</strong>
                <span className="w-1 h-1 bg-[var(--gold-border)] rounded-full flex-shrink-0"></span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[var(--w08)]">
        {[
          { num: '#94', label: 'Mejor discoteca del mundo' },
          { num: '15', label: 'Años en Denia · est. 2010' },
          { num: '1.500', label: 'Personas · 3 niveles' },
          { num: '06:00', label: 'Last call cada fin de semana' },
        ].map((stat, i) => (
          <div
            key={i}
            className={`reveal opacity-0 translate-y-5 transition-all duration-[750ms] p-7 md:p-9 border-r border-[var(--w08)] last:border-r-0 hover:bg-[var(--w05)] transition-colors duration-300 ${
              i === 1 ? 'delay-[80ms]' : i === 2 ? 'delay-[160ms]' : i === 3 ? 'delay-[240ms]' : ''
            }`}
          >
            <div className="text-[32px] md:text-[42px] font-extrabold text-[var(--gold)] leading-none mb-[5px] tracking-[-1px]" style={{ fontFamily: 'var(--serif)' }}>
              {stat.num}
            </div>
            <div className="text-[10px] tracking-[2px] uppercase text-[var(--w40)]">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* EVENTOS */}
      <section className="py-20 px-6 md:px-16" id="eventos">
        <div className="reveal opacity-0 translate-y-5 transition-all duration-[750ms] flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-3">
          <div>
            <span className="text-[10px] tracking-[3px] uppercase text-[var(--gold)] mb-[10px] block">Agenda</span>
            <h2 className="text-[clamp(36px,4vw,52px)] font-extrabold uppercase leading-[0.95] tracking-[-0.5px]" style={{ fontFamily: 'var(--serif)' }}>
              Próximos <em className="font-light text-[var(--gold)]">eventos</em>
            </h2>
          </div>
          <a href="#" className="text-[10px] tracking-[2px] uppercase text-[var(--w40)] border-b border-[rgba(255,255,255,0.18)] pb-[3px] hover:text-white transition-colors duration-200">
            Ver agenda completa →
          </a>
        </div>

        <div className="flex gap-[14px] overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2">
          {events.map((event, i) => (
            <div
              key={event.id}
              className={`reveal opacity-0 translate-y-5 transition-all duration-[750ms] relative rounded-[var(--radius-lg)] overflow-hidden aspect-[4/5.5] cursor-pointer bg-[var(--night-2)] flex-shrink-0 w-[320px] snap-start hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.6)] transition-all duration-[400ms] ${
                i === 1 ? 'delay-[80ms]' : i === 2 ? 'delay-[160ms]' : i === 3 ? 'delay-[240ms]' : i === 4 ? 'delay-[320ms]' : ''
              }`}
            >
              <img src={event.image} alt={event.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[550ms] hover:scale-[1.06]" />
              <div
                className="absolute inset-0 z-[2] flex flex-col justify-end p-[22px] transition-all duration-300"
                style={{
                  background: 'linear-gradient(to top, rgba(8,5,9,0.97) 0%, rgba(8,5,9,0.6) 40%, rgba(8,5,9,0.15) 65%, transparent 100%)',
                }}
              >
                {event.badge && (
                  <span className="absolute top-[14px] left-[14px] z-[3] text-[9px] font-bold tracking-[1.5px] uppercase px-3 py-[5px] rounded-full bg-[var(--gold)] text-[var(--night)]">
                    {event.badge}
                  </span>
                )}
                <p className="text-[10px] tracking-[2px] uppercase text-[var(--gold)] mb-[5px]">{event.date} &nbsp;·&nbsp; {event.time}</p>
                <h3 className="text-[26px] font-extrabold uppercase tracking-[-0.3px] leading-none mb-1" style={{ fontFamily: 'var(--serif)' }}>
                  {event.name}
                </h3>
                <p className="text-[11px] text-[var(--w40)] tracking-[0.5px] mb-4">{event.support}</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[var(--gold)] text-[var(--night)] text-[9px] font-bold tracking-[1.5px] uppercase py-[10px] px-2 rounded-[var(--radius-sm)] text-center hover:bg-[var(--gold-light)] transition-colors duration-200">
                    Entrada
                  </button>
                  <button className="flex-1 bg-transparent text-[var(--w60)] text-[9px] font-medium tracking-[1.5px] uppercase py-[10px] px-2 rounded-[var(--radius-sm)] text-center border border-[var(--w15)] hover:border-[var(--gold-border)] hover:text-[var(--gold)] transition-all duration-200">
                    VIP
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CALENDARIO TOGGLE */}
        <div className="text-center pt-9">
          <button
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className="inline-flex items-center gap-[10px] text-[11px] font-medium tracking-[3px] uppercase text-[var(--w60)] hover:text-white transition-colors duration-200"
          >
            <span>{isCalendarOpen ? 'Cerrar calendario' : 'Ver calendario completo'}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className={`transition-transform duration-[350ms] ${isCalendarOpen ? 'rotate-180' : ''}`}
            >
              <path d="M7 2v10M2 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* CALENDARIO PANEL */}
        <div
          className="overflow-hidden transition-all duration-[650ms]"
          style={{ maxHeight: isCalendarOpen ? '2000px' : '0' }}
        >
          <div className="pt-12">
            <div className="flex gap-2 mb-9 overflow-x-auto pb-1 scrollbar-none">
              {['all', 'abr', 'may', 'jun', 'jul', 'ago'].map((month) => (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`px-5 py-[9px] rounded-full text-[10px] font-medium tracking-[2px] uppercase whitespace-nowrap transition-all duration-200 ${
                    selectedMonth === month
                      ? 'bg-[var(--gold)] text-[var(--night)] font-bold border-[var(--gold)]'
                      : 'bg-transparent text-[var(--w60)] border border-[var(--w15)] hover:border-[var(--gold-border)] hover:text-[var(--gold)]'
                  }`}
                >
                  {month === 'all' ? 'Todos' : month.charAt(0).toUpperCase() + month.slice(1)}
                </button>
              ))}
            </div>

            <div>
              {filteredEvents.map((event, i) => (
                <div key={event.id}>
                  <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_120px_1fr_auto] gap-6 items-center py-6 hover:bg-[var(--w05)] hover:rounded-[var(--radius-md)] hover:px-4 hover:-mx-4 transition-all duration-200">
                    <div className="flex flex-col items-center gap-[2px]">
                      <span className="text-[28px] md:text-[36px] font-extrabold leading-none text-white tracking-[-1px]" style={{ fontFamily: 'var(--serif)' }}>
                        {event.dayNum}
                      </span>
                      <span className="text-[9px] tracking-[2px] uppercase text-[var(--gold)]">{event.dayName}</span>
                      <span className="text-[9px] tracking-[2px] uppercase text-[var(--w40)]">{event.month.toUpperCase()}</span>
                    </div>
                    <div className="hidden md:block">
                      <img src={event.image} alt={event.name} className="w-[120px] h-[80px] object-cover rounded-[var(--radius-sm)]" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[2px] uppercase text-[var(--gold)] mb-1">{event.time} · Puertas</p>
                      <h3 className="text-[18px] md:text-[22px] font-extrabold uppercase tracking-[-0.3px] leading-none mb-1" style={{ fontFamily: 'var(--serif)' }}>
                        {event.name}
                      </h3>
                      <p className="text-[13px] text-[var(--w60)] mb-[2px]">{event.support}</p>
                      <p className="text-[10px] tracking-[1px] uppercase text-[var(--w40)]">{event.genre}</p>
                    </div>
                    <div className="col-span-2 md:col-span-1 flex flex-row md:flex-col gap-2 min-w-0 md:min-w-[150px]">
                      <button className="flex-1 bg-[var(--gold)] text-[var(--night)] text-[10px] font-bold tracking-[1.5px] uppercase py-3 px-5 rounded-[var(--radius-sm)] text-center hover:bg-[var(--gold-light)] transition-colors duration-200">
                        Comprar entrada
                      </button>
                      <button className="flex-1 bg-transparent text-[var(--w60)] text-[10px] font-medium tracking-[1.5px] uppercase py-3 px-5 rounded-[var(--radius-sm)] text-center border border-[var(--w15)] hover:border-[var(--gold-border)] hover:text-[var(--gold)] transition-all duration-200">
                        Reservar VIP
                      </button>
                    </div>
                  </div>
                  {i < filteredEvents.length - 1 && <div className="h-[1px] bg-[var(--w08)]"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DENIA BREAK */}
      <div className="relative py-[120px] px-6 md:px-16 overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(8,5,9,0.55) 0%, rgba(8,5,9,0.1) 40%, rgba(8,5,9,0.65) 100%), linear-gradient(to right, #F0781A 0%, #C84018 10%, #9B2015 22%, #6B1030 38%, #3D0848 55%, #1A041E 72%, #080509 100%)',
          }}
        ></div>
        <div
          className="absolute top-[15%] left-[18%] w-[420px] h-[280px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,195,80,0.18) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        ></div>
        <div className="reveal opacity-0 translate-y-5 transition-all duration-[750ms] relative z-[2] text-center max-w-[820px]">
          <span className="text-[10px] tracking-[3px] uppercase text-[var(--gold)] mb-[10px] block">Costa Blanca · Denia · Alicante</span>
          <h2 className="text-[clamp(48px,7vw,86px)] font-extrabold uppercase leading-[0.92] tracking-[-1px] mb-[22px]" style={{ fontFamily: 'var(--serif)' }}>
            El Mediterráneo<br />de día. <em className="font-light text-[var(--gold)]">Condado</em><br />de noche.
          </h2>
          <p className="text-base text-[var(--w60)] leading-[1.8] mb-9">
            Cuando el atardecer tiñe el mar de naranja y el Montgó se convierte en silueta,<br className="hidden md:block" />
            Condado despierta. El mayor show de la Costa Blanca empieza donde otros terminan.
          </p>
          <a href="#" className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--night)] text-[10px] font-bold tracking-[2px] uppercase px-7 py-[15px] rounded-[var(--radius-sm)] hover:bg-[var(--gold-light)] transition-all duration-200 hover:-translate-y-[1px]">
            Descubrir la sala
          </a>
        </div>
      </div>

      {/* ARTISTAS */}
      <section
        className="py-20 bg-gradient-to-b from-[var(--night)] to-[var(--night-2)]"
        id="artistas"
      >
        <div className="reveal opacity-0 translate-y-5 transition-all duration-[750ms] px-6 md:px-16 pb-9">
          <span className="text-[10px] tracking-[3px] uppercase text-[var(--gold)] mb-[10px] block">+200 artistas en 15 años</span>
          <h2 className="text-[clamp(36px,4vw,52px)] font-extrabold uppercase leading-[0.95] tracking-[-0.5px]" style={{ fontFamily: 'var(--serif)' }}>
            Artistas
          </h2>
        </div>

        <div className="px-6 md:px-16 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {artists.slice(0, 10).map((artist, i) => (
              <div
                key={i}
                className="rounded-[var(--radius-md)] overflow-hidden relative cursor-pointer hover:-translate-y-[6px] transition-transform duration-[350ms]"
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-[210px] md:h-[270px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{
                    background: 'linear-gradient(to top, rgba(8,5,9,0.96) 0%, rgba(8,5,9,0.4) 60%, transparent 100%)',
                  }}
                >
                  <p className="text-[17px] font-bold uppercase tracking-[0.5px] mb-[2px]" style={{ fontFamily: 'var(--serif)' }}>
                    {artist.name}
                  </p>
                  <p className="text-[10px] tracking-[1px] uppercase text-[var(--w40)]">{artist.genre}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="#" className="text-[10px] tracking-[2px] uppercase text-[var(--w40)] border-b border-[rgba(255,255,255,0.18)] pb-[3px] hover:text-white transition-colors duration-200">
              Ver más artistas →
            </a>
          </div>
        </div>
      </section>

      {/* EL SHOW */}
      <section className="bg-[var(--night-2)] text-center py-20 px-6 md:px-16" id="el-show">
        <span className="reveal opacity-0 translate-y-5 transition-all duration-[750ms] text-[10px] tracking-[3px] uppercase text-[var(--gold)] mb-[10px] block">Lo que nos hace distintos</span>
        <h2 className="reveal opacity-0 translate-y-5 transition-all duration-[750ms] delay-[80ms] text-[clamp(36px,4vw,52px)] font-extrabold uppercase leading-[0.95] tracking-[-0.5px] mb-[52px]" style={{ fontFamily: 'var(--serif)' }}>
          No es una discoteca.<br />Es un <em className="font-light text-[var(--gold)]">show.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: '✦', title: 'Producción artística', desc: 'Shows en vivo, performers y escenografías diseñadas para impactar noche tras noche.' },
            { icon: '◈', title: 'Efectos especiales', desc: 'Tecnología de escenario de primer nivel: llamas, CO₂, confeti, pirotecnia.' },
            { icon: '◉', title: 'Sonido de referencia', desc: 'Sistema L-Acoustics calibrado para que cada frecuencia se sienta en el cuerpo.' },
            { icon: '◆', title: 'Exclusividad real', desc: 'Acceso controlado, zonas premium y atención dedicada para quienes buscan otro nivel.' },
          ].map((item, i) => (
            <div
              key={i}
              className={`reveal opacity-0 translate-y-5 transition-all duration-[750ms] bg-[var(--night-3)] border border-[var(--w08)] rounded-[var(--radius-md)] p-9 text-left hover:border-[var(--gold-border)] hover:bg-[var(--gold-dim)] hover:-translate-y-1 transition-all duration-300 ${
                i === 1 ? 'delay-[80ms]' : i === 2 ? 'delay-[160ms]' : i === 3 ? 'delay-[240ms]' : ''
              }`}
            >
              <div className="text-[26px] text-[var(--gold)] mb-[18px]">{item.icon}</div>
              <p className="text-[20px] font-bold uppercase tracking-[0.3px] mb-[10px]" style={{ fontFamily: 'var(--serif)' }}>
                {item.title}
              </p>
              <p className="text-[13px] text-[var(--w40)] leading-[1.7]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-20 px-6 md:px-16 bg-[var(--night)]">
        <div className="reveal opacity-0 translate-y-5 transition-all duration-[750ms] flex justify-between items-end mb-10">
          <div>
            <span className="text-[10px] tracking-[3px] uppercase text-[var(--gold)] mb-[10px] block">En directo</span>
            <h2 className="text-[clamp(36px,4vw,52px)] font-extrabold uppercase leading-[0.95] tracking-[-0.5px]" style={{ fontFamily: 'var(--serif)' }}>
              La sala
            </h2>
          </div>
          <a
            href="https://www.instagram.com/condado.club/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[2px] uppercase text-[var(--w40)] border-b border-[rgba(255,255,255,0.18)] pb-[3px] hover:text-white transition-colors duration-200"
          >
            @condado.club →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:grid-rows-[240px_240px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`rounded-[var(--radius-md)] overflow-hidden relative cursor-pointer bg-[var(--night-3)] ${
                i === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : i === 3 ? 'md:col-span-1 md:row-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt="Condado Club"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* VIP */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[var(--night-3)]" id="vip">
        <div
          className="relative min-h-[200px] md:min-h-[500px] overflow-hidden rounded-b-[var(--radius-xl)] md:rounded-r-[var(--radius-xl)] md:rounded-bl-none order-first md:order-none"
        >
          <img
            src={vipImage}
            alt="VIP Experience"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(8,5,9,0.4) 0%, rgba(8,5,9,0.6) 100%)',
            }}
          ></div>
          <div className="absolute top-7 left-7 bg-[var(--gold-dim)] border border-[var(--gold-border)] px-4 py-[7px] rounded-full text-[10px] tracking-[2px] uppercase text-[var(--gold)] z-10">
            Experiencia VIP
          </div>
          <div className="absolute bottom-5 right-6 text-[90px] md:text-[130px] font-extrabold text-[rgba(255,255,255,0.04)] leading-none select-none z-10" style={{ fontFamily: 'var(--serif)' }}>
            01
          </div>
        </div>
        <div className="reveal opacity-0 translate-y-5 transition-all duration-[750ms] p-12 md:p-[72px_60px] flex flex-col justify-center">
          <span className="text-[10px] tracking-[3px] uppercase text-[var(--gold)] mb-[10px] block">Reservas privadas</span>
          <h2 className="text-[clamp(36px,4vw,52px)] font-extrabold uppercase leading-[0.95] tracking-[-0.5px] mb-7" style={{ fontFamily: 'var(--serif)' }}>
            Tu zona.<br /><em className="font-light text-[var(--gold)]">Tus reglas.</em>
          </h2>
          <ul className="list-none my-7 mb-9">
            {[
              'Mesa reservada con acceso prioritario',
              'Botella de bienvenida incluida',
              'Atención personal dedicada toda la noche',
              'Posición privilegiada frente al escenario',
              'Acceso a zonas exclusivas de la sala',
            ].map((feat, i) => (
              <li key={i} className="flex items-center gap-[14px] py-[14px] border-b border-[var(--w05)] text-sm text-[var(--w60)] hover:text-white transition-colors duration-200">
                <span className="w-[22px] h-[22px] flex-shrink-0 bg-[var(--gold-dim)] border border-[var(--gold-border)] rounded-md flex items-center justify-center text-[10px] text-[var(--gold)]">
                  ✓
                </span>
                {feat}
              </li>
            ))}
          </ul>
          <Link to="/zonas-vip" className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--night)] text-[10px] font-bold tracking-[2px] uppercase px-7 py-[15px] rounded-[var(--radius-sm)] hover:bg-[var(--gold-light)] transition-all duration-200 hover:-translate-y-[1px] self-start">
            Ver todas las zonas VIP
          </Link>
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="relative py-[100px] px-6 md:px-16 text-center overflow-hidden bg-[var(--night)]">
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--gold-border), transparent)',
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[260px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(232,169,74,0.06) 0%, transparent 70%)',
          }}
        ></div>
        <h2 className="reveal opacity-0 translate-y-5 transition-all duration-[750ms] relative z-[2] text-[clamp(48px,7vw,86px)] font-extrabold uppercase leading-[0.92] tracking-[-1px] mb-[10px]" style={{ fontFamily: 'var(--serif)' }}>
          Esta noche,<br /><em className="font-light text-[var(--gold)]">Condado.</em>
        </h2>
        <p className="reveal opacity-0 translate-y-5 transition-all duration-[750ms] delay-[80ms] relative z-[2] text-[11px] text-[var(--w40)] tracking-[2px] uppercase mb-10">
          Quedan plazas para el próximo evento · Denia, Alicante
        </p>
        <div className="reveal opacity-0 translate-y-5 transition-all duration-[750ms] delay-[160ms] relative z-[2] flex flex-col md:flex-row gap-[14px] justify-center items-center">
          <a href="#eventos" className="w-full md:w-auto bg-[var(--gold)] text-[var(--night)] text-[10px] font-bold tracking-[2px] uppercase px-7 py-[15px] rounded-[var(--radius-sm)] hover:bg-[var(--gold-light)] transition-all duration-200 hover:-translate-y-[1px]">
            Comprar entradas
          </a>
          <a href="#vip" className="w-full md:w-auto bg-transparent text-[var(--w60)] text-[10px] font-medium tracking-[2px] uppercase px-6 py-[15px] rounded-[var(--radius-sm)] border border-[var(--w15)] hover:border-[var(--gold-border)] hover:text-[var(--gold)] transition-all duration-200">
            Reservar VIP
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="py-16 px-6 md:px-16 border-t border-[var(--w08)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo y contacto */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <svg height="28" viewBox="0 0 260 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Condado Club">
                <circle cx="28" cy="28" r="24" stroke="white" strokeWidth="2.5" fill="none"/>
                <path d="M28 5.5 A22.5 22.5 0 0 0 28 50.5 L28 5.5 Z" fill="white"/>
                <text x="64" y="26" fontFamily="'Oxanium','Arial Black',sans-serif" fontWeight="800" fontSize="23" fill="white" letterSpacing="1" textAnchor="start">CONDADO</text>
                <text x="64" y="48" fontFamily="'Oxanium','Arial Black',sans-serif" fontWeight="800" fontSize="23" fill="white" letterSpacing="1" textAnchor="start">CLUB</text>
              </svg>
            </Link>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] tracking-[2px] uppercase text-[var(--gold)] mb-1">Dirección</p>
                <p className="text-[13px] text-[var(--w60)] leading-[1.6]">
                  Calle Marqués de Campo, 42<br />
                  03700 Dénia (Alicante)
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[2px] uppercase text-[var(--gold)] mb-1">Teléfono</p>
                <p className="text-[13px] text-[var(--w60)]">
                  <a href="tel:601602030" className="hover:text-white transition-colors duration-200">601 602 030</a>
                  {' / '}
                  <a href="tel:965270027" className="hover:text-white transition-colors duration-200">965 270 027</a>
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[2px] uppercase text-[var(--gold)] mb-1">Email</p>
                <p className="text-[13px] text-[var(--w60)]">
                  <a href="mailto:taquilla@condadodenia.com" className="hover:text-white transition-colors duration-200">
                    taquilla@condadodenia.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <p className="text-[10px] tracking-[2px] uppercase text-[var(--gold)] mb-4">Enlaces</p>
            <ul className="space-y-2 list-none">
              {['La Sala', 'Zonas VIP', 'Programación', 'Cómo llegar', 'Reservas', 'Trabaja con nosotros'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] text-[var(--w60)] hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <p className="text-[10px] tracking-[2px] uppercase text-[var(--gold)] mb-4">Síguenos</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/condado.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--w05)] border border-[var(--w15)] text-[var(--w60)] hover:border-[var(--gold-border)] hover:text-[var(--gold)] hover:bg-[var(--gold-dim)] transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--w05)] border border-[var(--w15)] text-[var(--w60)] hover:border-[var(--gold-border)] hover:text-[var(--gold)] hover:bg-[var(--gold-dim)] transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright y enlaces legales */}
        <div className="pt-8 border-t border-[var(--w08)]">
          <div className="mb-4 text-center">
            <p className="text-[11px] text-[var(--w40)]">
              © 2026 Condado Club. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['Aviso Legal', 'Política de Privacidad', 'Política de Cookies', 'Términos y Condiciones'].map((legal) => (
              <a
                key={legal}
                href="#"
                className="text-[10px] tracking-[1px] uppercase text-[var(--w40)] hover:text-[var(--gold)] transition-colors duration-200"
              >
                {legal}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scrollAnim {
          0% {
            transform: scaleY(0);
            transform-origin: top;
          }
          50% {
            transform: scaleY(1);
            transform-origin: top;
          }
          51% {
            transform: scaleY(1);
            transform-origin: bottom;
          }
          100% {
            transform: scaleY(0);
            transform-origin: bottom;
          }
        }
        @keyframes ticker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
          </div>
        } />
        <Route path="/zonas-vip" element={<ZonasVip />} />
      </Routes>
    </BrowserRouter>
  );
}
