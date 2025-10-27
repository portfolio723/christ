
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Good Friday',
  description: 'No day in history is called GOOD FRIDAY except the day JESUS gave His life for you!',
};

export default function GoodFridayPage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://godsspiritsays.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://godsspiritsays.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Good Friday",
                "item": "https://godsspiritsays.com/blog/good-friday"
              }
            ]
          })
        }}
      />
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            No day in history is called 𝐆𝐎𝐎𝐃 𝐅𝐑𝐈𝐃𝐀𝐘 except the day 𝐉𝐄𝐒𝐔𝐒 gave His life for you! 😇Happy Friday!
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/7bg.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p>There are 52 Fridays in a year some years may have more, some less.</p>
            <p>but none are called 𝐆𝐎𝐎𝐃 𝐅𝐑𝐈𝐃𝐀𝐘 😇, except one. 𝐉𝐄𝐒𝐔𝐒 chose that day to lay down His life for you, and He called it &ldquo;good&rdquo; 🥹🫶🏻</p>
            <p>He shed His blood 🩸and gave His final breath especially for you 🫵🏻</p>
            <p>He willingly gave Himself, because His love for you is that deep 🫂🤍❤️</p>
            <br />
            <hr className="my-8 border-primary/50" />
            <br />
            <div className="text-lg" lang="te">
              <p>ఒక సంవత్సరంలో 52 శుక్రవారాలు ఉంటాయి, కొన్ని సంవత్సరాలలో ఎక్కువ ఉండవచ్చు, కొన్ని తక్కువ ఉండవచ్చు.</p>
              <p>కానీ వేటినీ 𝐆𝐎𝐎𝐃 𝐅𝐑𝐈𝐃𝐀𝐘  (మంచి శుక్రువారం )😇 అని పిలవరు, ఆ ఒక్క  శుక్రువారం తప్ప. యేసయ్య మీ కోసం తన ప్రాణాన్ని అర్పించడానికి ఆ రోజును ఎంచుకున్నాడు మరియు దానిని &ldquo;మంచి&rdquo; అని పిలిచాడు 🥹🫶🏻</p>
              <br />
              <p>ఆయన తన రక్తాన్ని చిందించాడు 🩸 మరియు ముఖ్యంగా మీ కోసం తన తుది శ్వాసను ఇచ్చాడు 🫵🏻</p>
              <p>ఆయన ఇష్టపూర్వకంగా తనను తాను అర్పించుకున్నాడు, ఎందుకంటే ఆయనకి మీ పట్ల ప్రేమ అంత లోతైనది 🫂🤍❤️</p>
            </div>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
