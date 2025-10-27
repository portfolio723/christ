
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Power of Forgiveness',
  description: 'His forgiveness changes our hearts, which changes our actions. Our GOD is a forgiver. He will forgive all of our old mistakes, errors, wrong turns and stubborn habits.',
};

export default function ForgivenessPage() {
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
                "name": "The Power of Forgiveness",
                "item": "https://godsspiritsays.com/blog/forgiveness"
              }
            ]
          })
        }}
      />
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Saving is huge, but His forgiveness is what truly changes us.
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/b3.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p><strong>Yes, Beloved 💙</strong></p>
            <br />
            <p>𝐇𝐢𝐬 forgiveness changes our hearts, which changes our actions. Our 𝐆𝐎𝐃 is a forgiver. 𝐇𝐞 will forgive all of our old mistakes, errors, wrong turns and stubborn habits. Not only once every day! And all at once, 𝐇𝐞 paid for eternity for all of our ill deeds on the cross. FORGIVEN is the big thing for our 𝐆𝐎𝐃, more than SAVED.</p>
            <br/>
            <p>The reason once we are forgiven by 𝐇𝐢𝐦, we are naturally saved! It’s like being a little kid. You watch a child playing, and they&apos;ll drop their toy. You pick it up for them. What do they do? They drop it again! And again! Or they&apos;ll run outside and head straight for the biggest, muddiest puddle.</p>
            <br />
            <p>You clean them up, bring them inside, and five minutes later, they&apos;re trying to sneak back out to the same mud puddle!</p>
            <br />
            <p>Why do they do that? Because deep down, they know someone is there for them.</p>
            <br />
            <p>Isn&apos;t that what we do with 𝐆𝐎𝐃? 🙂</p>
            <br />
            <p>We keep falling into the same old patterns, the same &quot;mud puddles&quot; of life. And 𝐇𝐞 is our father, who is infinitely wiser than us. That&apos;s why whenever we fall, 𝐇𝐞 will come and take us out of that dirty pit washing us clean with 𝐇𝐢𝐬 compassion😚. And 𝐇𝐞 forgives us not only one time but again and again... and he waits patiently for us.</p>
            <br />
            <p>Then what happens to us when 𝐇𝐞 starts forgiving us? 🤔</p>
            <br />
            <p>Our hearts start to soften, and we will start to change little by little until we hate to make the mistake again. We slowly begin to want to do better, not because we have to, but because we’ve felt 𝐇𝐢𝐬 love❤️and we start to hate the things that separate us from 𝐇𝐢𝐦.🫠</p>
            <br />
            <p>🤗 That&apos;s the secret ingredient 🫰 of forgiveness: That’s how 𝐇𝐞 works on us 🫶</p>
            <br />
            <p>Not with rules and scolding, but with relentless love and patience 🤍😇</p>
            <br />
            <p>You know, it&apos;s true—being forgiven by 𝐆𝐎𝐃 changes us from the inside out. That&apos;s the power of 𝐇𝐢𝐬 love 💞👑</p>
            <br />
            <hr className="my-8 border-primary/50" />
            <br />
            <div className="text-lg" lang="te">
              <p><strong>అవును, ప్రియతమా 💙</strong></p>
              <br />
              <p>క్షమాపణ మన హృదయాలను మారుస్తుంది, అది మన చర్యలను మారుస్తుంది. మన దేవుడు క్షమించేవాడు. మన పాత తప్పులు, తప్పు మలుపులు మరియు మొండి అలవాట్లన్నింటినీ ఆయన క్షమిస్తాడు. ప్రతిరోజూ ఒక్కసారి మాత్రమే కాదు! మరియు ఒకేసారి, సిలువపై మన చెడు పనులన్నింటికీ శాశ్వతత్వం చెల్లించబడింది . క్షమించబడటం అనేది మన దేవునికి గొప్ప విషయం, రక్షించబడిన దానికంటే ఎక్కువ.</p>
              <br />
              <p>దేవుడు మనల్ని క్షమించిన తర్వాత, మనం సహజంగానే రక్షించబడ్డాము! ఇది చిన్న పిల్లవాడిలా ఉంటుంది. మీరు ఒక పిల్లవాడు ఆడుకోవడం చూసారా , మరియు వారు తమ బొమ్మను పడవేస్తారు. మీరు దానిని వారి కోసం తీసిఇస్తారు . వారు ఏమి చేస్తారు? వారు దానిని మళ్ళీ పడవేస్తారు! మళ్ళీ! లేదా వారు బయటకు పరిగెత్తి నేరుగా అతిపెద్ద, బురదమయమైన నీటి కుంట వైపు వెళతారు.</p>
              <br />
              <p>మనం వారిని శుభ్రం చేసి, లోపలికి తీసుకురాగానే , ఐదు నిమిషాల తర్వాత, వారు మళ్ళీ అదే బురద గుంటలోకి చొరబడటానికి ప్రయత్నిస్తారు !</p>
              <br />
              <p>వాళ్ళు ఎందుకు అలా చేస్తారు? ఎందుకంటే లోతుగా, వాళ్ళకి ఎవరో ఒకరు కాపాడతారు శుభ్రం చేస్తారని వారికి తెలుసు.</p>
              <br />
              <p>మనం దేవుడి తో చేసేది అదే కదా? 🙂</p>
              <br />
              <p>మనం అదే పాత నమూనాలలో, జీవితంలోని అదే &quot;బురద గుంటలలో&quot; పడిపోతూనే ఉంటాము. మరియు మన తండ్రి, ఆయన మనకంటే అనంతంగా తెలివైనవాడు. అందుకే మనం పడిపోయినప్పుడల్లా, వచ్చి ఆ మురికి గుంట నుండి మనల్ని బయటకు తీసుకెళ్తాడు ఆయన కరుణతో శుభ్రంగా కడుగుతాడు 😚. మరియు ఆయన మనల్ని ఒక్కసారి మాత్రమే కాదు, మళ్ళీ మళ్ళీ క్షమింస్తాడు ...</p>
              <br />
              <p>మరియు ఆయన మనకోసం ఓపికగా ఎదురు చూస్తాడు.</p>
              <br />
              <p>అప్పుడు దేవుడు మనల్ని క్షమించడం ప్రారంభించినప్పుడు మనకు ఏమి జరుగుతుంది? 🤔</p>
              <br />
              <p>మన హృదయాలు మెత్తబడటం ప్రారంభిస్తాయి మరియు మనం మళ్ళీ తప్పు చేయడానికి ఇష్టపడని వరకు క్రమంగా మారడం ప్రారంభిస్తాము. మనం నెమ్మదిగా బాగా చేయాలనుకోవడం ప్రారంభిస్తాము, మనం అలా చేయవలసి వచ్చినందున కాదు, కానీ మనం ప్రేమను అనుభవించడం ఆరంభిస్తాం ❤️మరియు ఆయన నుండి మనల్ని వేరు చేసే విషయాలను మనం ద్వేషించడం ప్రారంభిస్తాము.🫠 🤗 క్షమాపణ యొక్క రహస్య పదార్ధం అదే: అది మనపై ఎలా పనిచేస్తుంది 🫶</p>
              <br />
              <p>నియమాలు మరియు తిట్టడంతో కాదు, కానీ నిరంతర ఆయన ప్రేమ మరియు ఆయన ఓర్పుతో 🤍😇</p>
              <br />
              <p>మీకు తెలుసా, ఇది నిజం—దేవుడు ద్వారా క్షమించబడటం మనల్ని లోపలి నుండి మారుస్తుంది. అదే ఆయన ప్రేమ 💞👑 యొక్క శక్తి</p>
            </div>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
