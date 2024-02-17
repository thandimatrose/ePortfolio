console.log(889);

const id = [
  "home",
  "education",
  "workexp",
  "skills",
  "projects",
  "awards",
  "interest",
];

function changeContent(name) {
  var elem = document.getElementById("page-container");
  /*
  document
    .getElementById(name)
    .scrollIntoView({ block: "center", scroll: "smooth" });
  */
  for (let index = 0; index < id.length; index++) {
    var currPage = document.getElementById(id[index]);
    var currNav = document.getElementById("nav-" + id[index]);
    if (name.localeCompare(id[index]) == 0) {
      currPage.classList.replace("not-visible", "is-visible");
      currNav.classList = "active";
      elem.className = "pos" + (index + 1);
      console.log("pos" + (index + 1));
    } else {
      currPage.classList.replace("is-visible", "not-visible");
      currNav.classList = "a";
    }
  }
}

/*Home Animation*/
