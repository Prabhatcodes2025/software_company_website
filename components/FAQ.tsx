"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";

export function FAQ({ items = faqs }: { items?: string[][] }) {
  const [open, setOpen] = useState(0);
  return <div className="faq-list">{items.map(([question, answer], index) => <div key={question}><button aria-expanded={open === index} aria-controls={`faq-${index}`} onClick={() => setOpen(open === index ? -1 : index)}><span>{question}</span><Plus className={open === index ? "rotate" : ""} /></button><div id={`faq-${index}`} hidden={open !== index}><p>{answer}</p></div></div>)}</div>;
}
