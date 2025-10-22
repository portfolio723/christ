
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Breaking is not the end',
  description: 'Our wing breaks. And we are left standing in the silence that follows. We don\'t even try. We’re almost afraid to look too closely and quietly accept: our life has ended here.',
};

export default function BreakingIsNotTheEndPage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            By the way, Breaking is not the end but the opening for a life with 𝐆𝐎𝐃 👑
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/vd1.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p style={{ whiteSpace: 'pre-wrap' }}>
{`Our wing breaks. 💔
And we are left standing in the silence that follows. 
We don't even try. We’re almost afraid to look too closely and 
𝐪𝐮𝐢𝐞𝐭𝐥𝐲 𝐚𝐜𝐜𝐞𝐩𝐭: 𝐨𝐮𝐫 𝐥𝐢𝐟𝐞 𝐡𝐚𝐬 𝐞𝐧𝐝𝐞𝐝 𝐡𝐞𝐫𝐞.
 
A broken wing is one thing, but a collapsed spirit? 
That is everything. ✨
 
𝗢𝘂𝗿 𝗙𝗮𝘁𝗵𝗲𝗿 👑 sees the breaking. 
He sees the snapped trust, the fallen hope, the places where we’ve come undone. 
And He does not look away. 👁️
 
He restores what we cannot. 
He mends not only the wing —but the weariness behind it.
𝐇𝐞 𝐫𝐞𝐩𝐚𝐢𝐫𝐬 𝐭𝐡𝐞 𝐰𝐢𝐥𝐥 𝐰𝐞 𝐭𝐡𝐨𝐮𝐠𝐡𝐭 𝐰𝐚𝐬 𝐠𝐨𝐧𝐞, 𝐭𝐡𝐞 𝐬𝐭𝐫𝐞𝐧𝐠𝐭𝐡 𝐭𝐡𝐚𝐭 𝐟𝐚𝐢𝐥𝐞𝐝 𝐮𝐬 𝐰𝐡𝐞𝐧 𝐰𝐞 𝐧𝐞𝐞𝐝𝐞𝐝 𝐢𝐭 𝐦𝐨𝐬𝐭.
 
Why? 🤔
 
𝗕𝗲𝗰𝗮𝘂𝘀𝗲 𝗮 𝗯𝗿𝗼𝗸𝗲𝗻 𝘄𝗶𝗻𝗴 𝗰𝗮𝗻 𝗵𝗲𝗮𝗹 𝗶𝗻 𝘁𝗶𝗺𝗲 
𝗕𝘂𝘁 𝗮 𝗰𝗼𝗹𝗹𝗮𝗽𝘀𝗲𝗱 𝘀𝗽𝗶𝗿𝗶𝘁 𝗰𝗮𝗻𝗻𝗼𝘁 𝗳𝗹𝘆, 𝗲𝘃𝗲𝗻 𝘄𝗶𝘁𝗵 𝗽𝗲𝗿𝗳𝗲𝗰𝘁 𝗳𝗲𝗮𝘁𝗵𝗲𝗿𝘀.🪶
 
So he starts within. 🌱
 
That is why He mends our inward fractures first.
He comes close to the heart that has forgotten its own song 🎶And He reminds us: 
You will rise again. ☀️
 
Then, from the very fractures where you fell apart, 
He gives you a new sky... 🌌
a horizon your former flight could never reach. 
He fills you with a courage you never knew, and a strength that lifts you higher than you ever dreamed. 🦅
 
We all know what it is to be broken. We convince ourselves that shattered wings can never be restored—that our story has reached its end. 
 
But 𝐆𝐎𝐃... 🙌
He is already writing a different story. 📖
He knows how to reconstruct 🏘 
What has been beyond repair. 
 
It begins the moment you dare to place the pieces in His hands. 🤍`}
            </p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
