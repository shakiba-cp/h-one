/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./components/**/**/*.{vue,js}",
    "./components/**/**/**/*.{vue,js}",
    "./components/base/*.{vue,js}",
    "./composables/*.{ts,js}",
    "./composables/**/*.{ts,js}",
    "./pages/*.vue",
    "./layouts/*.vue",
    "./pages/**/*.vue",
    "./pages/**/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js}",
  ],
  safelist: [
    {
      pattern:
        /!bg-(red|green|blue|orange|gray|default|blue-green|dark-blue)-(250|950|300)/,
      variants: ["hover"],
    },
    {
      pattern: /bg-(red|green|blue|orange|default|blue-green|dark-blue)/,
    },
    {
      pattern: /!border-(red|green|blue|orange|default|blue-green|dark-blue)/,
      variants: ["hover"],
    },
    {
      pattern:
        /text-(red|green|blue|orange|white|default|blue-green|dark-blue)/,
    },
  ],
  theme: {
    extend: {
      transitionDelay: {
        50: ".5sec",
      },
      colors: {
        primary: "var(--color-primary)",
        lightPrimary: "var(--color-light-primary)",
        secondary: "var(--color-secondary)",
        lightSecondary: "var(--color-secondary-100)",
        surface: "#FAFAFA",
        muted: "var(--color-muted)",
        default: {
          DEFAULT: "var(--color-black)",
        },
        orange: {
          DEFAULT: "var(--color-secondary)",
        },
        red: {
          // DEFAULT: "#D40138",
          DEFAULT: "var(--color-error)",
          250: "#fef2f2",
          950: "#991b1b",
        },
        green: {
          DEFAULT: "#39A54A",
          250: "#f0fdf4",
          950: "#166534",
          action: "#5DCAA7",
        },
        cardBg: "var(--color-card)",
        gray: {
          DEFAULT: "var(--color-gray)",
          200: "var(--color-gray-200)",
          500: "var(--color-gray-500)",
          50: "var(--color-gray-50)",
        },
        bodyBg: "var(--color-gray-50)",
        "border-color": "var(--color-gray-200)",

        yellow: {
          DEFAULT: "var(--color-yellow)",
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
      borderRadius: {
        DEFAULT: "var(--border-radius)",
        sm: "0.42175rem",
        md: "0.9375rem",
        lg: "1.25rem",
      },
      boxShadow: {
        md: "0px 12px 20px 0px rgba(48, 35, 30, 0.10)",
        sm: " 7px 8px 31px 0px rgba(20, 62, 101, 0.11)",
      },
      screens: {
        xl: { max: "1536px" },
        lg: { max: "1280px" },
        md: { max: "1024px" },
        sm: { max: "768px" },
      },
      gap: {
        19: "19px",
        "10p": "10px",
      },
      fontFamily: {
        IranSans: "iransans",
        IranSansBold: "iransans-bold",
      },
      spacing: {
        "10p": "10px",
        "14p": "14px",
      },
    },
    fontSize: {
      h2: "var(--h2-font-size)",
      h3: "var(--h3-font-size)",
      h4: "var(--h4-font-size)",
      h5: "var(--h5-font-size)",
      h6: "var(--h6-font-size)",
      h7: "var(--h7-font-size)",
      h8: "var(--h8-font-size)",
      h9: "var(--h9-font-size)",
      22: "22px",
    },
  },
  plugins: [],
};
