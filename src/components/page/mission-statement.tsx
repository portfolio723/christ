'use client';

import Image from 'next/image';

export function MissionStatement({
  videoSrc,
  showImage = true,
  imageSrc,
  heading,
  isTestimonialPage = false,
}: {
  videoSrc?: string;
  showImage?: boolean;
  imageSrc?: string;
  heading?: string;
  isTestimonialPage?: boolean;
}) {
  return (
    <section
      id="mission"
      className="relative w-full py-20 md:py-32 bg-background text-white"
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="Mission background"
          fill
          className="object-cover"
        />
      )}
      {videoSrc && !imageSrc && (
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
          {heading || `My Daughter "You, and only you, before anybody. "`}
        </h3>
        <div className="mx-auto max-w-4xl text-white/80 md:text-5xl mt-6 font-mea-culpa text-4xl space-y-4">
          {isTestimonialPage ? (
            <p>God mends broken hearts into mighty wings to soar 🦋 His purpose is to strengthen us from the inside out 💪 In Jesus' name 🕊️</p>
          ) : (
            <>
              <p>She...She is zero without her God… But to her God, she is everything 💖</p>
              <p>So, you came here to read about me, right? 💭 There’s nothing about me worth highlighting without Him ✨</p>
              <p>That’s why—instead of lifting up my name— I’d rather echo what His heart says about me 💞</p>
            </>
          )}
        </div>

        {showImage && (
          <div className="my-12 flex justify-center">
            <Image
              src="/christ/Testi.jpeg"
              alt="A beautiful butterfly"
              width={400}
              height={400}
              className="rounded-lg object-cover border-4 border-primary shadow-lg"
              data-ai-hint="beautiful butterfly"
            />
          </div>
        )}

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="text-white text-left space-y-4 font-oleo-script text-xl md:text-2xl p-6 bg-card/10 backdrop-blur-sm relative rounded-lg">
            <p className="font-bold text-2xl md:text-3xl">My Letter to My Princess… 💌</p>
            <p>Oh, my sweet doe, you are so precious to Me 💖</p>
            <p>I love you, and My hand is upon you.</p>
            <p>I will lay you down in green pastures</p>
            <p>and raise you up as a woman for the nations.</p>
            <p>You came here to rest under My wings—</p>
            <p>the wings of Jehovah 💗</p>
            <p>I will never disappoint you,</p>
            <p>My graceful deer.</p>
            <p>You are more important to Me than you realize…</p>
            <p>More than you want Me—</p>
            <p>I wanted you more than you have ever imagined 💞</p>
            <p>Yes, My woman, I love you</p>
            <p>simply because I love you.</p>
            <p>My love will never wound you.</p>
            <p>My touch will never bring you pain.</p>
            <p>I love you for who you are,</p>
            <p>expecting nothing in return—unlike the world.</p>
            <p>Recall the love I have done for you on the cross.</p>
            <p>Choose My love, and live for Me.</p>
            <p>I will do more than you can possibly imagine 💫</p>
            <p>I want you closer than you dare to believe.</p>
            <p>I AM your God. Always.</p>
            <p>I have no regrets in choosing you.</p>
            <p>Yes. None.</p>
            <p>That is enough for now, Princess…</p>
            <p>I must close this scroll of My heart here!!!</p>
            <p>Otherwise, the world will hear</p>
            <p>all the secrets it holds about you… 😉💕</p>
          </div>
        </div>
      </div>
    </section>
  );
}
