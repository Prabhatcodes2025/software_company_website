"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, CalendarDays, MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";

export function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-3 z-[900] flex flex-col items-end gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
        <motion.a
          href="https://wa.me/14155550198"
          target="_blank"
          rel="noreferrer"
          className="group hidden h-12 w-12 max-w-[13.5rem] items-center overflow-hidden rounded-full border border-emerald-300/30 bg-emerald-500 px-3 text-sm font-black text-ink shadow-[0_0_24px_rgba(16,185,129,0.24)] transition-[width,transform,box-shadow] duration-300 hover:w-[13.5rem] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(16,185,129,0.28)] sm:flex"
          animate={{ boxShadow: ["0 0 0 rgba(16,185,129,0)", "0 0 28px rgba(16,185,129,0.32)", "0 0 0 rgba(16,185,129,0)"] }}
          transition={{ boxShadow: { duration: 2.8, repeat: Infinity } }}
          aria-label="Chat with our experts on WhatsApp"
        >
          <span className="grid size-6 shrink-0 place-items-center">
            <MessageCircle size={20} />
          </span>
          <span className="ml-3 block max-w-[10rem] overflow-hidden whitespace-normal text-left leading-4 opacity-0 transition duration-200 group-hover:opacity-100">
            Chat With Our Experts
          </span>
        </motion.a>
        <motion.a
          href="https://wa.me/14155550198"
          target="_blank"
          rel="noreferrer"
          className="grid size-11 place-items-center rounded-full border border-emerald-300/30 bg-emerald-500 text-ink shadow-[0_0_20px_rgba(16,185,129,0.22)] sm:hidden"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.8, repeat: Infinity }}
          aria-label="Chat with our experts on WhatsApp"
        >
          <MessageCircle size={18} />
        </motion.a>

        <motion.button
          type="button"
          onClick={() => setConsultOpen(true)}
          className="hidden h-12 items-center gap-2 rounded-full border border-white/10 bg-slate-950/90 px-4 text-sm font-black text-white shadow-[0_18px_56px_rgba(0,0,0,0.3)] backdrop-blur-xl transition hover:border-cyanfire/45 hover:text-cyanfire sm:flex"
          initial={{ x: 24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <CalendarDays size={18} />
          Consultation
        </motion.button>

        <motion.button
          type="button"
          onClick={() => setChatOpen((value) => !value)}
          className="relative grid size-12 place-items-center rounded-full bg-gradient-to-br from-cyanfire to-mint text-ink shadow-[0_0_30px_rgba(56,213,255,0.28)] sm:size-14 sm:shadow-[0_0_38px_rgba(56,213,255,0.3)]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Open AI assistant"
        >
          <span className="absolute inset-0 rounded-full bg-cyanfire/30 blur-xl" />
          <Bot size={24} className="relative" />
        </motion.button>
      </div>

      <AnimatePresence>
        {chatOpen ? (
          <motion.div
            className="fixed bottom-20 right-3 z-[950] w-[calc(100vw-1.5rem)] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-slate-950/96 shadow-[0_28px_100px_rgba(0,0,0,0.48)] backdrop-blur-xl sm:bottom-24 sm:right-6"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] p-4">
              <div>
                <p className="font-black text-white">Clickmyze AI Assistant</p>
                <p className="text-xs text-slate-400">Enterprise project guidance</p>
              </div>
              <button onClick={() => setChatOpen(false)} className="grid size-9 place-items-center rounded-lg border border-white/10 text-slate-300 hover:text-white" aria-label="Close chat">
                <X size={16} />
              </button>
            </div>
            <div className="grid gap-3 p-4 text-sm">
              {["Hi - how can we help?", "Looking for a website, app or SaaS solution?", "Book a free consultation."].map((message) => (
                <div key={message} className="rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.055] p-3 text-slate-200">
                  {message}
                </div>
              ))}
            </div>
            <div className="flex gap-2 border-t border-white/10 p-3">
              <input className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500" placeholder="Type your project need" />
              <button className="grid size-10 place-items-center rounded-xl bg-cyanfire text-ink" aria-label="Send chat message">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {consultOpen ? (
          <motion.div className="fixed inset-0 z-[1000] grid place-items-center bg-ink/82 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className="w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-[0_40px_140px_rgba(0,0,0,0.52)]"
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 30, scale: 0.96 }}
            >
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <div>
                  <p className="text-xl font-black text-white">Book a free consultation</p>
                  <p className="mt-1 text-sm text-slate-400">Tell us what you are building. We will respond with next steps.</p>
                </div>
                <button onClick={() => setConsultOpen(false)} className="grid size-10 place-items-center rounded-xl border border-white/10 text-slate-300 hover:text-white" aria-label="Close consultation modal">
                  <X size={18} />
                </button>
              </div>
              <form className="grid gap-4 p-5">
                <input className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-cyanfire" placeholder="Name" />
                <input className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-cyanfire" placeholder="Work email" />
                <select className="rounded-xl border border-white/10 bg-[#061426] px-4 py-3 text-white outline-none focus:border-cyanfire">
                  <option>Enterprise software</option>
                  <option>AI development</option>
                  <option>SaaS platform</option>
                  <option>Mobile app</option>
                  <option>Staff augmentation</option>
                </select>
                <textarea className="min-h-28 resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-cyanfire" placeholder="Project context" />
                <button type="button" className="rounded-xl bg-gradient-to-r from-cyanfire to-mint px-5 py-3 font-black text-ink">
                  Request Consultation
                </button>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
