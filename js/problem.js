(function main() {
  const solution = document.querySelector(".solution");
  solution.addEventListener("mouseenter", () => {
    solution.classList.add("solution--onhover");
  });
  solution.addEventListener("mouseleave", () => {
    solution.classList.remove("solution--onhover");
  });
  solution.addEventListener("click", () => {
    solution.classList.add("solution--active");
  })
}());