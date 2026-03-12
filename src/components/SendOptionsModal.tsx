import { motion, AnimatePresence } from "motion/react";
import { X, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface SendOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSendWhatsApp: () => void;
  onSendEmail: () => void;
}

export default function SendOptionsModal({
  isOpen,
  onClose,
  onSendWhatsApp,
  onSendEmail,
}: SendOptionsModalProps) {
  const { language } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden p-6 md:p-8 text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-zinc-100 hover:bg-zinc-200 p-2 rounded-full text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-zinc-900 mb-2">
              {language === 'zh' ? '选择发送方式' : 'Choose Sending Method'}
            </h3>
            <p className="text-zinc-500 text-sm mb-8">
              {language === 'zh' 
                ? '请选择您希望如何将询盘信息发送给我们：' 
                : 'Please choose how you would like to send your inquiry:'}
            </p>

            <div className="space-y-4">
              <button
                onClick={onSendWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium py-4 px-6 rounded-xl transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                {language === 'zh' ? '通过 WhatsApp 发送' : 'Send via WhatsApp'}
              </button>
              
              <button
                onClick={onSendEmail}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-3" />
                {language === 'zh' ? '通过 邮件 发送' : 'Send via Email'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
