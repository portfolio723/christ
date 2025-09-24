import type { Metadata } from 'next';
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/page/header';
import { cn } from '@/lib/utils';

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const fontHeadline = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
});

const fontScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-script',
});

export const metadata: Metadata = {
  title: 'Godspirit',
  description: 'She prospers in all that she does. Psalms 1:3',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'font-body antialiased',
          fontBody.variable,
          fontHeadline.variable,
          fontScript.variable,
        )}
      >
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
