import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "body-texture": "url(/images/bg-gif.gif)",
        rug: "url(/images/rug-grad.svg)",
        "line-grad": "var(--line-grad)",
        "rect-grad": "url(/images/rect-grad.svg)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
        },
        white: {
          DEFAULT: "hsl(var(--card))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        tickeralt: {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        ticker: "ticker 40s linear infinite",
        tickeralt: "tickeralt 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
