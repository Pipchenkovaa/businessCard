import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        surface: "#101010",
        ink: "#ffffff",
        muted: "#b7b7b7",
        line: "#404040",
        accent: "#a3968d",
        "accent-strong": "#c4b8af",
      },
      fontFamily: {
        display: ['"Unbounded"', "system-ui", "sans-serif"],
        sans: ['"Onest"', '"Manrope"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
      borderRadius: {
        glass: "1.5rem",
      },
      boxShadow: {
        glass: "0 16px 50px -16px rgba(0,0,0,0.7)",
        "glass-hover": "0 24px 60px -18px rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
} satisfies Config;
