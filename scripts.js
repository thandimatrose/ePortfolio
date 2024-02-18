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

function moveWorkExp(isForward) {
  const myElement = document.getElementById("workexp-cards");
  const childArr = myElement.children;
  for (let i = 0; i < childArr.length; i++) {
    if (childArr[i].classList.contains("active")) {
      if (isForward) {
        childArr[(i + 1) % childArr.length].classList.add("active");
        childArr[i].classList.remove("active");
        break;
      } else {
        childArr[(i + childArr.length - 1) % childArr.length].classList.add(
          "active"
        );
        childArr[i].classList.remove("active");
        break;
      }
    }
  }
}

/*Home Animation*/
