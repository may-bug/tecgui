import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "快速开始",
      prefix: "start/",
      link: "start/",
      children: "structure",
    },
    {
      text: "关于",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
