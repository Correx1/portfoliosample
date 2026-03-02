'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Award, ChevronDown, ExternalLink, Calendar } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  imageUrl?: string;
  verifyUrl?: string;
}

const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Customer Experience Professional (CCXP)',
    issuer: 'Customer Experience Professionals Association (CXPA)',
    date: 'March 2023',
    credentialId: 'CCXP-2023-0847',
    description:
      'The globally recognized certification for Customer Experience leaders, validating expertise in CX strategy, customer insight, design, culture & accountability, and measurement.',
    imageUrl: '/certs/ccxp.jpg',
    verifyUrl: 'https://cxpa.org/verify',
  },
  {
    id: 'cert-2',
    title: 'Zendesk Support Administrator',
    issuer: 'Zendesk',
    date: 'August 2022',
    credentialId: 'ZD-SA-2022-5531',
    description:
      'Certified proficiency in configuring, managing, and optimizing Zendesk Support Suite — including workflows, SLAs, automations, triggers, and advanced reporting.',
    imageUrl: '/certs/zendesk.jpg',
    verifyUrl: 'https://zendesk.com/training',
  },
  {
    id: 'cert-3',
    title: 'Salesforce Certified Service Cloud Consultant',
    issuer: 'Salesforce',
    date: 'January 2022',
    credentialId: 'SF-SCC-2022-1192',
    description:
      'Advanced certification demonstrating the ability to design and implement Salesforce Service Cloud solutions that meet customer business requirements within a specified timeframe.',
    imageUrl: '/certs/salesforce.jpg',
    verifyUrl: 'https://trailhead.salesforce.com',
  },
  {
    id: 'cert-4',
    title: 'HubSpot Customer Service Certification',
    issuer: 'HubSpot Academy',
    date: 'June 2021',
    description:
      'Comprehensive certification covering proactive customer service strategies, creating customer feedback surveys, building a customer-first culture, and leveraging the HubSpot CRM for support excellence.',
    imageUrl: '/certs/hubspot.jpg',
    verifyUrl: 'https://academy.hubspot.com',
  },
  {
    id: 'cert-5',
    title: 'Six Sigma Yellow Belt',
    issuer: 'ASQ (American Society for Quality)',
    date: 'November 2020',
    credentialId: 'ASQ-YB-2020-3371',
    description:
      'Foundation-level certification in Six Sigma methodology, applied to reducing defects in customer service processes, improving first-call resolution rates, and eliminating waste in support workflows.',
    imageUrl: '/certs/sixsigma.jpg',
  },
];

function CertCard({ cert }: { cert: Certificate }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-xl border border-[#1E2F5A] bg-[#121E3E]/80 hover:border-[#F59E0B]/40 transition-colors duration-300"
    >
      {/* Header row (always visible) */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 p-5 text-left"
        aria-expanded={open}
        aria-controls={`cert-body-${cert.id}`}
      >
        {/* Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20">
          <Award className="h-6 w-6 text-[#F59E0B]" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white leading-snug truncate">{cert.title}</h3>
          <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
            <span className="font-medium text-[#F59E0B]">{cert.issuer}</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {cert.date}
            </span>
            {cert.credentialId && (
              <span>ID: {cert.credentialId}</span>
            )}
          </div>
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-slate-400"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      {/* Accordion body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`cert-body-${cert.id}`}
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="border-t border-[#1E2F5A] px-5 pb-5 pt-4 flex flex-col gap-4">
              <p className="text-sm text-slate-300 leading-relaxed">{cert.description}</p>

              {/* Certificate image placeholder */}
              <div className="relative overflow-hidden rounded-lg border border-[#1E2F5A] bg-[#0A1128]">
                {cert.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={cert.imageUrl}
                    alt={`${cert.title} certificate`}
                    className="w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const placeholder = (e.target as HTMLImageElement)
                        .nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                ) : null}
                {/* Fallback placeholder shown when no image */}
                <div
                  className="flex h-40 w-full flex-col items-center justify-center gap-3"
                  style={{ display: cert.imageUrl ? 'none' : 'flex' }}
                >
                  <Award className="h-12 w-12 text-[#F59E0B]/40" />
                  <span className="text-xs text-slate-500">Certificate image</span>
                </div>
              </div>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-1.5 text-xs font-medium text-[#2563EB] hover:text-[#60A5FA] transition-colors duration-200"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Verify Credential
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <Badge variant="outline" className="border-[#F59E0B]/40 text-[#F59E0B] text-xs uppercase tracking-widest px-4 py-1 mb-4">
            Credentials
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Professional{' '}
            <span className="text-[#F59E0B]">Certifications</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground text-sm leading-relaxed">
            Click any certification to reveal details and view the credential.
          </p>
        </motion.div>

        {/* Cert accordion list */}
        <div className="flex flex-col gap-3">
          {certificates.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
