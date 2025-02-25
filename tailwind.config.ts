import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default {
  darkMode: ['class', 'class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgba(var(--background))',
        foreground: 'var(--foreground)',
        emerald: 'var(--emerald)',
        gray: {
          '50': 'var(--gray-50)',
          '100': 'var(--gray-100)',
          '200': 'var(--gray-200)',
          '300': 'var(--gray-300)',
          '400': 'var(--gray-400)',
          '500': 'var(--gray-500)',
          '600': 'var(--gray-600)',
          '700': 'var(--gray-700)',
          '800': 'var(--gray-800)',
          '900': 'var(--gray-900)',
          DEFAULT: 'var(--gray-default)',
        },
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
          DEFAULT: 'rgba(var(--background))',
          foreground: 'var(--foreground)',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
      },
      dropShadow: {
        md: '0 2px 2px rgba(0, 0, 0, 0.15)',
        lg: '0 4px 2px rgba(0, 0, 0, 0.15)',
        '2xl': '0 20px 8px rgba(0, 0, 0, 0.15)',
      },
      fontSize: {
        h1: [
          '60px',
          {
            lineHeight: '72px',
            letterSpacing: '-0.02em',
          },
        ],
        'h1-tablet': [
          '48px',
          {
            lineHeight: '48px',
            letterSpacing: '-0.02em',
          },
        ],
        'h1-mobile': [
          '36px',
          {
            lineHeight: '40px',
          },
        ],
        h2: [
          '36px',
          {
            lineHeight: '40px',
            letterSpacing: '-0.02em',
          },
        ],
        'h2-mobile': [
          '18px',
          {
            lineHeight: '28px',
            letterSpacing: '-0.02em',
          },
        ],
        h3: [
          '30px',
          {
            lineHeight: '36px',
            letterSpacing: '-0.02em',
          },
        ],
        'h3-mobile': [
          '24px',
          {
            lineHeight: '32px',
            letterSpacing: '-0.02em',
          },
        ],
        subtitle: [
          '20px',
          {
            lineHeight: '28px',
          },
        ],
        'subtitle-mobile': [
          '18px',
          {
            lineHeight: '28px',
          },
        ],
        body1: [
          '18px',
          {
            lineHeight: '28px',
          },
        ],
        'body1-mobile': [
          '16px',
          {
            lineHeight: '24px',
          },
        ],
        body2: [
          '16px',
          {
            lineHeight: '24px',
          },
        ],
        body3: [
          '14px',
          {
            lineHeight: '20px',
          },
        ],
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        medium: '500',
        normal: '400',
      },
      // borderRadius: {
      //   lg: 'var(--radius)',
      //   md: 'calc(var(--radius) - 2px)',
      //   sm: 'calc(var(--radius) - 4px)',
      // },
    },
  },
  plugins: [animate],
} satisfies Config
