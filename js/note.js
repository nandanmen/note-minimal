const fs = require("fs");
const md = require("markdown-js");

(function main() {
  const str = fs.readFileSync("notes/src/comm/291/01.md", "utf8");
  const result = md.makeHtml(str);

  const container = document.querySelector(".note");
  container.innerHTML = result;
}());