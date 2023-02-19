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

// let bgStyle = "linear-gradient(to-right, red, blue)"

menuArr.map( (menu) => {
 menu.addEventListener("click", (e) => {
  menuArr.map(item => {
   item.classList.remove("active")
  })
  e.currentTarget.classList.add("active")
 })
} )

// Side menu start
// const bars = document.querySelector(".bars");
// const side_menu = document.querySelector(".side_menu");
// const handleSideMenu = () => {
//  alert("side menu")
// }

// bars.addEventListener("click", handleSideMenu);

const sideMenus = document.querySelectorAll(".side_menu ul li a");
const sideMenusArray = Array.from(sideMenus);

const handleActiveMenu = (e) => {
 sideMenusArray.map(item => {
  item.classList.remove("active")
 })
 e.currentTarget.classList.add("active")
}

sideMenusArray.map((menu) => {
 menu.addEventListener("click", handleActiveMenu)
})

console.log($(".bars"));
$(".bars").click(function(e){
 console.log(123);
 $(".side_menu").slideToggle(300)
})


// Side menu end


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
 speed: 2000,
 responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
    }
  }
]
})


})
