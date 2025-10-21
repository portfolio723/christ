
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bubbling Love',
  description: "Why read the description? Go and find His mighty grace upon you in your current state, dear!",
};

export default function BubblingLovePage() {
  const videoSrc = "/vd5.mp4";
  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            That's all. His love is💕!!! Bubbling🫧🤍...That's all we can't see!!! ♥‿♥
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
{`Why have you come to look!?🤔
 
Oh, the description..💁‍♀️
 
Instead of reading the description, go and find his mighty grace 💫 upon you in your current state, dear 🤗 
What he secretly secret you🤫🧏‍♂️
 
Go, Go, yaar, do not miss out!🤩🎉
 
ఎందుకు చూడటానికి వచ్చావు!?🤔
 
ఓహ్, వివరణ..💁‍♀️
 
వివరణ చదివే బదులు, వెళ్లి నీ ప్రస్తుత స్థితిలో అతని గొప్ప కృపను కనుగొను ప్రియా 🤗 అతను రహస్యంగా నీకు ఏమి రహస్యంగా ఉంచాడో🤫🧏‍♂️
 
వెళ్ళు, వెళ్ళు, యార్, మిస్ అవ్వకు!🤩🎉`}
            </p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
