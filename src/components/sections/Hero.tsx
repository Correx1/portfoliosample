'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="force-dark relative min-h-screen overflow-hidden"
    >
      {/* ── Subtle grid overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#F59E0B 1px, transparent 1px), linear-gradient(90deg, #F59E0B 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] rounded-full bg-[#F59E0B]/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-[#2563EB]/[0.07] blur-[80px] pointer-events-none" />

      {/* ══════════════════════════════════════════
          MOBILE LAYOUT  — photo is full background
      ══════════════════════════════════════════ */}
      <div className="relative flex min-h-screen flex-col lg:hidden">
        {/* Full-bleed photo background on mobile */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-photo.jpg"
            alt="Victoria – Customer Experience Specialist"
            fill
            className="object-cover object-top"
            priority
            onError={() => {/* silently handle missing image */}}
          />
          {/* Dark gradient overlay so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/75 to-[#0A1128]/30" />
        </div>

        {/* Mobile text content — pinned to bottom */}
        <div className="relative z-10 mt-auto px-6 pb-16 pt-28 text-left">
          {/* Role badge */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F59E0B]"
          >
            Customer Experience Specialist
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Turning Frustrated Customers Into{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Loyal Advocates
            </span>
          </motion.h1>

          {/* Sub copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-4 text-sm leading-relaxed text-slate-300"
          >
            I&apos;m <strong className="text-white font-semibold">Victoria</strong> — a Customer
            Experience Specialist with 8+ years building world-class support teams, designing CX
            strategies, and delivering metrics that actually matter to the business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#F59E0B] text-[#0A1128] font-bold px-7 hover:bg-[#D97706] hover:shadow-[0_0_24px_rgba(245,158,11,0.5)] transition-all duration-300"
            >
              <Link href="#contact">Hire Me</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/30 bg-white/5 text-white px-7 backdrop-blur-sm hover:border-[#F59E0B]/60 hover:text-[#F59E0B] hover:bg-[#F59E0B]/5 transition-all duration-300"
            >
              <Link href="#projects">View Portfolio</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP LAYOUT  — text left, photo right
      ══════════════════════════════════════════ */}
      <div className="hidden lg:flex min-h-screen items-center">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-12 px-8 pt-20 xl:px-12">

          {/* ─── Left: Text Content ─── */}
          <div className="flex max-w-xl flex-col gap-6">
            {/* Role label */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F59E0B]"
            >
              Customer Experience Specialist
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-extrabold leading-[1.08] tracking-tight text-white xl:text-6xl"
            >
              Turning Frustrated Customers Into{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 60%, #F59E0B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Loyal Advocates
              </span>
            </motion.h1>

            {/* Sub copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-base leading-relaxed text-slate-400"
            >
              I&apos;m <strong className="text-white font-semibold">Victoria</strong> — a Customer
              Experience Specialist with 8+ years building world-class support teams, designing CX
              strategies, and delivering metrics that actually matter to the business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#F59E0B] text-[#0A1128] font-bold px-9 text-base hover:bg-[#D97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300"
              >
                <Link href="#contact">Hire Me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/20 bg-transparent text-white px-9 text-base hover:border-[#F59E0B]/60 hover:text-[#F59E0B] hover:bg-[#F59E0B]/5 transition-all duration-300"
              >
                <Link href="#projects">View Portfolio</Link>
              </Button>
            </motion.div>
          </div>

          {/* ─── Right: Photo Frame ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            {/* Outer decorative ring */}
            <div className="absolute -inset-5 rounded-full border border-[#F59E0B]/15 animate-[spin_20s_linear_infinite]" />

            {/* Mid decorative ring  */}
            <div className="absolute -inset-2 rounded-full border border-[#2563EB]/20" />

            {/* Glow behind photo */}
            <div className="absolute inset-0 rounded-full bg-[#F59E0B]/10 blur-2xl" />

            {/* Oval frame with layered navy backgrounds — mirrors reference */}
            <div className="relative h-[380px] w-[310px] xl:h-[440px] xl:w-[360px] overflow-hidden rounded-full border-4 border-[#121E3E] shadow-2xl shadow-[#0A1128]"
              style={{ background: 'linear-gradient(160deg, #1E2F5A 0%, #0A1128 60%)' }}
            >
              {/* Decorative inner oval ring — depth effect */}
              <div className="absolute inset-4 rounded-full border border-[#1E2F5A]/60 z-10 pointer-events-none" />

              {/* Actual photo */}
              <Image
                src="/hero-photo.jpg"
                alt="Victoria – Customer Experience Specialist"
                fill
                className="object-cover object-top"
                priority
              />

              {/* Fallback initials when photo not present */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-end pb-10 z-20"
                style={{
                  background:
                    'linear-gradient(to top, #0A1128 0%, #0A1128/60 40%, transparent 70%)',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
