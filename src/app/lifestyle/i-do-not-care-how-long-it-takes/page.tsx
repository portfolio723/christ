
import { SocialMedia } from '@/components/page/social-media';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'I do not care how long it takes',
  description: 'My Holy Rest. Because His delight is around me.',
};

export default function IDoNotCareHowLongItTakesPage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <header className="relative pt-48 pb-20">
        <Image
          src="/lf5.jpg"
          alt="A person in holy rest."
          fill
          className="object-cover"
          data-ai-hint="holy rest delight"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-pinyon-script font-bold text-white mb-4">
              I do not care how long it takes
            </h1>
            <p className="text-2xl md:text-3xl font-love-light text-white/80">
              My Holy Rest. Because His delight is around me.
            </p>
        </div>
      </header>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white prose-p:font-crimson-pro">
            <p>This Listening life🎵</p>
            <br />
            <p>Daily? Nah, not by schedule.</p>
            <br />
            <p>Whenever God calls my heart, Whenever His presence draws me, I listen… I catch the call like a wave.</p>
            <br />
            <p>Yes, I enjoyed the sensation of listening to him. I do not care if the dawn arrives and noon follows. I love to listen to him the whole day, my beloved Maker and creator.</p>
            <br />
            <p>Why “when His presence draws”? Because within that gentle closeness, if we listen, If we offer our moments to His songs, especially to lyrics, he filled his anointing. It comforts like the voice of God. And yes, He speaks through lyrics, too. Then my heart fills…the way it fills in a private room of prayer.🎼</p>
            <br />
            <p>His music soothes my fractured places. It mends the frayed edges of a long day, a hard week, or a difficult season.</p>
            <br />
            <p>After time spent wrapped in true worship. And my heart is so attended… not weighed by burden, but lifted by the burden of joy. 🎶🎻</p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
