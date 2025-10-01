"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  BookOpen,
  Video,
  Gift,
} from "lucide-react";

const tasks = [
  {
    title: "Discover His Character",
    subtitle: "Meet the Person behind the stories.",
    icon: <Heart className="w-4 h-4" />,
  },
  {
    title: "Immerse in His Love",
    subtitle: "Rest in who He says you are.",
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    title: "Glimpses of His Heart",
    subtitle: "See His compassion and longing for you.",
    icon: <Video className="w-4 h-4" />,
  },
  {
    title: "Hear His Whisper",
    subtitle: "Exclusive content on what God's Spirit is saying.",
    icon: <Users className="w-4 h-4" />,
  },
  {
    title: "See Our Heart First",
    subtitle: "We share our newest videos with you before anyone else.",
    icon: <Gift className="w-4 h-4" />,
  },
];

export default function FeatureSection() {
  return (
    <section className="relative w-full py-10 px-0 bg-transparent text-foreground">
      <div className="mx-auto w-full grid grid-cols-1 items-center gap-12">
        {/* LEFT SIDE - Task Loop with Vertical Bar */}
        <div className="relative w-full max-w-sm">
          <Card className="overflow-hidden bg-muted/30 dark:bg-muted/20 backdrop-blur-md shadow-xl rounded-lg">
            <CardContent className="relative h-[280px] p-0 overflow-hidden">
              {/* Scrollable Container */}
              <div className="relative h-full overflow-hidden">
                {/* Motion list */}
                <motion.div
                  className="flex flex-col gap-2 absolute w-full"
                  animate={{ y: ["0%", `-${100 - (100/tasks.length)}%`] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 14,
                    ease: "linear",
                  }}
                >
                  {[...tasks, ...tasks].map((task, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 border-b border-border/50 relative"
                    >
                      {/* Icon + Content */}
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center bg-card/50 text-primary w-10 h-10 rounded-xl shadow-md">
                            {task.icon}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{task.title}</p>
                            <p className="text-xs text-muted-foreground">{task.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
                 {/* Fade effect only inside card */}
                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-muted/30 via-muted/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-muted/30 via-muted/30 to-transparent pointer-events-none" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

    