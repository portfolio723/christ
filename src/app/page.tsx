
import { VideoReels } from '@/components/page/video-reels';
import { SocialMedia } from '@/components/page/social-media';
import { Newsletter } from '@/components/page/newsletter';
import { MissionStatement } from '@/components/page/mission-statement';
import { VideoPlayerDemo } from '@/components/ui/video-player-demo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Hero Section from former videos page */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          src="/butterflies.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight max-w-2xl mx-auto">
            &quot;Broken vessels will spark more when they are touched by Jesus&quot;
          </h1>
        </div>
      </section>
      <VideoReels />
      <MissionStatement />
      {/* Live Broadcast Section */}
      <section
        id="live-broadcast"
        className="w-full py-20 md:py-28 bg-background"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-headline font-bold text-white mb-4">
            Live Broadcast
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join our live sessions for powerful teachings, worship, and prophetic ministry. Tune in and be blessed.
          </p>
          <VideoPlayerDemo src="/oh.mp4" />
        </div>
      </section>
      <SocialMedia />
      <Newsletter />
    </main>
  );
}
