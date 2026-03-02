import { ThemeProvider } from '@/providers/ThemeProvider';

/* Portfolio slug pages get their own layout — no Navbar / Footer */
export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
