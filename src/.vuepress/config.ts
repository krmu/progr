import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  base: "/",
  lang: "lv-LV",
  title: "</> ProgHelp",
  description: "Vietne palīdzībai programmēšanā",
  head: [
      ['script', {src: '/pedejas_izmainas.js'}],
  ],
  theme,
 
});
