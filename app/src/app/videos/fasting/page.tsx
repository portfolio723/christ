
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';
import content from '../content/video-3.md';

export const metadata: Metadata = {
  title: 'Fasting',
  description: 'Fasting is not something we do to God. It is something God does in us.',
};

export default function FastingPage() {
  const videoSrc = "/vd3.mp4";
  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Fasting is not something we do to God. It is something God does in us.🛐✨
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            {videoSrc && (
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <VideoPlayer src={videoSrc} autoPlay={false} muted={false} />
                </div>
              </div>
            )}
            <br />
            <p style={{ whiteSpace: 'pre-wrap' }}>
              {content}
            </p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
