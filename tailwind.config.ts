import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm sunlight palette
        sun: {
          50: "#fff8ed",
          100: "#ffefd3",
          200: "#ffdca5",
          300: "#ffc16d",
          400: "#ff9d33",
          500: "#ff7d0a", // primary sun-orange
          600: "#f0610a",
          700: "#c7470c",
          800: "#9e3812",
          900: "#7f3112",
        },
        // Bold "bull" dark / ink
        ink: {
          50: "#f6f6f7",
          100: "#e3e3e6",
          700: "#2a2a31",
          800: "#1c1c22",
          900: "#121217",
          950: "#0a0a0d",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        // Breathing sun core (keeps horizontal centering via translateX(-50%))
        "glow-breathe": {
          "0%, 100%": { transform: "translateX(-50%) scale(1)", opacity: "0.85" },
          "50%": { transform: "translateX(-50%) scale(1.12)", opacity: "1" },
        },
        // Warm halo that slowly drifts up/down and swells
        "glow-drift": {
          "0%, 100%": { transform: "translateX(-50%) translateY(0) scale(1)", opacity: "0.7" },
          "50%": { transform: "translateX(-50%) translateY(-5%) scale(1.08)", opacity: "0.95" },
        },
        // Slowly spinning light rays
        "ray-spin": {
          to: { transform: "translateX(-50%) rotate(360deg)" },
        },
        // Gentle warm gradient wash shifting behind the headline
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        // Free-floating accent orbs
        "orb-a": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.6" },
          "50%": { transform: "translate(6%, -8%) scale(1.15)", opacity: "0.9" },
        },
        "orb-b": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.5" },
          "50%": { transform: "translate(-8%, 6%) scale(1.1)", opacity: "0.8" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "glow-breathe": "glow-breathe 7s ease-in-out infinite",
        "glow-drift": "glow-drift 11s ease-in-out infinite",
        "ray-spin": "ray-spin 90s linear infinite",
        aurora: "aurora 16s ease-in-out infinite",
        "orb-a": "orb-a 13s ease-in-out infinite",
        "orb-b": "orb-b 17s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
