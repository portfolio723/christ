
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Dancing_Script, Yesteryear, Mea_Culpa, Allison, Lavishly_Yours, Oleo_Script, Condiment, Great_Vibes, Bonheur_Royale, Mrs_Saint_Delafield, Cookie, Love_Light, Alex_Brush, Hurricane, Arizonia, Fasthand, Mr_Dafoe, Pinyon_Script, Engagement, The_Nautigal } from 'next/font/google';
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

const fontLoveLight = Love_Light({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-love-light',
  weight: '400',
});

const fontAlexBrush = Alex_Brush({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alex-brush',
  weight: '400',
});

const fontHurricane = Hurricane({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hurricane',
  weight: '400',
});

const fontArizonia = Arizonia({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arizonia',
  weight: '400',
});

const fontFasthand = Fasthand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fasthand',
  weight: '400',
});

const fontMrDafoe = Mr_Dafoe({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mr-dafoe',
  weight: '400',
});

const fontPinyonScript = Pinyon_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pinyon-script',
  weight: '400',
});

const fontEngagement = Engagement({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-engagement',
  weight: '400',
});

const fontTheNautigal = The_Nautigal({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-the-nautigal',
  weight: ['400', '700'],
});


export const metadata: Metadata = {
  title: {
    default: 'Godsspiritsays',
    template: '%s | Godsspiritsays',
  },
  description: 'A spiritual resource for encouragement, faith, and hearing what God\'s Spirit says. Explore video teachings, blog posts, and testimonies to deepen your walk with God.',
  icons: {
    icon: '/fav.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="zjlJZ97nJErhI_mgAEgGU-PifACNukcCwgoZo6Khifc" />
        <link rel="preload" href="/butterflies.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/hero.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/eagle.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/blog.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/test.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/sd.mp4" as="video" type="video/mp4" />
      </head>
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
          fontCookie.variable,
          fontLoveLight.variable,
          fontAlexBrush.variable,
          fontHurricane.variable,
          fontArizonia.variable,
          fontFasthand.variable,
          fontMrDafoe.variable,
          fontPinyonScript.variable,
          fontEngagement.variable,
          fontTheNautigal.variable
        )}
      >
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
