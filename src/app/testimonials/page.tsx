
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          src="/christ/test.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-allison mb-4 tracking-tight flex items-center justify-center">
            Hearts Joined with GOD
            <Image src="/christ/hii.png" alt="icon" width={64} height={64} className="ml-2" />
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
      <section className="relative w-full py-20 md:py-28 text-center border-y border-border">
        <Image
          src="/christ/ed.jpeg"
          alt="Grace background"
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
          src="/christ/Testi.jpeg"
          alt="Mission background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            His Vision, Our Mission
          </h3>
          <div className="mx-auto max-w-4xl text-white/80 md:text-5xl mt-6 font-mea-culpa text-3xl md:text-4xl space-y-4">
            <p>God mends broken hearts into mighty wings to soar 🦋 His purpose is to strengthen us from the inside out 💪 In Jesus&apos; name 🕊️</p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-white text-left space-y-4 font-oleo-script text-lg md:text-2xl p-4 md:p-6 bg-card/10 backdrop-blur-sm relative rounded-lg">
              <p>
                In the name of JESUS CHRIST, greetings 🌸
              </p>
              <p>
                Beloved, the only purpose 💝 I launched this website is to tell you what GOD&apos;S SPIRIT Says 🕊️ for us to uplift and strengthen your inner man 💪 And enable us to internally strong first. Physiologic issues will automatically be resolved once we have healed 💝 inwardly.
              </p>
              <p>
                Yes beloved 💙... Our mighty GOD will change our every broken heart piece to turn into mighty butterfly wings 🦋 to fly high 🕊️ And He will use every sharpened broken piece that converts it into massive strong butterfly wings. Even if your broken heart 💔 pieces pierced him and drew blood... 🔴
              </p>
              <p>
                By the way, one more affirmation! ⚡ Instead of hitting the millions of subscribers, my main goal in using Jesus&apos; name is for his love to reach the hearts of the millions 🏠🙏
              </p>
            </div>
          </div>
        </div>
      </section>

      <SocialMedia />
    </main>
  );
}
