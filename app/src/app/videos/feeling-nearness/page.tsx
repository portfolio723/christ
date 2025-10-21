
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Feeling God's Nearness",
  description: "Explore the difference between feeling God's presence and truly abiding in Him, even through trials. This teaching delves into finding success and strength not just with Him, but in Him.",
};

export default function FeelingNearnessPage() {
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
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/vd4.mp4" autoPlay={false} muted={false} alt="Video about feeling God's nearness." />
              </div>
            </div>
            <br />
            <p><strong>Coming soon...</strong></p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
