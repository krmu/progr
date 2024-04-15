import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
export default hopeTheme({
  hostname: "https://prog.kmu.lv",

  author: {
    name: "Kristaps Muižnieks",
    url: "",
  },

  iconAssets: "iconify",

  logo: "",

  repo: "krmu/progr",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "Proghelp - vietne palīdzībai programmēšanā",

  displayFooter: true,
  pageInfo:false,
  metaLocales: {
    editLink: "Palīdzēt uzlabot šo lapu!",
  },
  plugins:{
    mdEnhance: {
      // this is the default option, so you can use it directly
      hint: true,
      align: true,
      tabs: true,
    },
    copyCode: {},
    search:{}
    
  }
    // You should generate and use your own comment service
    

    // All features are enabled for demo, only preserve features you need here

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
});
