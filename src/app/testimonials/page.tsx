import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { SocialMedia } from '@/components/page/social-media';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
      <section className="relative h-[80vh] w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          src="/pouring-water.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
            Lives Transformed
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            Hear real stories of divine breakthrough, healing, and purpose from our community.
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
                        alt={testimonial.name}
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
      <section className="w-full py-20 md:py-28 text-center bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold text-white mb-4">
            Share Your Story
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Your testimony could ignite hope and faith in others—submit today.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold">
            Submit Your Testimony
          </Button>
        </div>
      </section>

       {/* Mission Restatement */}
      <section className="w-full py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-headline font-bold text-white mb-4">
            Our Sacred Mission
          </h2>
          <blockquote className="max-w-3xl mx-auto text-xl text-white/80 italic">
            &ldquo;To declare God’s faithfulness through testimonies of miraculous transformation, inspiring a community to walk in divine promise and purpose.&rdquo;
          </blockquote>
        </div>
      </section>

      <SocialMedia />
    </main>
  );
}
