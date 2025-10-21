
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feeling His Nearness',
  description: "Don't confuse feeling His nearness. Discover the difference between being 'with' God and being 'in' Him. True success and stability are found in abiding, not just visiting.",
};

export default function FeelingNearnessPage() {
  const videoSrc = "/vd4.mp4";
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
{`Yes, beloved 💙

We all want to be with God.

But how many of us truly want to be IN Him?

Think about it. We can be with someone but not truly be one with them in mind and spirit.

Being IN God is different.

It means we are so closely intertwined with Him that His thoughts become our thoughts, and His desires become our desires.

When we are just with God, we can still hold onto our own ways, our own plans, and our own failures.

But when we are IN God, we are transformed. His success becomes our success. Even our failures are redeemed and turned into victories through Him.

Don't settle for just being WITH God. Seek to be IN Him. That is where true life, true peace, and true success are found.`}
            </p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
