
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fasting',
  description: 'Fasting is not something we do to God. It is something God does in us.',
};

export default function FastingPage() {
  const videoSrc = "vd3.mp4";
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
            <p>
{` 
Have you heard, beloved?

Fasting is a sacred step.

We fast for many reasons

for breakthroughs,✨

for healing,🌿

for needs only heaven can meet.🌄
 
But there is another fast, one called by God, appointed in God's calendar,🗓️

born in God's season.🌱

This is the fast of true intimacy with Him.💞
 
In this fast, the Holy Spirit 🕊️ Himself performs surgery on our spirit. He allows us to face every old temptation to train us, to kill the cocktail emotions of flesh and spirit mixed up🚫🍸
 
In this fast…

We walk right up to the edge of the sharp swords.⚔️

We entered, almost fell into the cyclone of temptation🌪️, and He will pull us out.🙌

Again, He pulls us in,🙌🙌

Again, He pulls us out.🙌🙌🙌
 
Again and again, this ring cycle continues, day after day.
 
It stumbles us. It makes us tremble.

Our own flesh rises on us like a wave,🌊

lifts us to the top of the hill⛰️…

only to push us off.

And He allows it.

He allows the beating.

He allows the rattling.

He allows us to feel broken, exposed almost condemned.
 
Why?

Is he playing some kind of game with us?🎭
 
No, beloved.

Listen closely:

He isn’t playing games

He’s building warriors⚔️🔥
 
Yes, we are warriors, 🛡️

Yet we almost forget.

Our anger rages like a sunburn toward Him☀️🔥

because He allows us to go through it all.

Our hearts cry out,💔

Yet our hearts forget:
 
From where does this strength come?

Is it our own?

Is this unshakable perseverance ours?

Born from our own discipline 💪,

our own courage?
 
No, dear.❤️
 
It is His grace.✨🕊️

We must call upon His grace.

He secretly holds us in it.
 
Every time He allows us to face the edge,

He cuts away the part of us

Every time He pulls us out,

He teaches our hands to hold His 👑🙌

He’s not letting us fall 

He’s teaching us how to rise.

Not letting us drown 

but showing us our eyes stay fixed on Him.💖

This isn’t punishment.

It’s holy training ⚒️🕊️

and the "TRAINING GROUND NAME IS FASTING"🔥

where human weakness 

Finally blends and meets GODLY strength. ✨
 
Do not fear the trap — Go boldly

Cause He allows the trap only to pull us out 💪✨
 
So, stay anointed, warrior. 🕊️⚔️

Until next time...`}
            </p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
