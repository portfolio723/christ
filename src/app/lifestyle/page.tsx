
import { TextRevealByWord } from '@/components/ui/text-reveal';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    href: '/lifestyle/seeking-in-the-dark',
    imageSrc: '/lg1.jpeg',
    imageAlt: 'A person walking in a dark valley with a single light source.',
    imageHint: 'seeking light dark',
    title: '...but in the quiet, dark valleys of seeking, where He becomes My only source of light, warmth, sound and celebration.',
    message: 'Ah! I love sitting in darkness for my LORD!',
  },
  // Add more blog posts here to fill the grid
];

export default function LifestylePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-white">
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <Image
          src="/lf1.jpeg"
          alt="Lifestyle background"
          fill
          className="object-cover"
          data-ai-hint="spiritual lifestyle"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4">
           <TextRevealByWord text="I AM GREATLY BLESSED HIGHLY FAVOURED DEEPLY LOVED" />
        </div>
      </section>

      <section className="w-full py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.href} href={post.href} className="group flex">
                <Card className="w-full bg-card/50 border-border hover:border-primary transition-shadow duration-300 shadow-lg hover:shadow-primary/20 rounded-xl overflow-hidden transform hover:-translate-y-1 flex flex-col">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={post.imageSrc}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={post.imageHint}
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="font-headline text-xl font-bold text-white mb-4 flex-grow">
                      {post.title}
                    </h3>
                    <p className="text-white/80 font-crimson-pro text-xl mb-6">
                      {post.message}
                    </p>
                    <div className="flex items-center text-accent font-semibold mt-auto">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
             {/* Placeholders for a 1x3 layout */}
            {[...Array(3 - blogPosts.length)].map((_, i) => (
              <div key={`placeholder-${i}`} className="rounded-xl bg-card/20 border border-dashed border-border flex items-center justify-center text-muted-foreground">
                <p>Blog Post</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
