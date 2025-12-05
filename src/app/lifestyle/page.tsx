'use client';

import { TextRevealByWord } from '@/components/ui/text-reveal';
import Image from 'next/image';

export default function LifestylePage() {
  const text = "I AM GREATLY BLESSED HIGHLY FAVOURED DEEPLY LOVED";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-white text-center p-4">
      <Image
        src="/lf1.jpeg"
        alt="A spiritual background with ethereal light"
        fill
        className="object-cover"
        data-ai-hint="spiritual ethereal light"
      />
      <div className="absolute inset-0 bg-black/60" />
      <TextRevealByWord text={text} />
    </main>
  );
}
