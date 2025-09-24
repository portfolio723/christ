import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GoldenCheck } from '@/components/icons';
import { Mail } from 'lucide-react';

export function Newsletter() {
  const benefits = [
    'Weekly spiritual insights',
    'Exclusive content and reels',
    'Early access to events',
    'Community prayers and support',
  ];

  return (
    <section id="newsletter" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-6 relative">
            <Mail className="w-16 h-16 text-primary absolute -top-12 -left-8 opacity-20 transform -rotate-12 animate-float" />
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Join the Flock
            </h2>
            <p className="max-w-[600px] text-white/80 md:text-xl/relaxed">
              Subscribe to our newsletter for a weekly dose of inspiration,
              scripture, and divine guidance delivered straight to your inbox.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4">
                  <GoldenCheck className="w-6 h-6 shrink-0" />
                  <span className="text-lg text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md bg-card border-primary/50 shadow-lg shadow-primary/10">
              <CardHeader>
                <CardTitle className="text-center font-headline text-2xl text-white">
                  Subscribe for Blessings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-input border-border focus:ring-primary focus:border-primary text-base"
                    aria-label="Your Name"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    className="bg-input border-border focus:ring-primary focus:border-primary text-base"
                    aria-label="Email Address"
                  />
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6"
                  >
                    Receive Wisdom
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
