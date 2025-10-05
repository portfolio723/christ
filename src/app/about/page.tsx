
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
              <p>A rainbow—His signature in the clouds. 🌈</p>
              <p>And the meaning was clear:</p>
              <p>&quot;My promise stands: &apos;Never Again.&apos; ✋ The chapter of your past is closed; its pain will not be repeated. 📖⛔ I have drawn a line in eternity; what was will not be. ✍️ I have decreed it.👑 This is my covenant:I am here for you.&quot;🤍 <span className="font-bold text-sm">edi</span></p>
              <p>Yet, my soul has a holy hunger. 😔 I wanted to hear from his heart again,so I waited, barely, until one fine day, he spoke again, deeper still, and he satisfied my inner chamber with happy gigglings. 😊💖</p>
              <p>And this is what he said:</p>
              <p>A promise is for the moments when your heart starts to forget what I&apos;ve spoken. 💭</p>
              <p>For the days you wonder if it will always be this way... 😥</p>
              <p>That&apos;s when I remind you: Not one word I have spoken over your life has been forgotten. Everything is unfolding in my proper timing.⏳✨</p>
              <p>YOU DON&apos;T HAVE TO CARRY THE WEIGHT OF HOW. I SAID IT. I WILL DO IT. 🕊️</p>
              <p>I&apos;M STILL HERE, AND I HAVEN&apos;T FORGOTTEN YOU. ❤️</p>
              <p>—GOD</p>
            </div>
          </div>
        </div>
      </section>
      <SocialMedia />
    </main>
  );
}
