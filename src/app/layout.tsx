
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Dancing_Script, Yesteryear, Mea_Culpa, Allison, Lavishly_Yours, Oleo_Script, Condiment, Great_Vibes, Bonheur_Royale, Mrs_Saint_Delafield, Cookie, Love_Light, Alex_Brush, Hurricane, Arizonia, Fasthand, Mr_Dafoe, Pinyon_Script, Engagement, The_Nautigal } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/page/header';
import { cn } from '@/lib/utils';
import Script from 'next/script';

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
  metadataBase: new URL('https://godsspiritsays.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Godsspiritsays: Encouragement, Faith & Hearing God\'s Voice',
    template: '%s | Godsspiritsays',
  },
  description: 'A spiritual resource for encouragement, faith, and hearing what God\'s Spirit says. Explore video teachings, blog posts, and testimonies to deepen your walk with God.',
  openGraph: {
    title: 'Godsspiritsays: Encouragement, Faith & Hearing God\'s Voice',
    description: 'Find encouragement and faith through video teachings, blog posts, and testimonies. Deepen your walk with God and hear what His Spirit says.',
    url: 'https://godsspiritsays.com',
    siteName: 'Godsspiritsays',
    images: [
      {
        url: 'https://godsspiritsays.com/obg.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Godsspiritsays: Encouragement, Faith & Hearing God\'s Voice',
    description: 'Find encouragement and faith through video teachings, blog posts, and testimonies. Deepen your walk with God and hear what His Spirit says.',
    creator: '@godsspiritsays',
    images: ['https://godsspiritsays.com/obg.jpeg'],
  },
  icons: {
    icon: '/favicon.ico',
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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QG6T0V9CYB"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QG6T0V9CYB');
          `}
        </Script>
        <meta name="google-site-verification" content="zjlJZ97nJErhI_mgAEgGU-PifACNukcCwgoZo6Khifc" />
        <link rel="preload" href="/butterflies.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/hero.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/eagle.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/blog.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/test.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/sd.mp4" as="video" type="video/mp4" />
        <link rel="icon" type="image/x-icon" sizes="any" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://godsspiritsays.com/#organization",
              "name": "God's Spirit Says",
              "alternateName": "GodsspiritSays",
              "url": "https://godsspiritsays.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://godsspiritsays.com/fav.ico",
                "width": 1200,
                "height": 630,
                "caption": "God's Spirit Says - Christian Ministry Logo"
              },
              "description": "A Christian ministry dedicated to spiritual encouragement, inner healing, and strengthening believers through God's word and teaching videos.",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Ministry Founder Name"
              },
              "email": "godsspiritsays@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.youtube.com/@GodsspiritSays",
                "https://t.me/GodsspiritSaysOfficial",
                "https://www.threads.com/@godsspiritsays",
                "https://www.instagram.com/godsspiritsays",
                "https://x.com/godsspiritsays"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Ministry Support",
                "availableLanguage": ["English"],
                "email": "godsspiritsays@gmail.com"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://godsspiritsays.com/#website",
              "url": "https://godsspiritsays.com",
              "name": "God's Spirit Says - Broken vessels will spark more when touched by Jesus",
              "alternateName": "GodsspiritSays",
              "description": "Spiritual encouragement, inner healing, and Christian teaching to uplift and strengthen your inner man through Jesus Christ.",
              "inLanguage": "en-US",
              "publisher": {
                "@id": "https://godsspiritsays.com/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://godsspiritsays.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
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

    