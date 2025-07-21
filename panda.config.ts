import { defineConfig } from "@pandacss/dev";
import { cardRecipe } from "./src/shared/recipes/card";

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
          primary: {
            DEFAULT: {
              value: {
                base: "{colors.gray.900}",
                _dark: "{colors.gray.50}",
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
      recipes: {
        card: cardRecipe,
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
