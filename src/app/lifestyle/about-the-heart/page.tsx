
'use client';

import { SocialMedia } from '@/components/page/social-media';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Note: Metadata is not used in client components, but we can keep it for static generation reference
/*
export const metadata: Metadata = {
  title: 'About the Heart',
  description: 'Beyond the "about me" page, here’s a closer look at the heart behind it all.',
};
*/

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
              Beyond the &quot;about me&quot; page, here’s a closer look at the heart behind it all.
            </h1>
        </div>
      </header>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white prose-p:font-crimson-pro prose-li:font-crimson-pro prose-li:text-white/80">
            <ol className="list-decimal list-outside space-y-2">
              <li>I am Jesus&apos;s Own special child.</li>
              <li>I&apos;m a South Indian.</li>
              <li>I am a March deer.</li>
              <li>I accepted Jesus when I was 23.</li>
              <li>I&apos;m a homebird—traveling isn’t my thing.</li>
              <li>My parents hoped for a boy, wished and waited, and then, there was me.</li>
              <li>In school, I played only one competition, &ldquo;caroms,&rdquo;  and lost in the final round.</li>
              <li>I was the topper in my MBA.</li>
              <li>I failed math many times.</li>
              <li>I had stage fright until I started sharing testimonies at church.</li>
              <li>I enjoy deep conversations — but only the rare, meaningful ones.</li>
              <li>I like small talk sometimes, too.</li>
              <li>I love plain baked cakes, no frosting, no frills.</li>
              <li>I eat fruits much.</li>
              <li>White is my go-to, and I still love wine red, chocolate brown, onion pink, olive green, sea blue, and crushed grape plum.</li>
              <li>I love melodies.</li>
              <li>Car driving? Still scares me, even after all the training.</li>
              <li>Fish and lamb head soup is my absolute favorite.</li>
              <li>I drink dark coffee, and I love it with dark chocolate.</li>
              <li>I love milk rice.</li>
              <li>My two favorite compliments:
                <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
                  <li>A non-Christian friend told me she’d totally lost interest in Christianity. After meeting me, what was lost in her heart toward Christians was found good again.</li>
                  <li>Many say I have a heavenly glow on my face.</li>
                </ul>
              </li>
              <li>I know two people who share my birthday. One texts me exactly at 12 AM — I just say, &ldquo;Same to you, birthday buddy.&rdquo;Another, with my exact name and my birthday, found me and sent a friend request. I was genuinely thrilled.</li>
              <li>Since childhood, I never liked babies until I met them personally in my home.</li>
              <li>I&apos;m a night owl. I hate early morning journeys to catch up the trains.</li>
              <li>I spend long hours with my Jesus in the name of prayer.</li>
              <li>I am the youngest in my family.</li>
              <li>I have no regrets about missing anything or anyone after Jesus came into my life.</li>
              <li>My school labeled me the most silent person in school.</li>
              <li>I&apos;m a terrible gift-giver and taker, too.</li>
              <li>I preached my first sermon in the Krishna district.</li>
              <li>I dream almost every day, and I remember them, living those moments long after I wake.</li>
              <li>I sleep best with dim lights and quiet, gentle nights.</li>
              <li>People often appreciate my handwriting.</li>
              <li>In moments of deepest pain or highest joy, I cannot listen to music.</li>
              <li>I can’t drink anything while it&apos;s still hot.</li>
              <li>I can’t help but color and write all over my Bible with what I feel, so many people hate my Bible.</li>
              <li>I love The Passion Translation and NLT versions of the Bible.</li>
              <li>Tender coconut and jackfruit are my soul in ice cream scoops.</li>
              <li>Christmas evenings hold a special place in my heart.</li>
              <li>I&apos;m the best secret keeper.</li>
              <li>I&apos;m both extrovert and introvert — depends.</li>
              <li>I&apos;m not a social butterfly.</li>
              <li>I don’t have any &ldquo;best&rdquo; friends, but I have good ones.</li>
              <li>I change my number often; my brother finds it annoying.</li>
              <li>I bring up even unnecessary topics with my dad — just to talk to him.</li>
              <li>After Jesus, my mom is my favorite person.</li>
              <li>I can’t stand crowds. I breathe better on lonely roads.</li>
              <li>I love tulips.</li>
              <li>I suddenly became a watchaholic. My first wristwatch was a birthday gift from my brother, bought with his very first stipend.</li>
              <li>I&apos;m bookish.</li>
              <li>I sometimes speak before others finish a habit I dislike and am learning to control.</li>
              <li>Wherever I go, I miss home and wish to return.</li>
              <li>I cannot put anything on my Bible — not a cup, not a book, not a phone. And I cannot tolerate anything being placed on it except the Bible itself.</li>
            </ol>
            <br />
            <p>Thanks for reading a piece of my story.</p>
            <p>
              I’ll be sharing more in this space and on my YouTube channel —{' '}
              <a
                href="https://www.youtube.com/@GodsspiritSays"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline"
              >
                &ldquo;Godsspiritsays.&rdquo;
              </a>
            </p>
            <br />
            <p>Tell me 3 things about you in the comments</p>
            <p>I’d love to hear your heart and see what we have in common.</p>
        </div>
      </article>

      <section id="comments" className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-headline font-bold text-accent">Comments</h2>
            {/* <Button variant="ghost" className="text-white/80">Newest First</Button> */}
          </div>
          <div className="bg-card/50 p-6 rounded-lg border border-border">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-input/80 border-border focus:ring-primary"
                  aria-label="Your Name"
                />
                <Input
                  type="email"
                  placeholder="Your Email (won't be published)"
                  className="bg-input/80 border-border focus:ring-primary"
                  aria-label="Your Email"
                />
              </div>
              <Textarea
                placeholder="Leave your comment..."
                rows={5}
                className="bg-input/80 border-border focus:ring-primary"
                aria-label="Your Comment"
              />
              <div className="flex justify-end items-center gap-4">
                <Button variant="ghost" className="text-white/70">Preview</Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90 font-bold">Post Comment</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SocialMedia />
    </main>
  );
}
