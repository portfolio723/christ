
import { VideoReels } from '@/components/page/video-reels';
import { SocialMedia } from '@/components/page/social-media';
import { Newsletter } from '@/components/page/newsletter';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Hero Section from former videos page */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          src="/christ/butterflies.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-yesteryear mb-4 tracking-tight max-w-2xl mx-auto">
            &quot;Broken vessels will spark more when they are touched by Jesus&quot;
          </h1>
        </div>
      </section>
      <VideoReels />
      <section
        id="home-mission"
        className="relative w-full py-20 md:py-32 bg-background text-white"
      >
        <Image
          src="/christ/obg.jpeg"
          alt="Mission background"
          fill
          className="object-cover"
          data-ai-hint="spiritual background"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            His Vision, Our Mission
          </h3>
          <div className="mx-auto max-w-4xl text-white/80 md:text-5xl mt-6 font-mea-culpa text-4xl space-y-4">
            <p>
              God mends broken hearts into mighty wings to soar 🦋 His purpose is to strengthen us from the inside out 💪 In Jesus&apos; name 🕊️
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-white text-left space-y-4 font-oleo-script text-xl md:text-2xl p-6 bg-card/10 backdrop-blur-sm relative rounded-lg">
              <p className="font-mea-culpa text-3xl">His Love... A Letter to Your Heart</p>
              <p>My dear, Let me tell you something your soul needs to remember.</p>
              <p>What is the love of God?</p>
              <p>What would he have done?</p>
              <p>Listen...</p>
              <p>You were His first thought.</p>
              <p>Before oceans,before mountains, before light, He saw you.</p>
              <p>And He loved you.</p>
              <p>You were the joy set before Him, the treasure He longed for.</p>
              <p>do you know what he did?</p>
              <p>The Father, He gave His most precious Son—for you.</p>
              <p>because His heart could not bear eternity without you.</p>
              <p>It was the ultimate act of a Father&apos;s heart crying out, &quot;I must have my child back.&quot;</p>
              <p>Then Jesus...oh, Jesus&apos; love</p>
              <p>He saw you across time and chose the cross.</p>
              <p>He willingly embraced the cross... not just for the world, but for you. is a mighty, roaring flood that could not be contained by heaven&apos;s gates. It shattered the grave. It broke hell&apos;s chains. He didn&apos;t just die for you.He devoured death for you.</p>
              <p>His heart thundered:</p>
              <p>I will have my child. I will fight for my child. I will give everything to my child.</p>
              <p>And now the Holy Spirit...</p>
              <p>The Spirit&apos;s love is so intimate, so tender, that He doesn&apos;t just walk beside you. He has made your heart His Home. He breathes inside your prayers. He sings over you in the night. He is the quiet, unshakable presence that whispers, &quot;You are never, ever alone.&quot;</p>
              <p>People say love is God.</p>
              <p>No.</p>
              <p>&quot;God is love&quot;.It is his nature.</p>
              <p>Every heartbeat of heaven beats for you.</p>
              <p>And sometimes...sometimes, in the quiet moments when I feel the weight of this love… that love wraps around my broken places...It burns with one eternal question, the only one I&apos;ll need to ask when I finally see Him face to face:</p>
              <p>how unworthy I am...</p>
              <p>&quot;Jesus... why? Why did You love me with a love this fierce? This relent? This mighty?&quot;</p>
              <p>I may never understand it fully.</p>
              <p>But I will spend my life embraced by it.</p>
              <p>And so will you.</p>
              <p>And you...you are His.</p>
            </div>
          </div>
        </div>
      </section>
      <SocialMedia />
      <Newsletter />
    </main>
  );
}
