
import { SocialMedia } from '@/components/page/social-media';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'This Is How We Talk',
  description: 'A peek into my quiet world!! His Voice on paper. My pen in hand. His loud grace. Writing life. Coloring faith.',
};

export default function ThisIsHowWeTalkPage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <header className="relative pt-48 pb-20">
        <Image
          src="/lf4.jpeg"
          alt="A person writing in a journal with a pen."
          fill
          className="object-cover"
          data-ai-hint="writing journal faith"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-pinyon-script font-bold text-white mb-4">
              This Is How We Talk.
            </h1>
            <p className="text-2xl md:text-3xl font-love-light text-white/80">
              A peek into my quiet world!! His Voice on paper. My pen in hand. His loud grace. Writing life. Coloring faith.
            </p>
        </div>
      </header>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white prose-p:font-crimson-pro">
            <p>I Write When Moved by the Holy Spirit. There are times I need to speak to God, but the words fail me and won&apos;t come. In those moments of silence, I pick up my pen. The thoughts flow onto the page. I draw and color, too. and it brings me deep peace. Writing about God has become a natural part of my communion with Him. I don&apos;t follow a strict method or take notes after reading the Bible. I write about His promises and the story of our relationship.</p>
            <br />
            <p>I write, and I write all about Him.</p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
