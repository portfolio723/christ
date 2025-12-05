
import { TextRevealByWord } from '@/components/ui/text-reveal';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function LifestylePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-white">
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <Image
          src="/lf1.jpeg"
          alt="Lifestyle background"
          fill
          className="object-cover"
          data-ai-hint="spiritual lifestyle"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4">
           <TextRevealByWord text="I AM GREATLY BLESSED HIGHLY FAVOURED DEEPLY LOVED" />
        </div>
      </section>

      <section className="w-full py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
           <div className="flex justify-center">
             <Link href="/lifestyle/seeking-in-the-dark" className="group w-full max-w-2xl">
                <Card className="bg-card/50 border-border hover:border-primary transition-shadow duration-300 shadow-lg hover:shadow-primary/20 rounded-xl overflow-hidden transform hover:-translate-y-1">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="font-pinyon-script text-3xl md:text-4xl font-bold text-white mb-4">
                      ...but in the quiet, dark valleys of seeking, where He becomes My only source of light, warmth, sound and celebration.
                    </h3>
                    <p className="text-white/80 font-love-light text-2xl md:text-3xl mb-6">
                      Ah! I love sitting in darkness for my LORD!
                    </p>
                    <div className="flex items-center text-accent font-semibold">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
}
