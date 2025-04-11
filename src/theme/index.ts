import { createTheme } from "@mantine/core";
import { fontSizes } from "./fontSizes";
import { colors } from "./colors";
export const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  fontFamilyMonospace: "Inter, sans-serif", // used in code blocks, etc.
  headings: { fontFamily: "Inter, sans-serif" },
  fontSizes,
  colors,
  primaryColor: "brand",
});
