/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        zilla: ['Zilla Slab', 'serif'],
        inter: ['Inter', 'sans-serif'],
        consolas: ['Consolas', 'monospace'],
        cabinet: ['"Cabinet Grotesk Variable"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customOrange: 'rgb(255, 75, 7)',
        customBrown: 'rgb(75, 1, 1)',
      },
      backgroundImage: {
        'btn-bg-blog': "url('/blog/viewBlog.jpg')", 
        'text-gradient': 'linear-gradient(0deg,  rgba(255,173,64,0.6474964985994398) 0%, rgba(255,217,185,1) 100%)',
        'contact-us-bg': "url('/contactus/contactUsBg.png')",
        'home-bg': "url('/home/frame22.png')",
      },
      backgroundSize: {
        '90%': '90%',
        '80%': '80%',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), 
  ],
};
export default config;
