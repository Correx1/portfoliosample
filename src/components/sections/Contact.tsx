'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Phone, MapPin, Linkedin, Twitter, Send, CheckCircle2 } from 'lucide-react';

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

const CONTACT_INFO = [
  { icon: Mail,    label: 'Email',    value: 'hello@victoria-cx.com', href: 'mailto:hello@victoria-cx.com' },
  { icon: Phone,   label: 'Phone',    value: '+234 000 0000',          href: 'tel:+2340000000' },
  { icon: MapPin,  label: 'Location', value: 'Lagos, Nigeria 🇳🇬',    href: null },
];

const SOCIALS = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'Connect on LinkedIn' },
  { icon: Twitter,  href: 'https://twitter.com',  label: 'Follow on Twitter' },
  { icon: Mail,     href: 'mailto:hello@victoria-cx.com', label: 'Send an Email' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', company: '', message: '' },
  });

  const onSubmit = async (data: FormData) => {
    console.log('Form data:', data);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <Badge variant="outline" className="border-[#F59E0B]/40 text-[#F59E0B] text-xs uppercase tracking-widest px-4 py-1 mb-4">
            Let&rsquo;s Work Together
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to <span className="text-[#F59E0B]">Transform</span> Your Customer Experience?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-sm leading-relaxed">
            Whether you need a fractional CX leader, a support operations overhaul, or a
            quick strategy session — let&rsquo;s talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12 items-start">

          {/* ─── LEFT: Form (3 cols) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <CheckCircle2 className="h-16 w-16 text-[#F59E0B]" />
                <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Thank you for reaching out. I&rsquo;ll get back to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 border-[#F59E0B]/40 text-[#F59E0B] hover:bg-[#F59E0B]/10"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" className="border-border bg-background focus:border-[#F59E0B]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jane@company.com" className="border-border bg-background focus:border-[#F59E0B]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="company" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Company / Organization</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name (optional)" className="border-border bg-background focus:border-[#F59E0B]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Your Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your CX challenge or what you're looking for..."
                          rows={5}
                          className="border-border bg-background focus:border-[#F59E0B] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-[#F59E0B] text-[#0A1128] font-bold py-6 hover:bg-[#D97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300 disabled:opacity-60"
                  >
                    {form.formState.isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0A1128] border-t-transparent" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>

          {/* ─── RIGHT: Contact Info (2 cols) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
                Direct Contact
              </h3>
              <ul className="flex flex-col gap-4">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F59E0B]/10">
                      <Icon className="h-4 w-4 text-[#F59E0B]" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-foreground hover:text-[#F59E0B] transition-colors duration-200">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
                Connect Online
              </h3>
              <div className="flex flex-col gap-2">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg p-2 text-sm text-muted-foreground hover:bg-secondary hover:text-[#F59E0B] transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
