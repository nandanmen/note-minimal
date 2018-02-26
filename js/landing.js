(function buildLinks() {
  let classCount = 0;
  const linkTemplate = document.getElementById("course-link-template");
  const container = document.querySelector(".course__list");

  for (let i = 0; i < courses.length; i++) {
    const currDept = courses[i];
    const classes = currDept.classes;
    for (let k = 0; k < classes.length; k++) {
      const currClass = classes[k];
      const number = currClass.number;
      classCount++;

      const a = linkTemplate.content.querySelector(".course a");
      a.textContent = number;
      a.href = `notes/${currDept.dept}/${number}`;

      const result = document.importNode(linkTemplate.content, true);
      container.appendChild(result);
    }
  }
}());


