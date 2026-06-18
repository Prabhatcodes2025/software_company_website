"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "./Container";

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#020817] sm:min-h-[75vh] lg:min-h-[90vh]">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.04 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      >
        <Image
          src="/images/clickmyze-city-hero.png"
          alt="Global technology city skyline at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_70%] sm:object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/58" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.68)_0%,rgba(4,16,31,0.42)_42%,rgba(3,10,23,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,52,95,0.1),rgba(2,8,23,0.5)_72%)]" />

      <Container className="relative z-10 flex justify-center px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.12 } } }}
        >
          <motion.h1
            className="text-[2.65rem] font-black leading-[1.02] text-white drop-shadow-[0_6px_36px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-[5rem] xl:text-[5.6rem]"
            variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Building Future-Ready Software, AI &amp; Digital Solutions
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-200 sm:text-xl sm:leading-8"
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Clickmyze helps businesses grow with scalable websites, mobile apps, AI automation and digital marketing.
          </motion.p>

          <motion.div
            className="mx-auto mt-9 flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/contact"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyanfire to-mint px-7 py-4 font-black text-ink shadow-[0_0_42px_rgba(56,213,255,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(56,213,255,0.42)]"
            >
              Book Consultation <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/25 bg-slate-950/55 px-7 py-4 font-black text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyanfire/60 hover:bg-slate-950/75"
            >
              <Layers3 size={18} /> View Services
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#061022] to-transparent" />
    </section>
  );
}
