
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beautifully Shattered',
  description: 'Embrace the process of being broken and remade by God. Discover the beauty in surrender and the strength found in His hands.',
};

export default function BeautifullyShatteredPage() {
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
                "name": "Beautifully Shattered",
                "item": "https://godsspiritsays.com/blog/beautifully-shattered"
              }
            ]
          })
        }}
      />
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Dared to be beautifully shattered in HIS hands 🙌
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/bg8.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p><strong>Beloved 💙</strong></p>
            <br />
            <p>&quot;The diamond Character will not come to you until 𝐆𝐎𝐃 press you through 𝐡𝐢𝐬 tests and you cannot learn by yourself until 𝐇𝐄 allows you&quot;.</p>
            <br />
            <p>An olive 🫒 understands the value of its oil ⚱️ only after being pressed.</p>
            <br />
            <p>A grape 🍇 recognises the sweetness of its wine 🍷only when crushed.</p>
            <br />
            <p>A diamond 💎 knows its true worth under pressure ✨</p>
            <br />
            <p>Gold 🌕 knows that when she burns in flames 🧈🔥, her purity is exposed🪄✨</p>
            <br />
            <p>The sculpture 🪨 knows if it endures the sculptor&apos;s chisel strokes ⛏️ how beautifully he will shape it👸</p>
            <br />
            <p>And your broken heart 💔?
            It understands that only the 𝐅𝐚𝐭𝐡𝐞𝐫&apos;s 𝐥𝐨𝐯𝐞 🫧💗✨ can rebuild it...❤️‍🩹🎀🌷</p>
            <br />
            <p>Likewiseִֶָ ִֶָ🦋</p>
            <p>Your anointing 🔥 knows that the more you are crushed in 𝐆𝐎𝐃&apos;s hands, the more you form in 𝐂𝐇𝐑𝐈𝐒𝐓 👑 the more fragrant you become 🌸</p>
            <br />
            <p>𝐀𝐋𝐋𝐄𝐋𝐔𝐉𝐀𝐇 🙏 🙌</p>
            <br />
            <hr className="my-8 border-primary/50" />
            <br />
            <div className="text-lg" lang="te">
              <p><strong>ప్రియమైన 💙</strong></p>
              <br />
              <p>&quot; దేవుడు పరీక్షల ద్వారా మనల్ని ఒత్తిడి చేసే వరకు వజ్ర పాత్ర మనకు రాదు మరియు దేవుడు మనల్ని అనుమతించే వరకు మనకే మనం నేర్చుకోలేమూ&quot;.</p>
              <br />
              <p>ఆలివ్ దాని నూనె విలువను ⚱️ నొక్కబడిన తర్వాత మాత్రమే అర్థం చేసుకుంటుంది.</p>
              <br />
              <p> ద్రాక్ష 🍇 దాని వైన్ యొక్క తీపిని గుర్తిస్తుంది 🍷 నలిగినప్పుడు మాత్రమే.</p>
              <br />
              <p>వజ్రం 💎 ఒత్తిడిలో దాని నిజమైన విలువను తెలుసుకుంటుంది ✨</p>
              <br />
              <p>బంగారం 🌕 కి తెలుసు, అది మంటల్లో కాలిపోయినప్పుడు, దాని స్వచ్ఛత బయటపడుతుందని 🧈🔥</p>
              <br />
              <p>శిల్పి ఉలి దెబ్బలను యెంత తట్టుకుంటే అంత అందంగా రూపింపబడుతుంది అని ఆ శిల్పానికి తెలుసు 👸</p>
              <br />
              <p>మరియు మన విరిగి నలిగిన హృదయం 💔?
              మన పరలోకపు తండ్రి 🫧💗✨ మాత్రమే దానిని పునర్నిర్మించగలడని అది అర్థం చేసుకుంటుంది...❤️‍🩹🎀🌷</p>
              <br />
              <p>అలాగే ִֶָ🦋</p>
              <p>నీ అభిషేకానికి 🔥 తెలుసు, నీవు తండ్రి చేతుల్లో ఎంతగా నలిగిపోతావో, అంతగా నీవు క్రీస్తు 👑 రూపు లోకి ఏర్పడతావని 🌸</p>
              <br />
              <p>హల్లెలూయా 🙏 🙌</p>
            </div>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
