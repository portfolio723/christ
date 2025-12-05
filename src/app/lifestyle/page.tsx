
import Image from 'next/image';

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
          {/* You can add hero text here later */}
        </div>
      </section>
    </main>
  );
}
