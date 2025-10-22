
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background text-white text-center overflow-hidden">
      <video
        src="/404.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-white mb-2 mt-12">
            404
            </h1>
            <p className="text-2xl md:text-3xl font-script text-white/80 mb-8">
            The page you seek is not here, but hope is not lost.
            </p>
            <p className="max-w-md mx-auto text-white/70 mb-12 font-oleo-script">
            Sometimes we wander off the path, but Grace is always near to guide us home. Let's return to the light.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg">
                <Link href="/">
                    <ArrowLeft className="mr-2 w-5 h-5" />
                    Return Home
                </Link>
            </Button>
        </div>
      </div>
    </main>
  );
}
