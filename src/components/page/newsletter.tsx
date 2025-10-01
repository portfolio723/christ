import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import FeatureSection from '@/components/ui/feature-section';

export function Newsletter() {

  return (
    <section
      id="newsletter"
      className="w-full py-20 md:py-32 relative"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--accent)), transparent)',
        }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-6 relative">
            <Mail className="w-16 h-16 text-primary absolute -top-12 -left-8 opacity-20 transform -rotate-12 animate-float" />
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Join the Flock
            </h2>
            <FeatureSection />
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md bg-card border-primary/50 shadow-2xl shadow-primary/20 transition-all hover:shadow-primary/30">
              <CardHeader>
                <CardTitle className="text-center font-headline text-2xl text-white">
                  Stay Connected in JESUS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-input border-border focus:ring-primary focus:border-primary text-base py-6 placeholder:text-white/50"
                    aria-label="Your Name"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    className="bg-input border-border focus:ring-primary focus:border-primary text-base py-6 placeholder:text-white/50"
                    aria-label="Email Address"
                  />
                  <Button
                    type="submit"
                    className="font-bold text-lg py-6 transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-r from-primary to-purple-500 hover:shadow-lg hover:shadow-primary/40"
                    style={{
                       boxShadow: '0 4px 14px hsla(var(--primary), 0.3)',
                    }}
                  >
                    Receive Wisdom
                  </Button>
                </form>
                <p className="text-xs text-white/50 mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
