/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FD7F5C",
        background: "#2D1B24",
        secondary: "#3D242E",
        muted: "#D4A5A2",
        "muted-foreground": "#CFA19F",
      },
    },
  },
  plugins: [],
};
