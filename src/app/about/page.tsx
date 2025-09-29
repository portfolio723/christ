
import {
  Mail,
  Phone,
  Calendar,
  MessageSquare,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { MissionStatement } from '@/components/page/mission-statement';

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
            Chose to go as GOD's purpose
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

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        
        <div className="text-white text-left space-y-4 font-oleo-script text-xl md:text-2xl p-6 relative rounded-lg">
            <p>
              In the name of JESUS CHRIST, greetings 🌸 Beloved, the only
              purpose 🎯 I launched this website is to tell you what
              GOD&apos;S SPIRIT Says 🕊️ by using me to uplift and
              strengthen your inner man 💪🏼 And enable you to pull
              yourself up internally strong first. Physiologic issues will
              automatically be resolved once we have healed ❤️‍🩹
              inwardly.
            </p>
            <p>
              Yes beloved 💙... Our mighty GOD will change our every broken
              heart piece to turn into mighty butterfly wings 🦋 to fly
              high 🕊️ And He will use every sharpened broken piece that
              converts it into massive strong butterfly wings. Even if your
              broken heart 💔 pieces pierced him and drew blood... 🔴
            </p>
            <p>
              By the way, one more affirmation! ⚡ Instead of hitting the
              millions of subscribers, my main goal in using Jesus&apos;
              name is for his love to reach the hearts of the millions 🤗🎀
            </p>
          </div>

        <Separator className="my-16 bg-border" />

        <section id="connect" className="text-center">
          <blockquote className="max-w-3xl mx-auto mb-8">
            <p className="font-allison text-4xl md:text-5xl text-white/90">
              &ldquo;I will make you majestic forever, a source of joy for every generation&rdquo;
            </p>
            <footer className="mt-2 text-2xl md:text-3xl font-allison text-white/60">
              Isaiah 60:15
            </footer>
          </blockquote>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:godspiritsays@gmail.com"
              className="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors"
            >
              <Mail className="w-5 h-5" /> godspiritsays@gmail.com
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors"
            >
              <Calendar className="w-5 h-5" /> Book Consultation
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors"
            >
              <MessageSquare className="w-5 h-5" /> Live Chat
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
