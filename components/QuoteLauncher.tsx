"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import { createContext, ReactNode, useContext, useState } from "react";

type QuoteRequest = { id: number; trigger: HTMLButtonElement; service?: string };
type QuoteContextValue = { open: (trigger: HTMLButtonElement, service?: string) => void };
const QuoteContext = createContext<QuoteContextValue | null>(null);
const QuoteDialog = dynamic(() => import("./QuoteModal").then((module) => module.QuoteDialog), { ssr: false });

export function QuoteTrigger({ children = "Get a Free Quote", className = "", service }: { children?: ReactNode; className?: string; service?: string }) {
  const context = useContext(QuoteContext);
  if (!context) throw new Error("QuoteTrigger must be inside QuoteProvider");
  return <button type="button" className={className} onClick={(event) => context.open(event.currentTarget, service)}>{children}<ArrowUpRight aria-hidden="true" /></button>;
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState<QuoteRequest | null>(null);
  return <QuoteContext.Provider value={{ open: (trigger, service) => setRequest({ id: Date.now(), trigger, service }) }}>
    {children}
    {request && <QuoteDialog key={request.id} trigger={request.trigger} service={request.service} onClose={() => setRequest(null)} />}
  </QuoteContext.Provider>;
}
