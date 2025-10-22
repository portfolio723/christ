
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SocialMedia } from '@/components/page/social-media';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

// This metadata is still useful for static analysis and SEO, even in a client component.
const metadata: Metadata = {
  title: 'Testimonies | Hearts Joined with GOD',
  description: 'Read true stories of healing, breakthrough, deliverance, and restoration. See how God\'s deep, measureless love has encouraged and transformed inward spirits.',
};

const testimonials = [
  {
    quote: 'After a terminal diagnosis, the prayers here brought complete healing. Glory to God!',
    name: 'Sarah L.',
    designation: 'Texas, USA',
    src: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1080',
    imageHint: 'smiling woman',
  },
  {
    quote: 'My business was resurrected after prophetic words. Now I thrive in ways I never imagined.',
    name: 'Michael R.',
    designation: 'Phoenix, AZ',
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1080',
    imageHint: 'man in suit',
  },
  {
    quote: 'Fifteen years of addiction were broken through heartfelt intercession and God’s power!',
    name: 'Jennifer T.',
    designation: 'Dallas, TX',
    src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1080',
    imageHint: 'woman hopeful',
  },
   {
    quote: 'Depression lifted, and I found new purpose. This ministry’s support changed my life.',
    name: 'David O.',
    designation: 'Lagos, Nigeria',
    src: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1080',
    imageHint: 'man looking up',
  },
  {
    quote: 'My eyesight returned after prayer. Doctors say it’s a miracle!',
    name: 'Maria G.',
    designation: 'São Paulo, Brazil',
    src: 'https://images.unsplash.com/photo-1575084713-3983949e6f5a?q=80&w=1080',
    imageHint: 'woman with glasses',
  },
  {
    quote: 'I discovered my prophetic gifting through this community. Now I mentor others!',
    name: 'John K.',
    designation: 'London, UK',
    src: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1080',
    imageHint: 'man reading bible',
  },
];

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          src="/test.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-allison mb-4 tracking-tight flex flex-col sm:flex-row items-center justify-center">
            Hearts Joined with GOD
            <Image src="/hii.png" alt="A small heart icon with a plus sign, symbolizing joined hearts" width={64} height={64} className="ml-0 sm:ml-2 mt-2 sm:mt-0" />
          </h1>
          <p className="max-w-3xl mx-auto text-3xl md:text-4xl text-white/80 font-allison">
            Come hear the true stories our blog shares, of their inward spirits encouraged by knowing GOD&apos;s deep, measureless love.
          </p>
        </div>
      </section>

      {/* Animated Testimonial Section */}
      <section id="testimonials-grid" className="w-full bg-background">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </section>
      
      {/* Call to Share Section */}
      <section className="relative w-full py-20 md:py-28 text-center border-y border-border">
        <Image
          src="/ed.jpeg"
          alt="A background of graceful, spiritual light patterns inviting users to share their story."
          fill
          className="object-cover"
          data-ai-hint="spiritual abstract"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-engagement font-bold text-white mb-4">
            Leave a Mark of Grace
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 font-the-nautigal text-3xl md:text-4xl">
            Your testimony is a fingerprint of God&apos;s work. You never know whose faith is waiting for a story like yours.So drop a pebble of your testimony and watch the ripples of faith spread.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold">
            Submit Your Testimony
          </Button>
        </div>
      </section>

       {/* Mission Restatement */}
       <section
        id="testimonials-mission"
        className="relative w-full py-20 md:py-32 bg-background text-white"
      >
        <Image
          src="/Testi.jpeg"
          alt="A tranquil and spiritual background for the 'love note' section."
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-white text-left space-y-4 font-oleo-script text-lg md:text-2xl p-6 md:p-8 bg-card/10 backdrop-blur-sm relative rounded-lg">
              <p className='font-lavishly-yours text-3xl md:text-4xl'>And...HER love note to her DAD ✍️</p>
              <div className="font-bonheur-royale text-xl md:text-3xl space-y-4">
                <br />
                <p>Jesus, my love...་༘࿐✨</p>
                <br />
                <p>I can&apos;t think of my life without you. And I can&apos;t accept myself without you.</p>
                <p>If my presence doesn&apos;t look like you, I don&apos;t really agree to be like myself...</p>
                <br />
                <p>Every second I want you inside me. ヅ</p>
                <br />
                <p>And you know , my Jesus !?</p>
                <p>They made a comment You have beautiful eyes. I answered, &quot;Yes, those are... because they always cry for my JEHOVAH.&quot;😚</p>
                <br />
                <p>And I know and I always see your smiles always fall upon me and you anointed my lips with a permenant Joy of you 🥰</p>
                <br />
                <p>I believe I&apos;m your one and only delight❤️‍🔥</p>
                <br />
                <p>I know you love the world SO much</p>
                <p>But, i have known you love me TOO much and anyone is after me 😉🤍</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialMedia />
    </main>
  );
}
