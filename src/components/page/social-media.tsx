
import {
  Instagram,
  Youtube,
  Facebook,
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
    followers: '1.2M Followers',
    url: '#',
    color: 'group-hover:text-[#E4405F]',
  },
  {
    name: 'YouTube',
    Icon: Youtube,
    handle: 'GodsspiritSays',
    followers: '890k Subscribers',
    url: '#',
    color: 'group-hover:text-[#FF0000]',
  },
  {
    name: 'Facebook',
    Icon: Facebook,
    handle: 'GodsspiritSaysOfficial',
    followers: '500k Likes',
    url: '#',
    color: 'group-hover:text-[#1877F2]',
  },
  {
    name: 'Twitter',
    Icon: Twitter,
    handle: '@godsspiritsays',
    followers: '320k Followers',
    url: '#',
    color: 'group-hover:text-[#1DA1F2]',
  },
];

export function SocialMedia() {
  return (
    <section
      id="connect"
      className="w-full py-20 md:py-32 bg-card/50"
      style={{
        backgroundImage:
          'radial-gradient(circle at bottom right, hsla(270, 50%, 20%, 0.2), transparent 30%)',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Stay Connected
          </h2>
          <p className="max-w-[600px] text-white/80 md:text-xl">
            Follow the journey and join our vibrant community on social media.
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
                <p className="font-bold text-white mt-4 text-2xl">
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
