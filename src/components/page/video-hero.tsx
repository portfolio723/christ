
export function VideoHero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white overflow-hidden"
    >
      <video
        src="/butterflies.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 0%, hsla(0, 0%, 0%, 0.8) 100%)',
        }}
      />
      <div className="relative z-10 flex flex-col items-center p-4" data-ai-hint="hero-text-container">
        <h1 className="font-headline text-6xl md:text-8xl font-bold" data-ai-hint="main-headline">
          Visual Ministry
        </h1>
        <p className="max-w-3xl mx-auto font-body text-lg md:text-xl mt-4 text-white/90" data-ai-hint="sub-headline">
          Experience God’s presence through powerful video teachings, prophetic
          words, worship sessions, and transformational testimonies.
        </p>
      </div>
    </section>
  );
}
