'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/lib/data/experience';
import { CheckCircle2, Calendar, MapPin } from 'lucide-react';

/* Colour accent per role — cycles if more are added */
const ROLE_ACCENTS = ['#F59E0B', '#2563EB', '#F59E0B', '#2563EB'];

export default function Experience() {
  return (
    <section id="experience" className="section-pad force-dark relative overflow-hidden">
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F59E0B 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <Badge variant="outline" className="border-[#F59E0B]/40 text-[#F59E0B] text-xs uppercase tracking-widest px-4 py-1 mb-4">
            Career Journey
          </Badge>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            8+ Years of{' '}
            <span className="text-[#F59E0B]">Customer Experience</span>{' '}
            Leadership
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-400 text-sm leading-relaxed">
            From frontline representative to senior CX Manager — every role shaped by a
            relentless focus on customer outcomes and operational excellence.
          </p>
        </motion.div>

        {/* ── Experience cards ── */}
        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => {
            const accent = ROLE_ACCENTS[i % ROLE_ACCENTS.length];

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              >
                <div
                  className="group relative overflow-hidden rounded-2xl border border-[#1E2F5A] bg-[#121E3E]/80 p-6 transition-all duration-300 hover:border-opacity-60 hover:shadow-xl sm:p-7"
                  style={{ '--accent': accent } as React.CSSProperties}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: accent }}
                  />

                  {/* Subtle glow behind card on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${accent}08 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative pl-4">
                    {/* ── Top row: role info + current badge ── */}
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div>
                        {exp.isCurrent && (
                          <span
                            className="mb-2 inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                            style={{
                              backgroundColor: `${accent}18`,
                              color: accent,
                              border: `1px solid ${accent}30`,
                            }}
                          >
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: accent }} />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                            </span>
                            Current Role
                          </span>
                        )}
                        <h3 className="text-lg font-extrabold text-white sm:text-xl">
                          {exp.role}
                        </h3>
                        <p
                          className="mt-0.5 text-sm font-semibold"
                          style={{ color: accent }}
                        >
                          {exp.company}
                        </p>
                      </div>

                      {/* Meta (date + type) */}
                      <div className="flex flex-row gap-3 sm:flex-col sm:items-end sm:gap-1 mt-1 sm:mt-0 shrink-0">
                        <span className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-400">
                          <MapPin className="h-3 w-3" />
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      className="my-5 h-px w-full opacity-20"
                      style={{ backgroundColor: accent }}
                    />

                    {/* ── Highlights ── */}
                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 opacity-80"
                            style={{ color: accent }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom summary strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 grid grid-cols-3 divide-x divide-[#1E2F5A] rounded-2xl border border-[#1E2F5A] bg-[#121E3E]/60 overflow-hidden"
        >
          {[
            { value: '8+', label: 'Years in CX' },
            { value: '4', label: 'Industries' },
            { value: '100+', label: 'Agents Mentored' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center py-5 px-4 text-center">
              <span className="text-2xl font-extrabold text-[#F59E0B]">{value}</span>
              <span className="mt-1 text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
