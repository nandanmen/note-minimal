(function addListeners() {
  document.addEventListener("click", e => {
    let el = e.target;
    while (el && !el.href) {
      el = el.parentNode;
    }
    if (el) {
      e.preventDefault();
      history.pushState(null, null, el.href);
      changePage();
      return;
    }
  });
  window.addEventListener("popstate", changePage);
}());

function loadPage(url) {
  return fetch(url, {
    method: 'GET'
  }).then(function(response) {
    return response.text();
  });
}

const main = document.querySelector("main");

function changePage() {
  const url = window.location.href + "index.html";
  loadPage(url).then(function(responseText) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = responseText;

    const oldContent = document.querySelector(".note");
    const oldTitle = document.querySelector(".note__section");
    const newContent = wrapper.querySelector(".note");
    const newTitle = wrapper.querySelector(".note__section");

    main.appendChild(newContent);
    oldContent.parentNode.removeChild(oldContent);
    const parent = oldTitle.parentNode;
    parent.removeChild(oldTitle);
    parent.appendChild(newTitle);
    updateButtons();
    animate(main);
  });
}

function updateButtons() {
  const url = window.location.href;
  const compareTo = url.substr(url.length - 3, 2);
  const buttons = document.querySelectorAll(".note-link");
  buttons.forEach(btn => {
    if (btn.classList.contains("note-link--active")) {
      btn.classList.remove("note-link--active");
    }
    if (btn.textContent == compareTo) {
      btn.classList.add("note-link--active");
    }
  });
}

function animate(node) {
  node.classList.add("change-page");
  setTimeout(() => {
    node.classList.remove("change-page");
  }, 1500);
}