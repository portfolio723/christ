
import Image from 'next/image';
import {
  PlayCircle,
  Youtube,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { SocialMedia } from '@/components/page/social-media';
import { Hero } from '@/components/page/hero';
import { VideoPlayerDemo } from '@/components/ui/video-player-demo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Ministry',
  description: 'Experience God’s presence through powerful video teachings, prophetic words, worship sessions, and transformational testimonies. Watch and be encouraged today.',
};

const featuredVideos = [
  {
    id: 'video-1',
    title: 'By the way, Breaking is not the end but the opening for a life with 𝐆𝐎𝐃 👑',
    description: `Our wing breaks. 💔
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
 
It begins the moment you dare to place the pieces in His hands. 🤍`,
    thumbnail: '/vd1.jpeg',
    thumbnailHint: 'open bible',
  },
  {
    id: 'video-2',
    title: 'We will lose control in the presence of HIS love ❤️‍🔥',
    description: `Don't ask who loved you.. 
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
 
నేను పందెం వేస్తున్నాను, నువ్వు 🫵🏻 ప్రపంచము  వైపు చూడటానికి కూడా అవసరం లేదని భావింస్తావు  మరియు "నువ్వు నన్ను ప్రేమిస్తున్నావా?" అని అడగాలని కూడా అనుకోవు 🤷‍♀️`,
    thumbnail: '/vd2.jpeg',
    thumbnailHint: 'light through clouds',
  },
  {
    id: 'video-3',
    title: 'Fasting is not something we do to God. It is something God does in us.🛐✨',
    description: ` 
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

Until next time...`,
    thumbnail: '/vd3.jpeg',
    thumbnailHint: 'praying hands',
  },
];

const videoSeries = [
  {
    title: 'Prophetic Prayer Series',
    videos: 5,
    duration: '3h 20m',
    thumbnail:
      'https://images.unsplash.com/photo-1628258334105-2a0b3d6ef5f3?q=80&w=1080',
    thumbnailHint: 'abstract data',
    width: 1080,
    height: 607,
  },
  {
    title: 'Divine Encounters',
    videos: 4,
    duration: '2h 45m',
    thumbnail:
      'https://images.unsplash.com/photo-1588406320565-9fa6d9901d1d?q=80&w=1080',
    thumbnailHint: 'light rays',
    width: 1080,
    height: 607,
  },
  {
    title: 'Biblical Foundations',
    videos: 6,
    duration: '4h 15m',
    thumbnail:
      'https://images.unsplash.com/photo-1506880018603-34cf5717f185?q=80&w=1080',
    thumbnailHint: 'old bible',
    width: 1080,
    height: 720,
  },
  {
    title: 'Worship Sessions',
    videos: 8,
    duration: '5h 50m',
    thumbnail:
      'https://images.unsplash.com/photo-1524230659264-445c73a258be?q=80&w=1080',
    thumbnailHint: 'singing crowd',
    width: 1080,
    height: 720,
  },
];

export default function VideoMinistryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-white">
      {/* Hero Section from former home page */}
      <Hero />

      {/* Featured Video Gallery */}
      <section
        id="featured-videos"
        className="w-full py-16 md:py-28 bg-background"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredVideos.map((video) => (
              <Card
                key={video.id}
                className="group overflow-hidden bg-card border-border transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2 rounded-lg"
              >
                <CardHeader className="p-0 relative aspect-video">
                  {video.thumbnail && (
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={video.thumbnailHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-headline text-lg md:text-xl font-bold text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4" style={{ whiteSpace: 'pre-wrap' }}>
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Series & Playlists Section */}
      <section
        id="series"
        className="w-full py-16 md:py-28 bg-card/50 border-y border-border"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-3xl font-headline font-bold text-center mb-12">
            Video Series & Playlists
          </h3>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {videoSeries.map((series, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="overflow-hidden border-border group rounded-lg">
                      <CardContent className="p-0 relative">
                        <Image
                          src={series.thumbnail}
                          alt={series.title}
                          width={series.width}
                          height={series.height}
                          className="object-cover aspect-video w-full"
                          data-ai-hint={series.thumbnailHint}
                           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
                          <h4 className="font-headline text-lg md:text-xl font-bold text-white">
                            {series.title}
                          </h4>
                          <p className="text-white/80 text-sm">
                            {series.videos} videos | {series.duration}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white" />
            <CarouselNext className="text-white" />
          </Carousel>
        </div>
      </section>
      
      {/* Live Broadcast Section */}
      <section
        id="live-broadcast"
        className="w-full h-screen flex items-center justify-center"
      >
        <div className="w-full h-full">
          <VideoPlayerDemo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 md:py-28 text-center border-t border-border">
        <Image
          src="/fd.jpeg"
          alt="Subscribe background"
          fill
          className="object-cover"
          data-ai-hint="spiritual abstract"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
            Never Miss a New Video
          </h2>
          <p className="font-cookie text-2xl md:text-3xl text-white/80 max-w-xl mx-auto mb-8">
            A warm welcome always to our YOUTube Home, and give all your ears for whatever and whenever the soothing god's spirit says.
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold"
            asChild
          >
            <a
              href="https://www.youtube.com/@GodsspiritSays"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="mr-2" />
              Subscribe on YouTube
            </a>
          </Button>
        </div>
      </section>

       {/* Mission Restatement */}
       <section
        id="videos-mission"
        className="relative w-full py-20 md:py-32 bg-background text-white"
      >
        <video
          src="/vv.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            His Love... A Letter to Your Heart
          </h3>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-white text-left space-y-4 font-oleo-script text-xl md:text-2xl p-6 md:p-8 bg-card/10 backdrop-blur-sm relative rounded-lg">
              <div className="font-arizonia text-2xl md:text-3xl space-y-4">
                <br />
                <p>My dear, Let me tell you something your soul needs to remember.</p>
                <p>What is the love of God?</p>
                <p>What would he have done?</p>
                <br />
                <p>Listen...</p>
                <br />
                <p>You were His first thought.</p>
                <p>Before oceans,before mountains, before light, He saw you.</p>
                <p>And He loved you.</p>
                <br />
                <p>You were the joy set before Him, the treasure He longed for.</p>
                <br />
                <p>do you know what he did?</p>
                <br />
                <p>The Father, He gave His most precious Son—for you.</p>
                <br />
                <p>because His heart could not bear eternity without you.</p>
                <p>It was the ultimate act of a Father's heart crying out, "I must have my child back."</p>
                <br />
                <br />
                <p>Then Jesus...oh, Jesus' love</p>
                <p>He saw you across time and chose the cross.</p>
                <p>He willingly embraced the cross... not just for the world, but for you.</p>
                <p>is a mighty, roaring flood that could not be contained by heaven's gates. It shattered the grave. It broke hell's chains. He didn't just die for you.He devoured death for you.</p>
                <p>His heart thundered:</p>
                <p>I will have my child. I will fight for my child. I will give everything to my child.</p>
                <br />
                <p>And now the Holy Spirit...</p>
                <p>The Spirit's love is so intimate, so tender, that He doesn't just walk beside you. He has made your heart His Home. He breathes inside your prayers. He sings over you in the night. He is the quiet, unshakable presence that whispers,</p>
                <p>"You are never, ever alone."</p>
                <br />
                <p>People say love is God.</p>
                <p>No.</p>
                <p>"God is love".It is his nature.</p>
                <p>Every heartbeat of heaven beats for you.</p>
                <br />
                <p>And sometimes...sometimes, in the quiet moments when I feel the weight of this love… that love wraps around my broken places...It burns with one eternal question, the only one I'll need to ask when I finally see Him face to face:</p>
                <br />
                <br />
                <p>how unworthy I am...</p>
                <p>"Jesus... why? Why did You love me with a love this fierce? This relent? This mighty?"</p>
                <br />
                <p>I may never understand it fully.</p>
                <p>But I will spend my life embraced by it.</p>
                <p>And so will you.</p>
                <br />
                <br />
                <p>And you...you are His.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialMedia />
    </main>
  );
}
