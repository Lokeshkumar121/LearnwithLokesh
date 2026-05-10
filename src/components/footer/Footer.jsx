import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/studymaterial", label: "Study Material" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-14">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006DFF] text-[13px] font-bold text-white">
                LN
              </span>
              <span className="text-base font-bold tracking-tight text-gray-900 sm:text-lg">Lokesh Notes</span>
            </Link>
            <p className="mb-6 max-w-xs text-[14px] leading-relaxed text-gray-500 sm:text-[15px]">
              Learn MERN Stack, Java & DSA with structured notes and hands-on projects. Built for students by a student.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-400 transition-all hover:-translate-y-0.5 hover:bg-[#006DFF] hover:text-white">
                <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-400 transition-all hover:-translate-y-0.5 hover:bg-[#006DFF] hover:text-white">
                <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="mailto:lokeshtech3875@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-400 transition-all hover:-translate-y-0.5 hover:bg-[#006DFF] hover:text-white">
                <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-wider text-gray-900 sm:text-[14px]">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[14px] text-gray-500 transition-colors hover:text-[#006DFF] sm:text-[15px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-wider text-gray-900 sm:text-[14px]">Contact</h3>
            <div className="space-y-3 text-[14px] text-gray-500 sm:text-[15px]">
              <p className="flex items-start gap-3">
                <svg className="mt-1 h-[18px] w-[18px] flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Kosi Kalan, Mathura, UP
              </p>
              <a href="mailto:lokeshtech3875@gmail.com" className="flex items-start gap-3 transition-colors hover:text-[#006DFF]">
                <svg className="mt-1 h-[18px] w-[18px] flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                lokeshtech3875@gmail.com
              </a>
              <a href="tel:+916396283875" className="flex items-start gap-3 transition-colors hover:text-[#006DFF]">
                <svg className="mt-1 h-[18px] w-[18px] flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +91 6396283875
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-7 md:mt-14 md:flex-row">
          <p className="text-[13px] text-gray-400 sm:text-[14px]">
            © {new Date().getFullYear()} Lokesh Kumar. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-[13px] text-gray-400 sm:text-[14px]">
            Built with <svg className="h-3.5 w-3.5 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;