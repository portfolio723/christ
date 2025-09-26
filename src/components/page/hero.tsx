
import Image from 'next/image';
import { Crown, ChevronDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { GradualSpacing } from '@/components/ui/gradual-spacing';

const profileDp = PlaceHolderImages.find((img) => img.id === 'profile-dp');

export function Hero() {
  if (!profileDp) {
    return null;
  }
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white overflow-hidden"
    >
      <video
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 0%, hsla(0, 0%, 0%, 0.9) 100%)',
        }}
      />
      <div className="relative z-10 flex flex-col items-center p-4">
        <div className="relative mb-6">
          <Image
            src={profileDp.imageUrl}
            alt={profileDp.description}
            width={160}
            height={160}
            className={cn(
              'object-cover border-4 border-white/10',
              profileDp.id === 'profile-dp' &&
                'rounded-full'
            )}
            data-ai-hint={profileDp.imageHint}
            style={{
              boxShadow: '0 0 40px rgba(255,255,255,0.5), 0 0 10px #000',
            }}
          />
        </div>
        <h1 className="font-headline text-4xl md:text-6xl font-bold">
          God
          <span className="relative inline-block mx-1">
            s
          </span>
          piritsays 🕊️
        </h1>
        <div className="relative mt-4 flex flex-col items-center">
          <GradualSpacing
            text="“She prospers in all that she does”"
            className="font-script italic text-3xl md:text-4xl"
            framerProps={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="absolute text-accent" style={{ top: '-1rem', left: '0.5rem', filter: 'drop-shadow(0 0 6px hsl(var(--accent)))' }}>
              <Crown className="w-8 h-8 transform -rotate-12 animate-pulse" />
            </span>
          </GradualSpacing>
           <p className="text-lg font-headline italic text-white/80 mt-4">
              &mdash; Psalms 1:3
            </p>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <a href="#reels" aria-label="Scroll down to reels">
          <ChevronDown className="w-10 h-10 text-white/70 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
