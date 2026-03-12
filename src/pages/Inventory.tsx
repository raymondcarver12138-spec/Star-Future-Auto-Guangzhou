import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  CheckCircle2,
  X,
  Send,
} from "lucide-react";
import { cars } from "../data/cars";
import { useLanguage } from "../contexts/LanguageContext";
import SendOptionsModal from "../components/SendOptionsModal";

export default function Inventory() {
  const location = useLocation();
  const { t, language } = useLanguage();
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterType, setFilterType] = useState("全部");
  const [filterBrand, setFilterBrand] = useState("All");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    quantity: "1-5 Units",
    requirements: "",
  });

  const [showSendOptions, setShowSendOptions] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const carId = params.get("car");
    if (carId) {
      setSelectedCarId(carId);
      setIsModalOpen(true);
    }
  }, [location]);

  const uniqueBrands = Array.from(new Set(cars.map((car) => car.specs.en.Brand)));

  const filteredCars = cars.filter((car) => {
    const matchType = filterType === "全部" || car.type.zh === filterType;
    const matchBrand = filterBrand === "All" || car.specs.en.Brand === filterBrand;
    return matchType && matchBrand;
  });

  const selectedCar = cars.find((c) => c.id === selectedCarId);

  const openInquiry = (id: string) => {
    setSelectedCarId(id);
    setIsModalOpen(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowSendOptions(true);
  };

  const generateMessage = () => {
    return `New Car Inquiry:
Car: ${selectedCar?.name}
Price: ${selectedCar?.price}

Customer Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Destination: ${formData.destination}
Quantity: ${formData.quantity}

Requirements:
${formData.requirements || 'None'}`;
  };

  const handleWhatsApp = () => {
    const text = generateMessage();
    const phone = "447709967348";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
    setShowSendOptions(false);
    setIsModalOpen(false);
  };

  const handleEmail = () => {
    const text = generateMessage();
    const email = "wuqiwei@mova-tech.com";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Car Inquiry - ' + (selectedCar?.name || ''))}&body=${encodeURIComponent(text)}`;
    setShowSendOptions(false);
    setIsModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zinc-50 min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            {t('inventory.title')}
          </h1>
          <p className="text-zinc-600 max-w-2xl">
            {t('inventory.desc')}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-2xl border border-zinc-200 mb-8 flex flex-col gap-4 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
            <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
              {["全部", "全系", "新能源", "SUV", "轿车", "MPV"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    filterType === type
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {t(`inventory.types.${type}`)}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder={t('common.searchPlaceholder')}
                className="w-full pl-10 pr-4 py-2 bg-zinc-100 border-transparent rounded-full text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2 w-full overflow-x-auto pb-2 sm:pb-0">
            <button
              onClick={() => setFilterBrand("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filterBrand === "All"
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {t('common.all')}
            </button>
            {uniqueBrands.map((brand) => (
              <button
                key={brand}
                onClick={() => setFilterBrand(brand)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filterBrand === brand
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <motion.div
              key={car.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-zinc-100">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-zinc-900">
                  {(car.type as any)[language] || car.type.zh}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
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

                <div className="space-y-2 mb-6 flex-grow">
                  <div className="text-sm font-medium text-zinc-900 mb-2">
                    {t('inventory.coreSpecs')}
                  </div>
                  {Object.entries((car.specs as any)[language] || car.specs.zh)
                    .slice(0, 4)
                    .map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-zinc-500">{key}</span>
                        <span className="font-medium text-zinc-900">
                          {value as string}
                        </span>
                      </div>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 mt-auto">
                  <div className="text-2xl font-bold text-blue-600">
                    {car.price}
                  </div>
                  <button
                    onClick={() => openInquiry(car.id)}
                    className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    {t('inventory.inquiry')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/50 hover:bg-white backdrop-blur-md p-2 rounded-full text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Car Details Side */}
              <div className="w-full md:w-1/2 bg-zinc-50 overflow-y-auto border-r border-zinc-200">
                <div className="h-64 md:h-72 relative">
                  <img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-2">
                    {selectedCar.name}
                  </h2>
                  <div className="text-2xl font-bold text-blue-600 mb-6">
                    {selectedCar.price}
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                    {t('inventory.specs')}
                  </h3>
                  <div className="space-y-3 mb-8">
                    {Object.entries((selectedCar.specs as any)[language] || selectedCar.specs.zh).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between text-sm py-2 border-b border-zinc-200 last:border-0"
                      >
                        <span className="text-zinc-500">{key}</span>
                        <span className="font-medium text-zinc-900 text-right">
                          {value as string}
                        </span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                    {t('inventory.features')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {((selectedCar.features as any)[language] || selectedCar.features.zh).map((feature: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-white border border-zinc-200 text-zinc-700 text-xs px-3 py-1.5 rounded-lg flex items-center shadow-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-500" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto bg-white">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                  {t('inventory.inquiryTitle')}
                </h3>
                <p className="text-zinc-500 text-sm mb-8">
                  {t('inventory.inquiryDesc')}
                </p>

                <form
                  className="space-y-5"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                      {t('common.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder={language === 'zh' ? "如：张先生" : "e.g., John Doe"}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                        {t('common.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="+86"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                        {t('common.emailLabel')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                      {t('common.destination')}
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder={language === 'zh' ? "如：迪拜 Jebel Ali" : "e.g., Dubai Jebel Ali"}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                      {t('common.quantity')}
                    </label>
                    <select 
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    >
                      <option>1-5 {language === 'zh' ? '台' : 'Units'}</option>
                      <option>6-20 {language === 'zh' ? '台' : 'Units'}</option>
                      <option>20+ {language === 'zh' ? '台' : 'Units'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                      {t('common.requirements')}
                    </label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder={language === 'zh' ? "请填写您对配置、颜色、物流等方面的具体要求..." : "Please fill in your specific requirements for configuration, color, logistics, etc..."}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {t('common.submit')}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <SendOptionsModal
        isOpen={showSendOptions}
        onClose={() => setShowSendOptions(false)}
        onSendWhatsApp={handleWhatsApp}
        onSendEmail={handleEmail}
      />
    </motion.div>
  );
}
