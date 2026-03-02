'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide entirely on portfolio case-study pages — must be after hooks
  if (pathname.startsWith('/portfolio/')) return null;

  const navBg = scrolled
    ? 'bg-navy/90 backdrop-blur-md border-b border-[#1E2F5A] shadow-lg'
    : 'bg-transparent';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F59E0B] shadow-md group-hover:shadow-[0_0_16px_rgba(245,158,11,0.5)] transition-shadow duration-300">
            <Star className="h-5 w-5 text-[#0A1128] fill-[#0A1128]" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Victoria<span className="text-[#F59E0B]">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-[#F59E0B] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle — commented out, dark mode is default
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1E2F5A] text-slate-300 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all duration-200"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}
          */}

          {/* Hire Me CTA */}
          <Button
            asChild
            size="sm"
            className="hidden lg:inline-flex bg-[#F59E0B] text-[#0A1128] font-semibold hover:bg-[#D97706] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-200"
          >
            <Link href="#contact">Hire Me</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1E2F5A] text-slate-300 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all duration-200 lg:hidden"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 border-[#1E2F5A] bg-[#0A1128] text-white"
            >
              <div className="flex flex-col gap-6 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F59E0B]">
                    <Star className="h-4 w-4 text-[#0A1128] fill-[#0A1128]" />
                  </div>
                  <span className="text-base font-bold text-white">
                    Victoria<span className="text-[#F59E0B]">.</span>
                  </span>
                </div>
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 hover:bg-[#121E3E] hover:text-[#F59E0B] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-4 w-full bg-[#F59E0B] text-[#0A1128] font-semibold hover:bg-[#D97706]"
                >
                  <Link href="#contact" onClick={() => setMobileOpen(false)}>
                    Hire Me
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
