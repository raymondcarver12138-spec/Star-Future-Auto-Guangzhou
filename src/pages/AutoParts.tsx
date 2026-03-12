import { motion } from "motion/react";
import { Settings, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function AutoParts() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Hero */}
      <div className="bg-zinc-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('autoParts.title')}</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            {t('autoParts.subtitle')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop"
                alt="Auto Parts"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">{t('autoParts.title')}</h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed text-lg mb-8">
              <p>
                {t('autoParts.desc')}
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              {t('autoParts.inquiry')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: t('autoParts.feature1Title'),
              desc: t('autoParts.feature1Desc'),
            },
            {
              icon: Settings,
              title: t('autoParts.feature2Title'),
              desc: t('autoParts.feature2Desc'),
            },
            {
              icon: Truck,
              title: t('autoParts.feature3Title'),
              desc: t('autoParts.feature3Desc'),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-blue-600">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
