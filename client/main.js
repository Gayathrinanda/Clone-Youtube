var menuIcon = document.querySelector(".menu-left");
var sidebar = document.querySelector(".side-bar");
var container = document.querySelector(".container");


menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")

}
