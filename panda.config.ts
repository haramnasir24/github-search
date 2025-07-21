import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@shadow-panda/preset"],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primary: {
            DEFAULT: {
              value: {
                base: "{colors.grayscale.900}",
                _dark: "{colors.grayscale.50}",
              },
            },
          },
          bg: {
            value: {
              _light: "{colors.white}",
              _dark: "{colors.gray.900}",
            },
          },
          text: {
            value: {
              _light: "{colors.gray.900}",
              _dark: "{colors.white}",
            },
          },
        },
      },
    },
  },

  // Conditions for color modes
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },

  // Global styles
  globalCss: {
    body: {
      bg: "bg",
      color: "text",
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
