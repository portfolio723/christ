
import Image from 'next/image';
import Link from 'next/link';
import {
  PlayCircle,
  Clapperboard,
  Heart,
  Youtube,
  Instagram,
  Facebook,
  BotMessageSquare as Threads,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SocialMedia } from '@/components/page/social-media';

const featuredVideos = [
  {
    id: 'video-1',
    title: 'Metamorphosis: From Glory to Glory',
    description: 'An introduction to our new series on spiritual transformation.',
    category: 'Sermon',
    duration: '6:00',
    views: '15K',
    thumbnail: PlaceHolderImages.find((img) => img.id === 'reel-1')?.imageUrl,
    thumbnailHint: 'spiritual abstract',
  },
  {
    id: 'video-2',
    title: 'Prophetic Word: Breakthrough Season',
    description: 'A powerful prophetic word for the current season of your life.',
    category: 'Prophetic',
    duration: '18:45',
    views: '8.2K',
    thumbnail: PlaceHolderImages.find((img) => img.id === 'reel-2')?.imageUrl,
    thumbnailHint: 'serene landscape',
  },
  {
    id: 'video-3',
    title: 'Healing Prayer Session',
    description: 'Join us for a time of immersive prayer for divine healing.',
    category: 'Prayer',
    duration: '35:20',
    views: '6.7K',
    thumbnail:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwcmF5ZXJ8ZW58MHx8fHwxNzU4NzMwOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHint: 'prayer hands',
  },
  {
    id: 'video-4',
    title: 'Testimony: From Ashes to Beauty',
    description: 'A powerful story of redemption and God’s faithfulness.',
    category: 'Testimony',
    duration: '25:30',
    views: '9.1K',
    thumbnail:
      'https://images.unsplash.com/photo-1543332164-6e82f355badc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxyZWRlbXB0aW9ufGVufDB8fHx8MTc1ODczMTAwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHint: 'redemption light',
  },
  {
    id: 'video-5',
    title: 'Worship That Moves Heaven',
    description: 'An anointed session of praise and worship.',
    category: 'Worship',
    duration: '11:55',
    views: '13.8K',
    thumbnail:
      'https://images.unsplash.com/photo-1558223631-2e65d3a55743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3b3JzaGlwfGVufDB8fHx8MTc1ODczMTA0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHint: 'worship concert',
  },
  {
    id: 'video-6',
    title: 'Intercession for Nations',
    description: 'Standing in the gap for countries around the world.',
    category: 'Prayer',
    duration: '45:20',
    views: '5.9K',
    thumbnail:
      'https://images.unsplash.com/photo-1590483896841-8633c52081a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxncm91cCUyMHByYXllcnxlbnwwfHx8fDE3NTg3MzEwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnailHint: 'group prayer',
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
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          src="/butterflies.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
            Visual Ministry
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            Experience God’s presence through powerful video teachings,
            prophetic words, worship sessions, and transformational testimonies.
          </p>
        </div>
      </section>

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
                className="group overflow-hidden bg-card border-border transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2"
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
                  <Badge className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm">
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
                  <div className="flex justify-between items-center text-xs text-white/60">
                    <span>{video.duration}</span>
                    <span>{video.views} views</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    variant="outline"
                    className="w-full border-primary/50 text-primary-foreground/80 hover:bg-primary hover:text-primary-foreground"
                  >
                    Watch Now
                  </Button>
                </CardFooter>
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
                    <Card className="overflow-hidden border-border group">
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

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 text-center bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold text-white mb-4">
            Never Miss a New Video
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Join our YouTube family for weekly spiritual messages, prophetic
            words, and worship sessions.
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
      <section className="w-full py-20 md:py-28 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-headline font-bold text-white mb-4">
            Our Sacred Mission
          </h2>
          <blockquote className="max-w-3xl mx-auto text-xl text-white/80 italic">
            &ldquo;To inspire believers to embrace divine encounters through visual
            ministry—transforming hearts with prophetic insight, worship, and
            heartfelt prayer.&rdquo;
          </blockquote>
        </div>
      </section>

      <SocialMedia />
    </main>
  );
}
