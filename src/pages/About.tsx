import { motion } from "motion/react";
import { Target, Award, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";

export default function About() {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://duk.tw/KFlDeR.png",
    "https://duk.tw/Ur0s5w.jpg",
    "https://duk.tw/Vpd0AN.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">{t('about.companyProfile')}</h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
              <p>
                {t('about.p3')}
              </p>
              <p>
                {t('about.p4')}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
              <div 
                className="w-full h-full flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Office ${idx + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6 text-zinc-900" />
              </button>
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6 text-zinc-900" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentImage ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block z-10">
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-blue-100 text-sm">{t('about.exp')}</div>
            </div>
          </div>
        </div>

        {/* Stats/Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: t('about.stat1Title'),
              desc: t('about.stat1Desc'),
            },
            {
              icon: Award,
              title: t('about.stat2Title'),
              desc: t('about.stat2Desc'),
            },
            {
              icon: Users,
              title: t('about.stat3Title'),
              desc: t('about.stat3Desc'),
            },
            {
              icon: Clock,
              title: t('about.stat4Title'),
              desc: t('about.stat4Desc'),
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
