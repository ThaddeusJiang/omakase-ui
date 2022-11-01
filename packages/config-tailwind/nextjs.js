module.exports = {
  mode: "jit",
  content: [
    // app content
    `./src/**/*.{js,ts,jsx,tsx}`,
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [require("daisyui")],
};
