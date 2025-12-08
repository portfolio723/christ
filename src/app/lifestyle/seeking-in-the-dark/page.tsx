
import { SocialMedia } from '@/components/page/social-media';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Seeking in the Dark',
  description: 'In the quiet, dark valleys of seeking, He becomes My only source of light, warmth, sound and celebration.',
};

export default function SeekingInTheDarkPage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <header className="relative pt-48 pb-20">
        <Image
          src="/lg1.jpeg"
          alt="Abstract dark background with light streaks"
          fill
          className="object-cover"
          data-ai-hint="dark light abstract"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-pinyon-script font-bold text-white mb-4">
              ...but in the quiet, dark valleys of seeking, where He becomes My only source of light, warmth, sound and celebration.
            </h1>
            <p className="text-2xl md:text-3xl font-love-light text-white/80">
              Ah! I love sitting in darkness for my LORD!
            </p>
        </div>
      </header>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white prose-p:font-crimson-pro">
            <p>Yes, I like to spend time with MY JESUS in that darkness, I like to fight, I like to wait for his warm embrace, and I want to wrestle in deep silence in that darkness for his whisperings. I like to be boldly engraved that his existence is with me. And lastly, in that darkness, I've been drenched IN HIS PRESENCE AND IT IS SO SWEET FOR ME ..</p>
            <br />
            <p>That's why: I like that darkness so much for my Lord</p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
