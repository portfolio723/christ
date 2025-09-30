
import {
  Mail,
} from 'lucide-react';
import { MissionStatement } from '@/components/page/mission-statement';
import { SocialMedia } from '@/components/page/social-media';

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
      <MissionStatement showImage={false} />
      <SocialMedia />
    </main>
  );
}
