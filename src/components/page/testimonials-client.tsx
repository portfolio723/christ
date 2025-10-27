
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SocialMedia } from '@/components/page/social-media';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';


const testimonials = [
  {
    description: '<p>Heartfelt voice by Anu</p><br/><p>Shalom & Heavenly Love to You All</p><p>When I found this channel, I found a place where God speaks.</p><p>Not man\'s words—but His.</p><br/><p>Through every message, through every video,</p><p>I hear His voice. Gentle. Clear. True.</p><br/><p>This is SPIRIT BREATHED</p><p>It hits the soul</p><br/><p>Thank you for being a voice that carries only His, and I pray that this kind of genuine message from God will reach and connect many hearts through His Messenger.✍️🕊️</p>',
    name: 'With love\nAnu',
    designation: '',
    src: '/tt1.jpeg',
    imageHint: 'smiling woman',
  },
  
];

export function TestimonialsClient() {
  const { toast } = useToast();
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
      <section id="testimonials-grid" className="relative w-full">
         <Image
            src="/tsb.jpeg"
            alt="A spiritual background for the testimonials section."
            fill
            className="object-cover"
            data-ai-hint="spiritual abstract"
          />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>
      
      {/* Call to Share Section */}
      <section className="relative w-full py-20 md:py-28 text-center border-y border-border bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-engagement font-bold text-white mb-4">
            Leave a Mark of Grace
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 font-crimson-pro text-2xl md:text-3xl">
            Your testimony is a fingerprint of God&apos;s work. You never know whose faith is waiting for a story like yours.So drop a pebble of your testimony and watch the ripples of faith spread.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold" asChild>
            <Link href="/contact#contact-form">Submit Your Testimony</Link>
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
