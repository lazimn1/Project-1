import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./4in-logo.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "#about", isAnchor: true },
  { label: "Contact", to: "/contact" },
];

// Cart icon with badge
function CartIcon({ count }) {
  return (
    <Link to="/cart" className="relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-blue-600/10" aria-label="Cart">
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="text-white group-hover:text-blue-400 transition-colors duration-200">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 bg-blue-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
          {count}
        </span>
      )}
    </Link>
  );
}

// Search overlay
function SearchOverlay({ open, onClose }) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "slideDown 0.2s ease" }}
      >
        <div className="flex items-center gap-3 bg-[#0d1117] border border-blue-500/30 rounded-xl px-4 py-3 shadow-2xl shadow-blue-900/30">
          <svg width="18" height="18" fill="none" stroke="#3b82f6" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, categories..."
            className="flex-1 bg-transparent text-white text-base outline-none placeholder-gray-500"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
          <kbd className="text-xs text-gray-500 border border-gray-700 rounded px-1.5 py-0.5">ESC</kbd>
        </div>
        <p className="text-center text-gray-600 text-xs mt-3">Press ESC or click outside to close</p>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount] = useState(2);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [location.pathname]);

  // Keyboard shortcut for search (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes slideDown { from { opacity:0; transform:translateY(-12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeInDown { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
        @keyframes menuIn { from { opacity:0; transform:translateY(-6px) scaleY(0.97); } to { opacity:1; transform:translateY(0) scaleY(1); } }
        .nav-link-indicator { position:absolute; bottom:-2px; left:0; height:2px; background:linear-gradient(90deg,#3b82f6,#60a5fa); border-radius:2px; transition:width 0.3s cubic-bezier(.4,0,.2,1); width:0; }
        .nav-link-wrap:hover .nav-link-indicator,
        .nav-link-wrap.active .nav-link-indicator { width:100%; }
      `}</style>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: scrolled
            ? "rgba(5,8,16,0.92)"
            : "rgba(5,8,16,0.6)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: scrolled ? "1px solid rgba(59,130,246,0.12)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <img
                src={logo}
                alt="4in logo"
                className="w-8 sm:w-10 lg:w-12 h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: "0 0 16px rgba(59,130,246,0.4)" }} />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wider"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  background: "linear-gradient(135deg, #fff 0%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                NALAKATH
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-blue-400/70 font-medium hidden sm:block">
                Official Store
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.isAnchor ? (
                  <a
                    href={link.to}
                    className="nav-link-wrap relative px-4 py-2 flex items-center text-sm font-medium tracking-wide transition-colors duration-200 text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                    <span className="nav-link-indicator" />
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    className={`nav-link-wrap relative px-4 py-2 flex items-center text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg hover:bg-white/5 ${isActive(link.to) ? "text-blue-400 active" : "text-gray-300 hover:text-white"}`}
                  >
                    {link.label}
                    <span className="nav-link-indicator" />
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 group"
              aria-label="Search"
            >
              <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
              </svg>
              <span className="hidden lg:flex items-center gap-1.5 text-xs text-gray-500 border border-gray-700 rounded-md px-1.5 py-0.5 group-hover:border-blue-500/40 transition-colors">
                <kbd>⌘K</kbd>
              </span>
            </button>

            {/* Account */}
            <Link
              to="/account"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label="Account"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </Link>

            {/* Cart */}
            <CartIcon count={cartCount} />

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/5 transition-all duration-200 gap-[5px]"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300"
                style={{ transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
              <span className="block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "scaleX(1)" }} />
              <span className="block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300"
                style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t"
            style={{
              background: "rgba(5,8,16,0.97)",
              borderColor: "rgba(59,130,246,0.12)",
              animation: "menuIn 0.22s ease forwards",
              transformOrigin: "top",
            }}
          >
            <ul className="flex flex-col px-4 py-3 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {link.isAnchor ? (
                    <a
                      href={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 text-sm font-medium tracking-wide transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 ${isActive(link.to) ? "text-blue-400 bg-blue-500/10" : "text-gray-300 hover:text-white hover:bg-white/5"}`}
                    >
                      {isActive(link.to) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2.5" />
                      )}
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile bottom actions */}
            <div className="flex items-center gap-3 px-8 py-4 border-t mx-4 mb-2"
              style={{ borderColor: "rgba(59,130,246,0.1)" }}>
              <Link to="/account" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                Account
              </Link>
              <button
                onClick={() => { setMenuOpen(false); setSearchOpen(true); }}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors ml-auto"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
                Search
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}