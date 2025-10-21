
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beautifully Shattered',
  description: 'Embrace the process of being broken and remade by God. Discover the beauty in surrender and the strength found in His hands.',
};

export default function BeautifullyShatteredPage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Dared to be beautifully shattered in HIS hands 🙌
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/bg8.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p>Content coming soon...</p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
