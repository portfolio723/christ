import { cn } from '@/lib/utils';

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
        <p className="mx-auto max-w-3xl text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
          To empower individuals to discover their{' '}
          <GlowText>divine purpose</GlowText> and live a life of prosperity,
          faith, and <GlowText>spiritual abundance</GlowText> through the
          teachings of the scripture.
        </p>
        <blockquote className="mt-12 max-w-4xl mx-auto">
          <p className="font-script text-3xl md:text-4xl text-white italic">
            &ldquo;But they that wait upon the LORD shall renew their strength;
            they shall mount up with wings as eagles; they shall run, and not be
            weary; and they shall walk, and not faint.&rdquo;
          </p>
          <footer className="mt-4 text-lg font-headline text-white/60">
            Isaiah 40:31
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
