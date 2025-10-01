
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-body)', ...fontFamily.sans],
        headline: ['var(--font-headline)', ...fontFamily.serif],
        script: ['var(--font-script)', ...fontFamily.serif],
        yesteryear: ['var(--font-yesteryear)', ...fontFamily.serif],
        'mea-culpa': ['var(--font-mea-culpa)', ...fontFamily.serif],
        allison: ['var(--font-allison)', ...fontFamily.serif],
        'lavishly-yours': ['var(--font-lavishly-yours)', ...fontFamily.serif],
        'oleo-script': ['var(--font-oleo-script)', ...fontFamily.serif],
        condiment: ['var(--font-condiment)', ...fontFamily.serif],
        'great-vibes': ['var(--font-great-vibes)', ...fontFamily.serif],
        'bonheur-royale': ['var(--font-bonheur-royale)', ...fontFamily.serif],
        'mrs-saint-delafield': ['var(--font-mrs-saint-delafield)', ...fontFamily.serif],
        cookie: ['var(--font-cookie)', ...fontFamily.serif],
        'love-light': ['var(--font-love-light)', ...fontFamily.serif],
        'alex-brush': ['var(--font-alex-brush)', ...fontFamily.serif],
        hurricane: ['var(--font-hurricane)', ...fontFamily.serif],
        arizonia: ['var(--font-arizonia)', ...fontFamily.serif],
        fasthand: ['var(--font-fasthand)', ...fontFamily.serif],
        'mr-dafoe': ['var(--font-mr-dafoe)', ...fontFamily.serif],
        'pinyon-script': ['var(--font-pinyon-script)', ...fontFamily.serif],
        engagement: ['var(--font-engagement)', ...fontFamily.serif],
        'the-nautigal': ['var(--font-the-nautigal)', ...fontFamily.serif],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 4s ease-in-out infinite',
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
