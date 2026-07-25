import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-mcp",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },

  staticDirs: ["../public"],

  docs: {
    defaultName: "Documentação",
  },
};

export default config;