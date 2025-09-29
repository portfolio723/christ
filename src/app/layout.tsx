import type { Metadata } from 'next';
import { Inter, Playfair_Display, Dancing_Script, Yesteryear, Mea_Culpa, Allison, Lavishly_Yours, Oleo_Script, Condiment, Great_Vibes, Bonheur_Royale, Mrs_Saint_Delafield, Cookie } from 'next/font/google';
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

const fontOleoScript = Oleo_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oleo-script',
  weight: ['400', '700'],
});

const fontCondiment = Condiment({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-condiment',
  weight: '400',
});

const fontGreatVibes = Great_Vibes({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-great-vibes',
  weight: '400',
});

const fontBonheurRoyale = Bonheur_Royale({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bonheur-royale',
  weight: '400',
});

const fontMrsSaintDelafield = Mrs_Saint_Delafield({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mrs-saint-delafield',
  weight: '400',
});

const fontCookie = Cookie({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cookie',
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
          fontLavishlyYours.variable,
          fontOleoScript.variable,
          fontCondiment.variable,
          fontGreatVibes.variable,
          fontBonheurRoyale.variable,
          fontMrsSaintDelafield.variable,
          fontCookie.variable
        )}
      >
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
