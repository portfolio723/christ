import Image from 'next/image';
import { Crown, ChevronDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getAssetPath } from '@/lib/utils';
import { cn } from '@/lib/utils';

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
        src={getAssetPath('/hero.mp4')}
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
            src={getAssetPath(profileDp.imageUrl)}
            alt={profileDp.description}
            width={160}
            height={160}
            className={cn(
              'object-cover border-4 border-primary',
              profileDp.id === 'profile-dp' &&
                'rounded-full'
            )}
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
          &ldquo;
          <span className="relative inline-block">
            S
            <span
              className="absolute text-accent"
              style={{
                top: '-1rem',
                left: '-0.25rem',
                filter: 'drop-shadow(0 0 6px hsl(var(--accent)))',
              }}
            >
              <Crown className="w-6 h-6 transform -rotate-12 animate-pulse" />
            </span>
          </span>
          he prospers in all that she does&rdquo;
          <span className="text-lg font-headline italic text-white/80 ml-2">
            &mdash; Psalms 1:3
          </span>
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
