
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'His Love',
  description: 'We will lose control in the presence of HIS love.',
};

export default function HisLovePage() {
  const videoSrc = "vd2.mp4";
  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            We will lose control in the presence of HIS love ❤️‍🔥
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
            <p>
{`Don't ask who loved you.. 
Don't think that person should love me. 
Don't expect how much they should love you🤔 
Don't insist that they should love you this much 😑 
 
Taste the love of the Father for once...🤤❤️ 
 
I bet, 
You 🫵🏻 felt like there was no need to turn to look at the world, and you don't even want to ask, "Do you love me?" 🤷‍♀️ 
 
నిన్ను ఎవరు ప్రేమించారో అడగకు.. ఆ వ్యక్తి నన్ను ప్రేమించాలి అనుకోకు.
వాళ్ళు నిన్ను ఎంత ప్రేమించాలి అని ఆశించకు🤔 
వాళ్ళు నిన్ను ఇంతగా ప్రేమించాలి అని పట్టుబట్టకు 😑 
 
ఒక్కసారి తండ్రి ప్రేమను రుచి చూడు...🤤❤️ 
 
నేను పందెం వేస్తున్నాను, నువ్వు 🫵🏻 ప్రపంచము  వైపు చూడటానికి కూడా అవసరం లేదని భావింస్తావు  మరియు "నువ్వు నన్ను ప్రేమిస్తున్నావా?" అని అడగాలని కూడా అనుకోవు 🤷‍♀️`}
            </p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
