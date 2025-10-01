
import {
  Instagram,
  Youtube,
  Send,
  Twitter,
  type LucideIcon,
} from 'lucide-react';
import { Card } from '@/components/ui/card';

type SocialPlatform = {
  name: string;
  Icon: LucideIcon;
  handle: string;
  followers: string;
  url: string;
  color: string;
};

const socialPlatforms: SocialPlatform[] = [
  {
    name: 'Instagram',
    Icon: Instagram,
    handle: '@godsspiritsays',
    followers: 'Root deep. Rise radiant',
    url: 'https://www.instagram.com/godsspiritsays/',
    color: 'group-hover:text-[#E4405F]',
  },
  {
    name: 'YouTube',
    Icon: Youtube,
    handle: 'GodsspiritSays',
    followers: 'Heal inside. Shine outside',
    url: 'https://www.youtube.com/@GodsspiritSays',
    color: 'group-hover:text-[#FF0000]',
  },
  {
    name: 'Telegram',
    Icon: Send,
    handle: 'GodsspiritSaysOfficial',
    followers: 'Go in. Glow out',
    url: '#',
    color: 'group-hover:text-[#229ED9]',
  },
  {
    name: 'Twitter',
    Icon: Twitter,
    handle: '@godsspiritsays',
    followers: 'Soul first.  Shine next.',
    url: 'https://x.com/godsspiritsays',
    color: 'group-hover:text-[#1DA1F2]',
  },
];

export function SocialMedia() {
  return (
    <section
      id="connect"
      className="relative w-full py-20 md:py-32 bg-card/50 overflow-hidden"
    >
      <video
        src="/christ/xx.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Remain In The Vine
          </h2>
          <p className="max-w-[600px] text-white/80 md:text-xl">
            Stay connected to the branch to get nourishment continually. 🍇
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={`Follow on ${platform.name}`}
            >
              <Card className="bg-card p-6 rounded-xl border-border group-hover:border-primary transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20 h-full">
                <div className="flex items-center gap-4">
                  <platform.Icon
                    className={`w-10 h-10 text-primary transition-colors duration-300 group-hover:scale-110 group-hover:animate-pulse ${platform.color}`}
                  />
                  <div>
                    <h3 className="font-bold text-lg text-white">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-white/60">{platform.handle}</p>
                  </div>
                </div>
                <p className="font-hurricane text-white mt-4 text-4xl">
                  {platform.followers}
                </p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
