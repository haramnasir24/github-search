import { defineRecipe } from "@pandacss/dev";

export const cardRecipe = defineRecipe({
  className: "card",
  description: "A card container with variants for repo and user cards",
  base: {
    rounded: "8px",
    bg: "white",
    boxShadow: "sm",
    p: 2,
  },
  variants: {
    type: {
      repo: { border: "1px solid #353634" },
      user: {
        border: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      },
    },
  },
  defaultVariants: {
    type: "repo",
  },
});
