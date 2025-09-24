
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/videos', label: 'Videos' },
  { href: '/blog', label: 'Blog' },
  { href: '/testimonials', label: 'Testimonials' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-2 font-headline text-2xl font-bold text-white"
          >
            <Crown className="w-6 h-6 text-accent" />
            <span>
              God<span className="text-accent">s</span>spiritsays
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-lg transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 py-8">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
