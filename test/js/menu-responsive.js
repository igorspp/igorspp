function responsiveMenu() {
  var x = document.getElementById("menu-right");
  if (x.className === "menu-right") {
    x.className += " responsive"
  }
  else {
  x.className = "menu-right"
  }
}
