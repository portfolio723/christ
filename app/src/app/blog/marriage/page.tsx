
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marriage and Faith',
  description: 'Marriage is not about being perfect. It\'s becoming the image of Christ.',
};

export default function MarriagePage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Marriage is not about being perfect. It&apos;s becoming the image of Christ †💍💐👰🏻‍♀️🤵🏻† 🕊️
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="bg5.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p><strong>Yes, Beloved 💙</strong></p>
            <br />
            <p>As important as it is for 𝐆𝐎𝐃 👑 to be the umbrella ☂️ in our marriage👰🏻🤵🏻 it is equally important for the person He has given us to be under the umbrella with us ☔</p>
            <br />
            <p>In our marriage 🤵🏻👰🏻 𝐆𝐎𝐃 👑 is big enough 🙌🏻 more than the storms ⛈️ As a couple, we must be under his authority ✨ 𝐆𝐎𝐃 👑 is the head of the department for our families.</p>
            <br />
            <p>However, who is the person walking with us? Why should we walk with those 𝐆𝐎𝐃 👑 has given us?</p>
            <br />
            <p>Why, because 𝗦𝗵𝗲/𝗵𝗲, if 𝐆𝐎𝐃&apos;s 👑 choice for us, that the only person will have the capability ⚡ to stay with us in every heavy storm ⛈️ in marriage 💍🤍🕊️</p>
            <br />
            <p>Under his shadow ☂︎, we will build oneness in spirit in our marriage, and we will build our families in Christ ✞. We will be an example to many. Moreover, marriage is a ministry🤎🍂🎻🪞... Our marriage will become a kingdom marriage 💒 once we carry HOLY Spirit Father Presence into our marriage 🕊️💍🤍</p>
            <br />
            <p>But, it is only possible if we accept under 𝐆𝐎𝐃&apos;s 👑 authority ✨ With either drizzling drops 💦 or heavy rain 🌦, he is holding OUR umbrella ☔ Remember that. 🙌 Allow his 𝗰𝗵𝗼𝗶𝗰𝗲𝘀 before you marry, and then allow his 𝗱𝗲𝗰𝗶𝘀𝗶𝗼𝗻𝘀 after you marry 🥂</p>
            <br />
            <p>Let me explain one small thing 🤏 when we are hungry, we are greeted by many colourful and delicious food stalls 🏭 on the road, but they only fill our stomachs for a short while. A wonderful biryani 🥘 has been prepared by our 𝐆𝐎𝐃 👑in a first-rate hotel 🏨 , but if we tend to be drawn to roadside stalls, we will miss his pleasant choice of flavorful biryani 🍲 which he has 𝗽𝗹𝗮𝗻𝗻𝗲𝗱 𝗳𝗼𝗿 𝘆𝗼𝘂 🫵🏻 𝗲𝘀𝗽𝗲𝗰𝗶𝗮𝗹𝗹𝘆.</p>
            <br />
            <p>𝗜 𝗮𝗺 𝗻𝗼𝘁 𝘁𝗮𝗹𝗸𝗶𝗻𝗴 𝗮𝗯𝗼𝘂𝘁 𝗯𝗶𝗿𝘆𝗮𝗻𝗶 🍗😉 I hope my readers are smart enough to understand 😎🤗</p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
