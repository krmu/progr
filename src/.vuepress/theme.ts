// .vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "https://prog.kmu.lv",
  author: {
    name: "Kristaps Muižnieks",
    url: "",
  },
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Repo","Outlook","Search"]
  },
  darkmode: "switch",
  repo: "krmu/progr",
  repoLabel: "GitHub",
  repoDisplay: true,
  docsDir: "src",
  docsBranch: "next",
  lastUpdated:true,
  changelog:true,
  navbar: [
    {
      text: "Sākums",
      link: "/",
      icon: "material-symbols:home-outline",
    },
    {
      text: "Programmēšana",
      link: "/programmesana/",
      icon:"mdi-light:console"
    },
    {
      text: "Datubāzes",
      link: "datubazes",
      icon: "material-symbols:database-outline"
    },
    {
      text: "Versiju vadība",
      link: "versiju_vadiba",
      icon:"simple-icons:githubactions"
    },
    {
      text: "Classroom",
      link: "classroom",
      icon: "mdi:google-classroom"
    },
    {
      text: "Eksāmens programmēšanā",
      link: "/ce/",
      icon: "healthicons:i-exam-qualification-outline",
      
    },
  ],
  sidebar: [
    {
      text: "Programmēšana",
      prefix: "/programmesana/",
      children: ["teorija","html_css", "js","php", "python","java"],
      icon:"mdi-light:console"
    },
    {
      text: "Datubāzes",
      link: "datubazes",
      icon: "material-symbols:database-outline"
    },
    {
      text: "Versiju vadība",
      link: "versiju_vadiba",
      icon:"simple-icons:githubactions"
    },
    {
      text: "Classroom",
      link: "classroom",
      icon: "mdi:google-classroom"
    },
    {
      text: "Centralizētais eksāmens programmēšanā",
      prefix: "/ce/",
      children: ["ieteikumi","2023","2024","2025"],
      icon: "healthicons:i-exam-qualification-outline",
    },
  ],
  footer: "Proghelp - vietne palīdzībai programmēšanā kopš 2020. gada info@proghelp.lv",
  displayFooter: true,
  pageInfo: false,
  metaLocales: {
    editLink: "Palīdzēt uzlabot šo lapu!",
  },
  markdown: {
    hint: true,
    align: true,
    tabs: true,
  },
  plugins: {
    icon: {
      assets: "iconify",
    },
    copyCode: {},
    search: {},
    git: {}
  },
});
