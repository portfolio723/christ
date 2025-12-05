
'use client';

import { TextRevealByWord } from '@/components/ui/text-reveal';

export default function LifestylePage() {
  const text = "I AM GREATLY BLESSED HIGHLY FAVOURED DEEPLY LOVED";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-white text-center p-4">
       <div className="absolute top-0 left-0 w-full h-full">
        <video
          src="/lifestyle.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <TextRevealByWord text={text} />
    </main>
  );
}
