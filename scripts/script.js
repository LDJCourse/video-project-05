window.addEventListener("load", imgAnimateOnLoad);

function imgAnimateOnLoad() {
  document.querySelector("#img1").classList.add("scale");
  document.querySelector("#img2").classList.add("reveal");
  document.querySelector("#img3").classList.add("reveal");
}
