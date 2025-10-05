
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function HomeMissionStatement() {
  return (
    <section
      id="mission"
      className="relative w-full py-20 md:py-32 bg-background text-white"
    >
      <Image
        src="/christ/obg.jpeg"
        alt="Mission background"
        fill
        className="object-cover"
        data-ai-hint="spiritual background"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Mission
        </h3>
        <div className="mx-auto max-w-4xl text-white/80 md:text-5xl mt-6 font-mea-culpa text-4xl space-y-4">
          <p>God mends broken hearts into mighty wings to soar 🦋 His purpose is to strengthen us from the inside out 💪 In Jesus' name 🕊️</p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="text-white text-left space-y-4 font-oleo-script text-xl md:text-2xl p-6 bg-card/10 backdrop-blur-sm relative rounded-lg">
            <p>
              In the name of JESUS CHRIST, greetings 🌸 Beloved, the only
              purpose 💝 I launched this website is to tell you what GOD&apos;S
              SPIRIT Says 🕊️ for us to uplift and strengthen your inner man 💪
              And enable us to internally strong first. Physiologic issues will
              automatically be resolved once we have healed 💝 inwardly.
            </p>
            <p>
              Yes beloved 💙... Our mighty GOD will change our every broken
              heart piece to turn into mighty butterfly wings 🦋 to fly high
              🕊️ And He will use every sharpened broken piece that converts it
              into massive strong butterfly wings. Even if your broken heart 💔
              pieces pierced him and drew blood... 🔴
            </p>
            <p>
              By the way, one more affirmation! ⚡ Instead of hitting the
              millions of subscribers, my main goal in using Jesus&apos; name is for
              his love to reach the hearts of the millions 🏠🙏
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
