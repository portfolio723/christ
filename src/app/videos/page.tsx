
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

const featuredVideos = [
  {
    id: 'video-1',
    title: 'The Unshakeable Kingdom',
    description: 'Discover the stability and security found only in God’s eternal kingdom.',
    category: 'Sermon',
    thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
    thumbnailHint: 'open bible',
  },
  {
    id: 'video-2',
    title: 'A Word for the Season',
    description: 'A timely and encouraging prophetic word to navigate the current times.',
    category: 'Prophetic',
    thumbnail: 'https://images.unsplash.com/photo-1496587373035-e5bc5b692a77?q=80&w=2070&auto=format&fit=crop',
    thumbnailHint: 'light through clouds',
  },
  {
    id: 'video-3',
    title: 'Intercession for Breakthrough',
    description: 'Join in a powerful time of prayer for breakthrough in your life and family.',
    category: 'Prayer',
    thumbnail: 'https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=2070&auto=format&fit=crop',
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
  },
  {
    title: 'Divine Encounters',
    videos: 4,
    duration: '2h 45m',
    thumbnail:
      'https://images.unsplash.com/photo-1588406320565-9fa6d9901d1d?q=80&w=1080',
    thumbnailHint: 'light rays',
  },
  {
    title: 'Biblical Foundations',
    videos: 6,
    duration: '4h 15m',
    thumbnail:
      'https://images.unsplash.com/photo-1506880018603-34cf5717f185?q=80&w=1080',
    thumbnailHint: 'old bible',
  },
  {
    title: 'Worship Sessions',
    videos: 8,
    duration: '5h 50m',
    thumbnail:
      'https://images.unsplash.com/photo-1524230659264-445c73a258be?q=80&w=1080',
    thumbnailHint: 'singing crowd',
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
        className="w-full py-20 md:py-28 bg-background"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" />
                  </div>
                  <Badge className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm">
                    {video.category}
                  </Badge>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-headline text-xl font-bold text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
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
        className="w-full py-20 md:py-28 bg-card/50 border-y border-border"
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
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="overflow-hidden border-border group rounded-lg">
                      <CardContent className="p-0 relative aspect-video">
                        <Image
                          src={series.thumbnail}
                          alt={series.title}
                          fill
                          className="object-cover"
                          data-ai-hint={series.thumbnailHint}
                        />
                        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
                          <h4 className="font-headline text-2xl font-bold text-white">
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
      <section className="relative w-full py-20 md:py-28 text-center border-t border-border">
        <Image
          src="/christ/fd.jpeg"
          alt="Subscribe background"
          fill
          className="object-cover"
          data-ai-hint="spiritual abstract"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold text-white mb-4">
            Never Miss a New Video
          </h2>
          <p className="font-cookie text-3xl text-white/80 max-w-xl mx-auto mb-8">
            A warm welcome always to our YOUTube Home, and give all your ears for whatever and whenever the soothing god&apos;s spirit says.
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
          src="/christ/vv.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            My Daughter &quot;You, and only you, before anybody. &quot;
          </h3>
          <div className="mx-auto max-w-4xl text-white/80 md:text-5xl mt-6 font-mea-culpa text-4xl space-y-4">
            <p>She...She is zero without her God… But to her God, she is everything 💖</p>
            <p>So, you came here to read about me, right? 💭 There’s nothing about me worth highlighting without Him ✨</p>
            <p>That’s why—instead of lifting up my name— I’d rather echo what His heart says about me 💞</p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-white text-left space-y-4 font-oleo-script text-xl md:text-2xl p-6 bg-card/10 backdrop-blur-sm relative rounded-lg">
              <p>A rainbow—His signature in the clouds. 🌈</p>
              <p>And the meaning was clear:</p>
              <p>&quot;My promise stands: &apos;Never Again.&apos; ✋ The chapter of your past is closed; its pain will not be repeated. 📖⛔ I have drawn a line in eternity; what was will not be. ✍️ I have decreed it.👑 This is my covenant:I am here for you.&quot;🤍 <span className="font-bold text-sm">edi</span></p>
              <p>Yet, my soul has a holy hunger. 😔 I wanted to hear from his heart again,so I waited, barely, until one fine day, he spoke again, deeper still, and he satisfied my inner chamber with happy gigglings. 😊💖</p>
              <p>And this is what he said:</p>
              <p>A promise is for the moments when your heart starts to forget what I&apos;ve spoken. 💭</p>
              <p>For the days you wonder if it will always be this way... 😥</p>
              <p>That&apos;s when I remind you: Not one word I have spoken over your life has been forgotten. Everything is unfolding in my proper timing.⏳✨</p>
              <p>YOU DON&apos;T HAVE TO CARRY THE WEIGHT OF HOW. I SAID IT. I WILL DO IT. 🕊️</p>
              <p>I&apos;M STILL HERE, AND I HAVEN&apos;T FORGOTTEN YOU. ❤️</p>
              <p>—GOD</p>
            </div>
          </div>
        </div>
      </section>

      <SocialMedia />
    </main>
  );
}
