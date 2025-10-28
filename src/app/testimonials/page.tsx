
import { TestimonialsClient } from '@/components/page/testimonials-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Hearts Joined with GOD',
  description: "Come hear the true stories our blog shares, of their inward spirits encouraged by knowing GOD's deep, measureless love.",
};

export default function TestimonialsPage() {
  return (
    <TestimonialsClient />
  );
}
