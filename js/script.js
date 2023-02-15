$(function() {
 "use strict"
 let darkmode = document.querySelector(".darkmode");
let html = document.querySelector("html");
let light_icon = document.querySelector(".light_icon");
let dark_icon = document.querySelector(".dark_icon");
dark_icon.style.display = "none"

let number = 0;

function handleDarkMode() {
 html.classList.toggle("dark");

 if (number === 0) {
  light_icon.style.display="none"
  dark_icon.style.display="block"
  number = 1
 }
 else{
  light_icon.style.display="block"
  dark_icon.style.display="none"
  number = 0
 }

}

darkmode.addEventListener("click", handleDarkMode)


// Menu start
const menu = document.querySelectorAll(".menu li a");
const menuArr = Array.from(menu);

let bgStyle = "linear-gradient(to-right, red, blue)"

menuArr.map( (menu) => {
 menu.addEventListener("click", (e) => {
  menuArr.map(item => {
   item.classList.remove("active")
  })
  console.log(e.currentTarget);
  e.currentTarget.classList.add("active")
 })
} )
// Menu end

// New date
let currentYear = new Date().getFullYear()
document.getElementById("year").innerHTML = currentYear;

// About Section Brand slider
$(".brand_slider").slick({
 arrows: false,
 dots: false,
 slidesToShow: 5,
 slidesToScroll: 1,
 autoplay: true,
 autoplaySpeed: 3000,
 speed: 2000
})


})
