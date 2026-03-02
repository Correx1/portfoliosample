'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data/projects';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />

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
            Case Studies
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Projects That Moved the{' '}
            <span className="text-[#F59E0B]">Needle</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground text-sm">
            Real challenges. Proven strategies. Measurable results.
          </p>
        </motion.div>

        {/* ── Project rows ── */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0; // even = image left / odd = image right
            const bullets = project.results.map(r => `${r.value} — ${r.label}`);

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* ── Outer card — both panels live inside this ── */}
                <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-xl hover:border-[#F59E0B]/30 transition-all duration-300">

                  {/* Grid: 2 cols on md+, stacked on mobile */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 ${isEven ? '' : 'md:[&>*:first-child]:order-2'}`}>

                    {/* ─── Image Panel ─── */}
                    <div className="relative min-h-[260px] md:min-h-[360px] overflow-hidden">
                      {/* Gold top bar */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F59E0B] z-10" />

                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      />

                      {/* Dark overlay so the image doesn't look raw */}
                      <div className="absolute inset-0 bg-[#0A1128]/20 group-hover:bg-[#0A1128]/10 transition-colors duration-300" />

                      {/* Bottom labels */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                        <span className="rounded-full border border-[#F59E0B]/40 bg-[#0A1128]/70 px-3 py-1 text-[10px] font-medium text-[#F59E0B] backdrop-blur-sm">
                          {project.category}
                        </span>
                        <span className="rounded-full border border-white/10 bg-[#0A1128]/60 px-3 py-1 text-[10px] text-slate-300 backdrop-blur-sm">
                          {project.industry}
                        </span>
                      </div>
                    </div>

                    {/* ─── Content Panel ─── */}
                    <div className="flex flex-col justify-center gap-4 px-6 py-7 sm:px-8">
                      {/* Step number */}
                      <span className="text-5xl font-black leading-none select-none text-[#F59E0B]/10">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* Title */}
                      <div>
                        <h3 className="text-lg font-extrabold text-foreground sm:text-xl leading-snug">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-[#F59E0B]">
                          {project.industry}
                        </p>
                      </div>

                      {/* Brief description — 2 sentences max */}
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description.split('.').slice(0, 2).join('.')}.
                      </p>

                      {/* Key results as bullets */}
                      <ul className="flex flex-col gap-1.5">
                        {bullets.map(b => (
                          <li key={b} className="flex items-start gap-2 text-xs text-foreground">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F59E0B]" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/8 px-4 py-2 text-xs font-semibold text-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#0A1128] transition-all duration-200 group/btn"
                      >
                        Read Full Case Study
                        <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:rotate-12 transition-transform duration-200" />
                      </Link>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#F59E0B] hover:underline underline-offset-4"
          >
            Have a CX challenge? Let&rsquo;s talk →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
