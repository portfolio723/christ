
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  Paperclip,
  BookUser,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SocialMedia } from '@/components/page/social-media';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-white">
      {/* Header Section */}
      <section className="relative w-full py-20 md:py-32 flex flex-col items-center justify-center text-center bg-card/50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 50% 30%, hsla(270, 50%, 20%, 0.3), transparent 70%)',
          }}
        />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
            Prayer and intercession is our first call
          </h1>
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-alex-brush text-3xl md:text-4xl text-white/90">
              &ldquo;I urge, then, first of all, that petitions, prayers,intercession, and thanksgiving be made for all people for kings and all those in authority, that we may live peaceful and quiet lives in all godliness and holiness.&rdquo;
            </p>
            <footer className="mt-2 text-xl font-alex-brush text-white/60">
              1 Timothy 2:1-2
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section
        id="contact-methods"
        className="w-full py-20 md:py-28 bg-background"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Column 1: Prayer & Support */}
            <div className="space-y-8">
              <h2 className="text-3xl font-headline font-bold text-white border-b-2 border-primary pb-2">
                ASK FOR PRAYER
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-3xl font-love-light text-white font-bold">
                      Always whisper out your prayers to us through email .
                    </h3>
                    <p className="text-white/70 font-love-light text-2xl font-bold">
                      we will lay them at our DAD&apos;s feet and intercede for you.
                    </p>
                    <a
                      href="mailto:godspiritsays@gmail.com"
                      className="text-accent hover:underline"
                    >
                      godspiritsays@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Ministry Inquiries */}
            
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="w-full py-20 md:py-28 bg-card/50 border-y border-border"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-5xl font-arizonia font-bold text-white">
              Make your petition
            </h2>
          </div>
          <form className="max-w-2xl mx-auto space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Input
                type="text"
                placeholder="Your Name"
                className="bg-input border-border focus:ring-primary"
                aria-label="Your Name"
                />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-input border-border focus:ring-primary"
                aria-label="Your Email"
              />
             </div>
            <Input
              type="text"
              placeholder="Subject (e.g., Prayer, Testimony, Inquiry)"
              className="bg-input border-border focus:ring-primary"
              aria-label="Subject"
            />
            <Textarea
              placeholder="Write your message or prayer request here..."
              rows={8}
              className="bg-input border-border focus:ring-primary"
              aria-label="Your Message"
            />
            <div className="flex items-center justify-between">
              <label htmlFor="file-upload" className="flex items-center gap-2 text-sm text-white/70 cursor-pointer hover:text-white">
                <Paperclip className="w-4 h-4" />
                Attach File (optional)
                <input id="file-upload" type="file" className="hidden"/>
              </label>
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 font-bold">
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
