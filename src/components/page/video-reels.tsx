'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';

const reels: ImagePlaceholder[] = PlaceHolderImages.filter(
  (img) => img.id.startsWith('reel-')
).slice(0, 3); // Take first 3 reels


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
  const [selectedReel, setSelectedReel] = useState<ImagePlaceholder | null>(null);

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

  const renderCardContent = (reel: ImagePlaceholder) => (
    <Card
      className="group overflow-hidden rounded-lg border-2 border-transparent bg-card transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2"
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
          {reel.videoSrc && (
            <>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" />
              </div>
            </>
          )}
        </div>
        <div className="p-4 md:p-6">
          <p className="text-white/80 whitespace-pre-wrap">{reel.description}</p>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="reels" className="relative w-full py-20 md:py-32 bg-background">
      <Image
        src="/christ/tr.jpeg"
        alt="Wellspring background"
        fill
        className="object-cover"
        data-ai-hint="spiritual wellspring"
      />
      <div className="absolute inset-0 bg-black/70" />
      <Dialog
        open={!!(selectedReel && selectedReel.videoSrc)}
        onOpenChange={(isOpen) => !isOpen && setSelectedReel(null)}
      >
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              From The Wellspring
            </h2>
            <p className="max-w-[600px] text-white/80 text-2xl md:text-2xl font-fasthand">
              &quot;Listen for His voice&quot;. Be encouraged and watch our latest video teachings.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reels.map((reel) => {
              if (!reel) return null;
              if (reel.videoSrc) {
                return (
                  <DialogTrigger key={reel.id} asChild>
                    <div onClick={() => setSelectedReel(reel)} className="cursor-pointer">
                      {renderCardContent(reel)}
                    </div>
                  </DialogTrigger>
                );
              }
              return (
                 <div key={reel.id} className="cursor-default">
                    {renderCardContent(reel)}
                 </div>
              )

            })}
          </div>
        </div>

        {selectedReel && selectedReel.videoSrc && (
          <DialogContent className="max-w-3xl p-0 bg-card border-primary/50 w-[90vw] rounded-lg">
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
