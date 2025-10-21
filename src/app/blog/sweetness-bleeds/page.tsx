
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Sweetness of His Sacrifice',
  description: 'Millions have been saved by the sweetness that JESUS bleeds. Discover the profound love and redemption in His ultimate sacrifice.',
};

export default function SweetnessBleedsPage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Millions have been saved by the sweetness that 𝐉𝐄𝐒𝐔𝐒 bleeds 🕊️🩸🤍✨❤️
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/b7.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p><strong>Yes, Beloved 💖</strong></p>
            <br />
            <p>How can something so bitter, so painful, be the source of the world&apos;s greatest sweetness? It is a divine mystery. The cross, a symbol of suffering, became the altar where love&apos;s greatest victory was won.</p>
            <br />
            <p>From His wounds flowed not just blood, but a river of grace, a current of mercy that washes away every sin, every stain, every regret. It is a sweetness that does not cloy, but cleanses. It is a love that does not demand, but gives everything.</p>
            <br />
            <p>Think of it: the King of all creation, allowing Himself to be broken, so that we might be made whole. Each drop of His blood a testament to a love so profound, it defies all human understanding. This is the sweetness that saves. It is the taste of redemption, the flavor of forgiveness, the aroma of new life.</p>
            <br />
            <p>When you feel the bitterness of the world, remember the sweetness of His sacrifice. When you feel lost in darkness, remember the light that shines from His love. Millions have been drawn to this sweetness, and there is always room for one more.</p>
            <br />
            <p>Come and taste. See that the Lord is good. His love is the sweetest thing you will ever know.</p>
            <br />
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}

    