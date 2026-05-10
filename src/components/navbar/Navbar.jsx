import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/studymaterial", label: "Study Material" },
    { to: "/about", label: "About" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 md:px-8 lg:h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006DFF] text-[13px] font-bold text-white">
            LN
          </span>
          <span className="text-base font-bold tracking-tight text-gray-900 sm:text-lg">
            Lokesh Notes
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1.5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-xl px-4 py-2.5 text-[14px] font-medium transition-colors ${
                isActive(link.to)
                  ? "bg-[#006DFF]/[0.07] text-[#006DFF]"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/get-started"
            className="inline-flex h-11 items-center rounded-xl bg-[#006DFF] px-7 text-[14px] font-semibold text-white shadow-sm shadow-[#006DFF]/15 transition-all hover:bg-[#005acc] hover:shadow-md hover:shadow-[#006DFF]/20"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1.5 px-6 py-5">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                isActive(link.to)
                  ? "bg-[#006DFF]/[0.07] text-[#006DFF]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/get-started"
            className="mt-3 block rounded-xl bg-[#006DFF] px-4 py-3 text-center text-[15px] font-semibold text-white transition-colors hover:bg-[#005acc]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;