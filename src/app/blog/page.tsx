
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ShineBorder, Timeline } from '@/components/ui/shine-border';
import { SocialMedia } from '@/components/page/social-media';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import VideoPlayer from '@/components/ui/video-player';

export const metadata: Metadata = {
  title: 'Blog | The Spirit\'s Voice',
  description: 'Explore articles that help you dig deeper into Scripture, live out its wisdom, and walk closer with GOD. Find resources to deepen your faith with every read.',
};


const spiritualInsights = [
  {
    id: 'insight-1',
    title: 'Fishing no longer for fish, but for a sign straining for God\'s attention in the silent, empty deep🎣',
    category: 'Abundance',
    href: '/blog/the-prayer-room',
    image: '/bg1.jpeg',
    imageHint: 'spiritual path',
    author: 'Godsspiritsays',
    date: 'Oct 10, 2024',
    readTime: '5 min read',
    description: "When prayer feels like casting into an empty sea, remember you're not alone. Discover how your most desperate cries are heard, even in the silence."
  },
  {
    id: 'insight-2',
    title: '💔✨ The Beautiful Breaking in his massive, tender hands ✨🕊️',
    category: 'Break to Remake',
    href: '/blog/the-beautiful-breaking',
    image: '/bg2.jpeg',
    imageHint: 'jesus statue',
    author: 'Godsspiritsays',
    date: 'Oct 9, 2024',
    readTime: '4 min read',
    description: "He lifts us high, only to let us fall. Understand the beautiful, fierce, and loving process of being broken and remade in His hands for His glory."
  },
  {
    id: 'insight-3',
    title: 'Saving is huge, but His forgiveness is what truly changes us.',
    category: 'Renewed',
    href: '/blog/forgiveness',
    image: '/bg3.jpeg',
    imageHint: 'person purpose',
    author: 'Godsspiritsays',
    date: 'Oct 8, 2024',
    readTime: '3 min read',
    description: "His forgiveness changes our hearts, which changes our actions. Our GOD is a forgiver. He will forgive all of our old mistakes, errors, and stubborn habits."
  },
  {
    id: 'insight-4',
    title: 'Not only does HE CARE...!, HE will keep your tear drops💦 in his bottle like a jewel 💎Psalms 56:8 ✨',
    category: 'No Unseen',
    href: '/blog/he-cares',
    image: '/bg4.jpeg',
    imageHint: 'forgiveness light',
    author: 'Godsspiritsays',
    date: 'Oct 7, 2024',
    readTime: '3 min read',
    description: "He not only notices our tears, He collects them. Discover how God treasures your feelings and holds your pain tenderly. Your tears are safe with Him."
  },
  {
    id: 'insight-5',
    title: "Marriage is not about being perfect. It's becoming the image of Christ †💍💐👰🏻‍♀️🤵🏻† 🕊️",
    category: 'Faith',
    href: '/blog/marriage',
    image: '/bg5.jpeg',
    imageHint: 'rainbow sky',
    author: 'Godsspiritsays',
    date: 'Oct 6, 2024',
    readTime: '4 min read',
    description: "A promise is for the moments when your heart starts to forget. For the days you wonder... That's when He reminds you: Not one word has been forgotten."
  },
  {
    id: 'insight-6',
    title: "Pray🙏🏻!!! Because it's the breath of our life ❤️‍🔥",
    category: 'Prayful',
    href: '/blog/pray',
    image: '/bg6.jpeg',
    imageHint: 'hands praying',
    author: 'Godsspiritsays',
    date: 'Oct 11, 2024',
    readTime: '3 min read',
    description: "Discover the power and intimacy of prayer. It's more than words; it's the very breath of a life connected to God."
  },
];

const BlogPage = () => {
  return (
    <div className="bg-background text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <video
          src="/blog.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold font-headline">
            The Spirit&apos;s Voice
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-white font-bonheur-royale font-bold">
            <em>
              &quot;Though SHE fall, SHE shall not be utterly cast down; for JEHOVAH UPHOLDS HER with HIS hand &quot;
            </em>{' '}
            - Psalms 37:24
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Latest Spiritual Insights */}
        <section className="mb-16">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">
                Ready to water your roots?
              </h2>
              <p className="text-white/70 mt-2 max-w-2xl mx-auto">
                Explore articles that help you dig deeper into Scripture, live out its wisdom, and walk closer to GOD each day.
              </p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spiritualInsights.map((insight) => (
              <Link key={insight.id} href={insight.href} className="group flex">
                <Card className="w-full flex flex-col bg-card border-border hover:border-primary transition-shadow duration-300 shadow-md hover:shadow-primary/20 rounded-xl overflow-hidden">
                   {insight.image && (
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={insight.image}
                          alt={`A decorative image for the blog post titled "${insight.title}"`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={insight.imageHint}
                        />
                      </div>
                    )}
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-white/60 mb-3">
                       <Badge variant="outline" className="border-primary/50 text-primary">{insight.category}</Badge>
                       <span>{insight.readTime}</span>
                    </div>
                    <h3 className="font-headline text-xl font-bold text-white mb-2 flex-grow">
                      {insight.title}
                    </h3>
                     <p className="text-white/70 text-sm mb-4">
                      {insight.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      
      {/* Community Discussion */}
      <div className="w-full bg-background relative">
        <section className="text-center py-20 md:py-32 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 font-headline">
              Fruitful Dialogue
            </h2>
            <p className="mb-6 text-white/80 font-crimson-pro text-xl md:text-2xl max-w-2xl mx-auto">
              Your place to connect, share, and grow. Engage in conversations that deepen faith through shared testimony and mutual support.
            </p>
            <ShineBorder
              borderWidth={3}
              className="border bg-white/5 shadow-2xl backdrop-blur-md dark:bg-black/5 relative"
              color={["#663399", "#ffed4a", "#663399"]}
            >
              <div className="p-6 md:p-10 relative">
                <h1 className="my-8 text-2xl md:text-2xl text-center">
                  How We Engage
                </h1>
                <Timeline />
              </div>
              <div className="absolute inset-0 -z-20 rounded-full bg-background opacity-40 blur-xl" />
            </ShineBorder>
          </div>
        </section>
      </div>

      <section className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">
                A Moment of Reflection
              </h2>
              <p className="text-white/70 mt-2 max-w-2xl mx-auto">
                Watch a short video to pause and reconnect with His message.
              </p>
            </div>
            <div className="max-w-sm mx-auto aspect-[9/16] rounded-xl overflow-hidden">
                <VideoPlayer src="/pk.mp4" alt="A reflective video." className="w-full h-full object-cover" />
            </div>
        </div>
      </section>

      <section
        id="mission"
        className="relative w-full py-20 md:py-32 bg-background text-white"
      >
        <video
          src="/ww.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            The promise he made
          </h2>
          <p className="mt-4 text-xl md:text-2xl font-crimson-pro text-white/80">
            I will not leave you until I have done what i have promised you &mdash; Genesis 28:15
          </p>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-white text-left space-y-4 font-crimson-pro text-xl md:text-3xl p-4 md:p-6 bg-card/10 backdrop-blur-sm relative rounded-lg">
              <p>A rainbow—His signature in the clouds. 🌈</p>
              <p>And the meaning was clear:</p>
              <p>&quot;My promise stands: &apos;Never Again.&apos; ✋</p>
              <p>The chapter of your past is closed; its pain will not be repeated. 📖⛔</p>
              <p>I have drawn a line in eternity; what was will not be. ✍️</p>
              <p>I have decreed it.👑</p>
              <p>This is my covenant:I am here for you.&quot;🤍 <span className="font-bold text-sm">edi</span></p>
              <p>Yet, my soul has a holy hunger. 😔</p>
              <p>I wanted to hear from his heart again,so I waited, barely, until one fine day, he spoke again, deeper still, and he satisfied my inner chamber with happy gigglings. 😊💖</p>
              <p>And this is what he said:</p>
              <p>A promise is for the moments when your heart starts to forget what I&apos;ve spoken. 💭</p>
              <p>For the days you wonder if it will always be this way... 😥</p>
              <p>That&apos;s when I remind you:</p>
              <p>Not one word I have spoken over your life has been forgotten. Everything is unfolding in my proper timing.⏳✨</p>
              <p>YOU DON&apos;T HAVE TO CARRY THE WEIGHT OF HOW. I SAID IT. I WILL DO IT. 🕊️</p>
              <p>I&apos;M STILL HERE, AND I HAVEN&apos;T FORGOTTEN YOU ❤️</p>
              <p>—GOD</p>
            </div>
          </div>
        </div>
      </section>
      <SocialMedia />
    </div>
  );
};

export default BlogPage;
