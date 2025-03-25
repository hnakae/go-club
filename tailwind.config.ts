import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        dark: "#202023",
        darkNav: "#20202380",
        light: "#fff",
        primary: "#D3D6E9", // 240,86,199
        background: "#ebdbff",
        primaryDark: "#58E6D9", // 80,230,217
        coffee: "#f0e7db",
        opaque: "#ffffff40",
        brand: "#1582CC",
        brandDark: "#00d5ff",
        brandPurple: "#ebdbff",
        brandWhite: "#fff",
        brandGray: "#f5f7ff",
        brandBlue: "#F9FEFF",
        brandBlue2: "#dbeefd",
        purp: "#D3D6E9",
        navyBlue1: "#0F4C81",
        beige1: "#F5F5F5",
        teal1: "#008080",
        burgundy1: "#800020",
        emerald1: "#50C878",
        orange1: "#F8AD36",
        pink1: "#F222A9",
        borderColor: "#272727",
        darkFill: "#3E424E",
        baseColor: "#3E3F40", //website background
        primaryColor: "#DAB16D", //cta, small details - good contrast against baseColor. - opacity 100, opacity 5
        neutralColor: "#F5F5F5", //text elements - opacity 100, opacity 80, opacity 60
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        "inner-white": "inset 0 2px 4px 0 rgba(255, 255, 255, 0.5)",
        "faded-2px": "0 2px 4px rgba(0, 0, 0, 0.1)",
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
        "blur-circle": "0 0 20px 10px rgba(218, 177, 109, 0.5)", // Adjust the color and opacity as needed
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: { max: "479px" }, // iPhone Portrait confirmed
        sm: { min: "480px", max: "755px" }, // iPhone Landscape
        md: { min: "756px", max: "1023px" }, // iPad Portrait
        lg: { min: "1024px", max: "1366px" }, // iPad Landscape
        xl: { min: "1367px", max: "1599px" }, // Laptop
        "2xl": { min: "1600px" }, // Desktop
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-in",
          },
          "50%": {
            transform: "translateY(15%)",
            animationTimingFunction: "ease-out",
          },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
