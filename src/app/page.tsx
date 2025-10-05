
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
          <h1 className="text-4xl md:text-6xl font-yesteryear mb-4 tracking-tight max-w-2xl mx-auto">
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
          <h3 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            His Vision, Our Mission
          </h3>
          <div className="mx-auto max-w-4xl text-white/80 md:text-5xl mt-6 font-mea-culpa text-4xl space-y-4">
            <p>
              God mends broken hearts into mighty wings to soar 🦋 His purpose is to strengthen us from the inside out 💪 In Jesus&apos; name 🕊️
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-white text-left space-y-4 font-oleo-script text-xl md:text-2xl p-6 bg-card/10 backdrop-blur-sm relative rounded-lg">
              <p>A rainbow—His signature in the clouds. 🌈</p>
              <p>And the meaning was clear:</p>
              <p>&quot;My promise stands: &apos;Never Again.&apos; ✋ The chapter of your past is closed; its pain will not be repeated. 📖⛔ I have drawn a line in eternity; what was will not be. ✍️ I have decreed it.👑 This is my covenant:I am here for you.&quot; <span className="font-bold text-sm">edi</span> 🫂🤍</p>
              <p>Yet, my soul has a holy hunger. 😔 I wanted to hear from his heart again,so I waited, barely, until one fine day, he spoke again, deeper still, and he satisfied my inner chamber with happy gigglings. 😊💖</p>
              <p>And this is what he said:</p>
              <p>A promise is for the moments when your heart starts to forget what I&apos;ve spoken. 💭</p>
              <p>For the days you wonder if it will always be this way... 😥</p>
              <p>That&apos;s when I remind you: Not one word I have spoken over your life has been forgotten. Everything is unfolding in my proper timing.⏳✨</p>
              <p>YOU DON&apos;T HAVE TO CARRY THE WEIGHT OF HOW. I SAID IT. I WILL DO IT. 🕊️</p>
              <p>I&apos;M STILL HERE, AND I HAVEN&apos;T FORGOTTEN YOU. ❤️ —GOD</p>
            </div>
          </div>
        </div>
      </section>
      <SocialMedia />
      <Newsletter />
    </main>
  );
}
