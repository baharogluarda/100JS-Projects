const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
