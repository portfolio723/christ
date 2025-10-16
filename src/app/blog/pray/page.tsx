
import { SocialMedia } from '@/components/page/social-media';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pray',
  description: "Pray🙏🏻!!! Because it's the breath of our life ❤️‍🔥",
};

export default function PrayPage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Pray🙏🏻!!! Because it&apos;s the breath of our life ❤️‍🔥
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <Image src="/bg6.jpeg" alt="Pray" width={600} height={400} className="rounded-lg" />
              </div>
            </div>
            <br />
            <p>Thank you for coming to see the description 🤗</p>
            <br />
            <p>However, see, lovelies, what the 𝐆𝐨𝐝&apos;𝐬𝐬𝐩𝐢𝐫𝐢𝐭 𝐬𝐚𝐲𝐬 in the description is... ✨ 𝐏𝐫𝐚𝐲, 𝐩𝐫𝐚𝐲, 𝐚𝐧𝐝 𝐩𝐫𝐚𝐲...🙌🏻👏🏽</p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
