
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Sweetness of His Sacrifice',
  description: 'Millions have been saved by the sweetness that JESUS bleeds. Discover the profound love and redemption in His ultimate sacrifice.',
};

export default function SweetnessBleedsPage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Millions have been saved by the sweetness that 𝐉𝐄𝐒𝐔𝐒 bleeds 🕊️🩸🤍✨❤️
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/b7.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p>Hope does not require a description 😉</p>
            <br />
            <p>Please peek at the bottom 👇🏻</p>
            <br />
            <p>By the way, have you ever thought about what sweetness🍯 truly means?</p>
            <br />
            <p>I would love to share my thoughts on it 💭</p>
            <br />
            <p>The ultimate expression of sweetness is found in His sacrifice on the cross for us 🫠</p>
            <br />
            <p>We don&apos;t have to endure suffering of our sins because He took that upon Himself long before we came into this world 🥲🌎</p>
            <br />
            <p>It&apos;s something to think about, isn&apos;t it?🤷🏻‍♀️</p>
            <br />
            <p>Beloved 💙</p>
            <p>All we need to do is embrace the sweetness of His sacrifice made on our behalf ✝️🫂🍯🫰🏻</p>
            <br />
            <p>You might wonder 🫣 why He chose to die for us without us asking for it 🤔</p>
            <p>The truth is, He would choose to do so regardless because He crafted each one of us with His own hands 🥹🤲🏻🫶🏻🥰</p>
            <br />
            <p>Isn&apos;t it amazing to consider that the Creator 👑of the universe 🌎 wouldn&apos;t leave us without His love... 🤍❤️</p>
            <br />
            <p>That&apos;s the story, Beloved, of His deep sweetness 🫰🏻🫠🤗🫶🏻</p>
            <br />
            <hr className="my-8 border-primary/50" />
            <br />
            <div className="text-lg" lang="te">
              <p>దీనికి  వివరణ అవసరం లేదు అని ఆశిస్తున్నాను  😉</p>
              <br />
              <p>దయచేసి కిందకి చూడండి 👇🏻</p>
              <br />
              <p>అయితే, తీపి అంటే నిజంగా ఏమిటో మీరు ఎప్పుడైనా ఆలోచించారా?</p>
              <br />
              <p>దాని గురించి నా ఆలోచనలను పంచుకోవడానికి నేను ఇష్టపడుతున్నాను 💭</p>
              <br />
              <p>ఆయన మనకోసం సిలువపై చేసిన త్యాగంలో ఆయన మాధుర్యాయం కనిపిస్తుంది 🫠</p>
              <br />
              <p>మనం ఈ లోకంలోకి రాకముందే ఆయన మన కోసం మన షాప బాధను,పాపాలు  తీసుకున్నందున మనం ఇంక ఏ శాపాల వల్ల వొచ్చే బాధలు  భరించాల్సిన అవసరం లేదు 🥲🌎</p>
              <br />
              <p>ఇది ఆలోచించాల్సిన విషయం, కాదా?🤷🏻‍♀️</p>
              <br />
              <p>ప్రియమైన 💙</p>
              <p>మనం చేయాల్సిందల్లా ఆయన మన తరపున చేసిన త్యాగం యొక్క మాధుర్యాన్ని స్వీకరించడమే ✝️🫂🍯🫰🏻</p>
              <br />
              <p>మీరు ఆశ్చర్యపోవచ్చు 🫣 మనం అడగకుండానే ఆయన మన కోసం చనిపోవడానికి ఎందుకు ఎంచుకున్నాడు అని 🤔</p>
              <br />
              <p>నిజం ఏమిటంటే, ఆయన మనలో ప్రతి ఒక్కరినీ తన చేతులతో సృష్టించినందున అతను అలా చేయడానికి ఎంచుకున్నాడు 🥹🤲🏻🫶🏻🥰</p>
              <br />
              <p>మన సృష్టికర్త మనల్ని ఇంతగా కోరుకోటం ఆశ్చర్యంగా లేదా? 👑విశ్వనీకి  యజమాని అయిఉండి ఆయన నీ  ప్రేమ లేకుండా ఉండలేడు నిన్ను ప్రేమించకుండా కూడా వుండలేడు ఆలాగే మనల్ని విడిచిపెట్టడు... 🤍❤️</p>
              <br />
              <p>అదే ప్రియతమా, ఆయన లోతైన మాధుర్యపు కథ 🫰🏻🫠🤗🫶🏻</p>
            </div>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
