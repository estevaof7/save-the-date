import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const APP_COLORS = {
  "app-gray-1": "#FBFBFB",
  "app-gray-2": "#F9F9F9",
  "app-gray-3": "#F6F6F6",
  "app-gray-4": "#EBEBEB",
  "app-gray-5": "#E6E6E6",
  "app-gray-6": "#AFAFAF",
  "app-gray-7": "#848484",
  "app-gray-8": "#898989",
  placeholder: "#B5B5B5",
  "green-highlight": "#96FF7F",
  "app-dark": "#0A2540",
  "app-cho": "#2E7CF6",
  "app-lip": "#FFAE00",
} satisfies Record<string, string>;

const SEMANTIC_COLORS = {
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  card: {
    DEFAULT: "hsl(var(--card))",
    foreground: "hsl(var(--card-foreground))",
  },
  popover: {
    DEFAULT: "hsl(var(--popover))",
    foreground: "hsl(var(--popover-foreground))",
  },
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
  },
  tertiary: {
    DEFAULT: "hsl(var(--tertiary))",
    foreground: "hsl(var(--tertiary-foreground))",
  },
  muted: {
    DEFAULT: "hsl(var(--muted))",
    foreground: "hsl(var(--muted-foreground))",
  },
  accent: {
    DEFAULT: "hsl(var(--accent))",
    foreground: "hsl(var(--accent-foreground))",
  },
  destructive: {
    DEFAULT: "hsl(var(--destructive))",
    foreground: "hsl(var(--destructive-foreground))",
  },
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",
  chart: {
    "1": "hsl(var(--chart-1))",
    "2": "hsl(var(--chart-2))",
    "3": "hsl(var(--chart-3))",
    "4": "hsl(var(--chart-4))",
    "5": "hsl(var(--chart-5))",
  },
  sidebar: {
    DEFAULT: "hsl(var(--sidebar))",
    foreground: "hsl(var(--sidebar-foreground))",
    primary: "hsl(var(--sidebar-primary))",
    "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
    accent: "hsl(var(--sidebar-accent))",
    "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
    border: "hsl(var(--sidebar-border))",
    ring: "hsl(var(--sidebar-ring))",
  },
};

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ...APP_COLORS,
        ...SEMANTIC_COLORS,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      fontFamily: {
        sans: ["BlinkMacSystemFont", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["BlinkMacSystemFont", "Georgia", "Cambria", "Times New Roman", "ui-serif", "serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        zero: "0px",
      },
      animation: {
        gradient: "gradient 4s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": {
            "background-position": "0% 0%",
          },
          "20%": {
            "background-position": "15% 10%",
          },
          "40%": {
            "background-position": "30% 25%",
          },
          "60%": {
            "background-position": "20% 20%",
          },
          "80%": {
            "background-position": "10% 15%",
          },
          "100%": {
            "background-position": "0% 0%",
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
