import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { projects, getProjectBySlug } from '@/lib/data/projects';
import { ArrowLeft, CheckCircle2, Quote, Wrench, BarChart3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

/* ── Static params for SSG ── */
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* ── Dynamic SEO metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Victoria CX Portfolio`,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: [{ url: project.thumbnail }],
    },
  };
}

/* ══════════════════════════════════════════════════════════════ */
export default async function PortfolioSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#0A1128] text-white">

      {/* ─── Slim top bar with back link ─── */}
      <div className="sticky top-0 z-50 flex items-center gap-3 border-b border-[#1E2F5A] bg-[#0A1128] px-4 py-3 sm:px-8 lg:px-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-[#F59E0B] transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
        <span className="text-[#1E2F5A]">|</span>
        <span className="text-xs text-slate-500 truncate">{project.title}</span>
      </div>

      {/* ════════════════════════════════════════════
          HERO — full-bleed image with text overlay
      ════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        {/* Background image */}
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark gradient overlay — bottom heavy */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-[#0A1128]/20" />


        {/* Hero text — anchored to bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-10 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge
                variant="outline"
                className="border-[#F59E0B]/40 bg-[#F59E0B]/10 text-[#F59E0B] text-[10px] uppercase tracking-widest"
              >
                {project.category}
              </Badge>
              <Badge
                variant="outline"
                className="border-white/20 bg-white/5 text-slate-300 text-[10px] uppercase tracking-widest"
              >
                {project.industry}
              </Badge>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-2 text-base text-[#F59E0B] font-medium sm:text-lg">
              {project.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          BODY CONTENT
      ════════════════════════════════════════════ */}
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-8 lg:px-4 space-y-20">

        {/* ── Overview ── */}
        <section>
          <SectionLabel icon={<BarChart3 className="h-4 w-4" />} label="Overview" />
          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>
          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-3xl">
            {project.challenge}
          </p>
        </section>

        {/* ── Key Results — big number grid ── */}
        <section>
          <SectionLabel icon={<BarChart3 className="h-4 w-4" />} label="Results" />
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.results.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl border border-[#1E2F5A] bg-[#121E3E] px-5 py-6 text-center hover:border-[#F59E0B]/30 transition-colors duration-300"
              >
                <p className="text-2xl font-extrabold text-[#F59E0B] sm:text-3xl">{r.value}</p>
                <p className="mt-1.5 text-xs text-slate-400 leading-snug">{r.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Approach — numbered steps ── */}
        <section>
          <SectionLabel icon={<CheckCircle2 className="h-4 w-4" />} label="How I Did It" />
          <ol className="mt-6 flex flex-col gap-5">
            {project.approach.map((step, i) => (
              <li key={step} className="flex items-start gap-4 group">
                {/* Step number */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 text-sm font-bold text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-[#0A1128] transition-all duration-200">
                  {i + 1}
                </div>
                {/* Step text */}
                <div className="flex-1 pt-1.5 border-b border-[#1E2F5A] pb-5 last:border-0 last:pb-0">
                  <p className="text-sm text-slate-200 leading-relaxed">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Tools Used ── */}
        <section>
          <SectionLabel icon={<Wrench className="h-4 w-4" />} label="Tools & Platforms" />
          <div className="mt-5 flex flex-wrap gap-2.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[#1E2F5A] bg-[#121E3E] px-4 py-1.5 text-sm font-medium text-slate-300 hover:border-[#F59E0B]/40 hover:text-[#F59E0B] transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* ── Client Quote ── (only if present) */}
        {project.quote && (
          <section>
            <div className="relative overflow-hidden rounded-2xl border border-[#F59E0B]/20 bg-[#F59E0B]/[0.04] px-8 py-10">
              {/* Large quote mark */}
              <Quote className="absolute -top-3 -left-2 h-20 w-20 text-[#F59E0B]/[0.06]" />
              <blockquote className="relative z-10 text-lg font-medium italic text-slate-200 leading-relaxed sm:text-xl">
                &ldquo;{project.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F59E0B] text-[#0A1128] text-sm font-bold shrink-0">
                  {project.quoteAuthor?.charAt(0) ?? 'C'}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{project.quoteAuthor}</p>
                  <p className="text-xs text-slate-400">{project.quoteRole}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Bottom CTA ── */}
        <section className="rounded-2xl border border-[#1E2F5A] bg-[#121E3E] px-8 py-10 text-center">
          <p className="text-2xl font-bold text-white">
            Ready to achieve similar results?
          </p>
          <p className="mt-2 text-sm text-slate-400 max-w-md mx-auto">
            Let&rsquo;s discuss your CX challenge and how I can help transform your customer experience.
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-8 py-3 text-sm font-bold text-[#0A1128] hover:bg-[#D97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-200"
          >
            Start the Conversation →
          </Link>
        </section>

      </div>
    </main>
  );
}

/* ── Reusable section label ── */
function SectionLabel({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center justify-center rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20 p-1.5 text-[#F59E0B]">
        {icon}
      </div>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F59E0B]">
        {label}
      </span>
      <div className="flex-1 h-px bg-[#1E2F5A]" />
    </div>
  );
}
