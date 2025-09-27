import type { Metadata } from 'next';
import { Inter, Playfair_Display, Dancing_Script, Yesteryear, Mea_Culpa, Allison, Lavishly_Yours } from 'next/font/google';
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

const fontYesteryear = Yesteryear({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-yesteryear',
  weight: '400',
});

const fontMeaCulpa = Mea_Culpa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mea-culpa',
  weight: '400',
});

const fontAllison = Allison({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-allison',
  weight: '400',
});

const fontLavishlyYours = Lavishly_Yours({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lavishly-yours',
  weight: '400',
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
          fontYesteryear.variable,
          fontMeaCulpa.variable,
          fontAllison.variable,
          fontLavishlyYours.variable
        )}
      >
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
