import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom Antigravity Colors
        premium: {
          violet: "#8B5CF6",
          neon: "#A78BFA",
          dark: "#0F0F0F",
        },
      },
      // Glassmorphism & Cinematic Effects
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
        "neon-glow": "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
      },
      // World-Class Animations
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "glow-spin": "glow-spin 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-spin": {
          "0%": { filter: "hue-rotate(0deg) brightness(1)" },
          "50%": { filter: "hue-rotate(180deg) brightness(1.5)" },
          "100%": { filter: "hue-rotate(360deg) brightness(1)" },
        },
      },
      boxShadow: {
        "premium-lg": "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
        "glass-border": "inset 0 1px 1px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
