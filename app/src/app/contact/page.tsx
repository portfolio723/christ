
import {
  Mail,
  Send,
  Paperclip,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SocialMedia } from '@/components/page/social-media';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Prayer Requests',
  description: 'Connect with Godsspiritsays. Send your prayer requests, petitions, and testimonies. We will lay them at our DAD\'s feet and intercede for you. Ask for prayer today.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-white">
      {/* Header Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <video
          src="sd.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-4 tracking-tight">
            Prayer and intercession is our first call
          </h1>
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-alex-brush text-2xl md:text-3xl lg:text-4xl text-white/90">
              &ldquo;I urge, then, first of all, that petitions, prayers,intercession, and thanksgiving be made for all people for kings and all those in authority, that we may live peaceful and quiet lives in all godliness and holiness.&rdquo;
            </p>
            <footer className="mt-2 text-lg md:text-xl font-alex-brush text-white/60">
              1 Timothy 2:1-2
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section
        id="contact-methods"
        className="w-full pt-10 pb-20 md:pt-14 md:pb-28 bg-background"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center">
            {/* Column 1: Prayer & Support */}
            <div className="space-y-8 text-center max-w-2xl">
              <h2 className="text-3xl font-headline font-bold text-white border-b-2 border-primary pb-2 inline-block">
                ASK FOR PRAYER
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <Mail className="w-12 h-12 text-primary" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-love-light text-white font-bold">
                      Always whisper out your prayers to us through email .
                    </h3>
                    <p className="text-xl md:text-2xl text-white font-love-light font-bold">
                      we will lay them at our DAD&apos;s feet and intercede for you.
                    </p>
                    <a
                      href="mailto:godspiritsays@gmail.com"
                      className="text-accent hover:underline break-all text-lg md:text-xl"
                    >
                      godspiritsays@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="relative w-full py-20 md:py-28 border-y border-border overflow-hidden"
      >
        <video
          src="aa.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-arizonia font-bold text-white">
              Make your petition
            </h2>
          </div>
          <form className="max-w-2xl mx-auto space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Input
                type="text"
                placeholder="Your Name"
                className="bg-input/80 border-border focus:ring-primary"
                aria-label="Your Name"
                />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-input/80 border-border focus:ring-primary"
                aria-label="Your Email"
              />
             </div>
            <Input
              type="text"
              placeholder="Subject (e.g., Prayer, Testimony, Inquiry)"
              className="bg-input/80 border-border focus:ring-primary"
              aria-label="Subject"
            />
            <Textarea
              placeholder="Write your message or prayer request here..."
              rows={8}
              className="bg-input/80 border-border focus:ring-primary"
              aria-label="Your Message"
            />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <label htmlFor="file-upload" className="flex items-center gap-2 text-sm text-white/70 cursor-pointer hover:text-white">
                <Paperclip className="w-4 h-4" />
                Attach File (optional)
                <input id="file-upload" type="file" className="hidden"/>
              </label>
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 font-bold w-full sm:w-auto">
                Send Request <Send className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </section>

      <SocialMedia />
    </main>
  );
}
