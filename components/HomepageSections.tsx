"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Bot,
  Building2,
  Check,
  Cloud,
  Code2,
  Cpu,
  Database,
  Eye,
  Factory,
  Gauge,
  GraduationCap,
  Globe2,
  Headphones,
  HeartHandshake,
  Landmark,
  Layers3,
  MessageSquare,
  Network,
  Palette,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Stethoscope,
  Truck,
  Users
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./Container";
import { AnimatedCounter } from "./AnimatedCounter";
import { HoverLift, Reveal } from "./Motion";
import { useLanguage } from "./LanguageProvider";

const serviceIcons = [Bot, Cloud, Code2, Smartphone, Gauge, Users];
const serviceDescriptions = [
  "AI agents and automation for faster operations.",
  "Scalable SaaS products built for growth.",
  "Fast, conversion-focused websites and platforms.",
  "High-quality iOS, Android and cross-platform apps.",
  "Cloud, DevOps and reliable infrastructure.",
  "Senior specialists who integrate with your team."
];

const reasons = [
  { title: "Fast Delivery", icon: Rocket },
  { title: "AI First Approach", icon: Sparkles },
  { title: "Dedicated Support", icon: Headphones },
  { title: "Scalable Solutions", icon: Layers3 },
  { title: "Global Standards", icon: Globe2 },
  { title: "Transparent Communication", icon: MessageSquare }
];

const process = [
  { title: "Discover", icon: Eye },
  { title: "Design", icon: Palette },
  { title: "Develop", icon: Code2 },
  { title: "Scale", icon: Rocket }
];

const industries = [
  { title: "Healthcare", icon: Stethoscope },
  { title: "Fintech", icon: Landmark },
  { title: "Real Estate", icon: Building2 },
  { title: "Education", icon: GraduationCap },
  { title: "E-commerce", icon: ShoppingBag },
  { title: "Logistics", icon: Truck },
  { title: "Manufacturing", icon: Factory }
];

const portfolio = [
  { title: "AI Insurance Operations", tag: "AI Automation", metric: "63% faster workflows", position: "object-left" },
  { title: "Global Commerce Platform", tag: "Web Development", metric: "42% conversion lift", position: "object-center" },
  { title: "Logistics Control Tower", tag: "SaaS Product", metric: "41% fewer manual tasks", position: "object-right" }
];

const trustStats = [
  { value: "25+", label: "Projects Delivered", icon: BriefcaseBusiness },
  { value: "15+", label: "Industries Served", icon: Landmark },
  { value: "5+", label: "Countries Reached", icon: Globe2 },
  { value: "98%", label: "Client Satisfaction", icon: HeartHandshake },
  { value: "24/7", label: "Support Available", icon: Headphones }
];

const ecosystemParticles = [
  { left: "12%", top: "22%", delay: 0, size: 4 },
  { left: "24%", top: "76%", delay: 0.7, size: 3 },
  { left: "42%", top: "16%", delay: 1.1, size: 4 },
  { left: "58%", top: "70%", delay: 0.4, size: 3 },
  { left: "72%", top: "20%", delay: 1.5, size: 4 },
  { left: "86%", top: "62%", delay: 0.9, size: 3 }
];

const engineeringPoints = [
  "Strategy & requirement planning",
  "UI/UX design and system architecture",
  "Website, app and software development",
  "AI automation and integrations",
  "Ongoing support and optimization"
];

const infrastructureNodes = [
  { icon: Cloud, label: "Cloud", className: "left-[8%] top-[14%]", delay: 0 },
  { icon: Database, label: "Data", className: "right-[7%] top-[19%]", delay: 0.5 },
  { icon: Network, label: "API", className: "bottom-[13%] left-[12%]", delay: 0.9 },
  { icon: Server, label: "Scale", className: "bottom-[10%] right-[10%]", delay: 1.3 }
];

export function HomepageSections() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const reviews = t.testimonials.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-y border-white/10 bg-[linear-gradient(135deg,#030a17_0%,#061426_50%,#082b61_100%)] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />
        <motion.div
          className="pointer-events-none absolute -left-28 top-10 size-72 rounded-full bg-cyanfire/12 blur-3xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.28, 0.55, 0.28] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-mint/10 blur-3xl"
          animate={{ scale: [1.08, 0.96, 1.08], opacity: [0.22, 0.48, 0.22] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <Container className="relative">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyanfire">Proven delivery</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Trusted Technology Partner for Modern Businesses
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Helping businesses build scalable websites, mobile apps, AI automation, and digital growth solutions.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {trustStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.article
                  key={stat.label}
                  className="group relative flex h-full min-h-[205px] flex-col items-center justify-center overflow-hidden rounded-[18px] border border-white/12 bg-white/[0.055] p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-colors duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyanfire/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="grid size-12 place-items-center rounded-xl border border-cyanfire/25 bg-cyanfire/10 text-cyanfire shadow-[0_0_22px_rgba(56,213,255,0.1)] transition duration-300 group-hover:border-cyanfire/45 group-hover:bg-cyanfire/15 group-hover:shadow-[0_0_28px_rgba(56,213,255,0.2)]">
                    <Icon size={23} />
                  </span>
                  <p className="mt-5 text-4xl font-black text-white sm:text-5xl">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="mt-3 text-sm font-bold text-slate-300">{stat.label}</p>
                  <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-transparent transition duration-300 group-hover:border-cyanfire/35 group-hover:shadow-[inset_0_0_30px_rgba(56,213,255,0.07),0_0_34px_rgba(56,213,255,0.12)]" />
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#f7fbff] py-24 text-slate-950 sm:py-28">
        <div className="pointer-events-none absolute -left-24 top-1/2 size-72 -translate-y-1/2 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-emerald-200/30 blur-3xl" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087db5]">Software engineering</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.08] text-[#041426] sm:text-5xl lg:text-[3.5rem]">
              Software Development Company Building Smart Digital Solutions
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
              <p>Clickmyze creates scalable websites, mobile apps, AI automation systems, and custom software that help businesses grow faster.</p>
              <p>We focus on clean design, strong performance, automation, and digital growth so your business can work smarter and scale confidently.</p>
            </div>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#179fe2] to-[#42d7ad] px-6 py-3.5 font-black text-[#031522] shadow-[0_14px_34px_rgba(23,159,226,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(23,159,226,0.3)]"
            >
              Explore Services <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <div className="absolute inset-x-12 bottom-0 h-20 rounded-full bg-blue-500/25 blur-3xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-cyan-300/20 bg-[#020817] shadow-[0_30px_90px_rgba(3,33,73,0.3),0_0_50px_rgba(31,168,255,0.12)]">
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: [1, 1.018, 1], rotate: [0, 0.25, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/software-ai-illustration-v2.png"
                    alt="Premium 3D AI, SaaS, cloud and software technology illustration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </motion.div>

                <motion.div
                  className="absolute left-[36%] top-[20%] h-[28%] w-[28%] rounded-full bg-cyan-300/12 blur-2xl"
                  animate={{ scale: [0.85, 1.18, 0.85], opacity: [0.28, 0.72, 0.28] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute left-[42%] top-[44%] h-[22%] w-[22%] rounded-full bg-blue-400/20 blur-2xl"
                  animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.3, 0.75, 0.3] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.span
                  className="absolute left-[9%] top-[60%] h-px w-[32%] origin-left bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_10px_rgba(103,232,249,0.85)]"
                  animate={{ scaleX: [0.12, 1, 0.12], opacity: [0.1, 0.9, 0.1] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute right-[8%] top-[42%] h-px w-[29%] origin-right bg-gradient-to-l from-transparent via-cyan-300 to-transparent shadow-[0_0_10px_rgba(103,232,249,0.85)]"
                  animate={{ scaleX: [0.15, 1, 0.15], opacity: [0.1, 0.85, 0.1] }}
                  transition={{ duration: 4.2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute bottom-[17%] left-[31%] h-px w-[38%] origin-center bg-gradient-to-r from-transparent via-mint to-transparent shadow-[0_0_10px_rgba(67,243,182,0.7)]"
                  animate={{ scaleX: [0.2, 1, 0.2], opacity: [0.1, 0.75, 0.1] }}
                  transition={{ duration: 4.8, delay: 1.1, repeat: Infinity, ease: "easeInOut" }}
                />

                {ecosystemParticles.map((particle, index) => (
                  <motion.span
                    key={`${particle.left}-${particle.top}`}
                    className="ai-ecosystem-particle absolute rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.95)]"
                    style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
                    animate={{ y: [0, index % 2 === 0 ? -9 : 9, 0], x: [0, index % 2 === 0 ? 5 : -5, 0], opacity: [0.2, 1, 0.2], scale: [0.8, 1.45, 0.8] }}
                    transition={{ duration: 4.5 + index * 0.35, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}

                <motion.span
                  className="ai-ecosystem-reflection absolute -left-[35%] top-[-30%] h-[160%] w-[22%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/16 to-transparent blur-md"
                  animate={{ x: ["0%", "650%"] }}
                  transition={{ duration: 7.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,213,255,0.06),transparent_68%)]" />
                <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/5" />
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section id="engineering-impact" className="relative isolate overflow-hidden bg-[#020713] py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(103,232,249,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.22)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="pointer-events-none absolute left-[8%] top-[14%] size-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[5%] right-[8%] size-80 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <motion.div
            className="order-2 mx-auto w-full max-w-[620px] lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-square max-h-[590px] min-h-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(22,151,211,0.16),transparent_48%),linear-gradient(145deg,rgba(11,28,52,0.9),rgba(2,7,19,0.96))] shadow-[0_36px_100px_rgba(0,0,0,0.46)] [perspective:1000px]">
              <div className="absolute inset-[9%] rounded-full border border-cyan-300/10" />
              <div className="absolute inset-[19%] rounded-full border border-dashed border-cyan-300/15" />

              <motion.div
                className="absolute inset-[25%] rounded-[26px] border border-cyan-200/25 bg-white/[0.065] shadow-[0_0_60px_rgba(34,211,238,0.16),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md [transform-style:preserve-3d]"
                animate={reduceMotion ? undefined : { y: [0, -9, 0], rotateX: [8, 12, 8], rotateY: [-10, -4, -10] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-4 rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(19,68,107,0.75),rgba(4,18,37,0.92))]" />
                <motion.div
                  className="absolute inset-[27%] grid place-items-center rounded-2xl border border-cyan-200/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_34px_rgba(34,211,238,0.28)]"
                  animate={reduceMotion ? undefined : { scale: [0.96, 1.06, 0.96], boxShadow: ["0 0 26px rgba(34,211,238,.18)", "0 0 48px rgba(34,211,238,.36)", "0 0 26px rgba(34,211,238,.18)"] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Cpu className="size-8 sm:size-11" />
                </motion.div>
                <span className="absolute left-6 right-6 top-7 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
                <span className="absolute bottom-7 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-300/45 to-transparent" />
              </motion.div>

              <motion.div
                className="absolute inset-[16%] rounded-[32px] border border-cyan-200/20 [transform:rotateX(65deg)_rotateZ(18deg)]"
                animate={reduceMotion ? undefined : { rotateZ: [18, 378] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />

              {infrastructureNodes.map((node, index) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={node.label}
                    className={`engineering-scene-node absolute ${node.className} flex items-center gap-2 rounded-xl border border-white/10 bg-[#07182c]/95 px-3 py-2.5 text-xs font-black text-slate-200 shadow-[0_16px_38px_rgba(0,0,0,0.35)]`}
                    animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -8 : 8, 0], rotate: [0, index % 2 === 0 ? 1.5 : -1.5, 0] }}
                    transition={{ duration: 5.5 + index * 0.7, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="grid size-8 place-items-center rounded-lg bg-cyan-300/10 text-cyan-300">
                      <Icon size={16} />
                    </span>
                    <span className="hidden sm:inline">{node.label}</span>
                  </motion.div>
                );
              })}

              <motion.span
                className="absolute left-[24%] top-[27%] h-px w-[25%] origin-left rotate-[28deg] bg-gradient-to-r from-cyan-300/10 to-cyan-200/75"
                animate={reduceMotion ? undefined : { opacity: [0.2, 0.9, 0.2], scaleX: [0.4, 1, 0.4] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute bottom-[28%] right-[22%] h-px w-[27%] origin-right rotate-[28deg] bg-gradient-to-l from-blue-300/10 to-cyan-200/70"
                animate={reduceMotion ? undefined : { opacity: [0.15, 0.85, 0.15], scaleX: [0.35, 1, 0.35] }}
                transition={{ duration: 4.2, delay: 0.7, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_38%,rgba(255,255,255,0.04)_49%,transparent_60%)]" />
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyanfire">Digital product engineering</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem]">
              Engineering Digital Products That Create Real Business Impact
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              We design and develop reliable websites, mobile apps, AI systems, and custom software that improve operations, generate leads, and scale faster.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {engineeringPoints.map((point, index) => (
                <motion.li
                  key={point}
                  className="flex items-start gap-3 text-sm font-bold leading-6 text-slate-200"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.055 }}
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-mint/25 bg-mint/10 text-mint">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/services"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-xl border border-cyanfire/30 bg-cyanfire/10 px-6 py-3.5 font-black text-white shadow-[0_14px_36px_rgba(0,0,0,0.24)] transition-all duration-200 hover:-translate-y-1 hover:border-cyanfire/55 hover:bg-cyanfire/15 hover:shadow-[0_18px_42px_rgba(25,174,232,0.18)]"
            >
              Know More <ArrowRight size={18} />
            </Link>
          </motion.div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(145deg,#030914_0%,#071a31_52%,#05264a_100%)] py-24 sm:py-28" id="services">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(56,213,255,0.15),transparent_25rem),radial-gradient(circle_at_8%_85%,rgba(67,243,182,0.08),transparent_24rem)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="pointer-events-none absolute -top-10 left-1/2 h-20 w-[120%] -translate-x-1/2 rounded-[50%] bg-[#020713]" />
        <Container className="relative">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyanfire">What we build</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">Six capabilities. One accountable technology partner.</h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-black text-cyanfire">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
            {t.services.slice(0, 6).map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <HoverLift
                  key={service.title}
                  delay={index * 0.04}
                  className={index < 2 ? "lg:col-span-6" : "lg:col-span-3"}
                >
                  <Link
                    href="/services"
                    className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyanfire/35 hover:bg-cyanfire/[0.07] ${
                      index < 2 ? "min-h-[230px] sm:p-8" : "min-h-[200px]"
                    }`}
                  >
                    <span className="grid size-12 place-items-center rounded-xl border border-cyanfire/20 bg-cyanfire/10 text-cyanfire transition group-hover:scale-105">
                      <Icon size={23} />
                    </span>
                    <h3 className={`${index < 2 ? "text-2xl" : "text-xl"} mt-6 font-black text-white`}>{service.title}</h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">{serviceDescriptions[index]}</p>
                    <ArrowRight size={17} className="mt-auto pt-5 box-content text-cyanfire transition group-hover:translate-x-1" />
                  </Link>
                </HoverLift>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#f3f7fb] py-24 text-slate-950 sm:py-28">
        <div className="pointer-events-none absolute -top-10 left-1/2 h-20 w-[120%] -translate-x-1/2 rounded-[50%] bg-[#07182c]" />
        <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(8,125,181,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(8,125,181,0.05)_1px,transparent_1px)] [background-size:44px_44px]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087db5]">Industries</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-[#041426] sm:text-5xl">Engineering for complex, real-world markets.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
              Domain-aware teams that understand compliance, scale, operations and customer experience.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-7">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.title} delay={index * 0.035} className="h-full">
                  <div className="group flex min-h-[150px] h-full flex-col justify-between bg-white p-5 transition duration-300 hover:bg-[#e9f8ff]">
                    <span className="grid size-10 place-items-center rounded-xl bg-[#e8f6fc] text-[#087db5] transition group-hover:-translate-y-1 group-hover:bg-[#d7f3ff]">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-8 break-words text-sm font-black text-[#081b2e] sm:text-base">{industry.title}</h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-white py-24 text-slate-950 sm:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(56,213,255,0.13),transparent_65%)]" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087db5]">Why Clickmyze</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#041426] sm:text-5xl">Built for speed. Designed for lasting scale.</h2>
            </div>
            <div className="grid grid-cols-1 border-y border-slate-200 sm:grid-cols-2">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <Reveal key={reason.title} delay={index * 0.035} className="h-full">
                    <div className="flex min-h-20 h-full items-center gap-4 border-b border-slate-200 px-1 py-5 sm:border-r sm:px-5">
                      <Icon size={20} className="shrink-0 text-[#0996c7]" />
                      <h3 className="break-words text-sm font-black text-[#0b2034] sm:text-base">{reason.title}</h3>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#eef4fa] py-24 text-slate-950 sm:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087db5]">How we work</p>
            <h2 className="mt-3 text-4xl font-black text-[#041426] sm:text-5xl">From idea to scale in four clear steps.</h2>
          </div>
          <div className="relative mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-7 hidden h-1 rounded-full bg-gradient-to-r from-[#179fe2]/20 via-[#179fe2] to-[#42d7ad]/30 lg:block" />
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 0.07}>
                  <div className="relative text-center">
                    <span className="relative mx-auto grid size-14 place-items-center rounded-2xl border border-cyan-200 bg-white text-[#087db5] shadow-[0_12px_30px_rgba(8,125,181,0.13)]">
                      <Icon size={24} />
                    </span>
                    <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-slate-400">0{index + 1}</p>
                    <h3 className="mt-2 text-xl font-black text-[#0b2034]">{step.title}</h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[linear-gradient(145deg,#020711,#061426_55%,#082958)] py-24 sm:py-28">
        <div className="pointer-events-none absolute -top-10 left-1/2 h-20 w-[120%] -translate-x-1/2 rounded-[50%] bg-[#eef4fa]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_24%,rgba(56,213,255,0.13),transparent_27rem)]" />
        <Container className="relative">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyanfire">Selected work</p>
              <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">Products that move business metrics.</h2>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-black text-cyanfire">
              View portfolio <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {portfolio.map((project, index) => (
              <HoverLift key={project.title} delay={index * 0.06}>
                <Link href="/case-studies" className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src="/images/hero-command-center.png" alt={project.title} fill className={`object-cover ${project.position} transition duration-500 group-hover:scale-105`} sizes="(max-width: 1024px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030a17] via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-lg border border-cyanfire/25 bg-slate-950/80 px-3 py-1 text-xs font-black text-cyanfire">{project.tag}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-black text-white">{project.title}</h3>
                    <p className="mt-3 text-sm font-bold text-mint">{project.metric}</p>
                  </div>
                </Link>
              </HoverLift>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#f6f9fc] py-24 text-slate-950 sm:py-28">
        <div className="pointer-events-none absolute -top-10 left-1/2 h-20 w-[120%] -translate-x-1/2 rounded-[50%] bg-[#061426]" />
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle,rgba(8,125,181,0.09)_1px,transparent_1px)] [background-size:32px_32px]" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#087db5]">Client stories</p>
            <h2 className="mt-3 text-4xl font-black text-[#041426] sm:text-5xl">Trusted when delivery matters.</h2>
          </div>
        </Container>
        <div className="testimonial-rail relative mt-12 overflow-hidden">
          <div className="testimonial-track flex gap-5 px-4 sm:px-6 lg:px-8">
            {[...reviews, ...reviews].map((review, index) => (
              <article key={`${review.name}-${index}`} className="flex w-[calc(100vw-2rem)] max-w-sm shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(17,48,75,0.09)] sm:w-[24rem]">
                <div className="flex gap-1 text-amberline">
                  {Array.from({ length: 5 }).map((_, star) => <Sparkles key={star} size={14} fill="currentColor" />)}
                </div>
                <p className="mt-5 line-clamp-4 flex-1 text-base leading-7 text-slate-600">&quot;{review.quote}&quot;</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="font-black text-[#0b2034]">{review.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{review.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f6f9fc] pb-24 pt-4 sm:pb-28">
        <Container className="relative">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-cyanfire/25 bg-[radial-gradient(circle_at_15%_20%,rgba(56,213,255,0.24),transparent_24rem),linear-gradient(135deg,#071a33,#082f71)] px-6 py-14 text-center shadow-[0_34px_120px_rgba(0,0,0,0.38)] sm:px-10 sm:py-20">
              <motion.div className="absolute -right-20 -top-24 size-72 rounded-full bg-mint/12 blur-3xl" animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.65, 0.35] }} transition={{ duration: 7, repeat: Infinity }} />
              <ShieldCheck size={28} className="relative mx-auto text-mint" />
              <h2 className="relative mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl">Ready to Build Your Next Digital Product?</h2>
              <p className="relative mx-auto mt-5 max-w-xl text-lg text-slate-300">Start with a free strategy conversation.</p>
              <Link href="/contact" className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyanfire to-mint px-7 py-4 font-black text-ink shadow-[0_0_46px_rgba(56,213,255,0.28)] transition hover:-translate-y-1">
                Book Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
