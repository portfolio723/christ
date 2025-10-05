
import {
  Mail,
} from 'lucide-react';
import { SocialMedia } from '@/components/page/social-media';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <header className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <video
          src="/christ/eagle.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-great-vibes font-bold text-white mb-4 tracking-tight">
            Chose to go as GOD&apos;s purpose
          </h1>
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-condiment text-2xl md:text-3xl text-white/90">
              &ldquo;Before I formed you in the womb, I KNEW YOU and approved of you as my chosen instrument And before you were born, I consecrated you TO MYSELF AS MY OWN young lady, everywhere I send you, you shall go, and whatever I command you shall speak&rdquo;
            </p>
            <footer className="mt-2 text-2xl md:text-3xl font-allison text-white/60">
              Jeremiah 1:4-5,7
            </footer>
          </blockquote>
        </div>
      </header>
      <section
        id="about-mission"
        className="relative w-full py-20 md:py-32 bg-background text-white"
      >
        <video
          src="/christ/gg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            My Daughter &quot;You, and only you, before anybody. &quot;
          </h3>
          <div className="mx-auto max-w-4xl text-white/80 md:text-5xl mt-6 font-mea-culpa text-4xl space-y-4">
            <p>She...She is zero without her God… But to her God, she is everything 💖</p>
            <p>So, you came here to read about me, right? 💭 There’s nothing about me worth highlighting without Him ✨</p>
            <p>That’s why—instead of lifting up my name— I’d rather echo what His heart says about me 💞</p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-white text-left space-y-4 font-oleo-script text-xl md:text-2xl p-6 bg-card/10 backdrop-blur-sm relative rounded-lg">
              <p>
                In the name of JESUS CHRIST, greetings 🌸 Beloved, the only
                purpose 💝 I launched this website is to tell you what GOD&apos;S
                SPIRIT Says 🕊️ for us to uplift and strengthen your inner man 💪
                And enable us to internally strong first. Physiologic issues will
                automatically be resolved once we have healed 💝 inwardly.
              </p>
              <p>
                Yes beloved 💙... Our mighty GOD will change our every broken
                heart piece to turn into mighty butterfly wings 🦋 to fly high
                🕊️ And He will use every sharpened broken piece that converts it
                into massive strong butterfly wings. Even if your broken heart 💔
                pieces pierced him and drew blood... 🔴
              </p>
              <p>
                By the way, one more affirmation! ⚡ Instead of hitting the
                millions of subscribers, my main goal in using Jesus&apos; name is for
                his love to reach the hearts of the millions 🏠🙏
              </p>
            </div>
          </div>
        </div>
      </section>
      <SocialMedia />
    </main>
  );
}
