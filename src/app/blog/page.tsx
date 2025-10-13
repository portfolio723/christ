
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ShineBorder, Timeline } from '@/components/ui/shine-border';
import { SocialMedia } from '@/components/page/social-media';

const spiritualInsights = [
  {
    id: 'insight-1',
    title: 'Fishing no longer for fish, but for a sign straining for God\'s attention in the silent, empty deep🎣',
    category: 'Faith',
    image:
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3Bpcml0dWFsfGVufDB8fDB8fHww',
    imageHint: 'spiritual path',
  },
  {
    id: 'insight-2',
    title: 'Unlocking the Parables',
    category: 'Scripture',
    image:
      'https://images.unsplash.com/photo-1523878291631-87283277f717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amVzdXN8ZW58MHx8MHx8fDA%3D',
    imageHint: 'jesus statue',
  },
  {
    id: 'insight-3',
    title: 'Finding Your Divine Purpose',
    category: 'Purpose',
    image:
      'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1080',
    imageHint: 'person purpose',
  },
  {
    id: 'insight-4',
    title: 'The Power of Forgiveness',
    category: 'Healing',
    image:
      'https://plus.unsplash.com/premium_photo-1683133593455-814352d8f6d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZ2l2ZW5lc3N8ZW58MHx8MHx8fDA%3D',
    imageHint: 'forgiveness light',
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

      <main className="container mx-auto px-4 py-16">
        {/* Latest Spiritual Insights */}
        <section className="mb-16 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">
                    Ready to water your roots?
                  </h2>
                  <p className="text-white/70 mt-2 max-w-xl">
                    Find resources to deepen your faith with every read.
                  </p>
                  <p className="text-white/70 mt-2 max-w-xl">
                    Explore articles that help you dig deeper into Scripture, live out its wisdom, and walk closer to GOD each day.
                  </p>
                </div>
                <div className="flex w-full md:w-auto justify-center md:justify-end">
                  <CarouselPrevious className="static -left-4 text-white" />
                  <CarouselNext className="static -right-4 ml-2 text-white" />
                </div>
              </div>
              <CarouselContent>
                {spiritualInsights.map((insight) => (
                  <CarouselItem
                    key={insight.id}
                    className="basis-full sm:basis-1/2 lg:basis-1/4"
                  >
                    <Link href="#" className="group">
                      <Card className="overflow-hidden border-none bg-transparent">
                        <CardContent className="relative aspect-[3/4] p-0">
                          {insight.image && (
                            <Image
                              src={insight.image}
                              alt={insight.title}
                              fill
                              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={insight.imageHint}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-4">
                            <span className="inline-block bg-accent/80 text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full mb-2">
                              {insight.category}
                            </span>
                            <h3 className="font-headline text-lg font-bold text-white">
                              {insight.title}
                            </h3>
                            <p className="text-white/80 mt-2 flex items-center">
                              Read more{' '}
                              <span className="ml-2 transition-transform group-hover:translate-x-1">
                                →
                              </span>
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
      </main>
      
      {/* Community Discussion */}
      <div className="w-full bg-background relative">
        <video
          src="/cg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <section className="text-center py-20 md:py-32 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 font-headline">
              Fruitful Dialogue
            </h2>
            <p className="mb-6 text-white/80 font-pinyon-script text-3xl md:text-4xl">
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
          <p className="mt-4 text-xl md:text-2xl font-pinyon-script text-white/80">
            I will not leave you until I have done what i have promised you &mdash; Genesis 28:15
          </p>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-white text-left space-y-4 font-mr-dafoe text-xl md:text-3xl p-4 md:p-6 bg-card/10 backdrop-blur-sm relative rounded-lg">
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
              <p className="font-oleo-script">YOU DON&apos;T HAVE TO CARRY THE WEIGHT OF HOW. I SAID IT. I WILL DO IT. 🕊️</p>
              <p className="font-oleo-script">I&apos;M STILL HERE, AND I HAVEN&apos;T FORGOTTEN YOU ❤️</p>
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
