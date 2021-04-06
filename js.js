let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list = document.querySelector("ul");
let li = document.querySelector("li");
let p = document.querySelector("p");
let num = document.querySelector(".num");

btn.addEventListener("click", () => {
  let txt = input.value;
  if (txt === "") {
    p.style.visibility = "visible";
  } else {
    p.style.visibility = "hidden";
    let li = document.createElement("li");
    li.innerHTML = txt;

    list.prepend(li);
    input.value = "";
  }
});

list.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() == "li") {
    e.target.classList.add("selected");
  }
});

list.addEventListener("dblclick", (e) => {
  if (e.target.tagName.toLowerCase() == "li") {
    e.target.remove();
  }
});
