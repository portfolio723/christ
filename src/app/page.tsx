
import { VideoReels } from '@/components/page/video-reels';
import { SocialMedia } from '@/components/page/social-media';
import { Newsletter } from '@/components/page/newsletter';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Hero Section from former videos page */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          src="/christ/butterflies.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-6xl font-yesteryear mb-4 tracking-tight max-w-4xl mx-auto">
            &quot;Broken vessels will spark more when they are touched by Jesus&quot;
          </h1>
        </div>
      </section>
      <VideoReels />
      <section
        id="home-mission"
        className="relative w-full py-20 md:py-32 bg-background text-white"
      >
        <Image
          src="/christ/obg.jpeg"
          alt="Mission background"
          fill
          className="object-cover"
          data-ai-hint="spiritual background"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-4xl text-white/80 md:text-5xl mt-6 font-mea-culpa text-3xl md:text-4xl space-y-4">
            <p>God mends broken hearts into mighty wings to soar 🦋</p>
            <p>His purpose is to strengthen us from the inside out 💪</p>
            <p>In Jesus&apos; name 🕊️</p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-white text-left space-y-4 font-oleo-script text-lg md:text-2xl p-4 md:p-6 bg-card/10 backdrop-blur-sm relative rounded-lg">
              <p>In the name of JESUS CHRIST, greetings 🌸</p>
              <p>Beloved, the only purpose 💝 I launched this website is to tell you what GOD&apos;S SPIRIT Says 🕊️ for us to uplift and strengthen your inner man 💪 And enable us to internally strong first. Physiologic issues will automatically be resolved once we have healed 💝 inwardly.</p>
              <p>Yes beloved 💙... Our mighty GOD will change our every broken heart piece to turn into mighty butterfly wings 🦋 to fly high 🕊️ And He will use every sharpened broken piece that converts it into massive strong butterfly wings. Even if your broken heart 💔 pieces pierced him and drew blood... 🔴</p>
              <p>By the way, one more affirmation!⚡ instead of hitting the millions of subscribers, my main goal in using Jesus&apos; name is for his love to reach the hearts of the millions 🤗🎀</p>
            </div>
          </div>
        </div>
      </section>
      <SocialMedia />
      <Newsletter />
    </main>
  );
}
