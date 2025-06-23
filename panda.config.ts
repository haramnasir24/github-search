import { defineConfig } from "@pandacss/dev";

export default defineConfig({
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
          background: {
            value: {
              _light: '{colors.white}', // Default for light mode
              _dark: '{colors.gray.900}', // For dark mode
            },
          },
          text: {
            value: {
              _light: '{colors.gray.900}',
              _dark: '{colors.white}',
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
