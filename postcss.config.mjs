import postcssCustomMedia from "postcss-custom-media";

const config = {
  plugins: {
    "postcss-custom-media": {
      importFrom: "./src/styles/breakpoints.css",
    },
    "@tailwindcss/postcss": {},
  },
};

export default config;
