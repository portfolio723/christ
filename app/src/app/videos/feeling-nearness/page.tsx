
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';
import content from '../content/video-4.md';

export const metadata: Metadata = {
  title: 'Feeling His Nearness',
  description: "Don't confuse feeling God's nearness with truly being IN Him. Discover the difference and deepen your intimacy with the Father.",
};

export default function FeelingNearnessPage() {
  const videoSrc = "/vd4.mp4";
  const [english, telugu] = content.split('అవును, ప్రియతమా 💙');

  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Don&apos;t confuse feeling His nearness. If we truly 𝗜𝗡 𝗛𝗜𝗠 more than 𝗪𝗜𝗧𝗛 𝗛𝗜𝗠 even in failure too, success.
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
              {english}
            </p>
            <br />
            <hr className="my-8 border-primary/50" />
            <br />
            <div className="text-lg" lang="te" style={{ whiteSpace: 'pre-wrap' }}>
              <p><strong>అవును, ప్రియతమా 💙</strong></p>
              {telugu}
            </div>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
