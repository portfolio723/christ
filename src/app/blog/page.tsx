
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ShineBorder, Timeline } from '@/components/ui/shine-border';
import { Cta4 } from '@/components/ui/cta-4';
import { getAssetPath } from '@/lib/utils';

const spiritualInsights = [
  {
    id: 'insight-1',
    title: '5 Keys to Spiritual Growth',
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
          src={getAssetPath('/blog.mp4')}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold font-headline">
            The Spirit&apos;s Voice
          </h1>
          <p className="text-2xl md:text-3xl italic mt-4 font-script">
            Prophetic Insights & Biblical Truth
          </p>
          <p className="text-lg mt-2 text-white/80">
            <em>
              &quot;But when he, the Spirit of truth, comes, he will guide you
              into all the truth.&quot;
            </em>{' '}
            - John 16:13
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Featured Prophetic Word */}
        <section className="mb-16 text-center">
          <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-accent">
              &quot;The Season of Divine Acceleration Has Begun&quot;
            </h3>
            <p className="text-sm text-white/70 mt-2">
              Prophetic Word | March 20, 2024 | 8 min read
            </p>
            <p className="mt-4 text-lg text-white/80">
              The Lord is saying: &quot;What I have been preparing in secret, I
              am now bringing into the open. This is the season where time
              itself bends to My will, and what would normally take years will
              happen in months. Do not be surprised by the suddenness of My
              movement in your life...&quot;
            </p>
            <Link
              href="#"
              className="inline-block mt-6 text-accent font-bold hover:underline"
            >
              Read Full Prophetic Word →
            </Link>
          </div>
        </section>

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
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">
                    Spiritual Insights
                  </h2>
                  <p className="text-white/70 mt-2 max-w-xl">
                    Explore articles that delve deeper into scripture, offer
                    practical wisdom, and encourage a closer walk with God.
                  </p>
                </div>
                <div className="hidden md:flex">
                  <CarouselPrevious className="static -left-4 text-white" />
                  <CarouselNext className="static -right-4 ml-2 text-white" />
                </div>
              </div>
              <CarouselContent>
                {spiritualInsights.map((insight) => (
                  <CarouselItem
                    key={insight.id}
                    className="md:basis-1/2 lg:basis-1/4"
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
              <div className="md:hidden mt-4 flex justify-center">
                <CarouselPrevious className="static -left-4 text-white" />
                <CarouselNext className="static -right-4 ml-2 text-white" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">
            BLOG CATEGORIES
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              '🔮 Prophetic Words',
              '📖 Biblical Teaching',
              '🙏 Prayer & Intercession',
              '💝 Devotional Insights',
              '🌟 Supernatural Encounters',
              '🌍 Global Intercession',
              '👑 Identity in Christ',
              '💼 Marketplace Ministry',
              '👨‍👩‍👧‍👦 Family & Relationships',
              '🎓 Spiritual Growth',
            ].map((category) => (
              <button
                key={category}
                className="bg-card hover:bg-accent text-white font-bold py-2 px-4 rounded-full border border-border transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <Cta4
          title="💌 NEVER MISS A DIVINE WORD"
          description="Subscribe to receive prophetic insights, biblical teachings, and spiritual encouragement delivered directly to your heart."
          buttonText="Subscribe Now"
          buttonUrl="#"
          items={[
            'Fresh prophetic words and spiritual insights',
            'Biblical study guides and devotional content',
            'Prayer focuses and intercession guides',
            'Upcoming ministry events and announcements',
            'Exclusive content not available on the blog',
          ]}
        />

        {/* Community Discussion */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 font-headline">
            💬 COMMUNITY DISCUSSION
          </h2>
          <p className="mb-6 text-white/80">
            Join our growing community of believers who discuss spiritual
            insights, share testimonies, and support each other&apos;s faith
            journey.
          </p>
          <ShineBorder
            borderWidth={3}
            className="border bg-white/5 shadow-2xl backdrop-blur-md dark:bg-black/5"
            color={["#663399", "#ffed4a", "#663399"]}
          >
            <div className="p-10">
              <h1 className="my-8 text-2xl md:text-2xl text-center">
                How We Engage
              </h1>
              <Timeline />
            </div>
            <div className="absolute inset-0 -z-10 rounded-full bg-background opacity-40 blur-xl" />
          </ShineBorder>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
