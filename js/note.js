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
  const url = window.location.href;
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