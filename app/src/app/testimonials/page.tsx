
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SocialMedia } from '@/components/page/social-media';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonies | Hearts Joined with GOD',
  description: 'Read true stories of healing, breakthrough, deliverance, and restoration. See how God\'s deep, measureless love has encouraged and transformed inward spirits.',
};

const testimonials = [
  {
    quote: 'After a terminal diagnosis, the prayers here brought complete healing. Glory to God!',
    name: 'Sarah L.',
    location: 'Texas, USA',
    category: 'Healing',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-1')?.imageUrl,
    imageHint: 'smiling woman',
  },
  {
    quote: 'My business was resurrected after prophetic words. Now I thrive in ways I never imagined.',
    name: 'Michael R.',
    location: 'Phoenix, AZ',
    category: 'Breakthrough',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-2')?.imageUrl,
    imageHint: 'man in suit',
  },
  {
    quote: 'Fifteen years of addiction were broken through heartfelt intercession and God’s power!',
    name: 'Jennifer T.',
    location: 'Dallas, TX',
    category: 'Deliverance',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-3')?.imageUrl,
    imageHint: 'woman looking hopeful',
  },
   {
    quote: 'Depression lifted, and I found new purpose. This ministry’s support changed my life.',
    name: 'David O.',
    location: 'Lagos, Nigeria',
    category: 'Freedom',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-4')?.imageUrl,
    imageHint: 'man looking up',
  },
  {
    quote: 'My eyesight returned after prayer. Doctors say it’s a miracle!',
    name: 'Maria G.',
    location: 'São Paulo, Brazil',
    category: 'Restoration',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-5')?.imageUrl,
    imageHint: 'woman with glasses',
  },
  {
    quote: 'I discovered my prophetic gifting through this community. Now I mentor others!',
    name: 'John K.',
    location: 'London, UK',
    category: 'Calling',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-6')?.imageUrl,
    imageHint: 'man reading bible',
  },
];

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          src="test.mp4"
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
            <Image src="hii.png" alt="A small heart icon with a plus sign, symbolizing joined hearts" width={64} height={64} className="ml-0 sm:ml-2 mt-2 sm:mt-0" />
          </h1>
          <p className="max-w-3xl mx-auto text-3xl md:text-4xl text-white/80 font-allison">
            Come hear the true stories our blog shares, of their inward spirits encouraged by knowing GOD&apos;s deep, measureless love.
          </p>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section id="testimonials-grid" className="w-full py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col bg-card border-border p-6 rounded-lg shadow-lg">
                <CardContent className="flex-grow p-0">
                  <Badge className="mb-4 bg-primary/20 text-primary-foreground border-primary/30">{testimonial.category}</Badge>
                  <blockquote className="text-lg italic text-white/90 border-l-4 border-primary pl-4 mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </CardContent>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
                  {testimonial.image && (
                     <Image
                        src={testimonial.image}
                        alt={`Portrait of ${testimonial.name}, who shared a testimony.`}
                        width={56}
                        height={56}
                        className="rounded-full object-cover"
                        data-ai-hint={testimonial.imageHint}
                      />
                  )}
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/60">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Share Section */}
      <section className="relative w-full py-20 md:py-28 text-center border-y border-border">
        <Image
          src="ed.jpeg"
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
          src="Testi.jpeg"
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
