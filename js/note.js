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
    const newContent = wrapper.querySelector(".note");

    main.appendChild(newContent);
    oldContent.parentNode.removeChild(oldContent);
    updateButtons();

  });
}

function updateButtons() {
  const url = window.location.href;
  const compareTo = url.substr(start, 2);
  const buttons = document.querySelectorAll(".note-link");
  buttons.forEach(btn => {
    if (btn.classList.contains("note-link--active")) {
      btn.classList.remove("note-link--active");
    }
    if (btn.textContent == compareTo) {
      btn.classList.add("note-link--active");
    }
  })
}