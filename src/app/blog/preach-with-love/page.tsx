
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preach with Love',
  description: "Preach under the Holy Spirit's direction. Yield to Him, and offer people His love, not the energy of your own fervor.",
};

export default function PreachWithLovePage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://godsspiritsays.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://godsspiritsays.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Preach with Love",
                "item": "https://godsspiritsays.com/blog/preach-with-love"
              }
            ]
          })
        }}
      />
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Preach under the Holy Spirit&apos;s direction. Yield to Him, and offer people His love ✨, not the energy of your own fervor. 🙌🏻
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/bg11.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p>Preach under the Holy Spirit&apos;s direction. Yield to Him, and offer people His love ✨, not the energy of your own fervor. 🙌🏻</p>
            <p>Yield to the Holy Spirit and offer people His love, not the energy of your own fervor.</p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
