const posts = [
  {
    id: "diary-001",
    type: "text",
    title: "今天的心情",
    summary: "记录一下今天的所思所想...",
    date: "2026-04-29",
    content: "今天天气很好，我思考了很多关于未来的事情。生活就像一盒巧克力，你永远不知道下一颗是什么味道。",
    related: []
  },
  {
    id: "album-001",
    type: "image",
    title: "周末出游",
    summary: "一组风景照",
    date: "2026-04-28",
    content: "images/album1/pic1.jpg", // 这里填图片路径
    related: ["diary-001"] // 关联到上面的日记
  }
];
