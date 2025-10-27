
import { SocialMedia } from '@/components/page/social-media';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Godsspiritsays',
  description: 'Learn about the mission and heart behind Godsspiritsays. Discover the story of choosing God\'s purpose and read a letter from His heart to yours. She is zero without her God.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <header className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <video
          src="/eagle.mp4"
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
            <p className="font-condiment text-xl md:text-3xl lg:text-4xl text-white/90">
              &ldquo;Before I formed you in the womb, I KNEW YOU and approved of you as my chosen instrument And before you were born, I consecrated you TO MYSELF AS MY OWN young lady, everywhere I send you, you shall go, and whatever I command you shall speak&rdquo;
            </p>
            <footer className="mt-2 text-lg md:text-2xl lg:text-3xl font-allison text-white/60">
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
          src="/gg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-4xl text-white md:text-5xl mt-6 font-mea-culpa text-3xl md:text-4xl space-y-4">
            <p>She...She is zero without her God…</p>
            <p>But to her God, she is everything 💖</p>
            <br />
            <p>So, you came here to read about me, right? 💭</p>
            <p>There’s nothing about me worth highlighting without Him ✨</p>
            <br />
            <p>That’s why—instead of lifting up my name—</p>
            <p>I’d rather echo what His heart says about me 💞</p>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold tracking-tighter text-white/70 mt-8">
            My Daughter &quot;You, and only you, before anybody. &quot;
          </h3>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-white text-left space-y-4 font-oleo-script text-lg md:text-2xl p-6 md:p-8 bg-card/10 backdrop-blur-sm relative rounded-lg">
              <p>My Letter to My Princess… 💌</p>
              <br />
              <p>Oh, my sweet doe, you are so precious to Me 💖</p>
              <p>I love you, and My hand is upon you.</p>
              <p>I will lay you down in green pastures</p>
              <p>and raise you up as a woman for the nations.</p>
              <br />
              <p>You came here to rest under My wings—</p>
              <p>the wings of Jehovah 💗</p>
              <p>I will never disappoint you,</p>
              <p>My graceful deer.</p>
              <br />
              <p>You are more important to Me than you realize…</p>
              <p>More than you want Me—</p>
              <p>I wanted you more than you have ever imagined 💞</p>
              <br />
              <p>Yes, My woman, I love you</p>
              <p>simply because I love you.</p>
              <br />
              <p>My love will never wound you.</p>
              <p>My touch will never bring you pain.</p>
              <br />
              <p>I love you for who you are,</p>
              <p>expecting nothing in return—unlike the world.</p>
              <p>Recall the love I have done for you on the cross.</p>
              <p>Choose My love, and live for Me.</p>
              <p>I will do more than you can possibly imagine 💫</p>
              <br />
              <p>I want you closer than you dare to believe.</p>
              <br />
              <p>I AM your God. Always.</p>
              <p>I have no regrets in choosing you.</p>
              <p>Yes. None.</p>
              <br />
              <p>That is enough for now, Princess…</p>
              <p>I must close this scroll of My heart here!!!</p>
              <p>Otherwise, the world will hear</p>
              <p>all the secrets it holds about you… 😉💕</p>
            </div>
          </div>
        </div>
      </section>
      <section id="closing-blessing" className="relative bg-background w-full py-20 md:py-24 overflow-hidden">
        <Image
          src="/23.jpeg"
          alt="A majestic and inspiring spiritual background."
          fill
          className="object-cover"
          data-ai-hint="majestic spiritual"
        />
        <div className="absolute inset-0 bg-black/70" />
        <blockquote className="relative z-10 container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <p className="font-pinyon-script text-3xl md:text-4xl lg:text-5xl text-white/90">
            &ldquo;I will make you majestic forever, a source of joy for every generation&rdquo;
          </p>
          <footer className="mt-2 text-xl md:text-2xl font-allison text-white/60">
            Isaiah 60:15
          </footer>
        </blockquote>
      </section>
      <SocialMedia />
    </main>
  );
}
