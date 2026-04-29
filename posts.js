// posts.js - 你的个人数据库

const posts = [
  {
    id: "diary-001",             // 唯一编号
    type: "text",                // 类型：text 代表纯文字
    title: "今天的心情",          // 标题
    summary: "记录一下今天的所思所想...", // 首页显示的摘要
    date: "2026-04-29",          // 日期
    content: "今天天气很好，我思考了很多关于未来的事情。生活就像一盒巧克力，你永远不知道下一颗是什么味道。", // 正文
    related: []                  // 关联文章ID列表
  },
  {
    id: "album-001",             // 唯一编号
    type: "image",               // 类型：image 代表图片
    title: "周末出游",            // 标题
    summary: "一组风景照",        // 摘要
    date: "2026-04-28",          // 日期
    content: "https://via.placeholder.com/600x400", // 这里填图片链接（先用这个测试图）
    related: ["diary-001"]       // 关联到上面的日记
  }
];
