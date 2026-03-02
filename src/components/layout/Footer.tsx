import Link from 'next/link';
import { Star, Mail, Phone, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@victoria.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="">
  
        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#1E2F5A] pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Victoria. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built by Chukwu Raphael
          </p>
          <Link
            href="#hero"
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1E2F5A] text-slate-400 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all duration-200"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </Link>
       </div>
    </footer>
  );
}
