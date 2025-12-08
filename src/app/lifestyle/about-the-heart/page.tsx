
import { SocialMedia } from '@/components/page/social-media';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About the Heart',
  description: 'Beyond the "about me" page, here’s a closer look at the heart behind it all.',
};

export default function AboutTheHeartPage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <header className="relative pt-48 pb-20">
        <Image
          src="/lf3.jpeg"
          alt="A closer look at the heart behind the content."
          fill
          className="object-cover"
          data-ai-hint="heart reflection"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-pinyon-script font-bold text-white mb-4">
              Beyond the "about me" page, here’s a closer look at the heart behind it all.
            </h1>
        </div>
      </header>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white prose-p:font-crimson-pro">
            <p>I am Jesus’s Own special child.</p>
            <p>I’m a South Indian.</p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
