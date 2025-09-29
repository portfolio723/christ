'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
        <p className="mx-auto max-w-4xl text-white/80 md:text-6xl mt-6 font-mea-culpa text-5xl">
          God mends broken hearts into mighty wings to soar{' '}
          <motion.span
            animate={{ y: [0, -5, 0], scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            🦋
          </motion.span>{' '}
          His purpose is to strengthen us from the inside out{' '}
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            💪🏻
          </motion.span>{' '}
          In Jesus&apos; name{' '}
          <motion.span
            animate={{ y: [0, -4, 0], rotate: [0, 2, 0, -2, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            🕊️
          </motion.span>
        </p>

        <div className="my-12 flex justify-center">
          <Image
            src="/Testi.jpeg"
            alt="A beautiful butterfly"
            width={400}
            height={400}
            className="rounded-lg object-cover border-4 border-primary shadow-lg"
            data-ai-hint="beautiful butterfly"
          />
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="text-white text-left space-y-4 font-oleo-script text-xl md:text-2xl p-6 bg-card border border-dashed border-zinc-400 dark:border-zinc-700 relative rounded-lg">
            <p>
              In the name of JESUS CHRIST, greetings 🌸 Beloved, the only
              purpose 🎯 I launched this website is to tell you what
              GOD&apos;S SPIRIT Says 🕊️ by using me to uplift and
              strengthen your inner man 💪🏼 And enable you to pull
              yourself up internally strong first. Physiologic issues will
              automatically be resolved once we have healed ❤️‍🩹
              inwardly.
            </p>
            <p>
              Yes beloved 💙... Our mighty GOD will change our every broken
              heart piece to turn into mighty butterfly wings 🦋 to fly
              high 🕊️ And He will use every sharpened broken piece that
              converts it into massive strong butterfly wings. Even if your
              broken heart 💔 pieces pierced him and drew blood... 🔴
            </p>
            <p>
              By the way, one more affirmation! ⚡ Instead of hitting the
              millions of subscribers, my main goal in using Jesus&apos;
              name is for his love to reach the hearts of the millions 🤗🎀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
