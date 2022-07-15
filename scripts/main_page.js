
let navLinks = document.getElementById("nav__list");
let nav = document.getElementsByTagName("nav")[0];
let logo = document.getElementsByClassName("fa-graduation-cap")[0];

let flag = false;
addEventListener("scroll", () => {
  if(!flag) {
    nav.style.backgroundColor = "#f44336"
    logo.style.color = "#fff"
    flag = true;
  }  

  if(scrollY == 0) {
    flag = false;
    nav.style.backgroundColor = "transparent";
    logo.style.color = "#f44336"
  }
})

function showMenu () {
  navLinks.style.right = "0";
}

function hideMenu () {
  navLinks.style.right = "-150px";
}
