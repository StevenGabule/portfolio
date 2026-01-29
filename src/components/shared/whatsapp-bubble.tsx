"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X, MessageCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "639269422209";
const DEFAULT_MESSAGE = "Hi! I'm interested in your web development services.";

export function WhatsAppBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-zinc-900"
          >
            {/* Header */}
            <div className="bg-[#075E54] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <FaWhatsapp className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">JPSOLUTIONS</h3>
                    <p className="text-xs text-white/80">Typically replies within an hour</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="bg-[#ECE5DD] p-4 dark:bg-zinc-800">
              {/* Message Bubble */}
              <div className="mb-4 max-w-[85%] rounded-lg rounded-tl-none bg-white p-3 shadow-sm dark:bg-zinc-700">
                <p className="text-sm text-zinc-700 dark:text-zinc-200">
                  Hello! How can I help you today?
                </p>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                  Feel free to ask about web development, project inquiries, or any questions you have.
                </p>
                <span className="mt-1 block text-right text-[10px] text-zinc-400">
                  {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-medium text-white transition-colors hover:bg-[#20BD5A]"
              >
                <Send className="h-4 w-4" />
                Start Conversation
              </a>
              <p className="mt-2 text-center text-[11px] text-zinc-400">
                Powered by WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#20BD5A] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
