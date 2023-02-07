import { defineConfig } from "windicss/helpers";
import defaultTheme from "windicss/defaultTheme";

export default {
  theme: {
    extend: {
      fontFamily: {
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
