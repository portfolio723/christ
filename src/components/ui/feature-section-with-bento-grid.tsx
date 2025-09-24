"use client";

import {
  BookOpen,
  Crown,
  Globe,
  Heart,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";


function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-headline font-bold text-left">
                The Heartbeat of Our Ministry
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                These core values are the foundation upon which Godsspiritsays
                is built, guiding every word, action, and interaction.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <Heart className="w-8 h-8 stroke-1 text-primary" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-white font-semibold">
                  Authentic Prophetic Ministry
                </h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Moving only as the Holy Spirit leads, speaking His heart with
                  love and truth.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md  aspect-square p-6 flex justify-between flex-col">
              <TrendingUp className="w-8 h-8 stroke-1 text-primary" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-white font-semibold">Spiritual Growth</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Committed to personal growth and helping others mature in
                  their faith journey.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <BookOpen className="w-8 h-8 stroke-1 text-primary" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-white font-semibold">Biblical Foundation</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Grounding every word and ministry action in the unchanging
                  truth of God's Word.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <Globe className="w-8 h-8 stroke-1 text-primary" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-white font-semibold">Global Vision</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Believing God's heart is for all nations, tribes, tongues,
                  and people groups.
                </p>              </div>
            </div>
             <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <Heart className="w-8 h-8 stroke-1 text-primary" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-white font-semibold">Compassionate Love</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                 Extending God's unconditional love to every person, especially the broken and weary.
                </p>
              </div>
            </div>
             <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <Crown className="w-8 h-8 stroke-1 text-primary" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-white font-semibold">Divine Purpose</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Helping believers discover and walk confidently in their God-given calling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
