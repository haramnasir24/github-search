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
          bg: {
            value: {
              _light: { value: "{colors.white}" },
              _dark: { value: "{colors.gray.900}" },
            },
          },
          text: {
            value: {
              _light: { value: "{colors.gray.900}" },
              _dark: { value: "{colors.white}" },
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
