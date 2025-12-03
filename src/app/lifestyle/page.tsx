
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lifestyle',
  description: 'IAM GREATLY BLESSED, HIGHLY FAVOURED, DEEPLY LOVED.',
};

export default function LifestylePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-white text-center p-4">
       <div className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <video
          src="/lifestyle.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold flex flex-col items-center space-y-2 md:space-y-4">
            <span>I AM</span>
            <span className="text-primary">GREATLY BLESSED</span>
            <span className="text-accent">HIGHLY FAVOURED</span>
            <span className="text-primary">DEEPLY LOVED</span>
          </h1>
        </div>
      </div>
    </main>
  );
}
