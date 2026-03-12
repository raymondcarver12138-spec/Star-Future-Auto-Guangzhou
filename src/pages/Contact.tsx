import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import SendOptionsModal from "../components/SendOptionsModal";

export default function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    vin: "",
    message: "",
  });

  const [showSendOptions, setShowSendOptions] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowSendOptions(true);
  };

  const generateMessage = () => {
    return `New Website Inquiry:
Name: ${formData.name}
Company: ${formData.company || 'N/A'}
Phone: ${formData.phone}
Email: ${formData.email}
VIN: ${formData.vin || 'N/A'}

Message:
${formData.message}`;
  };

  const handleWhatsApp = () => {
    const text = generateMessage();
    const phone = "447709967348";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
    setShowSendOptions(false);
  };

  const handleEmail = () => {
    const text = generateMessage();
    const email = "wuqiwei@mova-tech.com";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('New Website Inquiry - ' + formData.name)}&body=${encodeURIComponent(text)}`;
    setShowSendOptions(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zinc-50 min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">{t('contact.title')}</h1>
          <p className="text-zinc-600 text-lg">
            {t('contact.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-900 mb-6">{t('contact.infoTitle')}</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-1">{t('common.address')}</h4>
                    <p className="text-zinc-600 text-sm">
                      {t('contact.addressValue')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-1">{t('common.whatsapp')} / {t('common.wechat')}</h4>
                    <p className="text-zinc-600 text-sm">
                      WhatsApp: +44 7709967348
                      <br />
                      WeChat: +86 19107644797
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-1">{t('common.email')}</h4>
                    <p className="text-zinc-600 text-sm">
                      wuqiwei@mova-tech.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-1">{t('common.workingHours')}</h4>
                    <p className="text-zinc-600 text-sm">
                      {t('contact.timeValue1')}
                      <br />
                      {t('contact.timeValue2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-zinc-200 shadow-sm">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">
                {t('contact.formTitle')}
              </h3>
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      {t('common.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      {t('common.company')}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      {t('common.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      {t('common.emailLabel')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    {t('common.vin')}
                  </label>
                  <input
                    type="text"
                    name="vin"
                    value={formData.vin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="17-character VIN"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    {t('common.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-colors flex items-center justify-center w-full md:w-auto md:min-w-[200px]"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t('common.sendMessage')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <SendOptionsModal
        isOpen={showSendOptions}
        onClose={() => setShowSendOptions(false)}
        onSendWhatsApp={handleWhatsApp}
        onSendEmail={handleEmail}
      />
    </motion.div>
  );
}
