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
      },
      keyframes: {
        "marquee-x": {
         from: { transform: "translateX(0)" },
         to: { transform: "translateX(calc(-100% - var(--gap)))" },
       },
       "marquee-y": {
         from: { transform: "translateY(0)" },
         to: { transform: "translateY(calc(-100% - var(--gap)))" },
       },
     },
     animation: {
       "marquee-horizontal": "marquee-x var(--duration) infinite linear",
       "marquee-vertical": "marquee-y var(--duration) linear infinite",
       },
    },
  },
  plugins: [],
};
export default config;
