/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d2d2d",
        text: {
          50: "#f8f8f8",
          100: "#eee",
          200: "#ddd",
          300: "#767676",
          400: "#666",
          500: "#525050",
        },
        // cl-sm859b: '#f8f8f8',
        // cl-1e93okh: '#018849',
        // cl-14cp6y8: '#006637',
        // cl-5eoeaa: '#cceede',
        // cl-a5az0j: '#ff9c32',
        // cl-fc982a: '#b6752f',
        // cl-1njx4kw: '#ffebcc',
        // cl-1cf22is: '#0770cf',
        // cl-lzto1h: '#1862a5',
        // cl-xes0jb: '#cde2f5',
        // cl-1xvrmqx: '#d01345',
        // cl-1j5f6ai: '#fae7ec',
        // cl-1mii22u: '#ff3b30',
      },
      screens: {
        mb: "500px",
      },
      fontFamily: {
        futura: ["var(--futura-pt)"],
      },
      spacing: {
        30: "30px",
      },
    },
  },
  plugins: [],
};
