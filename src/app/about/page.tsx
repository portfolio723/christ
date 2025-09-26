
import {
  Mail,
  Phone,
  Calendar,
  MessageSquare,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { MissionStatement } from '@/components/page/mission-statement';

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
              href="mailto:godspiritsays@gmail.com"
              className="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors"
            >
              <Mail className="w-5 h-5" /> godspiritsays@gmail.com
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
