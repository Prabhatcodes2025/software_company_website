"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/lib/site";

type TawkCallback = () => void;
type TawkApi = {
  onLoad?: TawkCallback;
  onChatMaximized?: TawkCallback;
  onChatMinimized?: TawkCallback;
  onChatHidden?: TawkCallback;
  isChatMaximized?: () => boolean;
};

declare global { interface Window { Tawk_API?: TawkApi } }

// WhatsApp mark from Bootstrap Icons (MIT). The destination remains company.whatsapp.
function WhatsAppIcon() {
  return <svg viewBox="0 0 16 16" width="30" height="30" fill="currentColor" aria-hidden="true" focusable="false"><path d="M13.601 2.326A7.854 7.854 0 0 0 8.01 0C3.584 0 0 3.583 0 8c0 1.418.371 2.8 1.078 4.01L0 16l4.086-1.067A7.99 7.99 0 0 0 8.01 16h.003c4.41 0 7.998-3.585 7.998-7.993a7.93 7.93 0 0 0-2.41-5.68zM8.01 14.65a6.64 6.64 0 0 1-3.396-.93l-.243-.144-2.532.661.675-2.469-.159-.253A6.64 6.64 0 0 1 1.33 8c0-3.68 2.997-6.67 6.68-6.67a6.626 6.626 0 0 1 4.716 1.953 6.6 6.6 0 0 1 1.95 4.726c-.002 3.68-2.995 6.67-6.666 6.67zm3.656-4.994c-.2-.1-1.184-.584-1.367-.65-.183-.067-.316-.1-.449.1-.133.2-.516.65-.632.783-.117.133-.233.15-.433.05-.2-.1-.844-.311-1.607-.992-.594-.53-.995-1.185-1.112-1.384-.117-.2-.012-.308.088-.407.09-.09.2-.233.3-.35.1-.116.133-.2.2-.333.067-.133.033-.25-.017-.35-.05-.1-.45-1.083-.616-1.483-.162-.39-.326-.337-.45-.344-.116-.006-.25-.007-.383-.007a.73.73 0 0 0-.533.25c-.183.2-.7.684-.7 1.667s.717 1.933.817 2.066c.1.133 1.41 2.151 3.416 3.016.477.206.85.329 1.14.42.48.152.916.13 1.26.079.384-.057 1.184-.484 1.35-.95.167-.467.167-.867.117-.95-.05-.084-.183-.134-.383-.234z" /></svg>;
}

export function FloatingWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [chatExpanded, setChatExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY >= 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const api = window.Tawk_API ?? (window.Tawk_API = {});
    const prior = { onLoad: api.onLoad, onChatMaximized: api.onChatMaximized, onChatMinimized: api.onChatMinimized, onChatHidden: api.onChatHidden };
    const callbacks = {
      onLoad: () => { prior.onLoad?.(); setChatExpanded(api.isChatMaximized?.() === true); },
      onChatMaximized: () => { prior.onChatMaximized?.(); setChatExpanded(true); },
      onChatMinimized: () => { prior.onChatMinimized?.(); setChatExpanded(false); },
      onChatHidden: () => { prior.onChatHidden?.(); setChatExpanded(false); },
    };
    Object.assign(api, callbacks);
    setChatExpanded(api.isChatMaximized?.() === true);
    return () => {
      for (const key of Object.keys(callbacks) as (keyof typeof callbacks)[]) {
        if (api[key] === callbacks[key]) api[key] = prior[key];
      }
    };
  }, []);

  const whatsappMessage = "Hi LetsFygure, I'd like to discuss a project.";
  return <aside className="floating-controls" aria-label="Quick actions" data-chat-expanded={chatExpanded}>
    {showBackToTop && <button type="button" className="back-to-top" aria-label="Back to top" title="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}><ArrowUp aria-hidden="true" /></button>}
    <a className="whatsapp-float" href={`${company.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><WhatsAppIcon /><span className="floating-tooltip" role="tooltip">Chat on WhatsApp</span></a>
  </aside>;
}
