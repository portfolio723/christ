'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';
import { PlaceHolderImages, type VideoReel } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';

const reels = PlaceHolderImages.filter(
  (img) => img.id.startsWith('reel-') && img.videoSrc
).map((r) => r as VideoReel);

function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="aspect-video w-full">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}

function LocalVideo({ src }: { src: string }) {
  return (
    <div className="aspect-video w-full">
      <video src={src} controls autoPlay className="w-full h-full" />
    </div>
  );
}

export function VideoReels() {
  const [selectedReel, setSelectedReel] = useState<VideoReel | null>(null);

  const getYoutubeVideoId = (url: string) => {
    try {
      const videoUrl = new URL(url);
      if (videoUrl.hostname === 'youtu.be') {
        return videoUrl.pathname.slice(1);
      }
      if (
        videoUrl.hostname === 'www.youtube.com' ||
        videoUrl.hostname === 'youtube.com'
      ) {
        return videoUrl.searchParams.get('v');
      }
    } catch {
      return null;
    }
    return null;
  };

  return (
    <section id="reels" className="w-full py-20 md:py-32 bg-background">
      <Dialog
        open={!!selectedReel}
        onOpenChange={(isOpen) => !isOpen && setSelectedReel(null)}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              From The Wellspring
            </h2>
            <p className="max-w-[600px] text-white/80 md:text-xl">
              Explore our latest video reels for daily inspiration and spiritual
              guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reels.map((reel) => {
              if (!reel) return null;
              return (
                <DialogTrigger key={reel.id} asChild>
                  <Card
                    onClick={() => setSelectedReel(reel)}
                    className="group overflow-hidden rounded-none border-2 border-transparent bg-card transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2 cursor-pointer"
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
                        <p className="text-white/80">{reel.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
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

        {selectedReel && (
          <DialogContent className="max-w-3xl p-0 bg-card border-primary/50">
            <DialogHeader className="p-4">
              <DialogTitle className="text-white">
                {selectedReel.description}
              </DialogTitle>
            </DialogHeader>
            {selectedReel.videoSrc.startsWith('http') ? (
              <YouTubeEmbed
                videoId={getYoutubeVideoId(selectedReel.videoSrc) || ''}
              />
            ) : (
              <LocalVideo src={selectedReel.videoSrc} />
            )}
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
