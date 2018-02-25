const fs = require("fs");
const markdown = require("markdown-js");

const str = fs.readFileSync("notes/src/comm/291/01.md", "utf8");
const result = markdown.makeHtml(str);

console.log(str);
