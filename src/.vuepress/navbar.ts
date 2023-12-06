import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "关于",
    prefix: "/about/",
    link:"/about",
    // children: [
    //   {
    //     text: "Bar",
    //     icon: "lightbulb",
    //     prefix: "bar/",
    //     children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
    //   },
    //   {
    //     text: "Foo",
    //     icon: "lightbulb",
    //     prefix: "foo/",
    //     children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
    //   },
    // ],
  }
]);
