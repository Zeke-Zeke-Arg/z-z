/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#000000',
        'text': '#FFFFFF',
        'gold': '#FFD700',
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'gold': '0 0 10px #FFD700',
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
}
