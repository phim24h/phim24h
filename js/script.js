function openNav() {
  document.getElementById("sidenav").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeNav() {
  document.getElementById("sidenav").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}
function reloadPage() {
  closeNav;
  location.reload;
}
