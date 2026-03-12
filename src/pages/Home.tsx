import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Globe,
  Zap,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cars } from "../data/cars";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";

export default function Home() {
  const featuredCars = cars.slice(0, 3);
  const { language, t } = useLanguage();

  const [randomCars, setRandomCars] = useState<typeof cars>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Randomly select 3 cars for the slider
    const shuffled = [...cars].sort(() => 0.5 - Math.random());
    setRandomCars(shuffled.slice(0, 3));
  }, []);

  useEffect(() => {
    if (randomCars.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % randomCars.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [randomCars]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % randomCars.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + randomCars.length) % randomCars.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2115&auto=format&fit=crop"
            alt="Luxury Car"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
                {t('home.tag')}
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t('home.title1')}
              <br />
              <span className="text-blue-400">{t('home.title2')}</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-zinc-300 mb-10 max-w-xl leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t('home.desc')}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/inventory"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium text-center transition-all flex items-center justify-center group"
              >
                {t('home.browse')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium text-center transition-all border border-white/20"
              >
                {t('home.contact')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              {t('home.whyChooseUs')}
            </h2>
            <p className="text-zinc-600">
              {t('home.whyDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">
                {t('home.feature1Title')}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {t('home.feature1Desc')}
              </p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">
                {t('home.feature2Title')}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {t('home.feature2Desc')}
              </p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">
                {t('home.feature3Title')}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {t('home.feature3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Car of The Week Slider */}
      {randomCars.length > 0 && (
        <section className="py-20 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">
                {t('home.newCarOfWeek')}
              </h2>
              <p className="text-zinc-600">{t('home.newCarOfWeekDesc')}</p>
            </div>

            <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 aspect-[3/4] sm:aspect-[16/9] md:aspect-[21/9]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={randomCars[currentSlide].image}
                    alt={randomCars[currentSlide].name}
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 sm:via-zinc-900/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 px-10 pb-12 pt-6 sm:px-16 sm:pb-14 md:px-20 md:pb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 md:gap-6">
                      <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-[10px] sm:text-xs font-bold mb-2 md:mb-4 border border-blue-500/30">
                          {(randomCars[currentSlide].type as any)[language] || randomCars[currentSlide].type.zh}
                        </span>
                        <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-1.5 sm:mb-2 line-clamp-2">
                          {randomCars[currentSlide].name}
                        </h3>
                        <div className="flex flex-wrap items-center text-zinc-300 text-[10px] sm:text-sm gap-x-2 sm:gap-x-3 gap-y-1">
                          <span>{randomCars[currentSlide].year}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{randomCars[currentSlide].mileage}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{(randomCars[currentSlide].fuelType as any)[language] || randomCars[currentSlide].fuelType.zh}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end w-full md:w-auto mt-1 md:mt-0">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-3 md:mb-4">
                          {randomCars[currentSlide].price}
                        </div>
                        <Link
                          to={`/inventory?car=${randomCars[currentSlide].id}`}
                          className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors flex items-center justify-center group"
                        >
                          {t('common.details')}
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-colors z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-colors z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {randomCars.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentSlide ? "bg-blue-500 w-8" : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Inventory */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">
                {t('home.featuredCars')}
              </h2>
              <p className="text-zinc-600">{t('home.featuredDesc')}</p>
            </div>
            <Link
              to="/inventory"
              className="hidden sm:flex items-center text-blue-600 font-medium hover:text-blue-700"
            >
              {t('common.viewAll')} <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-zinc-900">
                    {(car.type as any)[language] || car.type.zh}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    {car.name}
                  </h3>
                  <div className="flex items-center text-zinc-500 text-sm mb-4 space-x-4">
                    <span>{car.year}</span>
                    <span>•</span>
                    <span>{car.mileage}</span>
                    <span>•</span>
                    <span>{(car.fuelType as any)[language] || car.fuelType.zh}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {((car.features as any)[language] || car.features.zh).slice(0, 3).map((feature: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-zinc-100 text-zinc-600 text-xs px-2 py-1 rounded-md flex items-center"
                      >
                        <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-500" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                    <div className="text-2xl font-bold text-blue-600">
                      {car.price}
                    </div>
                    <Link
                      to={`/inventory?car=${car.id}`}
                      className="text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors"
                    >
                      {t('common.details')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/inventory"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
            >
              {t('common.viewAll')} <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
