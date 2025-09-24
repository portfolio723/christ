import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GoldenCheck } from '@/components/icons';
import { Mail, Users } from 'lucide-react';

export function Newsletter() {
  const benefits = [
    'Weekly prophetic insights and divine revelations',
    'Exclusive Bible study guides and prayer focuses',
    'Early access to new video teachings and events',
    'Personal prayer support and community connection',
  ];

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
            <p className="max-w-[600px] text-white/80 md:text-xl/relaxed">
              Subscribe to our newsletter for a weekly dose of inspiration,
              scripture, and divine guidance delivered straight to your inbox.
            </p>
            <div className="space-y-4">
              <h3 className="font-headline text-xl font-semibold text-white">What You&apos;ll Receive:</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <GoldenCheck className="w-6 h-6 shrink-0 mt-1" />
                    <span className="text-lg text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-card/50 p-4 border border-border">
                <Users className="w-8 h-8 text-accent"/>
                <div>
                    <p className="font-bold text-white">Join 25,000+ believers</p>
                    <p className="text-sm text-white/70">&quot;These emails are pure gold!&quot; - Sarah M.</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md bg-card border-primary/50 shadow-2xl shadow-primary/20 transition-all hover:shadow-primary/30">
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
