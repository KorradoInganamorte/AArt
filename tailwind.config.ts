/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*tsx", "./components/**/*tsx", "./UI/**/*tsx"],
  theme: {
    fontSize: {
      sm: '1.2rem',
      base: '1.4rem',
      lg: '1.6rem',
      xl: '1.8rem',
      '2xl': '2rem',
      '3xl': '2.4rem',
      '4xl': '2.8rem',
      '5xl': '3.2rem',
      '6xl': '3.6rem',
      '7xl': '4rem',
      '8xl': '4.8rem',
      '9xl': '6rem',
    },  screens: {
      'phone-sm': '240px',
      'verticalphone': '480px',
      'horizontalphone': '640px',
      'tablet': '880px',
      'laptop-sm': '1024px',
      'laptop': '1220px',
      'monitor': '1440px',
      'screen': '1900px',
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      "dark-gray": "#0F0F0F",
      gray: "#343434",
      "gray-hover-filter_btn": "#585858",
      "gray-placeholder": "#A5A5A5",
      "gray-hover-card": "#2B2B2B",
      red: "#FF3D00"
    },
    extend: {},
  },
  plugins: [],
};