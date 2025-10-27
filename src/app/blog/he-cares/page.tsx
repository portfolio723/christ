
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'He Keeps Your Tears',
  description: 'He not only notices our tears, He collects them. Discover how God treasures your feelings and holds your pain tenderly. Your tears are safe with Him.',
};

export default function HeCaresPage() {
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
                "name": "He Keeps Your Tears",
                "item": "https://godsspiritsays.com/blog/he-cares"
              }
            ]
          })
        }}
      />
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Not only does HE CARE...!, HE will keep your tear drops💦 in his bottle like a jewel 💎Psalms 56:8 ✨
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/b4.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p><strong>Yes, Beloved 💜</strong></p>
            <br />
            <p>We take such great care to hide a precious necklace, or a special gift someone gives us — 🎁💰</p>
            <br />
            <p>But look… He not only notices our tears 💦 — He collects them, and even appoints a bottle 🫙 to carefully store each one.</p>
            <br />
            <p>Who in your life has ever done this for you?🫣 Or have you even heard of someone doing this?🤔</p>
            <br />
            <p>Absolutely no chance! 🙅🏻‍♀️ They make you cry 🥲… and yet, you still believe — so innocently — that maybe, just maybe, they&apos;ll at least wipe your tears away. 🫠</p>
            <br />
            <p>How unfortunate, isn&apos;t it? 😌</p>
            <br />
            <p>But JESUS — He is different. He is crying for us before our Father GOD. He’s keeping every tear in His precious bottle 🫙.</p>
            <br />
            <p>Look at Him for a moment. He understands the language of your tears. He knows the weight of the anguish behind every drop 💧.</p>
            <br />
            <p>So do not worry. Your tears, your feelings — they are safe with Him. He holds them tenderly.☺️💃🏼</p>
            <br />
            <p>All you need to do is recognize just how much LOVE 🫶🏻 He truly is.</p>
            <br />
            <hr className="my-8 border-primary/50" />
            <br />
            <div className="text-lg" lang="te">
              <p><strong>అవును, ప్రియతమా 💜</strong></p>
              <br />
              <p>మనం విలువైన హారాన్ని లేదా ఎవరైనా మనకు ఇచ్చే ప్రత్యేక బహుమతిని దాచడానికి చాలా జాగ్రత్తగా ఉంటాము - 🎁💰</p>
              <br />
              <p>కానీ చూడండి... ఆయన మన కన్నీళ్లను గమనించడమే కాదు 💦 — ఆయన వాటిని సేకరిస్తాడు మరియు ప్రతిదాన్ని జాగ్రత్తగా నిల్వ చేయడానికి ఒక సీసాను కూడా నియమిస్తాడు.</p>
              <br />
              <p>మీ జీవితంలో మీ కోసం ఎవరు ఇలా చేసారు?🫣 లేదా ఎవరైనా ఇలా చేస్తున్నారని మీరు విన్నారా?🤔</p>
              <br />
              <p>ఖచ్చితంగా అవకాశం లేదు! 🙅🏻‍♀️ వారు మిమ్మల్ని ఏడిపిస్తారు 🥲… అయినప్పటికీ, మీరు ఇప్పటికీ - చాలా అమాయకంగా - బహుశా, బహుశా, వారు కనీసం మీ కన్నీళ్లను తుడిచివేస్తారని నమ్ముతారు. 🫠</p>
              <br />
              <p>ఎంత దురదృష్టకరం, కాదా? 😌 కానీ యేసు - ఆయన భిన్నంగా ఉన్నాడు. ఆయన మన తండ్రి దేవుని ముందు మన కోసం ఏడుస్తున్నాడు. ఆయన ప్రతి కన్నీటిని తన విలువైన సీసాలో ఉంచుతున్నాడు 🫙.</p>
              <br />
              <p>ఒక్క క్షణం ఆయనను చూడు. ఆయన మీ కన్నీళ్ల భాషను అర్థం చేసుకుంటాడు. ప్రతి చుక్క వెనుక ఉన్న బాధ ఎంత ఉందో ఆయనకు తెలుసు 💧.</p>
              <br />
              <p>కాబట్టి చింతించకండి. మీ కన్నీళ్లు, మీ భావాలు - అవి ఆయన దగ్గర సురక్షితంగా ఉన్నాయి. ఆయన వాటిని సున్నితంగా పట్టుకుంటాడు.☺️💃🏼</p>
              <br />
              <p>మీరు చేయాల్సిందల్లా ఆయన నిజంగా ఎంత ప్రేమో గుర్తించడం 🙌🏻</p>
            </div>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
