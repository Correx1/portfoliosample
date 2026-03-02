'use client';

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Award, ChevronDown, ExternalLink, Calendar, Users, Headphones, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

/* ─── Values process-step data ─── */
const values = [
  { icon: Users,       title: 'People-First',           desc: 'Every policy, process, and program starts with empathy for both the customer and the team.' },
  { icon: Headphones,  title: 'Active Listening',        desc: 'I read between the lines to understand what customers really need — not just what they say.' },
  { icon: Target,      title: 'Results-Driven',          desc: 'CSAT, NPS, ARR retention — I track what matters and build systems to move the needle.' },
  { icon: Lightbulb,  title: 'Continuous Improvement',  desc: 'Every complaint is a product insight. I turn feedback loops into competitive advantages.' },
];

/* ─── Certificate data ─── */
interface Cert {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  imageUrl: string;
  verifyUrl?: string;
}

const certificates: Cert[] = [
  {
    id: 'cert-1',
    title: 'Customer Experience Professional (CCXP)',
    issuer: 'CXPA',
    date: 'March 2023',
    credentialId: 'CCXP-2023-0847',
    description: 'Globally recognised certification validating expertise in CX strategy, customer insight, design, culture & accountability, and measurement.',
    imageUrl: '/certs/ccxp.jpg',
    verifyUrl: 'https://cxpa.org/verify',
  },
  {
    id: 'cert-2',
    title: 'Zendesk Support Administrator',
    issuer: 'Zendesk',
    date: 'August 2022',
    credentialId: 'ZD-SA-2022-5531',
    description: 'Certified proficiency in configuring and optimising Zendesk Support Suite — workflows, SLAs, automations, triggers, and advanced reporting.',
    imageUrl: '/certs/zendesk.jpg',
    verifyUrl: 'https://zendesk.com/training',
  },
  {
    id: 'cert-3',
    title: 'Salesforce Service Cloud Consultant',
    issuer: 'Salesforce',
    date: 'January 2022',
    credentialId: 'SF-SCC-2022-1192',
    description: 'Advanced certification demonstrating ability to design and implement Salesforce Service Cloud solutions that meet complex customer business requirements.',
    imageUrl: '/certs/salesforce.jpg',
    verifyUrl: 'https://trailhead.salesforce.com',
  },
  {
    id: 'cert-4',
    title: 'HubSpot Customer Service Certification',
    issuer: 'HubSpot Academy',
    date: 'June 2021',
    description: 'Covers proactive customer service strategies, feedback surveys, and building a customer-first culture using the HubSpot CRM for support excellence.',
    imageUrl: '/certs/hubspot.jpg',
    verifyUrl: 'https://academy.hubspot.com',
  },
  {
    id: 'cert-5',
    title: 'Six Sigma Yellow Belt',
    issuer: 'ASQ',
    date: 'November 2020',
    credentialId: 'ASQ-YB-2020-3371',
    description: 'Foundation-level Six Sigma methodology — reducing defects in customer service processes, improving first-call resolution, and eliminating workflow waste.',
    imageUrl: '/certs/sixsigma.jpg',
  },
];

/* ─── Individual accordion cert card ─── */
function CertCard({ cert }: { cert: Cert }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-[#1E2F5A] bg-[#121E3E]/80 hover:border-[#F59E0B]/40 transition-colors duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 p-4 text-left"
        aria-expanded={open}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20">
          <Award className="h-5 w-5 text-[#F59E0B]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white truncate leading-snug">{cert.title}</p>
          <div className="flex flex-wrap items-center gap-x-2 mt-0.5 text-[11px] text-slate-400">
            <span className="text-[#F59E0B] font-medium">{cert.issuer}</span>
            <span className="flex items-center gap-0.5"><Calendar className="h-2.5 w-2.5" />{cert.date}</span>
          </div>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 text-slate-400">
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="border-t border-[#1E2F5A] px-4 pb-4 pt-3 flex flex-col gap-3">
              <p className="text-xs text-slate-300 leading-relaxed">{cert.description}</p>
              {cert.credentialId && (
                <p className="text-[10px] text-slate-500">ID: {cert.credentialId}</p>
              )}
              {/* Certificate image */}
              <div className="relative overflow-hidden rounded-lg border border-[#1E2F5A] bg-[#0A1128]">
                <Image
                  src={cert.imageUrl}
                  alt={`${cert.title} certificate`}
                  width={500}
                  height={350}
                  className="w-full object-cover"
                />
              </div>
              {cert.verifyUrl && (
                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
                  className="flex w-fit items-center gap-1 text-[11px] font-medium text-[#F59E0B] hover:underline"
                >
                  <ExternalLink className="h-3 w-3" /> Verify Credential
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Fade-up for values ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

/* ══════════════════════════════════════════════════════════════ */
export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <Badge variant="outline" className="border-[#F59E0B]/40 text-[#F59E0B] text-xs uppercase tracking-widest px-4 py-1">
            About Me
          </Badge>
        </motion.div>

        {/* ══ TOP ROW: Bio left | Certs right ══ */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 items-start">

          {/* ─── Left: Bio (order-1 on mobile, order-1 on desktop) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="order-1 flex flex-col gap-5"
          >
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl xl:text-4xl">
              I Build Customer Experiences That{' '}
              <span className="text-[#F59E0B]">Drive Loyalty</span> — Not Just Satisfaction
            </h2>

            <div className="flex flex-col gap-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                With over <strong className="text-foreground font-semibold">8 years in customer experience</strong>, I have
                led support teams, designed service strategies, and solved some of the toughest CX challenges in telecom,
                fintech, and e-commerce across Africa.
              </p>
              <p>
                My approach combines sharp analytical thinking with genuine human empathy. Exceptional customer service
                isn&apos;t a cost centre — it&apos;s your most powerful growth lever. I build systems, playbooks, and
                teams that prove it every quarter.
              </p>
              <p>
                I&apos;m available for <strong className="text-foreground font-semibold">consulting, fractional CX
                leadership, and advisory roles</strong> with ambitious companies that genuinely care about their customers.
              </p>
            </div>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-2 mt-1">
              {[
                { emoji: '🏆', text: 'Top CSR — 6 quarters in a row' },
                { emoji: '🌍', text: 'Led teams across 3 countries' },
                { emoji: '📈', text: 'CSAT: 61% → 94%' },
              ].map(({ emoji, text }) => (
                <div key={text}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm"
                >
                  <span>{emoji}</span><span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── Right: Certifications accordion (force-dark) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="order-2 rounded-2xl border border-[#1E2F5A] bg-[#0A1128] p-5"
          >
            {/* Mini header */}
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">
                Professional Certifications
              </p>
              <span className="rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-2.5 py-0.5 text-[10px] font-bold text-[#F59E0B]">
                {certificates.length}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {certificates.map(cert => (
                <CertCard key={cert.id} cert={cert} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ══ BOTTOM ROW: Values process-step style ══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-2">My Approach</p>
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">Simple Philosophy. Powerful Results.</h3>
          </div>

          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* connector line on desktop */}
            <div className="absolute top-7 left-[12.5%] right-[12.5%] hidden h-px lg:block"
              style={{ background: 'linear-gradient(90deg, transparent, #F59E0B40, #F59E0B40, transparent)' }}
            />
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title} custom={i} initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-card shadow-md">
                  <div className="absolute inset-1 rounded-full border border-[#F59E0B]/20" />
                  <Icon className="h-6 w-6 text-[#F59E0B]" />
                  <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#F59E0B] text-[10px] font-bold text-[#0A1128]">
                    {i + 1}
                  </span>
                </div>
                <h4 className="mb-1.5 font-bold text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      
      </div>
    </section>
  );
}
