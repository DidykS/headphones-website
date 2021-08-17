/* show menu funtion */
const nav = document.querySelector("#nav")
const closeMenu = document.querySelector("#nav__close")
const showMenu = document.querySelector("#show__menu")

// show menu 
showMenu.addEventListener("click", function() {
  nav.classList.add("active")
})

// close menu
closeMenu.addEventListener("click", function() {
  nav.classList.remove("active")
})