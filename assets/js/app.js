const header = document.querySelector("#header")
const nav = document.querySelector("#nav")
const closeMenu = document.querySelector("#nav__close")
const showMenu = document.querySelector("#show__menu")

/* show menu funtion */
// show menu 
showMenu.addEventListener("click", function() {
  nav.classList.add("active")
})

// close menu
closeMenu.addEventListener("click", function() {
  nav.classList.remove("active")
})


// fixed header
window.addEventListener("scroll", function() {
  let scrollPos = window.scrollY

  if (scrollPos > 500) {
    header.classList.add("fixed")
  }
  else {
    header.classList.remove("fixed")
  }
})