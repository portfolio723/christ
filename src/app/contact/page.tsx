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
            Connect & Receive Prayer
          </h1>
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-script text-2xl md:text-3xl text-white/90 italic">
              &ldquo;He heals the brokenhearted and binds up their wounds.&rdquo;
            </p>
            <footer className="mt-2 text-lg font-headline text-white/60">
              Psalm 147:3
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
                Prayer & Support
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Email Prayer Line
                    </h3>
                    <p className="text-white/70">
                      Available 24/7 for all your prayer needs.
                    </p>
                    <a
                      href="mailto:prayer@godsspiritsays.com"
                      className="text-accent hover:underline"
                    >
                      prayer@godsspiritsays.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Phone Support
                    </h3>
                    <p className="text-white/70">
                      Mon-Fri, 9 AM–6 PM EST for a direct connection.
                    </p>
                    <a href="tel:+18005557729" className="text-accent hover:underline">
                      +1 (800) 555-PRAY
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Live Prayer Sessions
                    </h3>
                    <p className="text-white/70">
                      Join our weekly online prayer meetings every Wednesday &
                      Sunday at 7 PM EST.
                    </p>
                    <a href="#" className="text-accent hover:underline">
                      Join Live Session
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Ministry Inquiries */}
            <div className="space-y-8">
              <h2 className="text-3xl font-headline font-bold text-white border-b-2 border-primary pb-2">
                Ministry Inquiries
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      General & Speaking Inquiries
                    </h3>
                    <p className="text-white/70">
                      For partnerships and speaking engagements.
                    </p>
                    <a
                      href="mailto:hello@godsspiritsays.com"
                      className="text-accent hover:underline"
                    >
                      hello@godsspiritsays.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookUser className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Mailing Address
                    </h3>
                    <address className="text-white/70 not-italic">
                      Godsspiritsays Ministry
                      <br />
                      123 Faith Avenue, Atlanta, GA 30309
                    </address>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <BookUser className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                     Frequently Asked Questions
                    </h3>
                     <a href="#" className="text-accent hover:underline">
                       How quickly do we respond? Do we charge for services?
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
        className="w-full py-20 md:py-28 bg-card/50 border-y border-border"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-white">
              Send Your Request
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

      {/* Mission Restatement */}
      <section className="w-full py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-headline font-bold text-white mb-4">
            Our Sacred Mission
          </h2>
          <blockquote className="max-w-3xl mx-auto text-xl text-white/80 italic">
            &ldquo;To intercede, counsel, and partner with believers
            worldwide—bringing God’s healing, hope, and purpose to every
            need.&rdquo;
          </blockquote>
        </div>
      </section>

      <SocialMedia />
    </main>
  );
}
