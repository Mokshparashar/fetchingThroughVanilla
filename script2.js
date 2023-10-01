const btn = document.getElementsByTagName("button")[0];
const nav = document.getElementsByTagName("nav")[0];
const sidebar = document.getElementsByTagName("sidebar")[0];
const footer = document.getElementsByTagName("footer")[0];
const div = document.getElementsByTagName("div")[0];
const container = document.getElementsByTagName("container")[0];
const body = document.getElementsByTagName("body")[0];

function handleClick(e) {
  console.log(e);
  if (e.target == btn) {
    nav.classList.toggle("color-cyan");
    footer.classList.toggle("color-cyan");
    div.classList.toggle("color-cyan");
    container.classList.toggle("color-cyan");
    sidebar.classList.toggle("color-white");
    body.classList.toggle("color-black");
  }
}

addEventListener("click", handleClick);
