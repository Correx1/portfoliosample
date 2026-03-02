'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/data/testimonials';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
      },
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section id="testimonials" className="section-pad force-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] to-[#0A1128] pointer-events-none" />
      <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-[#F59E0B]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-[#2563EB]/[0.04] blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <Badge variant="outline" className="border-[#F59E0B]/40 text-[#F59E0B] text-xs uppercase tracking-widest px-4 py-1 mb-4">
            Social Proof
          </Badge>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What <span className="text-[#F59E0B]">Leaders</span> Say
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-400 text-sm leading-relaxed">
            The people I&rsquo;ve worked with — and the results we built together.
          </p>
        </motion.div>

        {/* ── Embla Carousel ── */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                /* 1 per view on mobile, 2 per view on md+ */
                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)]"
              >
                <Card className="h-full border-[#1E2F5A] bg-[#121E3E]/80">
                  <CardContent className="p-6 flex flex-col gap-5 h-full">
                    <Quote className="h-7 w-7 text-[#F59E0B]/40 shrink-0" />

                    <blockquote className="text-sm text-slate-300 leading-relaxed italic flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-3 pt-3 border-t border-[#1E2F5A]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-[#0A1128] text-sm font-bold">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-slate-400">{t.role}, {t.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* ── Dot Indicators ── */}
        <div className="mt-8 flex justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? 'w-6 bg-[#F59E0B]'
                  : 'w-2 bg-[#1E2F5A] hover:bg-[#F59E0B]/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
