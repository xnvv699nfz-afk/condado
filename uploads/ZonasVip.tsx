import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import vipHeroImage from '@/imports/zona-vip-escenario.jpg';

export default function ZonasVip() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
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
            <text x="64" y="26" fontFamily="'Oxanium', sans-serif" fontWeight="800" fontSize="23" fill="white" letterSpacing="1" textAnchor="start">CONDADO</text>
            <text x="64" y="48" fontFamily="'Oxanium', sans-serif" fontWeight="800" fontSize="23" fill="white" letterSpacing="1" textAnchor="start">CLUB</text>
          </svg>
        </Link>
        <ul className="hidden md:flex gap-8 list-none">
          {[
            { name: 'Eventos', to: '/#eventos' },
            { name: 'Artistas', to: '/#artistas' },
            { name: 'El Show', to: '/#el-show' },
            { name: 'VIP', to: '/zonas-vip' },
            { name: 'Denia', to: '/#denia' },
          ].map((item) => (
            <li key={item.name}>
              {item.to.startsWith('/#') ? (
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
            { name: 'Eventos', to: '/#eventos' },
            { name: 'Artistas', to: '/#artistas' },
            { name: 'El Show', to: '/#el-show' },
            { name: 'VIP', to: '/zonas-vip' },
            { name: 'Denia', to: '/#denia' },
          ].map((item) => (
            item.to.startsWith('/#') ? (
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
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src={vipHeroImage}
          alt="Zona VIP Condado Club"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(8,5,9,0.3) 0%, rgba(8,5,9,0.6) 50%, rgba(8,5,9,0.95) 100%)',
          }}
        ></div>
        <div className="relative z-[2] px-16 pb-[72px] pt-[140px] w-full animate-[fadeUp_1.1s_cubic-bezier(0.16,1,0.3,1)_both]">
          <div className="inline-flex items-center gap-[10px] bg-[var(--gold-dim)] border border-[var(--gold-border)] px-4 py-[6px] rounded-full text-[10px] tracking-[2px] uppercase text-[var(--gold)] mb-[22px]">
            Reservas Privadas
          </div>
          <h1
            className="text-[clamp(60px,8.5vw,108px)] font-extrabold uppercase leading-[0.93] tracking-[-1px] mb-[10px]"
            style={{ fontFamily: 'var(--serif)' }}
          >
            Zonas <em className="font-light text-[var(--gold)]">VIP</em>
          </h1>
          <p className="text-[11px] tracking-[4px] uppercase text-[var(--w40)] mb-9">
            Condado Club · Experiencias exclusivas
          </p>
        </div>
      </section>

      {/* VIP ZONES */}
      <section className="py-20 px-6 md:px-16 bg-[var(--night-3)]">
        <div className="reveal opacity-0 translate-y-5 transition-all duration-[750ms] text-center mb-12 max-w-[800px] mx-auto">
          <span className="text-[10px] tracking-[3px] uppercase text-[var(--gold)] mb-[10px] block">Reservas privadas</span>
          <h2 className="text-[clamp(36px,4vw,52px)] font-extrabold uppercase leading-[0.95] tracking-[-0.5px] mb-4" style={{ fontFamily: 'var(--serif)' }}>
            Tu zona.<br /><em className="font-light text-[var(--gold)]">Tus reglas.</em>
          </h2>
          <p className="text-base text-[var(--w60)]">
            Elige la experiencia VIP que mejor se adapte a tu grupo. Cada zona ofrece una perspectiva única de la sala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {[
            {
              name: 'VIP Escenario',
              description: 'Primera línea del espectáculo',
              features: [
                'Acceso prioritario a la sala',
                'Vista directa al escenario principal',
                'Mesa reservada frente a la actuación',
                'Servicio de barra dedicado',
              ],
              highlight: 'Recomendado',
            },
            {
              name: 'VIP Sala',
              subtitle: 'Mesas Pista',
              description: 'En el corazón de la acción',
              features: [
                'Mesas en planta principal',
                'Ambiente inmersivo de la pista',
                'Acceso rápido a todas las zonas',
                'Posición central en la sala',
              ],
            },
            {
              name: 'VIP 1º Palco',
              description: 'Vista panorámica privilegiada',
              features: [
                'Zona elevada exclusiva',
                'Vista completa de la sala y escenario',
                'Mayor privacidad',
                'Acceso directo desde entrada VIP',
              ],
            },
            {
              name: 'VIP 2º Palco',
              description: 'Exclusividad máxima',
              features: [
                'Nivel superior de privacidad',
                'Perspectiva única de altura',
                'Zona más exclusiva de la sala',
                'Ambiente íntimo y reservado',
              ],
            },
          ].map((vip, i) => (
            <div
              key={i}
              className={`reveal opacity-0 translate-y-5 transition-all duration-[750ms] relative bg-[var(--night-2)] border border-[var(--w08)] rounded-[var(--radius-lg)] p-8 hover:border-[var(--gold-border)] hover:-translate-y-1 transition-all duration-300 ${
                i === 1 ? 'delay-[80ms]' : i === 2 ? 'delay-[160ms]' : i === 3 ? 'delay-[240ms]' : ''
              }`}
            >
              {vip.highlight && (
                <div className="absolute top-5 right-5 bg-[var(--gold)] text-[var(--night)] text-[9px] font-bold tracking-[1.5px] uppercase px-3 py-[5px] rounded-full">
                  {vip.highlight}
                </div>
              )}
              <h3 className="text-[24px] font-extrabold uppercase tracking-[-0.3px] mb-1" style={{ fontFamily: 'var(--serif)' }}>
                {vip.name}
              </h3>
              {vip.subtitle && (
                <p className="text-[12px] text-[var(--gold)] tracking-[1px] uppercase mb-2">{vip.subtitle}</p>
              )}
              <p className="text-[13px] text-[var(--w40)] mb-6">{vip.description}</p>
              <ul className="list-none space-y-3 mb-6">
                {vip.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-[13px] text-[var(--w60)]">
                    <span className="w-[18px] h-[18px] flex-shrink-0 bg-[var(--gold-dim)] border border-[var(--gold-border)] rounded-md flex items-center justify-center text-[10px] text-[var(--gold)] mt-[2px]">
                      ✓
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:taquilla@condadodenia.com"
                className="inline-flex items-center gap-2 bg-transparent text-[var(--gold)] text-[10px] font-medium tracking-[2px] uppercase px-5 py-3 rounded-[var(--radius-sm)] border border-[var(--gold-border)] hover:bg-[var(--gold)] hover:text-[var(--night)] transition-all duration-200"
              >
                Solicitar reserva
              </a>
            </div>
          ))}
        </div>

        <div className="text-center pt-6">
          <p className="text-[13px] text-[var(--w40)] mb-6">
            Todas las zonas VIP incluyen botella de bienvenida y atención personalizada durante toda la noche.
          </p>
          <a
            href="mailto:taquilla@condadodenia.com"
            className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--night)] text-[10px] font-bold tracking-[2px] uppercase px-7 py-[15px] rounded-[var(--radius-sm)] hover:bg-[var(--gold-light)] transition-all duration-200 hover:-translate-y-[1px]"
          >
            Contactar para reservas VIP
          </a>
        </div>
      </section>

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
          <Link to="/#eventos" className="w-full md:w-auto bg-[var(--gold)] text-[var(--night)] text-[10px] font-bold tracking-[2px] uppercase px-7 py-[15px] rounded-[var(--radius-sm)] hover:bg-[var(--gold-light)] transition-all duration-200 hover:-translate-y-[1px]">
            Comprar entradas
          </Link>
          <a href="mailto:taquilla@condadodenia.com" className="w-full md:w-auto bg-transparent text-[var(--w60)] text-[10px] font-medium tracking-[2px] uppercase px-6 py-[15px] rounded-[var(--radius-sm)] border border-[var(--w15)] hover:border-[var(--gold-border)] hover:text-[var(--gold)] transition-all duration-200">
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--w05)] border border-[var(--w15)] text-[var(--w60)] hover:border-[var(--gold-border)] hover:text-[var(--gold)] hover:bg-[var(--gold-dim)] transition-all duration-200"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
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
      `}</style>
    </div>
  );
}
