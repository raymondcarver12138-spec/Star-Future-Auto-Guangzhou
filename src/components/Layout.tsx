import { Link, useLocation } from "react-router-dom";
import { Car, Menu, X, Phone, Mail, MapPin, Globe, ArrowUp } from "lucide-react";
import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Layout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.inventory'), path: "/inventory" },
    { name: t('nav.autoParts'), path: "/auto-parts" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 font-sans">
      {/* Top Bar */}
      <div className="bg-zinc-900 text-zinc-300 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Phone className="w-3 h-3 mr-2" /> WeChat: +86 17665452032
            </span>
            <span className="flex items-center">
              <Phone className="w-3 h-3 mr-2" /> WhatsApp: +44 7709967348
            </span>
            <span className="flex items-center">
              <Mail className="w-3 h-3 mr-2" /> wuqiwei@mova-tech.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>{t('home.tag')}</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://duk.tw/krREUe.png" alt="Star Future Auto" className="h-6 sm:h-8 md:h-10 w-auto" referrerPolicy="no-referrer" />
                <span className="font-bold text-sm sm:text-base md:text-lg leading-tight tracking-tight">
                  Star Future Auto
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 whitespace-nowrap shrink-0 ${
                    location.pathname === link.path
                      ? "text-blue-600"
                      : "text-zinc-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 border-l border-zinc-200 pl-6">
                <button 
                  onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
                  className="flex items-center px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold transition-colors shadow-sm border border-zinc-200 whitespace-nowrap shrink-0"
                >
                  <Globe className="w-5 h-5 mr-2 text-blue-600" />
                  {language === 'zh' ? 'English' : '中文'}
                </button>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap shrink-0"
                >
                  {t('nav.getQuote')}
                </Link>
              </div>
            </div>

            <div className="flex items-center md:hidden space-x-4">
              <button 
                onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
                className="flex items-center px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold transition-colors shadow-sm border border-zinc-200"
              >
                <Globe className="w-4 h-4 mr-1.5 text-blue-600" />
                {language === 'zh' ? 'EN' : '中'}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-600 hover:text-zinc-900"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-zinc-200"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-medium ${
                      location.pathname === link.path
                        ? "bg-blue-50 text-blue-600"
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-white leading-tight tracking-tight">
                    Star Future Auto
                  </span>
                  <span className="text-[10px] text-zinc-500 font-medium">
                    {t('common.memberOf')}
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-md mb-6">
                {t('footer.desc')}
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/inventory"
                    className="hover:text-white transition-colors"
                  >
                    {t('nav.inventory')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/auto-parts"
                    className="hover:text-white transition-colors"
                  >
                    {t('nav.autoParts')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">{t('footer.contactInfo')}</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                  <span>{t('contact.addressValue')}</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 shrink-0" />
                  <span>WeChat: +86 17665452032</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 shrink-0" />
                  <span>WhatsApp: +44 7709967348</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 shrink-0" />
                  <span>wuqiwei@mova-tech.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-12 pt-8 text-sm text-center">
            <p>
              &copy; {new Date().getFullYear()} Star Future Auto. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all z-50 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
