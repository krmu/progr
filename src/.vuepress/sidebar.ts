import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  [
    {
     text:"Programmēšana",
     prefix: "/programmesana/",
     children: "structure"
    },
    "datubazes",
    "versiju_vadiba",
    "classroom"
]);
