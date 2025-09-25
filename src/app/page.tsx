import { VideoReels } from '@/components/page/video-reels';
import { SocialMedia } from '@/components/page/social-media';
import { Newsletter } from '@/components/page/newsletter';
import { MissionStatement } from '@/components/page/mission-statement';
import { getAssetPath } from '@/lib/utils';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Hero Section from former videos page */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          src={getAssetPath('/butterflies.mp4')}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight max-w-2xl mx-auto">
            Broken vessels will spark more when they are touched by JUSES
          </h1>
        </div>
      </section>
      <VideoReels />
      <MissionStatement />
      <SocialMedia />
      <Newsletter />
    </main>
  );
}
