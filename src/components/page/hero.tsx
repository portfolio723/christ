import Image from 'next/image';
import { Crown, ChevronDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

const heroBg = PlaceHolderImages.find((img) => img.id === 'hero-background');
const profileDp = PlaceHolderImages.find((img) => img.id === 'profile-dp');

export function Hero() {
  if (!heroBg || !profileDp) {
    return null;
  }
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white overflow-hidden"
    >
      <Image
        src={heroBg.imageUrl}
        alt={heroBg.description}
        fill
        className="object-cover"
        data-ai-hint={heroBg.imageHint}
        priority
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
            className="rounded-full object-cover border-4 border-primary"
            data-ai-hint={profileDp.imageHint}
            style={{
              boxShadow: '0 0 40px hsl(var(--primary)), 0 0 10px #000',
            }}
          />
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold">
          God
          <span className="relative inline-block mx-1">
            s
            <span
              className="absolute text-accent"
              style={{
                top: '-2.5rem',
                left: '-0.75rem',
                filter: 'drop-shadow(0 0 8px hsl(var(--accent)))',
              }}
            >
              <Crown className="w-12 h-12 transform -rotate-12 animate-pulse" />
            </span>
          </span>
          piritsays
        </h1>
        <p className="font-script italic text-2xl md:text-3xl mt-4">
          She prospers in all that she does
        </p>
        <p className="text-lg mt-2 font-headline italic text-white/80">
          Psalms 1:3
        </p>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <a href="#reels" aria-label="Scroll down to reels">
          <ChevronDown className="w-10 h-10 text-white/70 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
