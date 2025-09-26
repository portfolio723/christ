
import { Card, CardContent } from '@/components/ui/card';

export function MissionStatement() {
  const GlowText = ({ children }: { children: React.ReactNode }) => (
    <span
      className="text-accent"
      style={{ filter: 'drop-shadow(0 0 6px hsl(var(--accent) / 0.8))' }}
    >
      {children}
    </span>
  );

  return (
    <section
      id="mission"
      className="w-full py-20 md:py-32 bg-background"
      style={{
        backgroundImage:
          'radial-gradient(circle at top left, hsla(270, 50%, 20%, 0.3), transparent 30%)',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
          Our Mission
        </h2>
        <p className="mx-auto max-w-3xl text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6 font-mea-culpa text-5xl">
          God mends broken hearts into mighty wings to soar 🦋 His purpose is to
          strengthen us from the inside out 💪🏻 In Jesus&apos; name 🕊️
        </p>
        <div className="mt-12 max-w-4xl mx-auto">
          <Card variant="plus" className="bg-card">
            <CardContent>
              <div className="text-white text-left space-y-4 font-body text-xl md:text-2xl">
                <p>
                  In the name of JESUS CHRIST, greetings 🌸 Beloved, the only
                  purpose 🎯 I launched this website is to tell you what
                  GOD&apos;S SPIRIT Says 🕊️ by using me to uplift and
                  strengthen your inner man 💪🏼 And enable you to pull
                  yourself up internally strong first. Physiologic issues will
                  automatically be resolved once we have healed ❤️‍🩹
                  inwardly.
                </p>
                <p>
                  Yes beloved 💙... Our mighty GOD will change our every broken
                  heart piece to turn into mighty butterfly wings 🦋 to fly
                  high 🕊️ And He will use every sharpened broken piece that
                  converts it into massive strong butterfly wings. Even if your
                  broken heart 💔 pieces pierced him and drew blood... 🔴
                </p>
                <p>
                  By the way, one more affirmation! ⚡ Instead of hitting the
                  millions of subscribers, my main goal in using Jesus&apos;
                  name is for his love to reach the hearts of the millions 🤗🎀
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
