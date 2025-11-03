
import { SocialMedia } from '@/components/page/social-media';
import VideoPlayer from '@/components/ui/video-player';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jesus came. Jesus saw. Jesus held. Jesus healed...and the flow began!',
  description: 'When Jesus comes into our lives, our circumstances may not change but our hearts do. And when our hearts change, a new life naturally flows.',
};

export default function JesusHealsPage() {
  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative pt-48 pb-20 bg-background">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Jesus came. Jesus saw. Jesus held. Jesus healed...and the flow began!
            </h1>
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-invert prose-lg md:prose-xl prose-p:text-white/80 prose-strong:text-white">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <VideoPlayer src="/bg10.mp4" autoPlay={false} muted={false} />
              </div>
            </div>
            <br />
            <p>When 𝐉𝐞𝐬𝐮𝐬 comes into our lives, our circumstances may not change but our hearts do. 💔➡️❤️</p>
            <p>And when our hearts change, a new life naturally flows 🌊</p>
            <br />
            <p>Not because we force it. Not because someone told us to. Because change is not in our hands. Change is His, and His alone.🙌</p>
            <br />
            <p>You see, if we only change from the outside, it’s like wiping bacteria off the surface🦠, sooner or later, it comes back. But when 𝐉𝐞𝐬𝐮𝐬 cleanses the heart, He reaches the root.🌱And what He cleanses, stays clean. it won&apos;t dare to affect us again.✅</p>
            <br />
            <p>Once 𝐉𝐞𝐬𝐮𝐬 comes, our hearts doesn’t just tidy up.. He squeezes us🍋. He will press out the temptation pulling us backward, the bitter roots tangled around our souls, the grudges we cling to, and the timidity that holds us captive, choking out the toxins🪷.</p>
            <br />
            <p>But when this happens, does it mean that from the very first day, Does it happen the moment we say “yes” to 𝐉𝐞𝐬𝐮𝐬?, is it instant? ⏳</p>
            <br />
            <p>Never.</p>
            <br />
            <p>It happens Day after day. Every day. Morning by morning.</p>
            <br />
            <p>It’s a daily surrender. A daily “squeeze.🫳</p>
            <br />
            <p>Just remind,If you have a deadly infection in your body, does it all disappear in one day? 🩺Even after major surgery, infected particles remain. That’s why doctors prescribe antibiotics—a daily treatment to completely eradicate the illness. 💊</p>
            <br />
            <p>Likewise, And when we yield, something holy happens ✨. Accepting 𝐉𝐞𝐬𝐮𝐬 isn’t the final chapter for our addictions it’s where our true story begins 📖</p>
            <br />
            <p>Sorry, where was I? 😊Ah, yes the change of our hearts. ❤️ Right? Thanks for remembering.🙏</p>
            <br />
            <p>Every day, if we sit with Him, slowly and willingly, we will surrender and give Him access to squeeze🛐 . So, one after another, He will deal with our bitter heart, our worst fears, our poisonous memories, Our restless thoughts, our &quot;never-happen&quot; estimations, and so on...🗑️</p>
            <br />
            <p>So, what happens after He starts to squeeze?🤔</p>
            <br />
            <p>A word from the Living Bible comes to mind—actually, two📖✨. Let me share the first: After squeezing every bitterness from our hearts, He will turn our hearts into flowing rivers—a fountain that flourishes in Him, blooming anew each day. 🌊🌷</p>
            <br />
            <p>And the second one? He makes us lie down in green pastures, he leads us beside quiet waters, he refreshes our soul — go and find Psalm 23🐑💚.</p>
            <br />
            <p>Lying in green pastures... which means it&apos;s not physical first🌿. That picture—that imagination—it soothes us internally first, right? 🔥🕊️</p>
            <br />
            <p>Before, our hearts will believe His WORD. After, we will claim it and enter it physically.🚶‍♂️</p>
            <br />
            <p>I hope you understand His intentions toward us.💭</p>
            <br />
            <p>Beloved!!❤️</p>
        </div>
      </article>
      <SocialMedia />
    </main>
  );
}
