var boxH3 = document.querySelector("l-footer h2");

var move = document.querySelector(".article img");

function changeColo() {
  boxH3.classList.toggle("is-active");
}

boxH3.addEventListener("click", changeColo);

function rotateAndColo() {
  move.classList.toggle("is-active");
}

move.addEventListener("click", rotateAndColo);
