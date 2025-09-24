
import Link from 'next/link';
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

const BlogPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <video
          src="/blog.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold font-headline">The Spirit&apos;s Voice</h1>
          <p className="text-2xl md:text-3xl italic mt-4 font-script">Prophetic Insights & Biblical Truth</p>
          <p className="text-lg mt-2 text-white/80">
            <em>&quot;But when he, the Spirit of truth, comes, he will guide you into all the truth.&quot;</em> - John 16:13
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Featured Prophetic Word */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4 font-headline">FEATURED PROPHETIC WORD</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-accent">&quot;The Season of Divine Acceleration Has Begun&quot;</h3>
            <p className="text-sm text-gray-400 mt-2">Prophetic Word | March 20, 2024 | 8 min read</p>
            <p className="mt-4 text-lg">
              The Lord is saying: &quot;What I have been preparing in secret, I am now bringing into the open. This is the season where time itself bends to My will, and what would normally take years will happen in months. Do not be surprised by the suddenness of My movement in your life...&quot;
            </p>
            <Link href="#" className="inline-block mt-6 text-accent font-bold hover:underline">
              Read Full Prophetic Word →
            </Link>
          </div>
        </section>

        {/* Latest Spiritual Insights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">LATEST SPIRITUAL INSIGHTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Prayer & Intercession */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-accent mb-4">🙏 PRAYER & INTERCESSION</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="hover:underline">&quot;The Authority of Prophetic Prayer&quot;</Link>
                  <p className="text-sm text-gray-400">March 18, 2024</p>
                </li>
                <li>
                  <Link href="#" className="hover:underline">&quot;Interceding for the Nations: A Global Prayer Strategy&quot;</Link>
                  <p className="text-sm text-gray-400">March 15, 2024</p>
                </li>
              </ul>
            </div>
            {/* Biblical Teachings */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-accent mb-4">📖 BIBLICAL TEACHINGS</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="hover:underline">&quot;Understanding the Prophetic Office&quot;</Link>
                  <p className="text-sm text-gray-400">March 12, 2024</p>
                </li>
                <li>
                  <Link href="#" className="hover:underline">&quot;Dreams and Visions: God&apos;s Supernatural Communication&quot;</Link>
                  <p className="text-sm text-gray-400">March 10, 2024</p>
                </li>
              </ul>
            </div>
            {/* Devotional Insights */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-accent mb-4">💝 DEVOTIONAL INSIGHTS</h3>
               <ul className="space-y-4">
                <li>
                  <Link href="#" className="hover:underline">&quot;She Prospers in All She Does: Living Psalm 1:3&quot;</Link>
                  <p className="text-sm text-gray-400">March 8, 2024</p>
                </li>
                <li>
                  <Link href="#" className="hover:underline">&quot;The Secret Place: Intimacy with God&quot;</Link>
                  <p className="text-sm text-gray-400">March 5, 2024</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 font-headline">BLOG CATEGORIES</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {[
                    "🔮 Prophetic Words", "📖 Biblical Teaching", "🙏 Prayer & Intercession",
                    "💝 Devotional Insights", "🌟 Supernatural Encounters", "🌍 Global Intercession",
                    "👑 Identity in Christ", "💼 Marketplace Ministry", "👨‍👩‍👧‍👦 Family & Relationships",
                    "🎓 Spiritual Growth"
                ].map(category => (
                    <button key={category} className="bg-gray-700 hover:bg-accent text-white font-bold py-2 px-4 rounded-full">
                        {category}
                    </button>
                ))}
            </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg text-center mb-16 flex items-center justify-center">
          <CardSpotlight className="h-96 w-96">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              Authentication steps
            </p>
            <div className="text-neutral-200 mt-4 relative z-20">
              Follow these steps to secure your account:
              <ul className="list-none  mt-2">
                <Step title="Enter your email address" />
                <Step title="Create a strong password" />
                <Step title="Set up two-factor authentication" />
                <Step title="Verify your identity" />
              </ul>
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              Ensuring your account is properly secured helps protect your personal
              information and data.
            </p>
          </CardSpotlight>
        </section>


        {/* Community Discussion */}
        <section className="text-center">
            <h2 className="text-3xl font-bold mb-4 font-headline">💬 COMMUNITY DISCUSSION</h2>
            <p className="mb-6">
                Join our growing community of believers who discuss spiritual insights, share testimonies, and support each other&apos;s faith journey.
            </p>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                <h3 className="font-bold text-xl mb-4">Community Guidelines:</h3>
                <ul className="text-left list-disc list-inside space-y-2">
                    <li>Speak in love and truth</li>
                    <li>Encourage and build up others</li>
                    <li>Share testimonies of God&apos;s goodness</li>
                    <li>Ask for prayer and offer prayer support</li>
                    <li>Keep discussions centered on Christ</li>
                </ul>
            </div>
            <p className="mt-6 text-lg italic">*Be part of a global family united by faith and love*</p>
        </section>

      </main>
    </div>
  );
};

export default BlogPage;
