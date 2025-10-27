
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'No Us Without Our God',
  description: 'A life minus GOD is a worthless life. Discover why we can\'t survive without Him, just like a fish can\'t survive without water.',
};

export default function FishWithoutWaterPage() {
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
                "name": "No Us Without Our God",
                "item": "https://godsspiritsays.com/blog/fish-without-water"
              }
            ]
          })
        }}
      />
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Beloved, There is no fish🐟 without water 🌊 just as there is no us without our 𝐆𝐎𝐃 👑💒
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/8bg.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p>A life minus 𝐆𝐎𝐃 👑 is a worthless life,isn&apos;t it?</p>
            <p>what would you say?😙</p>
            <br />
            <p>just think🤔💭, how wasteful is it for fish 🐡 to continue living without water 🌊 ? Similarly, continuing our lives without our 𝐆𝐎𝐃 👑 is Growing without water 🌊 like a fish 🐠 ...Hold on for a minute!...Does fish 🦈 grow with out water 🌊? Is there really a guarantee that it will survive?🤷‍♀️</p>
            <br />
            <p>That&apos;s impossible🙅‍♀️, right?!</p>
            <br />
            <p>we couldn&apos;t grow 🌱 in our life without OUR 𝐆𝐎𝐃 👑 not even survive.</p>
            <br />
            <p>yes Beloved💙</p>
            <br />
            <p>I cannot even visualize more my life without 𝐇𝐈𝐌.</p>
            <br />
            <p>And you?! 🫵🏻😉</p>
            <br />
            <p>I believe you&apos;re just exactly me...🤝🏻🤗⭐</p>
            <br />
            <hr className="my-8 border-primary/50" />
            <br />
            <div className="text-lg" lang="te">
              <p>యేసయ్య  👑 లేని జీవితం విలువలేని జీవితం, కాదా?</p>
              <p>మీరు ఏమంటారు?😙</p>
              <br />
              <p>ఒక్కసారి ఆలోచించండి🤔💭, చేపలు నీరు లేకుండా జీవించడం ఎంత వ్యర్థం 🌊 ? </p>
              <br />
              <p>అదేవిధంగా, మన యేసయ్య  👑 లేకుండా మన జీవితాలను కొనసాగించడం అంటే నీరు లేకుండా 🌊 చేపలా పెరగడం 🐠 ...ఒక్క నిమిషం ఆగు!...చేప 🦈 నీరు లేకుండా పెరుగుతుందా 🌊? అది నిజంగా మనుగడ సాగిస్తుందని హామీ ఉందా?🤷‍♀️</p>
              <br />
              <p>అది అసాధ్యం🙅‍♀️, సరైనదా?!</p>
              <br />
              <p>మన దేవుడు  👑 లేకుండా మన జీవితంలో మనం పెరగలేము 🌱 ఎదగలేము ఆలాగే  మనుగడ కూడా సాగించలేము.</p>
              <br />
              <p>అవును ప్రియతమా💙</p>
              <br />
              <p>నా జీవితాన్ని నేను యేసయ్య లేకుండా ఊహించుకోలేను.</p>
              <br />
              <p>మరి నువ్వు?! 🫵🏻😉</p>
              <br />
              <p>నువ్వు నేనే అని నేను నమ్ముతున్నాను...🤝🏻🤗⭐</p>
            </div>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
