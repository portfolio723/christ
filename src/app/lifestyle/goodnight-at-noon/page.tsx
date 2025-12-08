
import { SocialMedia } from '@/components/page/social-media';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Goodnight at High Noon',
  description: 'Sometimes the soul needs to clock out early to clock into eternity.',
};

export default function GoodnightAtNoonPage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <header className="relative pt-48 pb-20">
        <Image
          src="/lg2.jpeg"
          alt="Sun shining at high noon"
          fill
          className="object-cover"
          data-ai-hint="sun bible"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <p className="text-2xl md:text-3xl font-love-light text-white/80">
              Sometimes the soul needs to clock out early to clock into eternity.
            </p>
        </div>
      </header>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white prose-p:font-crimson-pro">
            <p>DND people the person is unavailable .....</p>
            <p>Sometimes the soul needs to clock out early to clock into eternity.</p>
            <br />
            <p>What more do I need?</p>
            <p>His Love Letter + My Highlighters +</p>
            <p>Bitter-Sweet + Black brew +</p>
            <p>My Quiet Heart.</p>
            <br />
            <p>I must and should read the Bible every day…</p>
            <br />
            <p>Sounds holy!! Right??</p>
            <br />
            <p>Oh, how poor I am — &apos;cause I’m not reading like that. Maybe in the back of your mind, you’re thinking the same thing?</p>
            <br />
            <p>&quot;Hah… nah. I skip days in a week. And yes, I’m honest.&quot;</p>
            <br />
            <p>But you — do you ever feel it?</p>
            <p>While reading the living Word —</p>
            <p>how every chapter</p>
            <p>tastes like the ultimate dessert?</p>
            <br />
            <p>For me, it is.</p>
            <p>Some days, I read speedy-speedy — like someone who hasn’t eaten in many days.</p>
            <p>And some days, one whole chapter takes me hours… like when we eat sweets bit by bit, in tiny pieces.</p>
            <br />
            <p>Seriously — God’s WORD is a living word. Why am I saying that? Because even when I’m swamped with work, clumsy and stuck — whatever verses I’ve read pass through my mind like a cool, unexpected breeze. And those stories, those people — they pull me right back into ancient times.</p>
            <br />
            <p>It’s a living Word because He is a living GOD. Thank You, breath of the Holy Spirit.</p>
            <br />
            <p>Reading the Bible is one of my favorite habits.</p>
            <p>I read the Bible… but not daily.</p>
            <p>Once again, I affirm. 😉</p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
