
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Prayer Room',
  description: 'Feeling unheard? Discover how, like Peter, your most desperate prayers in the silent deep are seen by God. The abundance always comes in the morning.',
};

export default function ThePrayerRoomPage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Fishing no longer for fish, but for a sign straining for God&apos;s attention in the silent, empty deep🎣
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/b1.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p><strong>PRAY, PRAY, and PRAY....🧎🏻‍♀️</strong></p>
            <br />
            <p>What, <strong>PRAY</strong>? And what do we <strong>PRAY</strong> for?</p>
            <br />
            <p>When we try to explain our situation to anyone, people simply feel burdened, as if we are laying a heavy load on them! Their simple answer is: hey, just &quot;<strong>PRAY</strong>.&quot;</p>
            <p>If we run to our pastors to explain, they cut us off in mid-sentence and simply say, &quot;You need to <strong>PRAY</strong>.&quot;</p>
            <p>When our hearts are heavy and we reach for our loved ones, they are too busy with their own lives. They decline our calls with a text: &quot;I&apos;m somewhere.&quot; They don&apos;t even wait for our reply.</p>
            <p>Whenever we feel weary or unsettled, people are quick to suggest, Here we will get 100% spiritual discount. &quot;Ah, you&apos;re not praying well. That&apos;s the reason.&quot;</p>
            <p>When we sit in church, confused and wrestling with our next moves, fellow members come unbidden and preach endlessly. Their message is always the same: &quot;We prayed, and <strong>GOD</strong> answered. Child, you need to <strong>PRAY</strong>.&quot;</p>
            <br />
            <p>&quot;This leaves me asking.&quot; Then WHAT do we <strong>PRAY</strong>? HOW do we <strong>PRAY</strong>? WHEN do we <strong>PRAY</strong>?</p>
            <br />
            <p>Is praying really the only option?</p>
            <p>How many times per day should we pray? How many hours per week? How many days per month? For a year, or for years...?</p>
            <br />
            <p>Is <strong>GOD</strong> really listening? Is He seeing, observing, and taking care of my prayers? 😒</p>
            <br />
            <p>This prayer room—it&apos;s a delivery room. The raw labor pains rise to the sky: our frustrations, people&apos;s unwanted suggestions and preachings, our fears rolling like waves in our prayer room, right? And the only BIG fear is... has <strong>GOD</strong> forgotten me? Will my life in this prayer room never change? Will my life end in the prayer itself, year after year? We don&apos;t even dare to think about going back to the prayer room again.🥺</p>
            <br />
            <p>I felt like Peter must have felt that evening. All alone in the sea, with the boat and the nets, throwing the net for fish? Or was he throwing his net mechanically, desperately, for a response from <strong>GOD</strong>? He wasn&apos;t just using his net for fish anymore; he was fishing desperately, perversely, for a sign from <strong>GOD</strong>, I feel? Do you think it? Did you catch the same feel as Peter&apos;s? 🤔</p>
            <br />
            <p>And then, my dear, do you know what happened?<br />In the morning...☀️</p>
            <p>Finally, Jesus came. He had seen it all, each tear, every flicker of frustration, every silent emptiness.. And what did He do?</p>
            <p>He filled their nets. Not just with fish, but with a grace so overwhelming it spilled over basket upon basket🧺🧺🧺, an abundance that swallowed their emptiness whole.⚡🤩</p>
            <br />
            <p>Did Peter know his situation was going to change that very morning? Did Peter know <strong>GOD</strong> was right there beside him, with him all through the night?</p>
            <br />
            <p>Yes, beloved. <strong>GOD</strong> was there with Peter that night in the same boat. He saw each raw feeling and every attempt. And He is watching you the same way, because you are just as important to Him as Peter was.🫂</p>
            <br />
            <p>In that same sea, <strong>GOD</strong> saw Peter&apos;s tears, fear, and frustration. Likewise, in your same dark room, He sees us. He sees our pain, our waiting, our grievances, all of it.🫵</p>
            <br />
            <p>That same sea tested Peter&apos;s faith after his first step of obedience, and this same room is where <strong>GOD</strong> is refining our faith to pull us from our own situation.🫲</p>
            <br />
            <p>Rise, dear.🌤</p>
            <p><strong>GOD</strong> is not waiting to preach at you. He is not impatient to listen. Remember, His first response... it was just His hand, extended without a single word, 🫳<strong>JUST HIS HAND</strong>, and that same hand is held out to you today. Receive it. A MASSIVE hug with love from Love itself...🫠💗</p>
            <br />
            <p>&quot;Remember, the abundance always comes in the morning&quot;💛✨🌟⚡️💫.<br />Like Peter, we didn&apos;t even notice. We toil through the whole night. Yes, but hold fast, the night will pass. A morning joy is coming, a joy that ends all mourning.</p>
            <br />
            <p>&quot;For He Himself is the MORNING LIGHT, dawning anew in our lives.&quot;✨💡🌟</p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
