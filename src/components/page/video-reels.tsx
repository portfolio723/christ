import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const reels = [
  PlaceHolderImages.find((img) => img.id === 'reel-1'),
  PlaceHolderImages.find((img) => img.id === 'reel-2'),
  PlaceHolderImages.find((img) => img.id === 'reel-3'),
];

export function VideoReels() {
  return (
    <section id="reels" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Words of Wisdom
          </h2>
          <p className="max-w-[600px] text-white/80 md:text-xl">
            Explore our latest video reels for daily inspiration and spiritual
            guidance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reels.map((reel, index) => {
            if (!reel) return null;
            return (
              <Card
                key={index}
                className="group overflow-hidden rounded-none border-2 border-transparent bg-card transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={reel.imageUrl}
                      alt={reel.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={reel.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" />
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-white/80">
                      {reel.description} - A message of hope and faith for your
                      day.
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
          >
            Watch More
          </Button>
        </div>
      </div>
    </section>
  );
}
