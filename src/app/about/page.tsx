
import {
  Heart,
  BookOpen,
  Globe,
  TrendingUp,
  Sparkles,
  Feather,
  GitCommit,
  HeartHandshake,
  Mail,
  Phone,
  Calendar,
  MessageSquare,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { MissionStatement } from '@/components/page/mission-statement';

function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Sparkles className="h-4 w-4" />}
        title="Prophetic Accuracy"
        description="Delivering precise and timely prophetic words that bring clarity and direction."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Heart className="h-4 w-4" />}
        title="Compassionate Ministry"
        description="Providing a safe and loving space for healing, restoration, and spiritual growth."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Globe className="h-4 w-4" />}
        title="Global Reach"
        description="Impacting lives across continents with a message of hope and transformation."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<BookOpen className="h-4 w-4" />}
        title="Biblical Depth"
        description="Grounded in the timeless truth of Scripture for solid spiritual foundations."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<TrendingUp className="h-4 w-4" />}
        title="Supernatural Encounters"
        description="Fostering an atmosphere where miracles, signs, and wonders are the norm."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn('min-h-[14rem] list-none', area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <header className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <video
          src="/eagle.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4 tracking-tight">
            Walking in Divine Calling
          </h1>
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-script text-2xl md:text-3xl text-white/90 italic">
              &ldquo;Before I formed you in the womb I knew you, before you
              were born I set you apart; I appointed you as a prophet to the
              nations.&rdquo;
            </p>
            <footer className="mt-2 text-lg font-headline text-white/60">
              Jeremiah 1:5
            </footer>
          </blockquote>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <section id="journey" className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-headline font-bold text-white mb-6 flex items-center justify-center gap-3">
              My Journey Into Ministry
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <Card variant="plus" className="bg-card">
                <CardContent>
                  <Feather className="w-8 h-8 text-primary mb-4 mt-4" />
                  <h3 className="font-headline text-xl font-semibold text-white mb-2">
                    A Heart Prepared
                  </h3>
                  <p className="text-white/70">
                    From a young age, a divine passion for God&apos;s Word and His
                    people was ignited in my heart, setting the stage for a
                    life of ministry.
                  </p>
                </CardContent>
              </Card>
              <Card variant="plus" className="bg-card">
                <CardContent>
                  <GitCommit className="w-8 h-8 text-primary mb-4 mt-4" />
                  <h3 className="font-headline text-xl font-semibold text-white mb-2">
                    Seasons of Forging
                  </h3>
                  <p className="text-white/70">
                    Through wilderness experiences and divine encounters, every
                    trial became a lesson and every victory a testament to
                    God&apos;s faithfulness.
                  </p>
                </CardContent>
              </Card>
              <Card variant="plus" className="bg-card">
                <CardContent>
                  <HeartHandshake className="w-8 h-8 text-primary mb-4 mt-4" />
                  <h3 className="font-headline text-xl font-semibold text-white mb-2">
                    A Ministry Unveiled
                  </h3>
                  <p className="text-white/70">
                    Today, this ministry flows from a heart overflowing with
                    His love, connecting and healing lives across the globe
                    through His truth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-border" />

        <section id="milestones" className="mb-16">
          <h2 className="text-3xl font-headline font-bold text-white text-center mb-12">
            Divine Encounters & Milestones
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2"></div>
            <div className="space-y-12 md:space-y-0">
              {[
                {
                  year: '2018',
                  title: 'The Prophetic Calling',
                  desc: "Received a clear prophetic calling during a prayer retreat, experiencing a life-changing encounter with God's presence.",
                },
                {
                  year: '2019',
                  title: 'First Digital Message',
                  desc: "Stepped out in faith to share God's heart through digital platforms, reaching souls globally.",
                },
                {
                  year: '2021',
                  title: 'Ministry Expansion',
                  desc: 'Launched a comprehensive online platform including website, social media, and structured teaching series.',
                },
                {
                  year: '2023',
                  title: 'Global Impact',
                  desc: 'Witnessed miraculous testimonies of healing, breakthrough, and transformation, reaching 50,000+ lives across 6 continents.',
                },
                {
                  year: '2024',
                  title: 'Prophetic School Launch',
                  desc: "Established a training center for prophetic ministry, equipping others to hear God's voice and minister in supernatural gifts.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative md:grid md:grid-cols-2 md:gap-x-8 items-center mb-12 md:mb-0"
                >
                  <div
                    className={cn(
                      'md:col-start-1 md:row-start-1',
                      index % 2 !== 0 ? 'md:col-start-2' : ''
                    )}
                  >
                    <Card
                      variant="neubrutalism"
                      className={cn(
                        'bg-card transition-transform hover:scale-105 hover:shadow-primary/20',
                        index % 2 !== 0 ? 'md:text-left' : 'md:text-right'
                      )}
                    >
                      <CardContent>
                        <p className="text-primary font-bold text-xl mb-2">
                          {item.year}
                        </p>
                        <h3 className="font-headline text-white text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/70">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background items-center justify-center"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-border" />

        <section id="credentials" className="mb-16">
          <h2 className="text-3xl font-headline font-bold text-white text-center mb-12">
            Our Core Strengths
          </h2>
          <div className="max-w-6xl mx-auto">
            <GlowingEffectDemo />
          </div>
        </section>

        <MissionStatement />

        <Separator className="my-16 bg-border" />

        <section id="connect" className="text-center">
          <blockquote className="max-w-3xl mx-auto mb-8">
            <p className="font-script text-2xl md:text-3xl text-white/90 italic">
              &ldquo;For I know the plans I have for you,&rdquo; declares the
              Lord, &ldquo;plans to prosper you and not to harm you, to give
              you hope and a future.&rdquo;
            </p>
            <footer className="mt-2 text-lg font-headline text-white/60">
              Jeremiah 29:11
            </footer>
          </blockquote>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@godsspiritsays.com"
              className="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors"
            >
              <Mail className="w-5 h-5" /> hello@godsspiritsays.com
            </a>
            <a
              href="tel:+15557729669"
              className="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors"
            >
              <Phone className="w-5 h-5" /> +1 (555) PRAY-NOW
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors"
            >
              <Calendar className="w-5 h-5" /> Book Consultation
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors"
            >
              <MessageSquare className="w-5 h-5" /> Live Chat
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
