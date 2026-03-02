import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DarkModeBackground from '@/components/layout/DarkModeBackground';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://victoria-cx.com'),
  title: {
    default: 'Victoria | Customer Experience Specialist',
    template: '%s | Victoria',
  },
  description:
    'Award-winning Customer Experience Specialist with 8+ years transforming support teams, boosting CSAT scores, and turning frustrated customers into loyal advocates. Available for consulting and leadership roles.',
  keywords: [
    'Customer Experience Specialist',
    'CX Consultant',
    'Customer Service Manager',
    'CSAT Improvement',
    'Client Success',
    'Support Operations',
    'Customer Retention',
  ],
  authors: [{ name: 'Victoria' }],
  creator: 'Victoria',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://victoria-cx.com',
    title: 'Victoria | Customer Experience Specialist',
    description:
      'Award-winning CX Specialist | 94% CSAT | $1.2M ARR Saved | Available for hire.',
    siteName: 'Victoria CX Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victoria | Customer Experience Specialist',
    description:
      'Award-winning CX Specialist | 94% CSAT | $1.2M ARR Saved | Available for hire.',
    creator: '@victoria_cx',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={dmSans.variable}>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <DarkModeBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
