
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'His Urgent Love',
  description: 'He hurried out of the tomb to embrace you forever. Discover His urgent love.',
};

export default function ResurrectionEmbracePage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            𝑯𝒆 𝒉𝒖𝒓𝒓𝒊𝒆𝒅 𝒐𝒖𝒕 𝒐𝒇 𝒕𝒉𝒆 𝒕𝒐𝒎𝒃 𝒕𝒐 𝒆𝒎𝒃𝒓𝒂𝒄𝒆 𝒚𝒐𝒖 𝒇𝒐𝒓𝒆𝒗𝒆𝒓🤗❤️‍🔥
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/9bg.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p>Need to be updated!!</p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
