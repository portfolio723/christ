import { Hero } from '@/components/page/hero';
import { VideoReels } from '@/components/page/video-reels';
import { SocialMedia } from '@/components/page/social-media';
import { Newsletter } from '@/components/page/newsletter';
import { MissionStatement } from '@/components/page/mission-statement';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <Hero />
      <VideoReels />
      <MissionStatement />
      <SocialMedia />
      <Newsletter />
    </main>
  );
}
